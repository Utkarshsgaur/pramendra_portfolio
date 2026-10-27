"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const navLinks = [
  { href: "#work",     label: "Work"     },
  { href: "#about",    label: "About"    },
  { href: "#services", label: "Services" },
  { href: "#contact",  label: "Contact"  },
];

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeSection, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section tracking */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
        role="banner"
      >
        <div className={`container ${styles.inner}`}>
          {/* Wordmark */}
          <Link
            href="/"
            className={styles.wordmark}
            aria-label="main_bannu — Home"
          >
            <span className={styles.wordmarkMain}>main_bannu</span>
          </Link>

          {/* Desktop links */}
          <nav className={styles.links} aria-label="Primary navigation">
            {navLinks.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className={`${styles.navLink} ${activeSection === href ? styles.active : ""}`}
                aria-current={activeSection === href ? "true" : undefined}
              >
                {label}
              </button>
            ))}
            <span className={styles.availBadge} aria-label="Available for projects">
              <span className={styles.availDot} />
              Available
            </span>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`${styles.bar} ${menuOpen ? styles.barTop : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barMid : ""}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barBot : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.mobileLinks} aria-label="Mobile navigation">
          {navLinks.map(({ href, label }, i) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className={styles.mobileLink}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className={styles.mobileLinkNum}>0{i + 1}</span>
              {label}
            </button>
          ))}
        </nav>
        <div className={styles.mobileFooter}>
          <span className={styles.label}>Independent Creative · India</span>
        </div>
      </div>
    </>
  );
}
