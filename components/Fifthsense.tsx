'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import '../src/styles/fifthsense.css';
import FooterX from '@/components/Footer';
import { useRef, useState, useCallback, useEffect } from 'react';

export default function SinkingDetail() {
    return (
        <div className="relative w-screen h-screen overflow-y-auto overflow-x-hidden">

            <div className="absolute inset-x-0 top-0 -z-10" style={{
                height: '596vh',
                background: 'linear-gradient(180deg, #B05CA4 -9%, #2d2c42 10%, #16122a 95%, #fff8e9 160%)',
            }} />

            <div className="backgroundSinking">
                <Image src="/assets/backgroundNoRules.svg" alt="background decoration"
                    width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
            </div>

            <div className="sticky top-0 z-50"><Navbar /></div>

            <main className="relative z-10 flex-1" style={{ height: '596vh', overflow: 'hidden' }}>

                <div className="awanSinking">
                    <Image src="/assets/awanNoRules.svg" alt="awan"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="titleSinking">
                    <Image src="/assets/titleSingking.png" alt="title"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <span className="sinkingtls"> Problem </span>
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
                <div className="bgsingkingtengah2">
                    <Image src="/assets/backgroundNoRules.svg" alt="background tengah"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="bgsingkingtengah">
                    <Image src="/assets/backgroundNoRules.svg" alt="background tengah"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="poster">
                    <Image src="/assets/fifthsenseposter.png" alt="bunga kanan"
                        width={1900} height={1900} style={{ width: '100%', height: 'auto' }} priority />
                </div>F=



                <div className="bgtitlesinkings5">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="sinkingtls"> Problem </span>

                    <div className="bintangkuningtitlesingking">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitleduasingking">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <span className="shinkingdesc1">Saekjo Studio, a personal color analysis brand in Surabaya, <br />struggles to visually communicate the distinct characteristics <br /> of the four seasonal color palettes to its clients. The challenge <br /> is to translate these abstract color theories into a cohesive set <br /> of relatable, engaging character designs.</span>
                <div className="bgtitlesinkings6">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="sinkingtls"> Solution </span>

                    <div className="bintangkuningtitlesingking">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitleduasingking">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <span className="shinkingdesc2">Five sets of mascots in which four of them represents the <br /> four seasons that is spring, summer, autumn and winter. <br /> And the other one is a primary animal macot that represents  <br />Saekjo Studio as a whole.</span>
                <div className="bgtitlesinkings7">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="sinkingtls"> Challange </span>

                    <div className="bintangkuningtitlesingking">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitleduasingking">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <span className="shinkingdesc3">While each of the four season representatives has its own<br /> distinct style and colors, keeping them visually separate<br /> proved difficult. During the moodboarding and lineup phases,<br /> the designs frequently ended up looking too similar,<br /> making style differentiation the
                    biggest hurdle of the project</span>



                <div className="bgcharshinking1">
                    <Image src="/assets/fifthsenseflowers.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop1">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop2">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop3">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop4">
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

                {/* ── CHARACTER CAROUSEL ── */}
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
                <div className="dekorasiabout">
                    <Image src="/assets/aboutdecoration.svg" alt="about" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                </div>
                <span className="challangesdecsingking">The 4 seasons are friends that shares one dream with each other, they made a promise when they were in high school to stay together even when they went on their own separate ways. They dreamed of becoming models together since they were young and stayed close throughout their youth to adulthood. </span>

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