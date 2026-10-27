"use client";

import { useState, useRef, FormEvent } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send — replace with your actual form handler (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    formRef.current?.reset();
  };

  return (
    <section className={styles.contact} id="contact" aria-label="Contact Bannu">
      <div className="container">
        {/* Closing line */}
        <div className={`${styles.closingBlock} reveal`}>
          <h2 className={`display-lg ${styles.closingTitle}`}>
            Let&rsquo;s make something
            <br />
            <em className="accent-italic">worth watching.</em>
          </h2>
          <p className={`body-lg ${styles.closingDesc}`}>
            Have a project in mind? Send a brief or just say hello.
            I reply to every message personally.
          </p>
          <div className={styles.directLinks}>
            <a
              href="mailto:pramendra.work@gmail.com"
              className={styles.emailLink}
              id="contact-email-link"
              aria-label="Email Bannu"
            >
              pramendra.work@gmail.com
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Form + details grid */}
        <div className={styles.grid}>
          {/* Inquiry form */}
          <div className={`${styles.formBlock} reveal`}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={styles.form}
              aria-label="Project inquiry form"
              noValidate
            >
              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="contact-name" className={`label ${styles.fieldLabel}`}>
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className={styles.input}
                    placeholder="Rahul Sharma"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-email" className={`label ${styles.fieldLabel}`}>
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-type" className={`label ${styles.fieldLabel}`}>
                  Project type
                </label>
                <select id="contact-type" name="type" className={styles.select}>
                  <option value="">Select a service</option>
                  <option value="cinematic">Cinematic Storytelling</option>
                  <option value="shortform">Short-Form Content</option>
                  <option value="youtube">YouTube / Long-Form</option>
                  <option value="color">Color & Sound Design</option>
                  <option value="other">Other / Not sure yet</option>
                </select>
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="contact-duration" className={`label ${styles.fieldLabel}`}>
                    Video duration
                  </label>
                  <input
                    id="contact-duration"
                    name="duration"
                    type="text"
                    className={styles.input}
                    placeholder="e.g. 3–5 minutes"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-deadline" className={`label ${styles.fieldLabel}`}>
                    Deadline
                  </label>
                  <input
                    id="contact-deadline"
                    name="deadline"
                    type="text"
                    className={styles.input}
                    placeholder="e.g. End of November"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-budget" className={`label ${styles.fieldLabel}`}>
                  Rough budget
                </label>
                <select id="contact-budget" name="budget" className={styles.select}>
                  <option value="">Prefer not to say</option>
                  <option value="under-10k">Under ₹10,000</option>
                  <option value="10k-30k">₹10,000 – ₹30,000</option>
                  <option value="30k-75k">₹30,000 – ₹75,000</option>
                  <option value="75k-plus">₹75,000+</option>
                  <option value="lets-talk">Let&apos;s talk</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-brief" className={`label ${styles.fieldLabel}`}>
                  Tell me about your project
                </label>
                <textarea
                  id="contact-brief"
                  name="brief"
                  className={styles.textarea}
                  rows={5}
                  placeholder="Share your idea, references, or anything that helps me understand what you're going for…"
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn btn-primary ${styles.submitBtn}`}
                id="contact-submit-btn"
                disabled={status === "sending" || status === "sent"}
                aria-live="polite"
              >
                {status === "idle"    && "Send brief"}
                {status === "sending" && "Sending…"}
                {status === "sent"    && "Sent — I'll be in touch ✓"}
                {status === "error"   && "Something went wrong. Try again."}
              </button>
            </form>
          </div>

          {/* Details sidebar */}
          <aside className={`${styles.details} reveal reveal-delay-2`}>
            <div className={styles.detailCard}>
              <span className="label" style={{ color: "var(--muted-grey)" }}>Based in</span>
              <p className={styles.detailValue}>Meerut, Uttar Pradesh</p>
            </div>

            <div className={styles.detailCard}>
              <span className="label" style={{ color: "var(--muted-grey)" }}>Response time</span>
              <p className={styles.detailValue}>Within 24 hours</p>
            </div>

            <div className={styles.detailCard}>
              <span className="label" style={{ color: "var(--muted-grey)" }}>Availability</span>
              <div className={styles.availRow}>
                <span className={styles.availDot} />
                <p className={styles.detailValue}>Open for projects</p>
              </div>
            </div>

            <div className={styles.detailCard}>
              <span className="label" style={{ color: "var(--muted-grey)" }}>WhatsApp</span>
              <a
                href="https://wa.me/918439929883"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.detailValue}
                style={{ textDecoration: "none", borderBottom: "1px solid var(--border-grey)", paddingBottom: "2px" }}
                aria-label="Chat on WhatsApp"
              >
                +91 84399 29883
              </a>
            </div>

            <div className={styles.socialLinks}>
              <span className="label" style={{ color: "var(--muted-grey)", marginBottom: "var(--space-md)", display: "block" }}>
                Find me on
              </span>
              <div className={styles.socialRow}>
                <a
                  href="https://instagram.com/bannu_films"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  id="contact-instagram-bannu-link"
                  aria-label="Follow bannu_films on Instagram"
                >
                  @bannu_films (Creative) ↗
                </a>
                <a
                  href="https://instagram.com/main_bannu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  id="contact-instagram-main-link"
                  aria-label="Follow main_bannu on Instagram"
                >
                  @main_bannu (Brand) ↗
                </a>
                <a
                  href="https://youtube.com/@bannu_films"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  id="contact-youtube-link"
                  aria-label="bannu_films on YouTube"
                >
                  YouTube ↗
                </a>
                <a
                  href="https://linkedin.com/in/pramendra-singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  id="contact-linkedin-link"
                  aria-label="Pramendra Singh on LinkedIn"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
