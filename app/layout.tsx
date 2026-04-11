import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '../src/styles/LoadingScreen.css';
import '../src/styles/Navbar.css';
import CustomCursor from '@/components/CustomCursor';

// 1. Setup Vend Sans (Variable Font)
const vendSans = localFont({
  src: './fonts/Vend_Sans/VendSans_VariableFont_wght.ttf',
  variable: '--font-vend-sans',
  display: 'swap',
});

// 2. Setup Libre Caslon Text (Static Fonts)
const libreCaslon = localFont({
  src: [
    {
      path: './fonts/Libre_Caslon_Text/LibreCaslonText_Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Libre_Caslon_Text/LibreCaslonText_Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Libre_Caslon_Text/LibreCaslonText_Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-libre-caslon',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Portfolio Joya",
  description: "Portfolio Website Joya",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // Inject both font variables into the body
        className={`${vendSans.variable} ${libreCaslon.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}