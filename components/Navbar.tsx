// 'use client';

// import { useState, useEffect } from 'react';
// import LoadingScreen from '@/src/components/LoadingScreen'; // Pastikan path benar
// import Navbar from '@/src/components/Navbar';

// export default function Home() {
//   const [isLoading, setIsLoading] = useState(true);

//   // Fungsi ini dipanggil saat loading selesai
//   const handleFinishLoading = () => {
//     // Beri sedikit jeda 1 detik agar user bisa lihat efek glow 100% dulu
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//   };

//   return (
//     <main className="min-h-screen bg-[#151129]">
//       {isLoading ? (
//         <LoadingScreen onFinish={handleFinishLoading} />
//       ) : (
//         <div className="animate-in fade-in duration-1000">
//           <Navbar />
          
//           {/* Hero Section / Landing Content */}
//           <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
//             <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
//               Creative <span className="text-yellow-400">Developer</span>
//             </h1>
//             <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
//               Selamat datang di portofolio saya. Saya fokus pada pembuatan pengalaman digital yang interaktif dan modern.
//             </p>
//           </section>
//         </div>
//       )}
//     </main>
//   );
// }