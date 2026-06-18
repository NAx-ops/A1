import useReveal from '../hooks/useReveal';
import styles from './Contact.module.css';

const CONTACT_ITEMS = [
  {
    id: 'phone',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.49 3.4 2 2 0 0 1 3.48 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 6.72 6.72l1.83-1.83a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    label: 'Call Us',
    value: '410-324-3988',
    href: 'tel:+14103243988',
  },
  {
    id: 'email',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
    label: 'Email Us',
    value: 'a1pressurewash000@gmail.com',
    href: 'mailto:a1pressurewash000@gmail.com',
  },
  {
    id: 'instagram',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    label: 'Instagram',
    value: '@a1.washing',
    href: 'https://www.instagram.com/a1.washing?igsh=MTB0YTc2NmgyeXBhcQ==',
    external: true,
  },
];

function ContactCard({ item, delay }) {
  const ref = useReveal();
  return (
    <a
      ref={ref}
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noopener noreferrer' : undefined}
      className={`reveal ${styles.card}`}
      style={{ transitionDelay: `${delay}s` }}
      id={`contact-${item.id}`}
    >
      <div className={styles.iconWrap}>{item.icon}</div>
      <span className={styles.cardLabel}>{item.label}</span>
      <span className={styles.cardValue}>{item.value}</span>
    </a>
  );
}

export default function Contact() {
  const titleRef = useReveal();

  return (
    <section id="contact" className={styles.contact}>
      <div className={`container ${styles.inner}`}>
        <div ref={titleRef} className={`reveal ${styles.header}`}>
          <span className="section-tag" style={{ color: 'rgba(255,255,255,0.6)' }}>Get In Touch</span>
          <h2 className={styles.heading}>Ready for a Cleaner Home?</h2>
          <p className={styles.sub}>
            Reach out through any of the channels below.
            We'll get back to you fast with a free estimate.
          </p>
        </div>
        <div className={styles.cards}>
          {CONTACT_ITEMS.map((item, i) => (
            <ContactCard key={item.id} item={item} delay={i * 0.12} />
          ))}
        </div>

        <div className={styles.summer}>
          <div className={styles.summerBadge}>☀️ Summer Special</div>
          <h3 className={styles.summerTitle}>Exclusive Deal Coming Soon</h3>
          <p className={styles.summerText}>
            Follow us on Instagram and stay tuned — our Summer Special deal is dropping soon
            with savings you won't want to miss.
          </p>
          <a
            href="https://www.instagram.com/a1.washing?igsh=MTB0YTc2NmgyeXBhcQ=="
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary-light ${styles.summerCta}`}
          >
            Follow for the Deal
          </a>
        </div>
      </div>
    </section>
  );
}
