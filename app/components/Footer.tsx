import styles from "./Footer.module.css";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        {/* Top row */}
        <div className={styles.top}>
          <div className={styles.wordmarkBlock}>
            <span className={styles.wordmark}>main_bannu</span>
            <p className={`body-sm ${styles.tagline}`}>
              Video Editor · Filmmaker · Visual Storyteller
            </p>
          </div>

          <nav className={styles.footerNav} aria-label="Footer navigation">
            <a href="#work"     className={styles.footerLink}>Work</a>
            <a href="#about"    className={styles.footerLink}>About</a>
            <a href="#services" className={styles.footerLink}>Services</a>
            <a href="#contact"  className={styles.footerLink}>Contact</a>
          </nav>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        {/* Bottom row */}
        <div className={styles.bottom}>
          <p className={`body-sm ${styles.copyright}`}>
            © {year} main_bannu. All rights reserved.
          </p>

          <div className={styles.signature}>
            <span className={`body-sm ${styles.sigText}`}>
              Directed by{" "}
              <em className="accent-italic" style={{ fontSize: "inherit" }}>
                Bannu.
              </em>
            </span>
          </div>

          <div className={styles.socials}>
            <a
              href="https://instagram.com/bannu_films"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="bannu_films on Instagram"
            >
              IG
            </a>
            <a
              href="https://youtube.com/@bannu_films"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="bannu_films on YouTube"
            >
              YT
            </a>
            <a
              href="https://linkedin.com/in/pramendra-singh"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="Pramendra Singh on LinkedIn"
            >
              LI
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
