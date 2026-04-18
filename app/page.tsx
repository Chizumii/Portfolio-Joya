'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import AboutPage from '@/components/Aboutpage';
import NoRulesDetail from '@/components/Norulesdetail';
import SingkingDetail from '@/components/Sinkingthoughtdetail';
import Fleurchar from '@/components/Norulesfleur';
import Liuxchar from '@/components/Norulesliux';
import Mira from '@/components/Mira';
import Axel from '@/components/Axel';
import Intan from '@/components/Intan';
import HwangEunchae from '@/components/HwangEunchae';
import KimHaerin from '@/components/Kimhaerin';
import ChoSeoYeon from '@/components/Choseoyeon';
import Leejia from '@/components/Leejia';
import FifthSense from '@/components/Fifthsense';
import Yejin from '@/components/Yejin';
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
      {/* {!showHomepage ? (
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

        </>
      )} */}

      <FifthSense />
    </main>
  );
}