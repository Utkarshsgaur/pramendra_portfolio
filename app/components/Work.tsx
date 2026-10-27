"use client";

import styles from "./Work.module.css";
import VideoEmbed from "./VideoEmbed";

/* ─────────────────────────────────────────────
   Real project data — verified links
   ───────────────────────────────────────────── */
const featured = [
  {
    id: "stree-mohh",
    num: "01",
    title: "Stree Mohh",
    type: "Short Film",
    role: "Writer · Director · Editor",
    year: "2024",
    platform: "youtube" as const,
    videoId: "lbzs7WbcVkc",
    description:
      "A narrative short shaped through pacing, mood, and visual storytelling. Every cut was intentional — built to let silence speak as loudly as action.",
    tags: ["Short Film", "Narrative", "Color Grade"],
    featured: true,
  },
  {
    id: "knock-knock",
    num: "02",
    title: "Knock Knock",
    type: "Short Film",
    role: "Editor · Colorist",
    year: "2024",
    platform: "youtube" as const,
    videoId: "q3WJw3DrZd8",
    description:
      "A tension-driven short film where the edit carries the suspense. Crafted with deliberate pacing and sound design.",
    tags: ["Short Film", "Editing", "Sound Design"],
    featured: false,
  },
];

const reels = [
  {
    id: "perfection",
    num: "03",
    title: "Perfection",
    type: "Cinematic Reel",
    role: "Editor · Director",
    year: "2024",
    platform: "instagram" as const,
    videoId: "De3r4jeT7bh",
    tags: ["Cinematic", "Color Grade"],
  },
  {
    id: "day-21",
    num: "04",
    title: "Day 21",
    type: "21-Day Challenge",
    role: "Editor",
    year: "2024",
    platform: "instagram" as const,
    videoId: "DeUhkNmTGFP",
    tags: ["Challenge", "Short-Form"],
  },
  {
    id: "day-20",
    num: "05",
    title: "Day 20",
    type: "21-Day Challenge",
    role: "Editor",
    year: "2024",
    platform: "instagram" as const,
    videoId: "Ddwdmjxzeqa",
    tags: ["Challenge", "Short-Form"],
  },
  {
    id: "disease",
    num: "06",
    title: "Disease",
    type: "Cinematic Reel",
    role: "Editor · Colorist",
    year: "2024",
    platform: "instagram" as const,
    videoId: "Dbvh_CrItCi",
    tags: ["Cinematic", "Experimental"],
  },
];

export default function Work() {
  return (
    <section className={styles.work} id="work" aria-label="Selected work">
      <div className="container">
        {/* ── Section header ── */}
        <header className={`${styles.sectionHeader} reveal`}>
          <div className={styles.headerLeft}>
            <span className="label">Selected Work</span>
            <h2 className={`display-md ${styles.sectionTitle}`}>
              The work speaks.
            </h2>
          </div>
          <p className={`body-lg ${styles.sectionDesc}`}>
            Each project is built around a single idea: what does{" "}
            <em className="accent-italic">this story</em> need to feel?
          </p>
        </header>

        <div className={styles.divider} aria-hidden="true" />

        {/* ── Featured YouTube films ── */}
        <div className={`${styles.featuredGrid} reveal`}>
          {featured.map((project, i) => (
            <article
              key={project.id}
              className={`${styles.featuredCard} ${project.featured ? styles.featuredLarge : ""}`}
              id={`project-${project.id}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={styles.videoWrapper}>
                <VideoEmbed
                  platform={project.platform}
                  videoId={project.videoId}
                  title={project.title}
                  aspectRatio="16/9"
                />
              </div>
              <div className={styles.cardInfo}>
                <div className={styles.cardMeta}>
                  <span className={`label ${styles.projectNum}`}>{project.num}</span>
                  <span className={`label ${styles.projectType}`}>{project.type}</span>
                  <span className={`label ${styles.projectYear}`}>{project.year}</span>
                </div>
                <h3 className={`display-sm ${styles.projectTitle}`}>{project.title}</h3>
                <p className={`body-sm ${styles.projectDesc}`}>{project.description}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  <span className={`label ${styles.role}`}>{project.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Reels divider ── */}
        <div className={`${styles.reelsDivider} reveal`}>
          <div className={styles.reelsDividerLine} aria-hidden="true" />
          <span className="label" style={{ color: "var(--muted-grey)", flexShrink: 0 }}>
            Short-Form · Instagram Reels
          </span>
          <div className={styles.reelsDividerLine} aria-hidden="true" />
        </div>

        {/* ── Instagram Reels grid ── */}
        <div className={`${styles.reelsGrid} reveal`}>
          {reels.map((reel, i) => (
            <article
              key={reel.id}
              className={styles.reelCard}
              id={`project-${reel.id}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className={styles.reelVideoWrapper}>
                <VideoEmbed
                  platform={reel.platform}
                  videoId={reel.videoId}
                  title={reel.title}
                  aspectRatio="9/16"
                />
              </div>
              <div className={styles.reelInfo}>
                <div className={styles.reelMeta}>
                  <span className={`label ${styles.projectNum}`}>{reel.num}</span>
                  <span className={`label ${styles.projectType}`}>{reel.type}</span>
                </div>
                <h3 className={`${styles.reelTitle}`}>{reel.title}</h3>
                <div className={styles.tags}>
                  {reel.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className={`${styles.workCta} reveal`}>
          <p className={`body-sm ${styles.ctaNote}`}>
            More work available — follow{" "}
            <a
              href="https://instagram.com/bannu_films"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaInlineLink}
              aria-label="Follow bannu_films on Instagram"
            >
              @bannu_films
            </a>{" "}
            on Instagram
          </p>
          <a
            href="#contact"
            className={`btn btn-ghost ${styles.ctaBtn}`}
            id="work-contact-cta"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start a project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
