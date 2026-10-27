"use client";

import styles from "./Hero.module.css";
import VideoEmbed from "./VideoEmbed";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero" aria-label="Hero section">
      {/* Background image with overlay */}
      <div className={styles.heroBg} aria-hidden="true">
        <img
          src="/hero-bg.jpg"
          alt=""
          className={styles.bgImage}
          fetchPriority="high"
        />
        <div className={styles.bgOverlay} />
        <div className={styles.bgGradient} />
      </div>

      {/* Film frame decorations */}
      <div className={styles.filmFrame} aria-hidden="true">
        <div className={styles.frameCornerTL} />
        <div className={styles.frameCornerTR} />
        <div className={styles.frameCornerBL} />
        <div className={styles.frameCornerBR} />
        <div className={styles.frameSideL}>
          <span>FRAME</span>
          <span>001</span>
        </div>
        <div className={styles.frameSideR}>
          <span>4K</span>
          <span>24fps</span>
        </div>
      </div>

      <div className={`container ${styles.content}`}>
        {/* Meta row */}
        <div className={styles.metaRow}>
          <span className={`label ${styles.metaLabel}`}>
            Independent Creative / Meerut, India
          </span>
          <span className={styles.metaDivider} aria-hidden="true" />
          <span className={`label ${styles.metaLabel}`}>
            Video Editor · Filmmaker · Visual Storyteller
          </span>
        </div>

        {/* Main headline */}
        <h1 className={styles.headline}>
          <span className={`display-xl ${styles.lineOne}`}>
            I don&rsquo;t just
          </span>
          <span className={`display-xl ${styles.lineTwo}`}>
            edit videos.
          </span>
          <span className={`display-xl ${styles.lineThree}`}>
            I make them{" "}
            <em className={`accent-italic ${styles.accentWord}`}>feel.</em>
          </span>
        </h1>

        {/* Subline */}
        <p className={`body-lg ${styles.sub}`}>
          I turn raw footage and ideas
          <br className={styles.brDesktop} />
          {" "}into stories worth watching.
        </p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <a
            href="#work"
            className={`btn btn-primary ${styles.ctaPrimary}`}
            id="hero-cta-showreel"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className={styles.playIcon} aria-hidden="true">▶</span>
            Watch my showreel
          </a>
          <a
            href="#contact"
            className={`btn btn-ghost ${styles.ctaGhost}`}
            id="hero-cta-contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let&rsquo;s work together
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Tags */}
        <div className={styles.tags} aria-label="Keywords">
          {["Cinematic", "Editorial", "Personal", "Experimental"].map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Showreel area */}
      <div className={styles.showreelWrapper} aria-label="Showreel area">
        <div className={styles.showreelInner}>
          <div className={styles.showreelPlaceholder}>
            <VideoEmbed
              platform="youtube"
              videoId="lbzs7WbcVkc"
              title="Stree Mohh — Showreel"
              aspectRatio="16/9"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span className="label">Scroll to explore</span>
      </div>

      {/* Running text */}
      <div className={styles.marqueeWrapper} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeTape}>
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className={styles.marqueeItem}>
                EDITING WITH INTENTION · STORIES THAT FEEL · CINEMATIC VISION · FRAME BY FRAME ·{" "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
