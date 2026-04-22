"use client";

import { useEffect, useState } from "react";
import "../src/styles/Navbar.css";

const NAV_LINKS = [
  { label: "Works", href: "#work", className: "navLink navLink--works", scrollTo: "carusel" },
  { label: "About", href: "#about", className: "navLink navLink--about", scrollTo: "about-section" },
  { label: "Contact", href: "#contact", className: "navLink navLink--contact", scrollTo: "contact-section" },
];

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("#about");

  useEffect(() => {
    setActiveHash(window.location.hash || "#about");
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#about");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const container = el.closest('.overflow-y-auto') as HTMLElement | null;
    if (container) {
      container.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    scrollTo: string | null
  ) => {
    e.preventDefault();
    if (!scrollTo) return;

    const currentHash = window.location.hash || "#about";
    const isOnAboutPage = ["#about", "#work", "#contact"].includes(currentHash);

    setActiveHash(href);
    window.history.pushState(null, '', href);

    if (isOnAboutPage) {
      // Sudah di AboutPage — langsung scroll
      scrollToElement(scrollTo);
    } else {
      // Di halaman lain — simpan target scroll, lalu pindah ke AboutPage
      sessionStorage.setItem('pendingScrollTarget', scrollTo);
      // Trigger hashchange supaya page.tsx re-render ke AboutPage
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }
  };

  return (
    <nav className="navWrapper">
      <div className="navBackground">
        <img src="/assets/navbar.svg" alt="" aria-hidden="true" className="navSvg" />
      </div>
      <div className="navLinks">
        {NAV_LINKS.map(({ label, href, className, scrollTo }) => (
          <a
            key={href}
            href={href}
            className={`${className} ${activeHash === href ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, href, scrollTo)}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}