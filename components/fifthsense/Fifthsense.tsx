'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import '../../src/styles/fifthsense.css';
import FooterX from '@/components/Footer';
import { useRef, useState, useCallback, useEffect } from 'react';
import CarouselFifthSense from '../CarouselFifthSense';

export default function Fifthsense() {
    return (
        <div className="relative w-screen h-screen overflow-y-auto overflow-x-hidden">

            <div className="absolute inset-x-0 top-0 -z-10 full-fifthsense-bg" style={{
                background: 'linear-gradient(180deg, #B05CA4 -9%, #2d2c42 10%, #16122a 95%, #fff8e9 160%)',
            }} />

            <div className="backgroundSense">
                <Image src="/assets/backgroundNoRules.svg" alt="background decoration"
                    width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
            </div>

            <div className="sticky top-0 z-50"><Navbar /></div>

            <main className="relative z-10 flex-1 fifthsesne-content">
                <button
                    onClick={() => { window.location.hash = '#about'; }}
                    className="backbutton-fixed"
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
                <div className="awanSense">
                    <Image src="/assets/awanNoRules.svg" alt="awan"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <span className="fifthsensetitle"> Fifth</span>
                <span className="fifthsensetitle2">Sense </span>
                <div className="bungaSense">
                    <Image src="/assets/bungaNoRules.svg" alt="bunga"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>

                <div className="Sensebungakiri">
                    <Image src="/assets/bungakirisingking.svg" alt="bunga kiri"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="water">
                    <Image src="/assets/tetesanair.svg" alt="bunga kiri"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="Sensebungakanand">
                    <Image src="/assets/Norulesbungakanan.svg" alt="bunga kanan"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="bgsingkingtengah2sense">
                    <Image src="/assets/backgroundNoRules.svg" alt="background tengah"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="bgsingkingtengahsense">
                    <Image src="/assets/backgroundNoRules.svg" alt="background tengah"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>

                <div className="postersense">
                    <Image src="/assets/Saekjo Poster A3.png" alt="bunga kanan"
                        width={1900} height={1900} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="postersense1">
                    <Image src="/assets/saekjo studio feed.png" alt="bunga kanan"
                        width={1900} height={1900} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                




                <div className="bgtitlesense10">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="sensetls"> Problem </span>

                    <div className="bintangkuningtitlesense">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitleduasense">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <span className="desc1sense">Saekjo Studio, a personal color analysis brand in Surabaya, <br />struggles to visually communicate the distinct characteristics <br /> of the four seasonal color palettes to its clients. The challenge <br /> is to translate these abstract color theories into a cohesive set <br /> of relatable, engaging character designs.</span>
                <div className="bgtitlesinkings6">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="sinkingtls"> Solution </span>

                    <div className="bintangkuningtitlesense">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitleduasense">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <span className="desc2sense">Five sets of mascots in which four of them represents the <br /> four seasons that is spring, summer, autumn and winter. <br /> And the other one is a primary animal macot that represents  <br />Saekjo Studio as a whole.</span>
                <div className="bgtitlesinkings7">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="sinkingtls"> Challenge </span>

                    <div className="bintangkuningtitlesense">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitleduasense">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <span className="desc3sense">While each of the four season representatives has its own<br /> distinct style and colors, keeping them visually separate<br /> proved difficult. During the moodboarding and lineup phases,<br /> the designs frequently ended up looking too similar,<br /> making style differentiation the
                    biggest hurdle of the project</span>



                <div className="bgcharsense1">
                    <Image src="/assets/fifthsenseflowers.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop11">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop22">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop33">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop44">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>

                <div className="bgcharshinking2sense">
                    <Image src="/assets/ringchar.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="bgcharshinking3sense">
                    <Image src="/assets/bgchar2.svg" alt="bg solutin"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>

                {/* ── CHARACTER CAROUSEL ── */}
                <div className="bgtitlesinkingssense">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="sinkingtls"> About </span>

                    <div className="bintangkuningtitlesense">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitleduasense">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <div className="dekorasiabouts">
                    <Image src="/assets/aboutdecoration.svg" alt="about" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                </div>
                <span className="challangesdecsingkings">The 4 seasons are friends that shares one dream with each other, they made a promise when they were in high school to stay together even when they went on their own separate ways. They dreamed of becoming models together since they were young and stayed close throughout their youth to adulthood. </span>
                <div className="caruselFifthsense">
                    <CarouselFifthSense
                        prevButtonPosition={{ bottom: '150px', right: '310%' }}
                        nextButtonPosition={{ bottom: '150px', left: '310%' }}
                    />

                </div>
                <div className="backgroundsingkings">
                    <Image
                        src="/assets/bgbawahsinking.svg"
                        alt="background decoration"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="footerSinkings">
                    <FooterX />
                </div>



            </main>
        </div>
    );
}