'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import '../src/styles/fleur.css';
import Link from 'next/link';
import FooterX from '@/components/Footer';


export default function Fleurchar() {
    return (
        <div className="relative w-screen h-screen overflow-y-auto overflow-x-hidden">

            <div
                className="absolute inset-x-0 top-0 -z-10"
                style={{
                    height: '540vh',
                    background: 'linear-gradient(180deg, #B05CA4 -9%, #2d2c42 10%, #16122a  95%, #fff8e9 160%)'
                }}
            />

            <div className="backgroundfleur">
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
            <main className="relative z-10 flex-1" style={{ height: '540vh', overflow: 'hidden' }}>
                {/* Back Button - selalu melayang */}
                <button
                    onClick={() => { window.location.hash = '#norules'; }}
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

                <div className="bgcharfleur">
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
                <div className="fleurprofile">
                    <Image
                        src="/assets/fleur.svg"
                        alt="fleur"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <span className="lizhen">Fleur|Lizhen</span>
                <span className="lizhendesc">Many players know about HeartMoon’s Guild Master. To outsiders, he is a respectable PvP player with a non-toxic reputation. <br /><br />But to his guild members, especially those who have been with him since the beginning that he can be very temperamental when provoked. Still, they wouldn’t ask for another Guild Master.</span>


                <div className="fleurdetail">
                    <Image
                        src="/assets/liuxdetail.svg"
                        alt="fleurdetail"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <span className="fleurquotes">  “If you ever need any help, HeartMoon Guild will always have its doors open for you”

                </span>
                <div className="waterfall11">
                    <Image
                        src="/assets/tetesanair.svg"
                        alt="tetesanair"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="waterfall22">
                    <Image
                        src="/assets/tetesanair.svg"
                        alt="tetesanair"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>

                <div className="fleurfull">
                    <Image
                        src="/assets/fleurfull.svg"
                        alt="fleurdetail"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>

                <div className="felurtitle">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="aboutfleur">About</span>

                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <span className="felurdesc">FLEUR’s color palette mainly consist of blues and yellow for complementary colors. <br /> He reflects more of calm and collected control of leading compared to Lu(X). <br /><br />

                    There is a lot of stars on his design that reflects on how he always reaches for the highest. <br /> It’s to represent his competitive nature even if he doesn’t show it a lot. <br /><br />

                    He’s been HeartMoon’s Guild Master since the very start and he isn’t planning to <br />retire from the game soon.</span>
                <div className="backgroundfleurbawah">
                    <Image
                        src="/assets/backgroundNoRules.svg"
                        alt="background decoration"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>


                <div className="footerfleur">
                    <FooterX />
                </div>

            </main>
        </div>

    );
}