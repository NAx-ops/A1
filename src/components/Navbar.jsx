import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navClass = [styles.navbar, scrolled ? styles.scrolled : ''].join(' ');
  const hamburgerClass = [styles.hamburger, menuOpen ? styles.active : ''].join(' ');

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={navClass}>
        <div className={`container ${styles.navInner}`}>
          <a href="#hero" className={styles.brand} onClick={closeMenu}>
            <img src="/logo.png" alt="A1 Pressure Washing" className={styles.logo} />
            <span className={styles.brandName}>A1 Pressure Washing</span>
          </a>
          <nav className={styles.navLinks}>
            <a href="#services" className={styles.link}>Services</a>
            <a href="#about" className={styles.link}>About</a>
            <a href="#contact" className={styles.link}>Contact</a>
            <a
              href="https://calendly.com/a1pressurewash000"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-primary ${styles.navCta}`}
            >
              Book Now
            </a>
          </nav>
          <button
            className={hamburgerClass}
            id="hamburger-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={[styles.mobileMenu, menuOpen ? styles.mobileMenuOpen : ''].join(' ')}>
        <a href="#services" className={styles.mobileLink} onClick={closeMenu}>Services</a>
        <a href="#about" className={styles.mobileLink} onClick={closeMenu}>About</a>
        <a href="#contact" className={styles.mobileLink} onClick={closeMenu}>Contact</a>
        <a
          href="https://calendly.com/a1pressurewash000"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary ${styles.mobileCta}`}
          onClick={closeMenu}
        >
          Book Now
        </a>
      </div>
    </>
  );
}
