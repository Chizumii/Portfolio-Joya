'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import '../../src/styles/NoDetail.css';
import Link from 'next/link';
import FooterX from '@/components/Footer';


export default function NoRulesDetail() {
    return (
        <div className="relative w-screen h-screen overflow-y-auto overflow-x-hidden">

            <div
                className="absolute inset-x-0 top-0 -z-10"
                style={{
                    height: '965vh',
                    background: 'linear-gradient(180deg, #B05CA4 -9%, #2d2c42 10%, #16122a  95%, #fff8e9 160%)'
                }}
            />

            <div className="backgroundNoRules">
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
            <main className="relative z-10 flex-1" style={{ height: '965vh', overflow: 'hidden' }}>
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
                <div className="awanNoRules">
                    <Image
                        src="/assets/awanNoRules.svg"
                        alt="awan"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="titleNorules">
                    <Image
                        src="/assets/titleNoRules.png"
                        alt="title"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>

                <div className="bungaNoRules">
                    <Image
                        src="/assets/bungaNoRules.svg"
                        alt="bunga"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="Norulesbungakiri">
                    <Image src="/assets/bungakirisingking.svg" alt="bunga kiri"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="water">
                    <Image src="/assets/tetesanair.svg" alt="bunga kiri"
                        width={1380} height={780} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="Norulesbungakanan">
                    <Image
                        src="/assets/Norulesbungakanan.svg"
                        alt="Norulesbungakanan"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="bgskillsNoRules">
                    <Image
                        src="/assets/backgroundNoRules.svg"
                        alt="background decoration"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>

                <div className="bgskillNoRules">
                    <Image
                        src="/assets/bgskill.svg"
                        alt="bgskill"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="Norulesbungabawah">
                    <Image
                        src="/assets/Norulesbungabawah.svg"
                        alt="Norulesbungabawah"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="Norulesbungabawahkiri">
                    <Image
                        src="/assets/Norulesbungabawahkiri.svg"
                        alt="Norulesbungabawah"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>



                <div className="bgtitlenorules">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="kocaknorules">About</span>

                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>

                <span className="descNoRules">No Rules is an IP project set in a modern world in the year 20XX, following its main characters, HeartMoon Guild Master <br />
                    FLEUR (LiZhen) and the second MC, Pandora Guild Master Lu(x) (JunFei). It is introduced through an MMORPG called <br /> Excelsis, where players from around the world gather and play. <br /><br />
                    Rather than a medieval setting, Excelsis takes place in a dense megacity filled with skyscrapers, neon lit streets, and <br /> vertical environments such as rooftops and skybridges. While inspired by real world modern cities, the environment <br /> includes stylized digital elements like holographic signage and exaggerated architecture to emphasize its virtual nature. <br />
                    <br /><br />The game features 6 classes; blade master, fighter, gunslinger, enchanter, summoner and healing sound</span>

                <div className="bgtitle1">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="about">Blade Master</span>

                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>

                <span className="descskill1">Meele, DPS, <br />Stunner</span>

                <div className="bgtitle2">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="about">Fighter</span>

                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>

                <span className="descskill2">Melee, Tanker, <br />AOE</span>

                <div className="bgtitle3">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="about">Gunslinger</span>

                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>

                <span className="descskill3">Ranged, DPS, <br /> Single Target</span>

                <div className="bgtitle4">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="about">Enchancter</span>

                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>

                <span className="descskill4">Ranged, DPS,<br /> AOE</span>

                <div className="bgtitle5">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="about">Summoner</span>

                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>

                <span className="descskill5">Ranged, Sub-DPS,<br /> Controller</span>

                <div className="bgtitle6">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="about">Healing Sound</span>

                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>

                <span className="descskill6">Ranged, Healer, <br /> Buffer</span>

                <div className="skillaNoRules">
                    <Image src="/assets/skill.svg" alt="skill" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                </div>

                <div className="bgtitle7">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="map">Excelsis Map</span>

                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>

                <div className="maps">
                    <Image src="/assets/map.svg" alt="map" width={2300} height={2500} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="mapsdetial">
                    <Image src="/assets/mapsdetail.svg" alt="map" width={2300} height={2500} style={{ width: '100%', height: 'auto' }} />
                </div>
                <span className="descsmap1">District 0 is the main city of Excelsis, where players first spawn when <br />they enter the game as new players. The city is filled with neon lit <br /> streets and tall buildings that seem endless, creating a dense and immersive environment.</span>
                <span className="descsmap2">The guild lounge is a place for guild members to <br />hang out and chill in Excelsis, designed as a <br /> comfortable shared space with sofas and tables <br />where players can gather and interact.</span>
                <span className="descsmap3">Devil’s Hide is the PvP arena in Excelsis. It is an underwater <br /> arena rumored to have once been a treasure room before an earthquake struck and sank it beneath the sea. With advanced technology, the structure has been reinforced with metal <br /> pillars, and tall glass panels now surround the arena, allowing <br /> players to see what lurks beneath, reworking it into the PvP <br />arena players know today.</span>



                <div className="bgtitle8">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="char">Fleur</span>
                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>

                <div className="bgtitle9">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="char">lu(x)</span>
                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>

                <div className="charFrameSection">

                    <a href="#fleur" className="charFrameLink">
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
                            <div className="charFigure2">
                                <Image
                                    src="/assets/charfleur.svg"
                                    alt="Fleur"
                                    width={300}
                                    height={450}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="charFrameSection1">
                    <a href="#lux" className="charFrameLink">
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
                            <div className="charFigure">
                                <Image
                                    src="/assets/charlu.svg"
                                    alt="Lu(x)"
                                    width={300}
                                    height={450}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </a>
                </div>
                <div className="bgchar2">
                    <Image src="/assets/bgchar2.svg" alt="bgchar" width={80}
                        height={80} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="bgchar3">
                    <Image src="/assets/bgchars3.svg" alt="bgchar" width={80}
                        height={80} style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="bgchar4">
                    <Image src="/assets/ringchar.svg" alt="bgchar" width={80}
                        height={80} style={{ width: '100%', height: 'auto' }} priority />
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
                <div className="waterdrop5">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
                <div className="waterdrop6">
                    <Image src="/assets/tetesanair.svg" alt="bgchar" width={80} height={80}
                        style={{ width: '100%', height: 'auto' }} priority />
                </div>
               
                <div className="bgchallange">
                    <Image
                        src="/assets/bgbawahsinking.svg"
                        alt="background decoration"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>


                <div id="contact-section" className="challange">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="challanges">Challanges</span>

                    <div className="norulestar">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="norulsestar2">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>


                <span className="challangesdec">Worldbuilding is particularly the hardest part of this project. When putting the vision down in writing, it's not only about what the world looks like, but also the sets of laws and systems within the game. This branches out into a lot of different areas that need to be covered so people can understand the world that the characters are playing in without any holes or flaws in the system.</span>

                <div className="footerNorules">
                    <FooterX />
                </div>

            </main>
        </div>

    );
}