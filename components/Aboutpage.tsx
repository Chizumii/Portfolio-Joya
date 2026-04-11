'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import '../src/styles/AboutPage.css';
import AvatarCarousel from './testing';

export default function Aboutpage() {
  return (
    <div className="relative w-screen h-screen overflow-y-auto overflow-x-hidden">

      <div
        className="absolute inset-x-0 top-0 -z-10"
        style={{
          height: '300vh',
          background: 'linear-gradient(180deg, #b35aae 0%, #2c2c42 20%, #151129 60%, #0a0718 100%)'
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
      <main className="relative z-10 flex-1">
        <div className="bungakuning">
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
      </main>

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
          <Image src="/assets/kanan atas 1 kecil.svg" alt="kananatas1" width={100} height={180} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="tetesanairv3">
          <Image src="/assets/kanan atas 1 kecil.svg" alt="kananatas1" width={100} height={100} style={{ width: '100%', height: 'auto' }} priority />
        </div>
        <div className="tetesanairv4">
          <Image src="/assets/kanan atas 1 kecil.svg" alt="kananatas1" width={100} height={100} style={{ width: '100%', height: 'auto' }} priority />
        </div>
      </div>

      <div className='carusel'>
        <AvatarCarousel />
      </div>



    </div>


  );
}