import useReveal from '../hooks/useReveal';
import styles from './Services.module.css';

const SERVICES = [
  {
    id: 'house',
    img: '/images/house.png',
    alt: 'House Washing',
    title: 'House Washing',
    description: 'Safely remove dirt, algae, and grime from your siding. Restore your home\'s original curb appeal without any surface damage.',
    tags: ['Soft Wash', 'All Siding Types', 'Safe for Plants'],
  },
  {
    id: 'driveway',
    img: '/images/driveway.png',
    alt: 'Driveway Cleaning',
    title: 'Driveway Cleaning',
    description: 'Erase years of tire marks, oil stains, and organic growth — revealing the bright, clean concrete underneath.',
    tags: ['Concrete', 'Pavers', 'Brick', 'Asphalt'],
  },
  {
    id: 'deck',
    img: '/images/deck.png',
    alt: 'Deck Restoration',
    title: 'Deck Restoration',
    description: 'Revitalize your outdoor living space. We safely wash away weathering and prepare your wood for a fresh stain or seal.',
    tags: ['Wood', 'Composite', 'Stain Prep'],
  },
];

function ServiceCard({ service, delay }) {
  const ref = useReveal();
  return (
    <article
      ref={ref}
      className={`reveal ${styles.card}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.imgWrap}>
        <img src={service.img} alt={service.alt} className={styles.img} />
        <div className={styles.imgOverlay} />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardDesc}>{service.description}</p>
        <div className={styles.tags}>
          {service.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  const titleRef = useReveal();

  return (
    <section id="services" className={styles.services}>
      <div className={`container ${styles.inner}`}>
        <div ref={titleRef} className={`reveal ${styles.header}`}>
          <span className="section-tag">What We Do</span>
          <h2 className={styles.heading}>Surfaces We Bring<br />Back to Life</h2>
          <p className={styles.sub}>
            From concrete to wood, we use state-of-the-art pressure washing technology
            tailored to each surface for perfect results every time.
          </p>
        </div>
        <div className={styles.grid}>
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
