'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import '../src/styles/LoadingScreen.css';

interface LoadingScreenProps {
  onFinish?: () => void;
}

// Daftar SEMUA gambar yang akan dipreload
const imagesToPreload = [
  "/assets/awan kanan.svg",
  "/assets/awan kiri.svg",
  "/assets/awanicon.svg",
  "/assets/awanjoya.svg",
  "/assets/awanNoRules.svg",
  "/assets/axeldetail.svg",
  "/assets/axeldetailz.svg",
  "/assets/axelprofile.svg",
  "/assets/backbutton.svg",
  "/assets/backgroundhome.svg",
  "/assets/backgroundjoya.svg",
  "/assets/backgroundNoRules.svg",
  "/assets/backgroundtitlename.svg",
  "/assets/bgbawahsinking.svg",
  "/assets/bgchar.svg",
  "/assets/bgchar2.svg",
  "/assets/bgchar3.svg",
  "/assets/bgchardetailz.svg",
  "/assets/bgchars3.svg",
  "/assets/bgcharshingking.svg",
  "/assets/bgfullchar.svg",
  "/assets/bgicon.svg",
  "/assets/bgreset.svg",
  "/assets/bgresets.svg",
  "/assets/bgresetss.svg",
  "/assets/bgskill.svg",
  "/assets/bgsolutin.svg",
  "/assets/bgtitle.svg",
  "/assets/bgtitle2.svg",
  "/assets/bgtitles.svg",
  "/assets/bintangbirupolos.svg",
  "/assets/bintangkuningpolos.svg",
  "/assets/bintangkuningtitle.svg",
  "/assets/bubble.png",
  "/assets/bunga isi 1.svg",
  "/assets/bunga isi 3.svg",
  "/assets/bunga no bolong.svg",
  "/assets/bungahwangzzz.svg",
  "/assets/bungajoya.svg",
  "/assets/bungajoyadua.svg",
  "/assets/bungajoyaempat.svg",
  "/assets/bungajoyatiga.svg",
  "/assets/bungakirisingking.svg",
  "/assets/bungakuning.svg",
  "/assets/bungaNoRules.svg",
  "/assets/bungapinkpolos.svg",
  "/assets/bungayejin.svg",
  "/assets/cewek.svg",
  "/assets/charfleur.svg",
  "/assets/charlu.svg",
  "/assets/chodetail.svg",
  "/assets/chofull.svg",
  "/assets/choprofile.svg",
  "/assets/chosketch.png",
  "/assets/circlePFP.svg",
  "/assets/cowok.svg",
  "/assets/decorationPFP.svg",
  "/assets/dekorfooterkanan.svg",
  "/assets/dekorfooterkiri.svg",
  "/assets/Fift Sense ring.svg",
  "/assets/Fifth Sense middle ring.svg",
  "/assets/fifthsensedekor.svg",
  "/assets/fifthsenseflower.svg",
  "/assets/fifthsenseflowers.svg",
  "/assets/fifthsenseposter.png",
  "/assets/fleur.svg",
  "/assets/fleurdetail.svg",
  "/assets/fleurfull.svg",
  "/assets/footer.svg",
  "/assets/footerbg.svg",
  "/assets/footerputih.svg",
  "/assets/framePFP.svg",
  "/assets/guru.svg",
  "/assets/hwang.svg",
  "/assets/hwangdetail.svg",
  "/assets/hwangfull.svg",
  "/assets/hwangsketch.png",
  "/assets/inerring.png",
  "/assets/intan.svg",
  "/assets/intandetail.svg",
  "/assets/intandetailz.svg",
  "/assets/JOYA.svg",
  "/assets/kanan atas 1 kecil.svg",
  "/assets/kanan atas 2 besar.svg",
  "/assets/kanan atas 3 sedang.svg",
  "/assets/kanan atas 4 besar.svg",
  "/assets/kanan atas 5 kecil.svg",
  "/assets/kanan bawah ke atas.svg",
  "/assets/kimhaerin.svg",
  "/assets/kimhaerindetail.svg",
  "/assets/kimhaerinfull.svg",
  "/assets/kimhaerinsketch.png",
  "/assets/kiri atas 1 kecil.svg",
  "/assets/kiri atas 2 besar.svg",
  "/assets/kiri atas 3 kecil.svg",
  "/assets/kiri atas 4 sedang.svg",
  "/assets/kiri atas 5 kecil.svg",
  "/assets/kiri atas 6 besar.svg",
  "/assets/kiri atas ke bawah.svg",
  "/assets/lee.svg",
  "/assets/leedetail.svg",
  "/assets/leefull.svg",
  "/assets/leesketch.png",
  "/assets/liuxdetail.svg",
  "/assets/liuxfull.svg",
  "/assets/logobe.svg",
  "/assets/logogmail.svg",
  "/assets/logoinstagram.svg",
  "/assets/logox.svg",
  "/assets/manystar.png",
  "/assets/map.svg",
  "/assets/mapsdetail.svg",
  "/assets/mira.svg",
  "/assets/miradetail.svg",
  "/assets/mouseclick.svg",
  "/assets/mousenormal.svg",
  "/assets/navbar.svg",
  "/assets/nextbutton.svg",
  "/assets/No Rules Middle ring.svg",
  "/assets/No Rules ring.svg",
  "/assets/Norulesbungabawah.svg",
  "/assets/Norulesbungabawahkiri.svg",
  "/assets/Norulesbungakanan.svg",
  "/assets/Norulesbungakiri.svg",
  "/assets/outerinering.png",
  "/assets/outerring.png",
  "/assets/outlinebgtitle.svg",
  "/assets/pagedua.svg",
  "/assets/pagesatu.svg",
  "/assets/pagetiga.svg",
  "/assets/Personal Art middle ring.svg",
  "/assets/Personal Art ring.svg",
  "/assets/PFPNoRules.png",
  "/assets/PFPReset.png",
  "/assets/PFPSaekjo.png",
  "/assets/PFPSinkingThoughts.png",
  "/assets/prevbutton.svg",
  "/assets/profileliux.svg",
  "/assets/projectreset.png",
  "/assets/Reset Midddle ring.svg",
  "/assets/Reset ring.svg",
  "/assets/ringchar.svg",
  "/assets/selednangkanan.svg",
  "/assets/selendangkiri.svg",
  "/assets/singkingflower.svg",
  "/assets/Sinking Thoughts middle ring.svg",
  "/assets/Sinking Thoughts ring.svg",
  "/assets/skill review.svg",
  "/assets/skill.svg",
  "/assets/skilljoyakedua.svg",
  "/assets/solutin.svg",
  "/assets/Star Blank.png",
  "/assets/Star Colored.png",
  "/assets/star.svg",
  "/assets/system.svg",
  "/assets/systemchoixe.svg",
  "/assets/systemdetal.svg",
  "/assets/systemfull.png",
  "/assets/tetesanair.svg",
  "/assets/titleNoRules.png",
  "/assets/titleSingking.png",
  "/assets/wren.png",
  "/assets/yejin.svg",
  "/assets/yejinbawah.svg",
  "/assets/yejinbawah2.svg",
  "/assets/yejindetail.png",
  "/assets/yejinfull1.svg",
  "/assets/yejinfull2.svg",
  "/assets/yejinsketch1.png",
  "/assets/yejinsketch2.png",
  "/assets/yejinsketch3.png",
  "/assets/aboutdecoration.svg",
  "/assets/activeicon.svg",
  "/assets/Alexander.svg",
  "/assets/alexanderchoixe.svg",
  "/assets/alexdetal.svg",
  "/assets/alexfull.svg",
  "/assets/Asset 24.svg",
  "/assets/Asset 25.svg",
  "/assets/Asset 26.svg",
  "/assets/Asset 27.svg",
  "/assets/Asset 28.svg",
  "/assets/Asset 29.svg",
  "/assets/Asset 30.svg",
  "/assets/Asset 31.svg",
  "/assets/Asset 32.svg",
  "/assets/Asset 33.svg",
  "/assets/auraPFP.svg",
];

export default function LoadingScreen({ onFinish }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loadedImagesCount = 0;
    const totalImages = imagesToPreload.length;

    // Jika tidak ada gambar di dalam array, langsung selesaikan loading
    if (totalImages === 0) {
      setProgress(100);
      if (onFinish) onFinish();
      return;
    }

    // Loop melalui semua path gambar dan paksa browser untuk memuatnya (preload)
    imagesToPreload.forEach((src) => {
      const img = new window.Image();
      img.src = src;

      // Event dipicu ketika gambar berhasil dimuat atau gagal dimuat (agar progress tidak stuck)
      img.onload = img.onerror = () => {
        loadedImagesCount++;
        
        // Kalkulasi persentase progress yang sebenarnya
        const currentProgress = (loadedImagesCount / totalImages) * 100;
        setProgress(currentProgress);

        // Jika semua gambar sudah termuat
        if (loadedImagesCount === totalImages) {
          // Berikan sedikit jeda waktu agar user bisa melihat animasi mencapai 100%
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 500);
        }
      };
    });
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