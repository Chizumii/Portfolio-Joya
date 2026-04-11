"use client";

import { useEffect, useState } from "react";
import "../src/styles/Navbar.css";

const NAV_LINKS = [
  { label: "Works", href: "#work", className: "navLink navLink--works" },
  { label: "About", href: "#about", className: "navLink navLink--about" },
  { label: "Contact", href: "#contact", className: "navLink navLink--contact" },
];

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("#about");

  useEffect(() => {
    // Check the URL hash when the component loads
    setActiveHash(window.location.hash || "#about");

    // Listen for hash changes when clicking links
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#about");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav className="navWrapper">
      {/* BACKGROUND SVG */}
      <div className="navBackground">
        <img
          src="/assets/navbar.svg"
          alt=""
          aria-hidden="true"
          className="navSvg"
        />
      </div>

      {/* TEXT LINKS */}
      <div className="navLinks">
        {NAV_LINKS.map(({ label, href, className }) => (
          <a
            key={href}
            href={href}
            className={`${className} ${activeHash === href ? "active" : ""}`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}