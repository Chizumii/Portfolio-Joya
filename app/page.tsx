'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import AboutPage from '@/components/Aboutpage';
import NoRulesDetail from '@/components/norules/Norulesdetail';
import SingkingDetail from '@/components/sinkingthought/Sinkingthoughtdetail';
import Fleurchar from '@/components/norules/Norulesfleur';
import Liuxchar from '@/components/norules/Norulesliux';
import Mira from '@/components/sinkingthought/Mira';
import Axel from '@/components/sinkingthought/Axel';
import Intan from '@/components/sinkingthought/Intan';
import HwangEunchae from '@/components/fifthsense/HwangEunchae';
import KimHaerin from '@/components/fifthsense/Kimhaerin';
import ChoSeoYeon from '@/components/fifthsense/Choseoyeon';
import Leejia from '@/components/fifthsense/Leejia';
import FifthSense from '@/components/fifthsense/Fifthsense';
import Yejin from '@/components/fifthsense/Yejin';
import Reset from '@/components/reset/Reset';
import Alexander from '@/components/reset/Alexander';
import System from '@/components/reset/System';
// import PersonalWorkDetail from '@/components/PersonalWorkDetail';

export default function Home() {
  const [showHomepage, setShowHomepage] = useState(false);
  const [activeHash, setActiveHash] = useState("#about");

  useEffect(() => {
    setActiveHash(window.location.hash || "#about");

    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#about");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <main className="w-screen h-screen overflow-hidden z-30">
      {!showHomepage ? (
        <LoadingScreen onFinish={() => {
          setTimeout(() => setShowHomepage(true), 200);
        }} />
      ) : (
        <>
          {activeHash === "#about" && <AboutPage />}
          {activeHash === "#sinkingthoughts" && <SingkingDetail />}
          {activeHash === "#norules" && <NoRulesDetail />}
          {activeHash === "#fleur" && <Fleurchar />}
          {activeHash === "#lux" && <Liuxchar />}
          {activeHash === "#intan" && <Intan />}
          {activeHash === "#mira" && <Mira />}
          {activeHash === "#axel" && <Axel />}
          {activeHash === "#Fifthsense" && <FifthSense />}
          {activeHash === "#Hwangeunchae" && <HwangEunchae />}
          {activeHash === "#Kimherin" && <KimHaerin />}
          {activeHash === "#Choseoyeon" && <ChoSeoYeon />}
          {activeHash === "#Leejia" && <Leejia />}
          {activeHash === "#Yejin" && <Yejin />}
          {activeHash === "#Reset" && <Reset />}
          {activeHash === "#Alexander" && <Alexander />}
          {activeHash === "#System" && <System />}
        </>
      )}


    </main>
  );
}