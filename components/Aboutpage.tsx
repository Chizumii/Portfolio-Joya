'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import '../src/styles/AboutPage.css';
import AvatarCarousel from './CaruselHomePage';
import FooterX from './Footer';

export default function Aboutpage() {
  return (
    <div className="relative w-screen h-screen overflow-y-auto overflow-x-hidden">

      <div className="absolute inset-x-0 top-0 -z-10 full-height-bg"
        style={{
          background: 'linear-gradient(180deg, #B05CA4 -3%, #2d2c42 20%, #16122a 95%, #fff8e9 160%)'
        }}
      />

      <div className="backgroundHome">
        <Image
          src="/assets/backgroundhome.svg"
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
      <main className="relative z-10 flex-1 main-content">        <div className="bungakuning">
        <Image src="/assets/bungakuning.svg" alt="bungakuning" width={130} height={130} style={{ width: '100%', height: 'auto' }} priority />
      </div>
        <div className="bintangbirupolos">
          <Image src="/assets/bintangbirupolos.svg" alt="bintangbirupolos" width={40} height={40} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="bungapinkpolos">
          <Image src="/assets/bungapinkpolos.svg" alt="bungapinkpolos" width={80} height={80} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="wren">
          <Image src="/assets/wren.png" alt="wren" width={600} height={600} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="selendangkiri">
          <Image src="/assets/selendangkiri.svg" alt="selendangkiri" width={758} height={450} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="tetesanairsatu">
          <Image src="/assets/tetesanair.svg" alt="tetesanair" width={31} height={75} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="tetesanairdua">
          <Image src="/assets/tetesanair.svg" alt="tetesanair" width={31} height={75} style={{ width: '100%', height: 'auto' }} priority />
        </div>

        <div className="title-description">
          <div className="bgtitle">
            <Image src="/assets/bgtitle.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
            <span className="text-wren">Wrenn</span>

            <div className="bintangkuningtitle">
              <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="bintangkuningtitledua">
              <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>

          <div className="description">
            <span>
              Welcome to my portfolio, I work on <br /> fantasy art driven by strong narratives <br />and believes that every illustration <br /> tells a story
            </span>
          </div>
        </div>


        <div className="decoratin-right">
          <div className="selendangkanan">
            <Image src="/assets/selednangkanan.svg" alt="selendangkanan" width={758} height={450} style={{ width: '100%', height: 'auto' }} priority />
          </div>
          <div className="bungakuningdua">
            <Image src="/assets/bungakuning.svg" alt="bungakuning" width={130} height={130} style={{ width: '100%', height: 'auto' }} priority />
          </div>
          <div className="bintangkuningpolos">
            <Image src="/assets/bintangkuningpolos.svg" alt="bintangkuningpolos" width={80} height={80} style={{ width: '100%', height: 'auto' }} priority />
          </div>
          <div className="bungapinkdua">
            <Image src="/assets/bungapinkpolos.svg" alt="bungapinkpolos" width={100} height={100} style={{ width: '100%', height: 'auto' }} priority />
          </div>

          <div className="tetesanairv2">
            <Image src="/assets/kanan atas 1 kecil.svg" alt="tetesanair" width={100} height={180} style={{ width: '100%', height: 'auto' }} priority />
          </div>
          <div className="tetesanairv3">
            <Image src="/assets/kanan atas 1 kecil.svg" alt="tetesanair" width={100} height={100} style={{ width: '100%', height: 'auto' }} priority />
          </div>
          <div className="tetesanairv4">
            <Image src="/assets/kanan atas 1 kecil.svg" alt="tetesanair" width={100} height={100} style={{ width: '100%', height: 'auto' }} priority />
          </div>
        </div>
        <div className="ringcarusel">
          <Image src="/assets/circlePFP.svg" alt="circlePFP" width={100} height={100} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="decorationPFP">
          <Image src="/assets/decorationPFP.svg" alt="decorationPFP" width={100} height={100} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div id="carusel" className='carusel'>
          <AvatarCarousel />
        </div>
        <div className="awanicon">
          <Image src="/assets/awanicon.svg"
            alt="awanicon"
            width={100}
            height={100}
            style={{ width: '100%', height: 'auto' }}
            priority />
        </div>
        <div className="bintangkuningpolosv2">
          <Image src="/assets/bintangkuningpolos.svg" alt="bintangkuningpolos" width={80} height={80} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="bungapinkpolosv2">
          <Image src="/assets/bungapinkpolos.svg" alt="bungapinkpolos" width={80} height={80} style={{ width: '100%', height: 'auto' }} priority />
        </div>

        <div className="bungakuningv2">
          <Image src="/assets/bungakuning.svg" alt="bungakuning" width={130} height={130} style={{ width: '100%', height: 'auto' }} priority />
        </div>

        <div className="bungapinkpolosv3">
          <Image src="/assets/bungapinkpolos.svg" alt="bungapinkpolos" width={80} height={80} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="bintangbirupolosv2">
          <Image src="/assets/bintangbirupolos.svg" alt="bintangbirupolos" width={40} height={40} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="bintangbirupolosv3">
          <Image src="/assets/bintangbirupolos.svg" alt="bintangbirupolos" width={40} height={40} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="tetesanairv5">
          <Image src="/assets/kanan atas 1 kecil.svg" alt="tetesanair" width={100} height={100} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="tetesanairv6">
          <Image src="/assets/kanan atas 1 kecil.svg" alt="tetesanair" width={100} height={100} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="tetesanairv7">
          <Image src="/assets/kanan atas 1 kecil.svg" alt="tetesanair" width={100} height={100} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="tetesanairv8">
          <Image src="/assets/kanan atas 1 kecil.svg" alt="tetesanair" width={100} height={100} style={{ width: '100%', height: 'auto' }} priority />
        </div>

        <div className="awanjoya">
          <Image src="/assets/awanjoya.svg" alt="awanjoya" width={100} height={100} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="backgroundjoya">
          <Image src="/assets/backgroundjoya.svg" alt="backgroundjoya" width={100} height={100} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="joya">
          <Image src="/assets/JOYA.svg" alt="joya" width={100} height={100} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="title-joya">
          <div id="about-section" className="bgtitlev2">
            <Image src="/assets/bgtitle2.svg" alt="bg" width={250} height={42} style={{ width: '100%', height: 'auto' }} priority />
            <span className="text-joya">Get to know me</span>

            <div className="bintangkuningtitlev2">
              <Image src="/assets/bintangkuningtitle.svg" alt="star1" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
            </div>

            <div className="bintangkuningtitleduav2">
              <Image src="/assets/bintangkuningtitle.svg" alt="star2" width={23} height={25} style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>

          <div className="descriptionjoya">
            <span>
              I’m Joya B. Tjandra, an Illustrator that is based in <br />Indonesia. Specializing in fantasy themed illustrations, <br />I desire to weave strong narratives into every piece I <br /> create. <br /> <br />
              My primary strengths are in character design and <br /> conceptual illustration, where I focus on bringing <br /> unique personalities and rich backstories to life. I <br /> consider myself hardworking and passionate in <br /> the works that i create.
            </span>
          </div>
        </div>

        <div className="bungajoya">
          <Image src="/assets/bungajoya.svg" alt="bungajoya" width={100} height={100} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="bungajoyav2">
          <Image src="/assets/bungajoyadua.svg" alt="bungajoya" width={100} height={100} style={{ width: '100%', height: 'auto' }} priority />
        </div>

        <div className="bungajoyatiga">
          <Image src="/assets/bungajoyatiga.svg" alt="bungajoyatiga" width={80} height={80} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="bungajoyaempat">
          <Image src="/assets/bungajoyaempat.svg" alt="bungajoyaempat" width={80} height={80} style={{ width: '100%', height: 'auto' }} priority />
        </div>

        <div className="skilljoya">
          <span className="skill">My Skills</span>
          <div className="starimg">
            <Image src="/assets/skilljoyakedua.svg" alt="starimg" width={80} height={80} style={{ width: '100%', height: 'auto' }} priority />
          </div>
          <span className="skillsatu">
            Illustration
          </span>
          <span className="skilldua">
            Character Design
          </span>
          <span className="skilltiga">
            2D Concept Art
          </span>
          <span className="skillempat">
            Storyboarding / Storytelling
          </span>

        </div>
        <div className="softwarejoya">
          <span className="software">My Software</span>
          <div className="softwareimg">
            <Image src="/assets/skill review.svg" alt="software" width={80} height={80} style={{ width: '100%', height: 'auto' }} priority />
          </div>
        </div>

        <div className="footerAbout">
          <FooterX />
        </div>
        <div className="dekorfooter">
          <Image src="/assets/dekorfooterkanan.svg" alt="dekorfooterkanan" width={1000}
            height={1000} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="dekorfooterdua">
          <Image src="/assets/dekorfooterkiri.svg" alt="dekorfooterkanankiri" width={1000}
            height={1000} style={{ width: '100%', height: 'auto' }} priority />
        </div>

      </main>
    </div>

  );
}