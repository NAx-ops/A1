import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="A1 Pressure Washing" className={styles.logoImg} />
            <span className={styles.logoName}>A1 Pressure Washing</span>
          </div>
          <p className={styles.tagline}>Bringing the shine back to the DMV, one property at a time.</p>
        </div>

        <nav className={styles.links} aria-label="Footer Navigation">
          <span className={styles.linksTitle}>Navigate</span>
          <a href="#services" className={styles.link}>Services</a>
          <a href="#about" className={styles.link}>About</a>
          <a href="#contact" className={styles.link}>Contact</a>
        </nav>

        <div className={styles.social}>
          <span className={styles.linksTitle}>Connect</span>
          <a
            href="https://www.instagram.com/a1.washing?igsh=MTB0YTc2NmgyeXBhcQ=="
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            @a1.washing
          </a>
          <a href="tel:+14103243988" className={styles.socialLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.49 3.4 2 2 0 0 1 3.48 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 6.72 6.72l1.83-1.83a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            410-324-3988
          </a>
          <a href="mailto:a1pressurewash000@gmail.com" className={styles.socialLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            a1pressurewash000@gmail.com
          </a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>&copy; {year} A1 Pressure Washing. All rights reserved. · DMV Area</p>
      </div>
    </footer>
  );
}
