'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import '../src/styles/mira.css';
import Link from 'next/link';
import FooterX from '@/components/Footer';


export default function Intan() {
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
                    onClick={() => (window.location.hash = '#mira')}
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
                        src="/assets/intan.svg"
                        alt="mira"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div
                    className="prevbutton"
                    onClick={() => (window.location.hash = '#axel')}
                    style={{ cursor: 'pointer' }}
                >
                    <Image
                        src="/assets/prevbutton.svg"
                        alt="prev"
                        width={60}
                        height={60}
                    />
                </div>
                <span className="mira">Intan Rahayu</span>
                <span className="miradesc">Intan Rahayu is Mira’s mother, a woman with a tough exterior and a perpetually stern face. Distant and cold toward her daughter, she subjects Mira to the same suffocating high expectations that defined her own youth.</span>


                <div className="miradetail">
                    <Image
                        src="/assets/intandetailz.svg"
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
                <span className="miraquotes">  “Hurry up and finish your meal, we don’t need you being late on the  first day”

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
                <span className="miradescs">Her design is inspired by timeless, elegant "old money" fashion. For work and business meetings, she usually wears her hair tied up in a sleek bun. She carries an aura of authority that instantly commands respect.<br /><br /> Her eyes are sharper than Mira’s, and her complexion is slightly more tanned. She typically maintains a stoic expression, making her thoughts is difficult to decipher.
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