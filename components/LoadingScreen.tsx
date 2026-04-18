'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import '../src/styles/LoadingScreen.css';


interface LoadingScreenProps {
  onFinish?: () => void;
}

export default function LoadingScreen({ onFinish }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onFinish) onFinish();
          return 100;
        }
        return prev + 0.3;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loadingScreen" style={{
      background: 'linear-gradient(180deg, #B05CA4 -3%, #2c2c42 53.4673%, #16122a 89.5478%)'
    }}
    >

      {/* --- DEKORASI KIRI ATAS --- */}
      <div className="decorLayer">
        <div className="decorItem dekorKiriAtas1"><Image src="/assets/kiri atas 1 kecil.svg" alt="decor" fill className="object-contain" priority /></div>
        <div className="decorItem dekorKiriAtas2"><Image src="/assets/kiri atas 2 besar.svg" alt="decor" fill className="object-contain" priority /></div>
        <div className="decorItem dekorKiriAtas3"><Image src="/assets/kiri atas 3 kecil.svg" alt="decor" fill className="object-contain" priority /></div>
        <div className="decorItem dekorKiriAtas4"><Image src="/assets/kiri atas 4 sedang.svg" alt="decor" fill className="object-contain" priority /></div>
        <div className="decorItem dekorKiriAtas5"><Image src="/assets/kiri atas 5 kecil.svg" alt="decor" fill className="object-contain" priority /></div>
        <div className="decorItem dekorKiriAtas6"><Image src="/assets/kiri atas 6 besar.svg" alt="decor" fill className="object-contain" priority /></div>
      </div>

      {/* --- DEKORASI KANAN ATAS --- */}
      <div className="decorLayer">
        <div className="decorItem dekorKananAtas1"><Image src="/assets/kanan atas 1 kecil.svg" alt="decor" fill className="object-contain" priority /></div>
        <div className="decorItem dekorKananAtas2"><Image src="/assets/kanan atas 2 besar.svg" alt="decor" fill className="object-contain" priority /></div>
        <div className="decorItem dekorKananAtas3"><Image src="/assets/kanan atas 3 sedang.svg" alt="decor" fill className="object-contain" priority /></div>
        <div className="decorItem dekorKananAtas4"><Image src="/assets/kanan atas 4 besar.svg" alt="decor" fill className="object-contain" priority /></div>
        <div className="decorItem dekorKananAtas5"><Image src="/assets/kanan atas 5 kecil.svg" alt="decor" fill className="object-contain" priority /></div>
      </div>

      {/* --- DEKORASI KIRI BAWAH --- */}
      <div className="decorLayer">
        <div className="abslt bungaNoBolong1"><Image src="/assets/bunga no bolong.svg" alt="decor" fill className="object-contain" priority /></div>
        <div className="abslt awanKiri"><Image src="/assets/awan kiri.svg" alt="decor" fill className="object-contain" priority /></div>
        <div className="abslt bungaIsi3a"><Image src="/assets/bunga isi 3.svg" alt="decor" fill className="object-contain" priority /></div>
        <div className="abslt bungaIsi1a"><Image src="/assets/bunga isi 1.svg" alt="decor" fill className="object-contain" priority /></div>
        <div className="abslt bungaIsi3b"><Image src="/assets/bunga isi 3.svg" alt="decor" fill className="object-contain" priority /></div>
        <div className="abslt bungaIsi1b"><Image src="/assets/bunga isi 1.svg" alt="decor" fill className="object-contain" priority /></div>
      </div>

      {/* --- DEKORASI KANAN BAWAH --- */}
      <div className="decorLayer">
        <div className="abslt awanKanan"><Image src="/assets/awan kanan.svg" alt="decor" fill className="object-contain" priority /></div>
        <div className="abslt bungaIsi3c"><Image src="/assets/bunga isi 3.svg" alt="decor" fill className="object-contain" priority /></div>
        <div className="abslt bungaNoBolong2"><Image src="/assets/bunga no bolong.svg" alt="decor" fill className="object-contain" priority /></div>
        <div className="abslt bungaIsi1c"><Image src="/assets/bunga isi 1.svg" alt="decor" fill className="object-contain" priority /></div>
        <div className="abslt bungaNoBolong3"><Image src="/assets/bunga no bolong.svg" alt="decor" fill className="object-contain" priority /></div>
        <div className="abslt bungaIsi3d"><Image src="/assets/bunga isi 3.svg" alt="decor" fill className="object-contain" priority /></div>
      </div>

      {/* --- AREA TENGAH --- */}
      <div className="centerArea">
        <div className="outerRing"><Image src="/assets/outerring.png" alt="Outer" fill className="object-contain" priority /></div>
        <div className="manyStar"><Image src="/assets/manystar.png" alt="Middle" fill className="object-contain" priority /></div>
        <div className="outerInnerRing"><Image src="/assets/outerinering.png" alt="Inner" fill className="object-contain" priority /></div>
        <div className="innerRing"><Image src="/assets/inerring.png" alt="Inner2" fill className="object-contain" priority /></div>
        <div className="bubble"><Image src="/assets/bubble.png" alt="Bubble" fill className="object-contain" priority /></div>
        <div className="starProgress">
          <div className="starBlank"><Image src="/assets/Star Blank.png" alt="Star Base" fill className="object-contain opacity-20" priority /></div>
          <div
            className="starColored"
            style={{
              WebkitMaskImage: `linear-gradient(to top, black ${progress - 10}%, rgba(0,0,0,0.5) ${progress}%, transparent ${progress + 10}%)`,
              maskImage: `linear-gradient(to top, black ${progress - 10}%, rgba(0,0,0,0.5) ${progress}%, transparent ${progress + 10}%)`,
              opacity: progress > 0 ? 1 : 0
            }}
          >
            <Image src="/assets/Star Colored.png" alt="Star Colored" fill className="object-contain" priority />
          </div>
        </div>

      </div>
    </div>
  );
}