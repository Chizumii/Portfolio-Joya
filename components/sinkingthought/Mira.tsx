'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import '../../src/styles/mira.css';
import Link from 'next/link';
import FooterX from '@/components/Footer';


export default function Mira() {
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
                    onClick={() => (window.location.hash = '#axel')}
                    style={{ cursor: 'pointer' }}
                >
                    <Image
                        src="/assets/nextbutton.svg"
                        alt="prev"
                        width={60}
                        height={60}
                    />
                </div>
                <div className="miraprofile">
                    <Image
                        src="/assets/mira.svg"
                        alt="mira"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div
                    className="prevbutton"
                    onClick={() => (window.location.hash = '#intan')}
                    style={{ cursor: 'pointer' }}
                >
                    <Image
                        src="/assets/prevbutton.svg"
                        alt="prev"
                        width={60}
                        height={60}
                    />
                </div>
                <span className="mira">Mira Clarissa Gunawan</span>
                <span className="miradesc">Mira is a young girl in her 16th , she struggles with Social Anxiety Disorder (SAD) which makes it hard for her to be in new environment and social events. A lot of her classmates labels her as shy and gloomy. </span>


                <div className="miradetail">
                    <Image
                        src="/assets/miradetail.svg"
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
                <span className="miraquotes">  “Sorry... I'll just stay out <br />of your way”

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
                <span className="miradescs">Her design is on the simpler side for a main character. With a "moon" personality charm, her bangs fall over her eyes, shielding them from people's views. Her skin is pale, and she walks around with her head hung low and a slouch in her posture.<br /> <br />

                    She has dark circles under her eyes to show signs of being weary and tired. Her hair reaches down her back, and her color palette is strictly monotone. This makes her look more like a background character, reflecting her desire to avoid being seen or noticed by her classmates.
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