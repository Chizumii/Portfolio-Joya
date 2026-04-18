'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import '../../src/styles/reset.css';
import Link from 'next/link';
import FooterX from '@/components/Footer';


export default function Reset() {
    return (
        <div className="relative w-screen h-screen overflow-y-auto overflow-x-hidden">

            <div
                className="absolute inset-x-0 top-0 -z-10"
                style={{
                    height: '730vh',
                    background: 'linear-gradient(180deg, #B05CA4 -9%, #2d2c42 10%, #16122a  95%, #fff8e9 160%)'
                }}
            />

            <div className="backgroundreset">
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
            <main className="relative z-10 flex-1" style={{ height: '730vh', overflow: 'hidden' }}>
                {/* Back Button - selalu melayang */}
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
                <div className="awanReset">
                    <Image
                        src="/assets/awanNoRules.svg"
                        alt="awan"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <span className="resettitle"> Reset? <br />Is it still you? </span>


                <div className="bungaReset">
                    <Image
                        src="/assets/bungaNoRules.svg"
                        alt="bunga"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="Resetbungakiri">
                    <Image src="/assets/bungakirisingking.svg" alt="bunga kiri"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterrest">
                    <Image src="/assets/tetesanair.svg" alt="bunga kiri"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="Resetbungakanan">
                    <Image
                        src="/assets/Norulesbungakanan.svg"
                        alt="Norulesbungakanan"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="waterrest1">
                    <Image src="/assets/tetesanair.svg" alt="bunga kiri"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="bgskillsReset">
                    <Image
                        src="/assets/backgroundNoRules.svg"
                        alt="background decoration"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>

                <div className="bgprojectreset">
                    <Image
                        src="/assets/bgreset.svg"
                        alt="bgskill"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />

                </div>
                <div className="bgtitlereset">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="kocakreset">About</span>

                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>

                <span className="descReset">Reset is a dystopian sci-fi visual novel exploring the fragility of human identity in a world where continuous consciousness transfers blur the line <br />between eternal salvation and psychological imprisonment.
                </span>
                <div className="bgprojects">
                    <Image
                        src="/assets/projectreset.png"
                        alt="bgskill"
                        width={1900}
                        height={1900}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="bgtitlereset1">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="kocakreset">Problem</span>

                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>

                <span className="descReset1">Society is willingly surrendering personal data, memories, and independent thought for digital convenience and curated realities.
                </span>

                <div className="bgtitlereset2">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="kocakreset">Solution</span>

                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>

                <span className="descReset2">An interactive visual novel that uses striking <br /> art and player driven choices to deliver complex <br /> philosophical warnings to an audience with <br />shrinking attention spans.
                </span>

                <div className="bgtitlereset3">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="kocakreset">Goals</span>

                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>

                <span className="descReset3">To spread awareness about the dangers of digital manipulation and inspire players to actively protect their privacy, data, and authentic identities in the real world.
                </span>

                <div className="bgtitlereset4">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="kocakreset">Challange</span>

                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>

                <span className="descReset4">Our main challenges were learning to use figma <br /> and making a visual novel from scratch. It was <br />also hard to communicate since our team worked <br /> entirely online without ever meeting in person.
                </span>

                <span className="descReset">Reset is a dystopian sci-fi visual novel exploring the fragility of human identity in a world where continuous consciousness transfers blur the line <br />between eternal salvation and psychological imprisonment.
                </span>

                <div className="alexander">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="char">Alexander</span>
                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>

                <div className="System">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="char">System</span>
                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>

                <div className="resetcharFrameSection">

                    <a href="#Alexander" className="charFrameLink">
                        <div className="charFrameWrapper">
                            <div className="charFrameAura">
                                <Image
                                    src="/assets/auraPFP.svg"
                                    alt="aura fleur"
                                    width={400}
                                    height={500}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                            <div className="charFrameImg">
                                <Image
                                    src="/assets/framePFP.svg"
                                    alt="frame fleur"
                                    width={400}
                                    height={500}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                            <div className="alexnderachar">
                                <Image
                                    src="/assets/alexanderchoixe.svg"
                                    alt="Fleur"
                                    width={300}
                                    height={450}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="systemframesection">
                    <a href="#System" className="charFrameLink">
                        <div className="charFrameWrapper">
                            <div className="charFrameAura">
                                <Image
                                    src="/assets/auraPFP.svg"
                                    alt="aura lux"
                                    width={400}
                                    height={500}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                            <div className="charFrameImg">
                                <Image
                                    src="/assets/framePFP.svg"
                                    alt="frame lux"
                                    width={400}
                                    height={500}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                            <div className="systemcharfigure">
                                <Image
                                    src="/assets/systemchoixe.svg"
                                    alt="Lu(x)"
                                    width={300}
                                    height={450}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </a>
                </div>

                <div className="bgchar2reset">
                    <Image src="/assets/bgchar2.svg" alt="bgchar" width={80}
                        height={80} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="bgchar3reset">
                    <Image src="/assets/bgresetss.svg" alt="bgchar" width={80}
                        height={80} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="bgchar4reset">
                    <Image src="/assets/ringchar.svg" alt="bgchar" width={80}
                        height={80} style={{ width: '100%', height: 'auto' }} priority />
                </div>

                <div className="waterdrop1reset">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop2reset">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop3reset">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop4reset">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop5reset">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop6reset">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="backgroundreset1">
                    <Image
                        src="/assets/backgroundNoRules.svg"
                        alt="background decoration"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="backgroundreset2">
                    <Image
                        src="/assets/backgroundNoRules.svg"
                        alt="background decoration"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="bgchallangereset">
                    <Image
                        src="/assets/bgbawahsinking.svg"
                        alt="background decoration"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>

                <div className="footerReset">
                    <FooterX />
                </div>

            </main>
        </div>

    );
}