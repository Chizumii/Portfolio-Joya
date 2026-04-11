'use client';

import Navbar from '@/components/Navbar';

export default function ContactPage() {
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      {/* Navbar di paling atas */}
      <Navbar />

      {/* Konten homepage di bawah navbar */}
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-white text-4xl font-light tracking-widest">
          Welcome
        </h1>
      </div>
    </div>
  );
}