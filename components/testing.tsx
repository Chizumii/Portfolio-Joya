'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import '../src/styles/testing.css';
import Image from 'next/image';

// ─── Types ────────────────────────────────────────────────────────────────────

export type AvatarItem = {
  id: number;
  label: string;
  activeImageUrl: string;
  inactiveImageUrl: string;

  cardImageUrl?: string;
  topText?: string;
  customFont?: string;
  textSize?: string;
  textTop?: string;
  textLeft?: string;

  /* 🔥 CUSTOM IMAGE */
  cardWidth?: number;
  cardHeight?: number;
  cardOffsetX?: number;
  cardOffsetY?: number;

  /* 🔥 CUSTOM FRAME */
  frameImageUrl?: string;
  frameWidth?: number;
  frameHeight?: number;
  frameOffsetX?: number;
  frameOffsetY?: number;

  /* 🔥 CUSTOM BACKGROUND IMAGE */
  backgroundImageUrl?: string;
  backgroundWidth?: number;
  backgroundHeight?: number;
  backgroundOffsetX?: number;
  backgroundOffsetY?: number;

  /* Tambahan untuk node avatar */
  imgOffsetX?: number;
  imgOffsetY?: number;
  imgScale?: number;

  /* 🔥 HASH — ganti URL hash saat gambar diklik, kayak sistem navbar */
  anchorId?: string; // contoh: '#norules', '#reset', '#fifthsense'
};

export type SlotDef = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  zIndex: number;
};

export type CardPosition = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width?: string;
};

export type CarouselLayout = {
  padding?: string;
  stageMaxWidth?: number;
};

// ─── Defaults ─────────────────────────────────────────────────────────────────

export const DEFAULT_SLOTS: SlotDef[] = [
  { x: -50, y: 200, size: 70, opacity: 0.4, zIndex: 1 },
  { x: 38, y: 300, size: 80, opacity: 0.9, zIndex: 2 },
  { x: 200, y: 440, size: 88, opacity: 1.0, zIndex: 5 },
  { x: 420, y: 550, size: 80, opacity: 0.9, zIndex: 2 },
  { x: 650, y: 560, size: 70, opacity: 0.4, zIndex: 1 },
];

export const DEFAULT_AVATARS: AvatarItem[] = [
  {
    id: 0,
    label: 'A1',
    topText: 'Fifth Sense',
    activeImageUrl: '/assets/Fifth Sense middle ring.svg',
    inactiveImageUrl: '/assets/Fift Sense ring.svg',
    cardImageUrl: '/assets/PFPSaekjo.png',
    textSize: '26px',
    textTop: '6px',
    textLeft: '90px',
    anchorId: '#Fifthsense',
  },
  {
    id: 1,
    label: 'A2',
    topText: 'Reset?',
    activeImageUrl: '/assets/Reset midddle ring.svg',
    inactiveImageUrl: '/assets/Reset ring.svg',
    cardImageUrl: '/assets/PFPReset.png',
    cardWidth: 400,
    cardHeight: 400,
    cardOffsetX: 10,
    cardOffsetY: 0,
    textSize: '26px',
    textTop: '6px',
    textLeft: '120px',
    anchorId: '#reset',
  },
  {
    id: 2,
    label: 'A3',
    topText: 'Sinking Thoughts',
    activeImageUrl: '/assets/Sinking Thoughts middle ring.svg',
    inactiveImageUrl: '/assets/Sinking Thoughts ring.svg',
    cardImageUrl: '/assets/PFPSinkingThoughts.png',
    textSize: '26px',
    textTop: '6px',
    textLeft: '48px',
    anchorId: '#sinkingthoughts',
  },
  {
    id: 3,
    label: 'A4',
    topText: 'No Rules',
    activeImageUrl: '/assets/No Rules middle ring.svg',
    inactiveImageUrl: '/assets/No Rules ring.svg',
    cardImageUrl: '/assets/PFPNoRules.png',
    textSize: '26px',
    textTop: '6px',
    textLeft: '105px',
    anchorId: '#norules',
  },
  {
    id: 4,
    label: 'A5',
    topText: 'Personal Work',
    activeImageUrl: '/assets/Personal Art middle ring.svg',
    inactiveImageUrl: '/assets/Personal Art ring.svg',
    cardImageUrl: '/assets/wren.png',
    textSize: '26px',
    textTop: '6px',
    textLeft: '70px',
    cardWidth: 400,
    cardHeight: 400,
    cardOffsetX: 5,
    cardOffsetY: 0,
    anchorId: '#personalwork',
  },
];

export const DEFAULT_CARD_POSITION: CardPosition = {
  top: '  0px',
  right: '0',
  width: '140px',
};

export const DEFAULT_LAYOUT: CarouselLayout = {
  padding: '1.5rem 0 1rem',
  stageMaxWidth: 720,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

function getSlotIndex(avatarIdx: number, selected: number, total: number): number {
  const offset = mod(avatarIdx - selected, total);
  if (offset === 0) return 2;
  if (offset === 1) return 3;
  if (offset === 2) return 4;
  if (offset === total - 1) return 1;
  if (offset === total - 2) return 0;
  return 5;
}

function applySlot(el: HTMLElement, def: SlotDef, stageCenterX: number) {
  const sz = def.size;
  el.style.left = `${stageCenterX + def.x}px`;
  el.style.top = `${def.y}px`;
  el.style.width = `${sz}px`;
  el.style.height = `${sz}px`;
  el.style.marginLeft = `${-sz / 2}px`;
  el.style.marginTop = `${-sz / 2}px`;
  el.style.opacity = String(def.opacity);
  el.style.zIndex = String(def.zIndex);
}

function parkOffStage(
  el: HTMLElement,
  slots: SlotDef[],
  stageCenterX: number,
  direction: 'left' | 'right'
) {
  const edge = direction === 'left' ? slots[0] : slots[4];
  const sz = edge.size;
  const xOff = direction === 'left' ? -100 : 100;

  el.style.left = `${stageCenterX + edge.x + xOff}px`;
  el.style.top = `${edge.y}px`;
  el.style.width = `${sz}px`;
  el.style.height = `${sz}px`;
  el.style.marginLeft = `${-sz / 2}px`;
  el.style.marginTop = `${-sz / 2}px`;
  el.style.opacity = '0';
  el.style.zIndex = '0';
}

function disableTransition(el: HTMLElement) {
  el.style.transition = 'none';
}

function enableTransition(el: HTMLElement) {
  requestAnimationFrame(() => {
    el.style.transition = '';
  });
}

// ─── Component ────────────────────────────────────────────────────────────────

type AvatarCarouselProps = {
  avatars?: AvatarItem[];
  initialSelected?: number;
  slots?: SlotDef[];
  cardPosition?: CardPosition;
  layout?: CarouselLayout;
  onSelect?: (index: number, avatar: AvatarItem) => void;
  className?: string;
};

export default function AvatarCarousel({
  avatars = DEFAULT_AVATARS,
  initialSelected = 2,
  slots = DEFAULT_SLOTS,
  cardPosition,
  layout,
  onSelect,
  className = '',
}: AvatarCarouselProps) {
  const card = { ...DEFAULT_CARD_POSITION, ...cardPosition };
  const layout_ = { ...DEFAULT_LAYOUT, ...layout };

  const [selected, setSelected] = useState(initialSelected);
  const [cardVisible, setCardVisible] = useState(false);
  const [cardKey, setCardKey] = useState(initialSelected);

  const stageRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<{ el: HTMLDivElement; inner: HTMLDivElement; avatarImg: HTMLImageElement }[]>([]);
  const prevSelectedRef = useRef(initialSelected);
  const prevSlotOf = useRef<Record<number, number>>({});

  const total = avatars.length;
  const stageHeight = Math.max(...slots.map((s) => s.y + s.size / 2)) + slots[2].size / 2 + 20;

  // ── Handler klik gambar → ganti hash (sama seperti sistem navbar)
  const handleImageClick = useCallback((hash?: string) => {
    if (!hash) return;
    // Hapus '#' dari depan karena window.location.hash otomatis nambah '#'
    window.location.hash = hash.replace(/^#/, '');
  }, []);

  // ── Core position renderer
  const renderPositions = useCallback(
    (newSel: number, prevSel: number, animate: boolean) => {
      const stage = stageRef.current;
      if (!stage) return;
      const cx = stage.offsetWidth / 2;

      const delta = mod(newSel - prevSel, total);
      const direction: 'right' | 'left' = delta <= total / 2 ? 'right' : 'left';

      nodesRef.current.forEach(({ el, inner }, idx) => {
        const newSI = getSlotIndex(idx, newSel, total);
        const oldSI = prevSlotOf.current[idx] ?? getSlotIndex(idx, prevSel, total);

        const wasVisible = oldSI <= 4;
        const isVisible = newSI <= 4;

        if (isVisible) {
          inner.style.fontSize = `${Math.max(10, slots[newSI].size * 0.22)}px`;
        }

        if (!animate) {
          if (isVisible) {
            applySlot(el, slots[newSI], cx);
            el.style.pointerEvents = 'auto';
          } else {
            parkOffStage(el, slots, cx, 'right');
            el.style.pointerEvents = 'none';
          }
        } else if (isVisible && wasVisible) {
          const isLongJump = Math.abs(newSI - oldSI) > 2;

          if (isLongJump) {
            el.style.pointerEvents = 'none';
            el.style.transitionDelay = '0ms';
            enableTransition(el);
            el.style.opacity = '0';
            el.style.transform = 'scale(0.3)';

            setTimeout(() => {
              disableTransition(el);
              const sz = slots[newSI].size;
              el.style.left = `${cx + slots[newSI].x}px`;
              el.style.top = `${slots[newSI].y}px`;
              el.style.width = `${sz}px`;
              el.style.height = `${sz}px`;
              el.style.marginLeft = `${-sz / 2}px`;
              el.style.marginTop = `${-sz / 2}px`;
              el.style.zIndex = String(slots[newSI].zIndex);
              el.style.opacity = '0';
              el.style.transform = 'scale(0.3)';
              void el.offsetWidth;

              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  enableTransition(el);
                  el.style.opacity = String(slots[newSI].opacity);
                  el.style.transform = 'scale(1)';
                  el.style.pointerEvents = 'auto';

                  const cleanup = () => {
                    el.style.transform = '';
                    el.removeEventListener('transitionend', cleanup);
                  };
                  el.addEventListener('transitionend', cleanup);
                });
              });
            }, 200);
          } else {
            el.style.transitionDelay = `${Math.abs(newSI - 2) * 38}ms`;
            applySlot(el, slots[newSI], cx);

            const cleanup = () => {
              el.style.transitionDelay = '0ms';
              el.removeEventListener('transitionend', cleanup);
            };
            el.addEventListener('transitionend', cleanup);
            el.style.pointerEvents = 'auto';
          }
        } else if (isVisible && !wasVisible) {
          disableTransition(el);
          parkOffStage(el, slots, cx, direction === 'right' ? 'right' : 'left');
          el.style.opacity = '0';
          void el.offsetWidth;

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              enableTransition(el);
              el.style.transitionDelay = '60ms';
              applySlot(el, slots[newSI], cx);
              el.style.pointerEvents = 'auto';

              const cleanup = () => {
                el.style.transitionDelay = '0ms';
                el.removeEventListener('transitionend', cleanup);
              };
              el.addEventListener('transitionend', cleanup);
            });
          });
        } else {
          el.style.pointerEvents = 'none';
          el.style.transitionDelay = '0ms';
          enableTransition(el);
          el.style.transform = 'scale(0.3)';
          el.style.opacity = '0';

          const cleanup = () => {
            el.style.transform = '';
            disableTransition(el);
            parkOffStage(el, slots, cx, direction === 'right' ? 'left' : 'right');
            requestAnimationFrame(() => enableTransition(el));
            el.removeEventListener('transitionend', cleanup);
          };
          el.addEventListener('transitionend', cleanup);
          el.style.zIndex = '0';
        }

        prevSlotOf.current[idx] = newSI;
      });

      document.querySelectorAll<HTMLButtonElement>('.ac-dot').forEach((d, i) => {
        d.className = 'ac-dot' + (i === newSel ? ' ac-dot--selected' : '');
      });
    },
    [slots, total]
  );

  // ── Build DOM on mount
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    avatars.forEach((_, i) => {
      prevSlotOf.current[i] = getSlotIndex(i, initialSelected, avatars.length);
    });

    nodesRef.current = avatars.map((avatar, i) => {
      const isActive = i === initialSelected;

      const el = document.createElement('div');
      el.className = `ac-node ${isActive ? 'ac-node--active' : ''}`;

      const inner = document.createElement('div');
      inner.className = 'ac-inner';

      const avatarImg = document.createElement('img');
      avatarImg.className = 'ac-avatar-img';
      avatarImg.src = isActive ? avatar.activeImageUrl : avatar.inactiveImageUrl;
      avatarImg.alt = avatar.label;
      avatarImg.draggable = false;

      const ox = avatar.imgOffsetX ?? 0;
      const oy = avatar.imgOffsetY ?? 0;
      const scale = avatar.imgScale ?? 1;

      if (ox !== 0 || oy !== 0 || scale !== 1) {
        avatarImg.style.transform = `translate(${ox}px, ${oy}px) scale(${scale})`;
      }

      inner.appendChild(avatarImg);
      el.appendChild(inner);

      // Click Event Listener
      el.addEventListener('click', () => {
        if (i === prevSelectedRef.current) return;

        const prevSelectedIdx = prevSelectedRef.current;
        const prevNode = nodesRef.current[prevSelectedIdx];
        const prevAvatar = avatars[prevSelectedIdx];

        if (prevNode) {
          prevNode.el.classList.remove('ac-node--active');
          prevNode.avatarImg.src = prevAvatar.inactiveImageUrl;
        }

        el.classList.add('ac-node--active');
        avatarImg.src = avatar.activeImageUrl;

        setSelected((prev) => {
          prevSelectedRef.current = prev;
          return i;
        });
        onSelect?.(i, avatar);
      });

      stage.appendChild(el);
      return { el, inner, avatarImg };
    });

    renderPositions(initialSelected, initialSelected, false);
    setCardVisible(true);

    const onResize = () =>
      renderPositions(prevSelectedRef.current, prevSelectedRef.current, false);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      stage.innerHTML = '';
      nodesRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Re-render on selection change
  useEffect(() => {
    renderPositions(selected, prevSelectedRef.current, true);
    prevSelectedRef.current = selected;

    setCardVisible(false);
    const t = setTimeout(() => {
      setCardKey(selected);
      setCardVisible(true);
    }, 180);

    return () => clearTimeout(t);
  }, [selected, renderPositions]);

  const currentAvatar = avatars[selected];

  return (
    <div
      className={`ac-root ${className}`.trim()}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: layout_.padding,
        width: '100%',
      }}
    >
      <div className="ac-layout">
        <div
          ref={stageRef}
          role="listbox"
          aria-label="Avatar selector"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: layout_.stageMaxWidth,
            height: stageHeight,
            flex: 1,
          }}
        />
      </div>

      <div className="avatarfull">
        <div className="bgtitlee">
          <Image src="/assets/bgtitles.svg" alt="bgs" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
          <div
            className="avatarfull-top-text"
            key={`text-${currentAvatar.id}`}
            style={{
              fontFamily: currentAvatar.customFont || "'Libre Caslon Text Regular', serif",
              fontSize: currentAvatar.textSize || '32px',
              top: currentAvatar.textTop || '0px',
              left: currentAvatar.textLeft || '20px',
            }}
          >
            {currentAvatar.topText || currentAvatar.label}
          </div>
          <div className="bintangkuningtitlee">
            <Image src="/assets/bintangkuningtitle.svg" alt="star11" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
          </div>

          <div className="bintangkuningtitleduaa">
            <Image src="/assets/bintangkuningtitle.svg" alt="star22" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>

        <img
          className="avatarfull-bg-img"
          src={currentAvatar.backgroundImageUrl || "/assets/auraPFP.svg"}
          alt="Avatar Background"
          style={{
            position: 'absolute',
            width: currentAvatar.backgroundWidth ? `${currentAvatar.backgroundWidth}px` : '400px',
            height: currentAvatar.backgroundHeight ? `${currentAvatar.backgroundHeight}px` : '429px',
            right: currentAvatar.backgroundOffsetX ? `${currentAvatar.backgroundOffsetX}px` : '88px',
            top: currentAvatar.backgroundOffsetY ? `${currentAvatar.backgroundOffsetY}px` : '0px',
            objectFit: 'contain',
            zIndex: 0,
          }}
        />

        {/* 🔥 GAMBAR UTAMA — klik untuk scroll ke anchor section */}
        <img
          className="avatarfull-img"
          src={currentAvatar.cardImageUrl || currentAvatar.activeImageUrl}
          alt="Avatar Full"
          key={`img-${currentAvatar.id}`}
          onClick={() => handleImageClick(currentAvatar.anchorId)}
          style={{
            position: 'absolute',
            width: currentAvatar.cardWidth ? `${currentAvatar.cardWidth}px` : '400px',
            height: currentAvatar.cardHeight ? `${currentAvatar.cardHeight}px` : '400px',
            right: currentAvatar.cardOffsetX ? `${currentAvatar.cardOffsetX}px` : '40px',
            top: currentAvatar.cardOffsetY ? `${currentAvatar.cardOffsetY}px` : '50px',
            objectFit: 'contain',
            maxWidth: 'none',
            maxHeight: 'none',
            zIndex: 1,
            // Kalau ada anchorId → tunjukkan cursor pointer
            cursor: currentAvatar.anchorId ? 'pointer' : 'default',
            // Subtle hover hint via filter — CSS handle lewat class di bawah
          }}
        />

        {/* FRAME DI ATAS (Z-INDEX 2) */}
        <div
          className="framePFP"
          style={{
            position: 'absolute',
            width: currentAvatar.frameWidth ? `${currentAvatar.frameWidth}px` : '500px',
            height: currentAvatar.frameHeight ? `${currentAvatar.frameHeight}px` : '500px',
            right: currentAvatar.frameOffsetX ? `${currentAvatar.frameOffsetX}px` : '0px',
            top: currentAvatar.frameOffsetY ? `${currentAvatar.frameOffsetY}px` : '0',
          }}
        >
          <Image
            src={currentAvatar.frameImageUrl || "/assets/framePFP.svg"}
            alt="framePFP"
            fill
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
}