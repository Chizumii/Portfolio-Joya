'use client';

import Image from 'next/image';
import '../src/styles/footer.css';

export default function FooterX() {
    return (
        <>
            <div id="contact-section" className="titlefooter">
                <Image src="/assets/bgtitle2.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
                <span id="findmes" className="findme">Find me on</span>

                <div className="footerstar">
                    <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                </div>

                <div className="footerstar2">
                    <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>

            <div className="gmail">
                <Image src="/assets/logogmail.svg" alt="gmail" width={80} height={80} style={{ width: '100%', height: 'auto' }} priority />
            </div>
            <span className="gmailname">Joyatjioe@gmail.com</span>

            <div className="x">
                <a href="https://x.com/1911191_w" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/logox.svg" alt="x" width={80} height={80} style={{ width: '100%', height: 'auto' }} priority />
                </a>
            </div>

            <div className="instagram">
                <a href="https://www.instagram.com/wrn.1911/?hl=en" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/logoinstagram.svg" alt="instagram" width={80} height={80} style={{ width: '100%', height: 'auto' }} priority />
                </a>
            </div>

            <div className="be">
                <a href="https://www.behance.net/jtjandra" target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/logobe.svg" alt="be" width={80} height={80} style={{ width: '100%', height: 'auto' }} priority />
                </a>
            </div>

            <div className="bungafooter">
                <Image src="/assets/footer.svg" alt="bungafooter" width={80}
                    height={80} style={{ width: '100%', height: 'auto' }} priority />
            </div>
            <div className="bgputih">
                <Image src="/assets/footerputih.svg" alt="deckorputih" width={80}
                    height={80} style={{ width: '100%', height: 'auto' }} priority />
            </div>
            <div className="bgfooter">
                <Image src="/assets/footerbg.svg" alt="bgfooter" width={80}
                    height={80} style={{ width: '100%', height: 'auto' }} priority />
            </div>
        </>
    );
}