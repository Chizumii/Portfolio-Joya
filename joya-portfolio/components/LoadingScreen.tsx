'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// 1. Definisikan tipe props-nya di sini
interface LoadingScreenProps {
  onFinish?: () => void; // Artinya: onFinish adalah fungsi yang tidak mengembalikan apa-apa (void)
}

// 2. Terapkan tipe tersebut ke function
export default function LoadingScreen({ onFinish }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          if (onFinish) onFinish(); 
          return 100;
        }
        return prevProgress + 0.5;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onFinish]);

  const backgroundGradient = `linear-gradient(180deg, #b35aae 0%, #2c2c42 53.4673%, #151129 89.5478%)`;

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundImage: backgroundGradient }}
    >
      <style>{`
        @keyframes starGlow {
          0%, 100% { 
            filter: 
              drop-shadow(0 0 35px rgba(255, 255, 255, 0.4)); 
          }
          30%, 70% { 
            filter: 
              drop-shadow(0 0 40px rgba(255, 255, 255, 0.7)); 
          }
        }
        .glow-active {
          animation: starGlow 5s ease-in-out infinite;
        }
      `}</style>

      <div className="relative w-64 h-64 md:w-80 md:h-80 glow-active">
        <Image
          src="/assets/Star Blank.png"
          alt="Loading Background"
          fill
          className="object-contain"
          priority
        />

        <Image
          src="/assets/Star Colored.png"
          alt="Loading Progress"
          fill
          className="object-contain"
          priority
          style={{
            WebkitMaskImage: `linear-gradient(to top, black ${progress - 15}%, transparent ${progress + 5}%)`,
            maskImage: `linear-gradient(to top, black ${progress - 15}%, transparent ${progress + 5}%)`,
          }}
        />
      </div>
    </div>
  );
}