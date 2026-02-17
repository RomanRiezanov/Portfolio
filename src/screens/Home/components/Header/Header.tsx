import { useEffect, useState } from "react";

import { MoonIcon, SunIcon } from "../Icons";

import styles from "./Header.module.scss";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function getInitialTheme(): "light" | "dark" {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.container}>
        <a href="#hero" className={styles.logo}>
          RR
        </a>

        <div className={styles.right}>
          <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.navLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle dark mode"
          >
            {theme === "light" ? <MoonIcon size={18} /> : <SunIcon size={18} />}
          </button>

          <button
            className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
