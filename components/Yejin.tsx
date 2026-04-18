'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import '../src/styles/yejin.css';

import FooterX from '@/components/Footer';


export default function Yejin() {
    return (
        <div className="relative w-screen h-screen overflow-y-auto overflow-x-hidden">

            <div
                className="absolute inset-x-0 top-0 -z-10"
                style={{
                    height: '885vh',
                    background: 'linear-gradient(180deg, #B05CA4 -9%, #2d2c42 10%, #16122a  95%, #fff8e9 160%)'
                }}
            />

            <div className="backgroundhwang">
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
            <main className="relative z-10 flex-1" style={{ height: '885vh', overflow: 'hidden' }}>
                {/* Back Button - selalu melayang */}
                <button
                    onClick={() => { window.location.hash = '#Fifthsense'; }}
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
                <div className="bgcharhwang">
                    <Image
                        src="/assets/bgchardetailz.svg"
                        alt="bg"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="birubunga">
                    <Image
                        src="/assets/bintangbirupolos.svg"
                        alt="tetesanair"
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
                <div className="watersatu">
                    <Image
                        src="/assets/tetesanair.svg"
                        alt="tetesanair"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="waterdua">
                    <Image
                        src="/assets/tetesanair.svg"
                        alt="tetesanair"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="hwangprofile">
                    <Image
                        src="/assets/yejin.svg"
                        alt="hwang"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <span className="hwangz">Yejin</span>
                <span className="hwangndesc">Yejin is a Maltese dog created by the four girls as a symbol of their promise and loyalty, she’s the lovely messenger of the group. Always appearing and notifying the others when they needed help.
                    <br />  <br />Why is Yejin a dog? dog symbolize loyalty, faithfulness, and companionship, but also protection, vigilance, and unconditional love.

                </span>


                <div className="hwangdetail">
                    <Image
                        src="/assets/yejindetail.png"
                        alt="hwangdetail"
                        width={1900}
                        height={1900}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="hwangsketchs">
                    <Image
                        src="/assets/yejinsketch1.png"
                        alt="hwang"
                        width={1800}
                        height={1800}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="hwangsketchs2">
                    <Image
                        src="/assets/yejinsketch3.png"
                        alt="hwang"
                        width={1800}
                        height={1800}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="hwangsketchs3">
                    <Image
                        src="/assets/yejinsketch2.png"
                        alt="hwang"
                        width={1800}
                        height={1800}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="hwangfull">
                    <Image
                        src="/assets/yejinfull1.svg"
                        alt="hwang"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="hwangfull1">
                    <Image
                        src="/assets/yejinfull2.svg"
                        alt="hwang"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="punyayejin">
                    <Image
                        src="/assets/yejinbawah.svg"
                        alt="hwang"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="watersembilan">
                    <Image
                        src="/assets/tetesanair.svg"
                        alt="tetesanair"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="punyayejins">
                    <Image
                        src="/assets/yejinbawah2.svg"
                        alt="hwang"
                        width={60}
                        height={60}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>

                <div className="hwangtitle">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="hwangsketch">Sketch</span>

                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <div className="watertiga">
                    <Image
                        src="/assets/tetesanair.svg"
                        alt="tetesanair"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="waterempat">
                    <Image
                        src="/assets/tetesanair.svg"
                        alt="tetesanair"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="hwangfinal">
                    <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                    <span className="hwangsketch">Final</span>

                    <div className="bintangkuningtitle">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>

                    <div className="bintangkuningtitledua">
                        <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
                <div className="backgroundHwangbawah">
                    <Image
                        src="/assets/backgroundNoRules.svg"
                        alt="background decoration"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="backgroundHwangbawahss">
                    <Image
                        src="/assets/backgroundNoRules.svg"
                        alt="background decoration"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="backgroundHwangbawahs">
                    <Image
                        src="/assets/bgbawahsinking.svg"
                        alt="background decoration"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="backgroundHwangbawahsss">
                    <Image
                        src="/assets/backgroundNoRules.svg"
                        alt="background decoration"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>
                <div className="backgroundHwangbawahsssss">
                    <Image
                        src="/assets/bgbawahsinking.svg"
                        alt="background decoration"
                        width={1380}
                        height={780}
                        style={{ width: '100%', height: 'auto' }}
                        priority
                    />
                </div>


                <div className="footeryejin">
                    <FooterX />
                </div>

            </main>
        </div>

    );
}