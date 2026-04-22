'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import '../../src/styles/personal.css';
import FooterX from '@/components/Footer';
import { useRef, useState, useCallback, useEffect } from 'react';
import CarouselFifthSense from '../CarouselFifthSense';

export default function PersonalWork() {
    return (
        <div className="relative w-screen h-screen overflow-y-auto overflow-x-hidden">

            <div className="absolute inset-x-0 top-0 -z-10 personal-full-bg" style={{
                background: 'linear-gradient(180deg, #B05CA4 -9%, #2d2c42 10%, #16122a 95%, #fff8e9 160%)',
            }} />

            <div className="personal-background-sense">
                <Image src="/assets/backgroundNoRules.svg" alt="background decoration"
                    width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
            </div>

            <div className="sticky top-0 z-50"><Navbar /></div>

            <main className="relative z-10 flex-1 personal-main-content">
                <button
                    onClick={() => { window.location.hash = '#about'; }}
                    className="personal-backbutton-fixed"
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                >
                    <Image
                        src="/assets/backbutton.svg"
                        alt="back"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </button>
                <div className="personal-awan-sense">
                    <Image src="/assets/awanNoRules.svg" alt="awan"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <span className="personal-title-main">Personal</span>
                <span className="personal-title-sub">Work </span>
                <div className="personal-bunga-sense">
                    <Image src="/assets/bungaNoRules.svg" alt="bunga"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>

                <div className="personal-bunga-kiri">
                    <Image src="/assets/bungakirisingking.svg" alt="bunga kiri"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="personal-water-one">
                    <Image src="/assets/tetesanair.svg" alt="bunga kiri"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="personal-water-two">
                    <Image src="/assets/tetesanair.svg" alt="bunga kiri"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="personal-bunga-kanan">
                    <Image src="/assets/Norulesbungakanan.svg" alt="bunga kanan"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>



                <div className="personal-bgtitle-about">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="personal-label-about"> About </span>

                    <div className="personal-bintang-kanan">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="personal-bintang-kiri">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <span className="personal-desc-about">Collection of personal works, including illustration of original characters, competition work and others.
                </span>

                <div className="personal-bgtitle-villian">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="personal-label-villian"> Villain's Lament </span>

                    <div className="personal-bintang-kanan">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="personal-bintang-kiri">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <span className="personal-desc-villian">Bound by chains and heavy with regret, Cornelius <br />surrenders to his fate. He waits for a warm, guiding <br />light to finally set him free.
                    <br /><br />
                    The illustration was made for a tarot zine with 24 <br /> other creators with The Hanged Man tarot card <br />for my theme. I want to push the contrast between<br /> the red and the blue in this illustration to represent<br /> his restrain and the salvation he's waiting for.
                </span>
                <div className="personal-bg-frame">
                    <Image src="/assets/bgpersonal.svg" alt="artpersonal" width={3000} height={3000} style={{ width: '100%', height: 'auto' }} />
                </div>

                <div className="personal-img-atas">
                    <Image src="/assets/Cornel tarot.png" alt="artpersonal" width={1000} height={1000} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="personal-img-atas1">
                    <Image src="/assets/Cornel tarot sketch.png" alt="artpersonal" width={1000} height={1000} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="personal-img-atas2">
                    <Image src="/assets/Cornel tarot color mapping and values.png" alt="artpersonal" width={1000} height={1000} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="personal-dekorasi-tengah">
                    <Image src="/assets/2.svg" alt="bunga kanan"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="personal-tetasan-one">
                    <Image src="/assets/tetesanair.svg" alt="bunga kanan"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="personal-tetasan-two">
                    <Image src="/assets/tetesanair.svg" alt="bunga kanan"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>

                <div className="personal-bgtitle-golden">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="personal-label-golden"> The Golden Heir
                    </span>

                    <div className="personal-bintang-kanan">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="personal-bintang-kiri">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <span className="personal-desc-golden">Hair spunned by endless gold, eyes ruby red matching with the gemstone of his pride. A spark in his eyes given by the universe when he first awoken. The heir of the Mineus Empire stood tall in his glory.
                    <br /><br />
                    An illustration for an original character debut, Isaac Vance Langston. His story is set in a setting resembling Early Modern Europe.               </span>

                <div className="personal-img-tengah">
                    <Image src="/assets/Golden Heir.png" alt="artpersonal" width={1200} height={1200} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="personal-img-tengah1">
                    <Image src="/assets/Golden Heir sketch.png" alt="artpersonal" width={1200} height={1200} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="personal-img-tengah2">
                    <Image src="/assets/Golden Heir color and value mapping.png" alt="artpersonal" width={1200} height={1200} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="personal-bgtitle-other">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="personal-label-villian"> Other Artworks
                    </span>

                    <div className="personal-bintang-kanan">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="personal-bintang-kiri">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <div className="personal-water-three">
                    <Image src="/assets/tetesanair.svg" alt="bunga kiri"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="personal-water-four">
                    <Image src="/assets/tetesanair.svg" alt="bunga kiri"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="bunga-img-full">
                    <Image src="/assets/5.svg" alt="artpersonal" width={3000} height={3000} style={{ width: '100%', height: 'auto' }} />
                </div>


                <div className="personal-img-full1">
                    <Image src="/assets/Wrenn intro.png" alt="artpersonal" width={1090} height={1090} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="personal-img-full2">
                    <Image src="/assets/kocakkkkkk.png" alt="artpersonal" width={1090} height={1090} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="personal-img-full3">
                    <Image src="/assets/ophelia maem.png" alt="artpersonal" width={1090} height={1090} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="personal-img-full4">
                    <Image src="/assets/wrikipedia.png" alt="artpersonal" width={1090} height={1090} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="personal-img-full5">
                    <Image src="/assets/My Own Little World.png" alt="artpersonal" width={1090} height={1090} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="personal-img-full">
                    <Image src="/assets/bgpersonalart.svg" alt="artpersonal" width={1090} height={1090} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="personal-background-bawah">
                    <Image
                        src="/assets/bgbawahsinking.svg"
                        alt="background decoration"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="personal-footer-wrap">
                    <FooterX />
                </div>



            </main>
        </div>
    );
}