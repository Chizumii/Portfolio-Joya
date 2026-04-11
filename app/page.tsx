'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import AboutPage from '@/components/Aboutpage';
import ContactPage from '@/components/Contactpage';
import WorkPage from '@/components/Workpage';
import AvatarCarousel from '@/components/testing';

export default function Home() {
  // Set to 'false' so the loading screen appears first
  const [showHomepage, setShowHomepage] = useState(false);
  const [activeHash, setActiveHash] = useState("#about");

  useEffect(() => {
    // Set initial page based on URL
    setActiveHash(window.location.hash || "#about");

    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#about");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <main
    className="w-screen h-screen overflow-hidden"
    style={{
      background: 'linear-gradient(180deg, #b35aae 0%, #2c2c42 53.4673%, #151129 89.5478%)'
    }}

    >
      <AboutPage />
      {/* {!showHomepage ? (
        <LoadingScreen onFinish={() => {
          setTimeout(() => setShowHomepage(true), 1000);
        }} />
      ) : (
        <>
          {activeHash === "#about" && <AboutPage />}
          {activeHash === "#work" && <WorkPage />}
          {activeHash === "#contact" && <ContactPage />}
        </>
      )} */}
    </main>
  );
}