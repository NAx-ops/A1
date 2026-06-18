import useReveal from '../hooks/useReveal';
import styles from './About.module.css';

const PILLARS = [
  { icon: '💧', title: 'Spotless Results', desc: "We don't leave until the job is done right. Your property will look brand new." },
  { icon: '💰', title: 'Affordable Pricing', desc: "Premium quality shouldn't break the bank. We offer competitive rates for every budget." },
  { icon: '📍', title: 'Local DMV Experts', desc: 'Proudly serving the entire DC, Maryland, and Virginia area with pride and professionalism.' },
];

function Pillar({ pillar: p, delay }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${styles.pillar}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.pillarIcon}>{p.icon}</div>
      <h3 className={styles.pillarTitle}>{p.title}</h3>
      <p className={styles.pillarDesc}>{p.desc}</p>
    </div>
  );
}

export default function About() {
  const titleRef = useReveal();

  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.inner}`}>
        <div ref={titleRef} className={`reveal ${styles.header}`}>
          <span className="section-tag">Why Choose Us</span>
          <h2 className={styles.heading}>Affordable Prices.<br />Great Results.</h2>
          <p className={styles.sub}>
            We are a locally owned and operated pressure washing company serving the entire DMV area.
            Our mission is simple: deliver showroom-clean results at prices everyone can afford.
          </p>
        </div>
        <div className={styles.pillars}>
          {PILLARS.map((p, i) => (
            <Pillar key={p.title} pillar={p} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
