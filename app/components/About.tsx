import styles from "./About.module.css";

const stats = [
  { value: "5+",  label: "Years Exploring" },
  { value: "3",   label: "Main Projects" },
  { value: "7",   label: "Skills Practiced" },
];

const tools = [
  { name: "Adobe Premiere Pro", level: "Primary" },
  { name: "Adobe After Effects", level: "Learning" },
  { name: "DaVinci Resolve",    level: "Learning" },
];

const skills = [
  "Video Editing",
  "Color Grading",
  "Motion Graphics",
  "Filmmaking",
  "Cinematography",
  "Sound Design",
  "Graphic Design",
];

export default function About() {
  return (
    <section className={styles.about} id="about" aria-label="About Bannu">
      <div className="container">
        {/* Top label */}
        <div className={`${styles.labelRow} reveal`}>
          <span className="label">About</span>
          <div className={styles.labelLine} aria-hidden="true" />
        </div>

        {/* Main grid */}
        <div className={styles.grid}>
          {/* Left: Portrait */}
          <div className={`${styles.portraitCol} reveal`}>
            <div className={styles.portraitFrame}>
              <div className={styles.portraitPlaceholder} aria-label="Portrait of Bannu — Pramendra Singh">
                <img
                  src="/portrait.jpg"
                  alt="Pramendra Singh (Bannu) holding a Canon camera"
                  className={styles.portraitImg}
                />
                <div className={styles.portraitNoise} aria-hidden="true" />
              </div>
              <div className={styles.portraitBorder} aria-hidden="true" />
              <div className={styles.portraitTag}>
                <span className="label">Meerut, Uttar Pradesh · India</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={styles.contentCol}>
            <h2 className={`display-lg ${styles.aboutTitle} reveal`}>
              Editing with<br />
              <em className="accent-italic">intention.</em>
            </h2>

            <div className={`${styles.bodyBlock} reveal reveal-delay-1`}>
              <p className="body-lg">
                I&rsquo;m Bannu &mdash; a video editor, filmmaker, and visual storyteller
                who loves turning simple ideas into visuals that feel alive.
                I&rsquo;m Pramendra Singh, and I&rsquo;ve been exploring editing and
                filmmaking for around 5 years.
              </p>
            </div>

            <div className={`${styles.bodyBlock} reveal reveal-delay-2`}>
              <p className="body-lg">
                From experimenting with edits as a teenager to creating short films,
                cinematic videos, reels, and visual concepts &mdash; I&rsquo;ve always been
                curious about what a few frames, the right cut, and good sound
                can do to a story. I don&rsquo;t just want to edit videos.{" "}
                I want to make them feel.
              </p>
            </div>

            {/* Stats */}
            <div className={`${styles.statsRow} reveal reveal-delay-3`}>
              {stats.map(({ value, label }) => (
                <div key={label} className={styles.stat}>
                  <span className={styles.statValue}>{value}</span>
                  <span className={`label ${styles.statLabel}`}>{label}</span>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className={`${styles.toolsBlock} reveal reveal-delay-3`}>
              <span className="label" style={{ color: "var(--muted-grey)" }}>
                Tools & Software
              </span>
              <div className={styles.toolsList}>
                {tools.map(({ name, level }) => (
                  <div key={name} className={styles.toolItem}>
                    <span className={styles.toolName}>{name}</span>
                    <span className={`label ${styles.toolLevel} ${level === "Primary" ? styles.toolPrimary : styles.toolLearning}`}>
                      {level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className={`${styles.influencesBlock} reveal reveal-delay-4`}>
              <span className="label" style={{ color: "var(--muted-grey)" }}>
                Skills
              </span>
              <div className={styles.influences}>
                {skills.map((skill) => (
                  <span key={skill} className={styles.influenceTag}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy strip */}
        <div className={`${styles.philosophyStrip} reveal`}>
          <blockquote className={styles.philosophy}>
            <span className={styles.quoteBar} aria-hidden="true" />
            <p className={`display-sm ${styles.quoteText}`}>
              &ldquo;I don&rsquo;t just want to edit videos.
              <br />
              <em className="accent-italic">I want to make them feel.&rdquo;</em>
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
