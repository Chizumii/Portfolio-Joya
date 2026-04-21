'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import '../../src/styles/Alexander.css';
import Link from 'next/link';
import FooterX from '@/components/Footer';


export default function System() {
    return (
        <div className="relative w-screen h-screen overflow-y-auto overflow-x-hidden">

            <div
                className="absolute inset-x-0 top-0 -z-10 full-alexander-bg "
                style={{
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
            <main className="relative z-10 flex-1 alexander-content">
                {/* Back Button - selalu melayang */}
                <button
                    onClick={() => { window.location.hash = '#Reset'; }}
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
                        src="/assets/system.svg"
                        alt="fleur"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <span className="lizhen">System</span>
                <span className="lizhendesc">The System is an AI built to watch over humanity in the world of Reset?. It appears as a tangle of wires and monitors displaying a woman's face. Its true purpose is to keep the government's actions a secret.</span>


                <div className="fleurdetail">
                    <Image
                        src="/assets/systemdetal.svg"
                        alt="fleurdetail"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <span className="fleurquotes">
                    "You do not have the authorization to be here"

                </span>
                <div className="alexfulldecor">
                    <Image
                        src="/assets/bgfullchar.svg"
                        alt="fleurdetail"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>

                <div className="alexfull">
                    <Image
                        src="/assets/systemfull.png"
                        alt="fleurdetail"
                        width={4060}
                        height={4060}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>

                <div className="alextitle">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="aboutfleur">Sprites</span>

                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <div className="backgroundfleurtengah">
                    <Image
                        src="/assets/backgroundNoRules.svg"
                        alt="background decoration"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>

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


                <div className="footerResets">
                    <FooterX />
                </div>

            </main>
        </div>

    );
}