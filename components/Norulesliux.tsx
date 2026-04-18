'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import '../src/styles/liux.css';
import Link from 'next/link';
import FooterX from '@/components/Footer';


export default function Liuxchar() {
    return (
        <div className="relative w-screen h-screen overflow-y-auto overflow-x-hidden">

            <div
                className="absolute inset-x-0 top-0 -z-10"
                style={{
                    height: '550vh',
                    background: 'linear-gradient(180deg, #B05CA4 -9%, #2d2c42 10%, #16122a  95%, #fff8e9 160%)'
                }}
            />

            <div className="backgroundliux">
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
            <main className="relative z-10 flex-1" style={{ height: '550vh', overflow: 'hidden' }}>
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
                <div className="bgcharliux">
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
                <div className="liuxprofile">
                    <Image
                        src="/assets/profileliux.svg"
                        alt="fleur"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <span className="liux">Lu(x) | JunFe</span>
                <span className="liuxdescs">
                    Lu(x) is the Guild Master of the infamous guild Pandora. Although the guild is strong, many of the members are toxic and likes to “playfully“ insult other guilds.

                    <br /><br />It is also rumored that he had mocked other players too joining his members. Most players wouldn’t want to be up againts Pandora since it won’t only be a battle of strategy but also mental.</span>


                <div className="liuxdetail">
                    <Image
                        src="/assets/fleurdetail.svg"
                        alt="fleurdetail"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <span className="liuxquotes">  "I'am a Guild Master, but I don’t want to be a Guild Master. I want to be a Guild Member." <br />
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
                <div className="liuxfull">
                    <Image
                        src="/assets/liuxfull.svg"
                        alt="fleurdetail"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>

                <div className="liuxtitle">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="aboutliux">About</span>

                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <span className="liuxdesc">Lu(x)’s color palette is like his personality bold and brash. His commander like <br />outfit is to reflect how he as a leader is more commanding. His avatar is <br />costumized as like he’s smirking all the time. <br /><br />

                    He chooses to be a Sword Master class because he likes to fight up front rather than staying in the back.

                    <br /><br />Pandora was given to him by the former Guild Master since they got busy in life. Pandora now is stronger than ever.</span>
                <div className="backgroundliuxbawah">
                    <Image
                        src="/assets/backgroundNoRules.svg"
                        alt="background decoration"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>


                <div className="footerliux">
                    <FooterX />
                </div>

            </main>
        </div>

    );
}