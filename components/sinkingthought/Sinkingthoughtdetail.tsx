'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import '../../src/styles/Sinking.css';
import FooterX from '@/components/Footer';
import { useRef, useState, useCallback, useEffect } from 'react';

/* ─────────────────────────────────────────
   Comic page data — sesuaikan path asset
───────────────────────────────────────── */
const PAGES = [
    { src: '/assets/pagedua.svg', alt: 'Page 1' },
    { src: '/assets/pagetiga.svg', alt: 'Page 2' },
    { src: '/assets/pagesatu.svg', alt: 'Page 3' },
];

const FRONT_W = 260;
const BACK_W = 220;
const FRONT_H = 500;
const BACK_H = 400;
const FRONT_TOP = 30;
const BACK_TOP = FRONT_TOP + (FRONT_H - BACK_H) / 2;

type SlotConfig = {
    left: number; top: number;
    width: number; height: number;
    zIndex: number; opacity: number;
};

const SLOTS: SlotConfig[] = [
    { left: 10, top: BACK_TOP, width: BACK_W, height: BACK_H, zIndex: 1, opacity: 1 },
    { left: 150, top: FRONT_TOP, width: FRONT_W, height: FRONT_H, zIndex: 3, opacity: 1 },
    { left: 330, top: BACK_TOP, width: BACK_W, height: BACK_H, zIndex: 1, opacity: 1 },
];

/* ─────────────────────────────────────────
   Comic Carousel Component
───────────────────────────────────────── */
function ComicCarousel() {
    const [order, setOrder] = useState<number[]>([2, 0, 1]);
    const busy = useRef(false);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);

    const applyLayout = useCallback((newOrder: number[], instant: boolean) => {
        newOrder.forEach((pageIdx, slot) => {
            const el = cardRefs.current[pageIdx];
            if (!el) return;
            const s = SLOTS[slot];
            if (instant) el.classList.add('instant');
            else el.classList.remove('instant');
            el.style.left = `${s.left}px`;
            el.style.top = `${s.top}px`;
            el.style.width = `${s.width}px`;
            el.style.height = `${s.height}px`;
            el.style.zIndex = String(s.zIndex);
            el.style.opacity = String(s.opacity);
        });
    }, []);

    useEffect(() => { applyLayout(order, true); }, []); // eslint-disable-line

    const animate = useCallback((dir: 'next' | 'prev') => {
        if (busy.current) return;
        busy.current = true;
        setOrder(prev => {
            const cur = [...prev];
            if (dir === 'next') {
                const exitEl = cardRefs.current[cur[0]];
                if (exitEl) {
                    exitEl.classList.add('instant');
                    exitEl.style.left = '300px';
                    exitEl.style.top = `${SLOTS[2].top}px`;
                    exitEl.style.width = `${SLOTS[2].width}px`;
                    exitEl.style.height = `${SLOTS[2].height}px`;
                    exitEl.style.opacity = '0';
                    exitEl.style.zIndex = '0';
                }
                const next = [cur[1], cur[2], cur[0]];
                requestAnimationFrame(() => requestAnimationFrame(() => {
                    applyLayout(next, false);
                    setTimeout(() => { busy.current = false; }, 700);
                }));
                return next;
            } else {
                const exitEl = cardRefs.current[cur[2]];
                if (exitEl) {
                    exitEl.classList.add('instant');
                    exitEl.style.left = '-30px';
                    exitEl.style.top = `${SLOTS[0].top}px`;
                    exitEl.style.width = `${SLOTS[0].width}px`;
                    exitEl.style.height = `${SLOTS[0].height}px`;
                    exitEl.style.opacity = '0';
                    exitEl.style.zIndex = '0';
                }
                const next = [cur[2], cur[0], cur[1]];
                requestAnimationFrame(() => requestAnimationFrame(() => {
                    applyLayout(next, false);
                    setTimeout(() => { busy.current = false; }, 700);
                }));
                return next;
            }
        });
    }, [applyLayout]);

    const handleCardClick = useCallback((pageIdx: number) => {
        if (busy.current) return;
        const slot = order.indexOf(pageIdx);
        if (slot === 0) animate('prev');
        else if (slot === 2) animate('next');
    }, [order, animate]);

    return (
        <div className="comicCarouselWrapper">
            <div className="carouselRow">
                <button className="carouselNavBtn" onClick={() => animate('prev')} aria-label="Previous page">
                    <Image src="/assets/prevbutton.svg" alt="prev" width={44} height={44}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </button>
                <div className="carouselStage">
                    {PAGES.map((page, pageIdx) => (
                        <div key={pageIdx} className="comicPage"
                            ref={el => { cardRefs.current[pageIdx] = el; }}
                            onClick={() => handleCardClick(pageIdx)}>
                            <Image src={page.src} alt={page.alt} fill
                                style={{ objectFit: 'cover' }} sizes="210px" priority={pageIdx === 0} />
                        </div>
                    ))}
                </div>
                <button className="carouselNavBtn" onClick={() => animate('next')} aria-label="Next page">
                    <Image src="/assets/nextbutton.svg" alt="next" width={44} height={44}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </button>
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════════
   CHARACTER CAROUSEL — KONFIGURASI PER KARAKTER

   ✏️ Semua kustomisasi ada di array CHARACTERS di bawah.
      Tiap karakter punya nilai sendiri, bebas diubah tanpa
      mempengaruhi karakter lain.

   ┌─ POSISI SLOT (titik acuan kiri-atas slot karakter) ───────────┐
   │  left / top         : posisi slot di dalam .charStage (px)    │
   └────────────────────────────────────────────────────────────────┘
   ┌─ KARAKTER ─────────────────────────────────────────────────────┐
   │  charWidth/Height   : ukuran gambar karakter (px)              │
   │  charOffsetX/Y      : geser gambar karakter dari titik acuan   │
   └────────────────────────────────────────────────────────────────┘
   ┌─ AURA ─────────────────────────────────────────────────────────┐
   │  auraWidth/Height   : ukuran auraPFP.svg (px)                  │
   │  auraOffsetX/Y      : geser aura dari titik acuan (px)         │
   └────────────────────────────────────────────────────────────────┘
   ┌─ FRAME ────────────────────────────────────────────────────────┐
   │  frameWidth/Height  : ukuran framePFP.svg (px)                 │
   │  frameOffsetX/Y     : geser frame dari titik acuan (px)        │
   └────────────────────────────────────────────────────────────────┘

   ⚠️  charWidth/Height, auraWidth/Height, frameWidth/Height
       kini SEPENUHNYA INDEPENDEN — ubah satu tidak geser yang lain.
       Semua posisi ngitung dari titik acuan slot (left/top),
       bukan dari ukuran karakter.

   Setelah ubah left/top karakter terakhir, sesuaikan juga
   .charStage di Sinking.css:
     width  ≈ left karakter paling kanan + nilai terbesar antara
               charWidth, auraWidth, frameWidth karakter itu
     height ≈ top karakter paling bawah  + nilai terbesar antara
               charHeight, auraHeight, frameHeight karakter itu
════════════════════════════════════════════════════════════════ */

type CharConfig = {
    src: string; alt: string;
    href: string; /* ← link tujuan saat aura diklik */
    name: string; /* ← nama karakter untuk label title */

    /* Posisi slot — titik acuan kiri-atas */
    left: number; top: number;

    /* Karakter — ukuran & geser dari titik acuan */
    charWidth: number; charHeight: number;
    charOffsetX: number; charOffsetY: number;

    /* Aura — ukuran & geser dari titik acuan (INDEPENDEN dari char) */
    auraWidth: number; auraHeight: number;
    auraOffsetX: number; auraOffsetY: number;

    /* Frame — ukuran & geser dari titik acuan (INDEPENDEN dari char) */
    frameWidth: number; frameHeight: number;
    frameOffsetX: number; frameOffsetY: number;
};

const CHARACTERS: CharConfig[] = [

    /* ══════════════════════════════════════════
       ✏️ KARAKTER 1 — GURU
    ══════════════════════════════════════════ */
    {
        src: '/assets/guru.svg', alt: 'Guru',
        href: '#intan',            /* ✏️ ganti dengan hash tujuan */
        name: 'Intan',

        /* ✏️ Posisi slot di stage */
        left: -30, top: 40,

        /* ✏️ Karakter — ubah bebas, tidak pengaruhi aura/frame */
        charWidth: 260, charHeight: 260,
        charOffsetX: 15, charOffsetY: 55,

        /* ✏️ Aura — ubah bebas, tidak pengaruhi karakter/frame */
        auraWidth: 280, auraHeight: 280,
        auraOffsetX: 150, auraOffsetY: 30,

        /* ✏️ Frame — ubah bebas, tidak pengaruhi karakter/aura */
        frameWidth: 300, frameHeight: 360,
        frameOffsetX: 0, frameOffsetY: 0
    },

    /* ══════════════════════════════════════════
       ✏️ KARAKTER 2 — CEWEK
    ══════════════════════════════════════════ */
    {
        src: '/assets/cewek.svg', alt: 'Cewek',
        href: '#mira',           /* ✏️ ganti dengan hash tujuan */
        name: 'Mira',

        /* ✏️ Posisi slot di stage */
        left: 250, top: 40,

        /* ✏️ Karakter — ubah bebas, tidak pengaruhi aura/frame */
        charWidth: 350, charHeight: 350,
        charOffsetX: -24, charOffsetY: 20,

        /* ✏️ Aura — ubah bebas, tidak pengaruhi karakter/frame */
        auraWidth: 280, auraHeight: 280,
        auraOffsetX: 150, auraOffsetY: 30,

        /* ✏️ Frame — ubah bebas, tidak pengaruhi karakter/aura */
        frameWidth: 300, frameHeight: 360,
        frameOffsetX: 0, frameOffsetY: 0,
    },

    /* ══════════════════════════════════════════
       ✏️ KARAKTER 3 — COWOK
    ══════════════════════════════════════════ */
    {
        src: '/assets/cowok.svg', alt: 'Cowok',
        href: '#axel',           /* ✏️ ganti dengan hash tujuan */
        name: 'Axel',

        /* ✏️ Posisi slot di stage */
        left: 540, top: 40,

        /* ✏️ Karakter — ubah bebas, tidak pengaruhi aura/frame */
        charWidth: 240, charHeight: 240,
        charOffsetX: 30, charOffsetY: 68,

        /* ✏️ Aura — ubah bebas, tidak pengaruhi karakter/frame */
        auraWidth: 280, auraHeight: 280,
        auraOffsetX: 150, auraOffsetY: 30,

        /* ✏️ Frame — ubah bebas, tidak pengaruhi karakter/aura */
        frameWidth: 300, frameHeight: 360,
        frameOffsetX: 0, frameOffsetY: 0,
    },

];

/* ✏️ Skala saat aktif vs tidak aktif */
const SCALE_ACTIVE = 1.08;
const SCALE_INACTIVE = 1.0;

/* ─────────────────────────────────────────
   Character Carousel Component
───────────────────────────────────────── */
function CharacterCarousel({ activeIdx, setActiveIdx }: { activeIdx: number; setActiveIdx: React.Dispatch<React.SetStateAction<number>> }) {

    const prev = () => setActiveIdx(i => (i - 1 + CHARACTERS.length) % CHARACTERS.length);
    const next = () => setActiveIdx(i => (i + 1) % CHARACTERS.length);

    return (
        <div className="charCarousel">

            {/* Tombol Prev */}
            <button className="carouselNavBtn" onClick={prev} aria-label="Previous character"
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', flexShrink: 0 }}>
                <Image src="/assets/prevbutton.svg" alt="prev" width={44} height={44}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </button>

            {/* Stage */}
            <div className="charStage">
                {CHARACTERS.map((char, i) => {
                    const isActive = i === activeIdx;
                    return (
                        /*
                         * Outer div = slot container, posisi absolut di stage.
                         * Ukurannya 0×0 — hanya jadi titik acuan (anchor).
                         * Semua child (aura, char, frame) diposisikan
                         * relatif dari titik ini pakai offsetX/Y masing-masing,
                         * sehingga SEPENUHNYA independen satu sama lain.
                         */
                        <div
                            key={i}
                            onClick={() => setActiveIdx(i)}
                            style={{
                                position: 'absolute',
                                left: char.left,
                                top: char.top,
                                width: 0,
                                height: 0,
                                cursor: 'pointer',
                                opacity: isActive ? 1 : 0.45,
                                transform: `scale(${isActive ? SCALE_ACTIVE : SCALE_INACTIVE})`,
                                transformOrigin: 'center center',
                                transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                zIndex: isActive ? 10 : 5,
                            }}
                        >
                            {/* ── Aura — hanya muncul saat aktif, bisa diklik ke href ── */}
                            <a
                                href={isActive ? char.href : undefined}
                                onClick={e => { if (!isActive) e.preventDefault(); }}
                                style={{
                                    position: 'absolute',
                                    width: char.auraWidth,
                                    height: char.auraHeight,
                                    left: char.auraOffsetX - char.auraWidth / 2,
                                    top: char.auraOffsetY,
                                    opacity: isActive ? 1 : 0,
                                    transform: isActive ? 'scale(1.12)' : 'scale(0.85)',
                                    transformOrigin: 'center bottom',
                                    transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                    zIndex: 0,
                                    pointerEvents: isActive ? 'auto' : 'none',
                                    cursor: isActive ? 'pointer' : 'default',
                                    display: 'block',
                                }}
                                aria-label={isActive ? `Lihat detail ${char.alt}` : undefined}
                            >
                                <Image src="/assets/auraPFP.svg" alt="" fill
                                    style={{ objectFit: 'contain' }}
                                    sizes={`${char.auraWidth}px`} />
                            </a>

                            {/* ── Gambar karakter ── */}
                            <div style={{
                                position: 'absolute',
                                width: char.charWidth,
                                height: char.charHeight,
                                left: char.charOffsetX,
                                top: char.charOffsetY,
                                zIndex: 5,
                                pointerEvents: 'none',
                            }}>
                                <Image src={char.src} alt={char.alt} fill
                                    style={{ objectFit: 'contain' }}
                                    sizes={`${char.charWidth}px`}
                                    priority={i === 1} />
                            </div>

                            {/* ── Frame PFP — selalu tampil ── */}
                            <div style={{
                                position: 'absolute',
                                width: char.frameWidth,
                                height: char.frameHeight,
                                left: char.frameOffsetX,
                                top: char.frameOffsetY,
                                opacity: 1,
                                zIndex: 10,
                                pointerEvents: 'none',
                            }}>
                                <Image src="/assets/framePFP.svg" alt="" fill
                                    style={{ objectFit: 'contain' }}
                                    sizes={`${char.frameWidth}px`} />
                            </div>


                        </div>
                    );
                })}
            </div>

            {/* Tombol Next */}
            <button className="carouselNavBtn" onClick={next} aria-label="Next character"
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', flexShrink: 0 }}>
                <Image src="/assets/nextbutton.svg" alt="next" width={44} height={44}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </button>

        </div>
    );
}

/* ─────────────────────────────────────────
   Main Page
───────────────────────────────────────── */
export default function SinkingDetail() {
    const [activeIdx, setActiveIdx] = useState(1);
    return (
        <div className="relative w-screen h-screen overflow-y-auto overflow-x-hidden">

            <div className="absolute inset-x-0 top-0 -z-10 full-height-singking" style={{
                background: 'linear-gradient(180deg, #B05CA4 -9%, #2d2c42 10%, #16122a 95%, #fff8e9 160%)',
            }} />

            <div className="backgroundSinking">
                <Image src="/assets/backgroundNoRules.svg" alt="background decoration"
                    width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
            </div>

            <div className="sticky top-0 z-50"><Navbar /></div>

            <main className="relative z-10 flex-1 singking-content">

                <button onClick={() => { window.location.hash = '#about'; }}
                    className="backbutton-fixed"
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                    <Image src="/assets/backbutton.svg" alt="back" width={60} height={60}
                        style={{ width: '100%', height: 'auto' }} priority />
                </button>

                <div className="awanSinking">
                    <Image src="/assets/awanNoRules.svg" alt="awan"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="titleSinking">
                    <Image src="/assets/titleSingking.png" alt="title"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="bungaSinking">
                    <Image src="/assets/bungaNoRules.svg" alt="bunga"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                
                <div className="Sinkingbungakiri">
                    <Image src="/assets/bungakirisingking.svg" alt="bunga kiri"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="water">
                    <Image src="/assets/tetesanair.svg" alt="bunga kiri"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="Sinkingbungakanan">
                    <Image src="/assets/Norulesbungakanan.svg" alt="bunga kanan"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="bgsingkingtengah">
                    <Image src="/assets/backgroundNoRules.svg" alt="background tengah"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>

                <div className="bgsolutin">
                    <Image src="/assets/bgsolutin.svg" alt="background tengah"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>

                {/* ── COMIC CAROUSEL ── */}
                <ComicCarousel />

                <div className="solutin">
                    <Image src="/assets/solutin.svg" alt="solutin"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>

                <span className="shinkingdesc1">Many teenagers struggle to express their mental <br /> and emotional wellbeing to their parents, especially <br />those with social anxiety or difficulty with self <br /> expression. Social anxiety can make it even harder <br />to start conversations or share their needs.</span>
                <span className="shinkingdesc2">A manhwa that teaches mental health, friendship, <br />and self growth by showing characters overcoming <br />their fears one step at a time and accepting help <br />from others.</span>
                <span className="shinkingdesc3">This manhwa aims to raise awareness and encourage <br /> readers to believe that progress, no matter how slow, <br />is still progress. It also seeks to educate others about <br />Social Anxiety Disorder and encourage them to be <br />patient with those who struggle with it.</span>
                <span className="shinkingdesc4">There were several challenges in creating this project, namely keeping the characters expressions and feelings relatable to readers, and setting boundaries on how those emotions were portrayed so they did not feel exaggerated.</span>


  
                <div className="bgcharshinking1">
                    <Image src="/assets/singkingflower.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop111">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop222">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop333">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop444">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop555">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop666">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="bgcharshinking2">
                    <Image src="/assets/ringchar.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="bgcharshinking3">
                    <Image src="/assets/bgchar2.svg" alt="bg solutin"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="bgtitlesinking">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="sinkingtl">{CHARACTERS[activeIdx].name}</span>

                    <div className="bintangkuningtitlesingking">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitleduasingking">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                {/* ── CHARACTER CAROUSEL ── */}
                <CharacterCarousel activeIdx={activeIdx} setActiveIdx={setActiveIdx} />
                <div className="bgtitlesinkings">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="sinkingtls"> About </span>

                    <div className="bintangkuningtitlesingking">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitleduasingking">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <span className="challangesdecsingking">"Sinking Thought" follows Mira, a quiet teenager struggling with Social Anxiety Disorder. Pressured by her mother's high expectations, Mira isolates herself to hide her fears. However, her lonely world is challenged in 11th grade when a new student named Axel takes a genuine interest in getting to know her.</span>

                <div className="backgroundsingking">
                    <Image
                        src="/assets/bgbawahsinking.svg"
                        alt="background decoration"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="footerSinking">
                    <FooterX />
                </div>



            </main>
        </div>
    );
}