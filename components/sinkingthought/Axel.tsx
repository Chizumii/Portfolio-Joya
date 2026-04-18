'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import '../../src/styles/mira.css';
import Link from 'next/link';
import FooterX from '@/components/Footer';


export default function Axel() {
    return (
        <div className="relative w-screen h-screen overflow-y-auto overflow-x-hidden">

            <div
                className="absolute inset-x-0 top-0 -z-10"
                style={{
                    height: '447vh',
                    background: 'linear-gradient(180deg, #B05CA4 -9%, #2d2c42 10%, #16122a  95%, #fff8e9 160%)'
                }}
            />

            <div className="backgrounmira">
                <Image
                    src="/assets/backgroundNoRules.svg"
                    alt="background decoration"
                    width={1380}
                    height={780}
                    style={{ width: '100%', height: 'auto' }}
                    priority
                />
            </div>

            {/* Navbar */}
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>

            {/* Content */}
            <main className="relative z-10 flex-1" style={{ height: '447vh', overflow: 'hidden' }}>
                {/* Back Button - selalu melayang */}
                <button
                    onClick={() => { window.location.hash = '#sinkingthoughts'; }}
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
                <div className="bgcharmira">
                    <Image
                        src="/assets/bgchardetailz.svg"
                        alt="bg"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="waterfall">
                    <Image
                        src="/assets/tetesanair.svg"
                        alt="tetesanair"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div
                    className="nextbutton"
                    onClick={() => (window.location.hash = '#intan')}
                    style={{ cursor: 'pointer' }}
                >
                    <Image
                        src="/assets/nextbutton.svg"
                        alt="next"
                        width={60}
                        height={60}
                    />
                </div>
                <div className="miraprofile">
                    <Image
                        src="/assets/axelprofile.svg"
                        alt="mira"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div
                    className="prevbutton"
                    onClick={() => (window.location.hash = '#mira')}
                    style={{ cursor: 'pointer' }}
                >
                    <Image
                        src="/assets/prevbutton.svg"
                        alt="prev"
                        width={60}
                        height={60}
                    />
                </div>
                <span className="mira">Axel Cahyadi Angkasa</span>
                <span className="miradesc">Axel is often described as a true sunshine boy, that is someone whose cheerful, warm, and naturally friendly personality brightens any room he walks into. His kindness isn’t loud or exaggerated but it’s sincere, gentle, and grounded. </span>


                <div className="miradetail">
                    <Image
                        src="/assets/axeldetailz.svg"
                        alt="miradetail"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="waterfall1">
                    <Image
                        src="/assets/tetesanair.svg"
                        alt="tetesanair"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="waterfall2">
                    <Image
                        src="/assets/tetesanair.svg"
                        alt="tetesanair"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <span className="miraquotes">  “Excuse me, I just transferred here! Can I sit next to you?”

                </span>

                <div className="miratitle">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="aboutmira">About</span>

                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <span className="miradescs">Axel’s color palette is brighter and warmer than Mira’s with a sun tan skin and reddish brown color, his eyes are also like pools of honey.<br /><br /> He also have a warm and friendly personality that makes him approach Mira first. But, he is more than gentle and patient to other people and doesn’t judge a book by it’s cover.
                </span>
                <div className="backgroundmirabawah">
                    <Image
                        src="/assets/bgbawahsinking.svg"
                        alt="backgroundmira"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>


                <div className="footermira">
                    <FooterX />
                </div>

            </main>
        </div>

    );
}