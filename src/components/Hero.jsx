import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg}>
        <img src={`${import.meta.env.BASE_URL}images/house.png`} alt="Beautifully power-washed home" className={styles.bgImg} />
        <div className={styles.overlay} />
      </div>
      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>
          <span className={styles.badgeIcon}>☀️</span>
          <span className={styles.badgeText}>Summer Special Deal — Coming Soon</span>
        </div>
        <h1 className={styles.heading}>
          Transform Your<br />
          <span className={styles.accent}>Property's</span> Appeal
        </h1>
        <p className={styles.sub}>
          DMV's premier power washing service. Specializing in homes,
          driveways, decks, and more. Affordable prices, great results.
        </p>
        <div className={styles.actions}>
          <a
            href="https://calendly.com/a1pressurewash000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary-light"
          >
            Book Now
          </a>
          <a href="#services" className="btn btn-ghost">View Services</a>
          <a
            href="https://www.facebook.com/a1pressurewashing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            View us on Facebook
          </a>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Satisfaction</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>DMV</span>
            <span className={styles.statLabel}>Area</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>A1</span>
            <span className={styles.statLabel}>Quality</span>
          </div>
        </div>
      </div>
      <a href="#services" className={styles.scrollHint} aria-label="Scroll down">
        <div className={styles.scrollLine} />
      </a>
    </section>
  );
}
