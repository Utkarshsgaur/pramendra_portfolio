"use client";

import { useState } from "react";
import styles from "./VideoEmbed.module.css";

type Platform = "youtube" | "instagram";

interface VideoEmbedProps {
  platform: Platform;
  videoId: string;      // YouTube video ID  or  Instagram shortcode
  title: string;
  /** Shown before the user clicks play */
  posterUrl?: string;
  /** Autoplay muted (for ambient cards) */
  autoplayMuted?: boolean;
  aspectRatio?: "16/9" | "9/16";
}

function getYouTubeThumbnail(id: string) {
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}

function getYouTubeEmbedUrl(id: string, autoplay: boolean) {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    autoplay: autoplay ? "1" : "0",
    mute: autoplay ? "1" : "0",
  });
  return `https://www.youtube.com/embed/${id}?${params}`;
}

function getInstagramEmbedUrl(shortcode: string) {
  return `https://www.instagram.com/reel/${shortcode}/embed/`;
}

export default function VideoEmbed({
  platform,
  videoId,
  title,
  posterUrl,
  autoplayMuted = false,
  aspectRatio = "16/9",
}: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);

  const thumbnail =
    posterUrl ?? (platform === "youtube" ? getYouTubeThumbnail(videoId) : null);

  const embedUrl =
    platform === "youtube"
      ? getYouTubeEmbedUrl(videoId, false)
      : getInstagramEmbedUrl(videoId);

  const isVertical = aspectRatio === "9/16";

  return (
    <div
      className={`${styles.wrapper} ${isVertical ? styles.vertical : ""}`}
      style={{ aspectRatio }}
    >
      {!playing ? (
        /* ── Poster / play trigger ── */
        <button
          className={styles.poster}
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title}`}
          id={`play-${videoId}`}
        >
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={`${title} thumbnail`}
              className={styles.posterImg}
              loading="lazy"
            />
          ) : (
            <div className={styles.posterFallback}>
              <span className={styles.igIcon} aria-hidden="true">
                {/* Instagram logo mark */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.6"/>
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </span>
              <span className={styles.posterLabel}>Reel</span>
            </div>
          )}
          <div className={styles.posterOverlay} />
          {/* Platform badge */}
          <span className={styles.platformBadge}>
            {platform === "youtube" ? "YT" : "IG"}
          </span>
          {/* Play button */}
          <span className={styles.playBtn} aria-hidden="true">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
              <path d="M1 1.5L17 10L1 18.5V1.5Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>
      ) : (
        /* ── Active embed ── */
        <iframe
          src={
            platform === "youtube"
              ? getYouTubeEmbedUrl(videoId, true)   // autoplay when user clicks
              : getInstagramEmbedUrl(videoId)
          }
          title={title}
          className={styles.iframe}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  );
}
