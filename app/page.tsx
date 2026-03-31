'use client';

import LoadingScreen from '@/components/LoadingScreen';


export default function Home() {
  return (
    <main
      className="w-screen h-screen overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #b35aae 0%, #2c2c42 53.4673%, #151129 89.5478%)'
      }}
    >
      <LoadingScreen />
    </main>
  );
}