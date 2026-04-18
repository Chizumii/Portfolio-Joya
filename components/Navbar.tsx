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
    // Cari scroll container terdekat (div overflow-y-auto di Aboutpage)
    const container = el.closest('.overflow-y-auto') as HTMLElement | null;
    if (container) {
      container.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    } else {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, scrollTo: string | null) => {
    if (!scrollTo) return;

    e.preventDefault();
    setActiveHash(href);
    window.history.pushState(null, '', href);
    scrollToElement(scrollTo); // langsung scroll untuk semua link
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