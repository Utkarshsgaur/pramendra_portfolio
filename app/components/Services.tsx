"use client";

import styles from "./Services.module.css";

interface Service {
  id: string;
  num: string;
  title: string;
  description: string;
  includes: string[];
  suits: string;
}

const services: Service[] = [
  {
    id: "cinematic-storytelling",
    num: "01",
    title: "Cinematic Storytelling",
    description:
      "For short films, documentary projects, and narrative-driven content where pacing, emotion, and story structure are paramount.",
    includes: [
      "Full editorial assembly",
      "Pacing and rhythm work",
      "Sound design integration",
      "Color grading",
      "3 revision rounds",
    ],
    suits: "Independent filmmakers, directors, content studios",
  },
  {
    id: "short-form-content",
    num: "02",
    title: "Short-Form Content",
    description:
      "Reels, YouTube Shorts, and social-first content built for attention — strong hooks, sharp rhythm, retention-optimized structure.",
    includes: [
      "Hook-focused editing",
      "Motion graphics & text",
      "Sound design & music sync",
      "Platform-optimised export",
      "Quick turnaround",
    ],
    suits: "Creators, brands, marketing teams",
  },
  {
    id: "youtube-longform",
    num: "03",
    title: "YouTube & Long-Form",
    description:
      "Structured, engaging long-form edits for YouTube, podcasts, and documentary-style content that keeps viewers watching.",
    includes: [
      "Structural editing",
      "B-roll & cutaway integration",
      "Chapter markers",
      "Subtitles & captions",
      "Thumbnail consultation",
    ],
    suits: "YouTubers, educators, thought leaders",
  },
  {
    id: "color-sound",
    num: "04",
    title: "Color & Sound Design",
    description:
      "Standalone grading and sound work for projects that need a specific emotional palette — from naturalistic grades to expressive looks.",
    includes: [
      "LUT development",
      "Scene-by-scene grading",
      "Audio cleanup & mixing",
      "Foley and ambience",
      "Final delivery mastering",
    ],
    suits: "Filmmakers, photographers, brand directors",
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services" aria-label="Services">
      <div className="container">
        {/* Header */}
        <div className={`${styles.header} reveal`}>
          <div className={styles.headerLeft}>
            <span className="label">What I offer</span>
            <h2 className={`display-md ${styles.title}`}>
              Services
            </h2>
          </div>
          <p className={`body-lg ${styles.headerDesc}`}>
            Built around what your story needs —
            not what a service menu says it should.
          </p>
        </div>

        {/* Process strip */}
        <div className={`${styles.processStrip} reveal`} aria-label="Workflow process">
          {["Brief", "Creative Direction", "First Cut", "Revisions", "Delivery"].map((step, i) => (
            <div key={step} className={styles.processStep}>
              {i > 0 && <div className={styles.processArrow} aria-hidden="true">→</div>}
              <span className={`label ${styles.processLabel}`}>0{i + 1}</span>
              <span className={styles.processName}>{step}</span>
            </div>
          ))}
        </div>

        {/* Services list */}
        <div className={styles.servicesList}>
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`${styles.serviceItem} reveal`}
              style={{ transitionDelay: `${i * 60}ms` }}
              id={`service-${service.id}`}
            >
              <div className={styles.serviceHeader}>
                <div className={styles.serviceLeft}>
                  <span className={`label ${styles.serviceNum}`}>{service.num}</span>
                  <h3 className={`display-sm ${styles.serviceTitle}`}>
                    {service.title}
                  </h3>
                </div>
                <div className={styles.serviceRight}>
                  <p className={`body-sm ${styles.serviceDesc}`}>
                    {service.description}
                  </p>
                </div>
              </div>

              <div className={styles.serviceBody}>
                <div className={styles.includesBlock}>
                  <span className="label" style={{ color: "var(--muted-grey)" }}>Includes</span>
                  <ul className={styles.includesList}>
                    {service.includes.map((item) => (
                      <li key={item} className={styles.includesItem}>
                        <span className={styles.check} aria-hidden="true">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.suitsBlock}>
                  <span className="label" style={{ color: "var(--muted-grey)" }}>Suits</span>
                  <p className={`body-sm ${styles.suitsText}`}>{service.suits}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing note */}
        <div className={`${styles.closingNote} reveal`}>
          <p className={`body-sm ${styles.note}`}>
            Pricing is based on project scope, not rigid packages.
            Send a brief and I&rsquo;ll come back with a clear proposal.
          </p>
          <a
            href="#contact"
            className={`btn btn-primary ${styles.inquiryBtn}`}
            id="services-inquiry-btn"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
