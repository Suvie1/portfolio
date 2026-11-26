"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./SeoContentStrategy.module.css";

const slides = [
  {
    id: "seo-keyword-scale",
    title: "Keyword Research at Scale",
    description: "I worked across keyword research for multiple local SEO clients, identifying opportunities for service, material, location, and informational pages. The research was organized in spreadsheets that supported both content decisions and production planning.",
    note: "The screenshot shows only a portion of the keyword research projects I worked on.",
    images: [
      { src: "/assets/seo-keyword-research-overview.png", alt: "Google Sheets overview showing a portion of keyword research projects at Milia Marketing", width: 1916, height: 875 },
    ],
  },
  {
    id: "seo-site-structure",
    title: "From Keywords to Site Structure",
    description: "Research did not end with a list of keywords. I grouped opportunities by intent and page type so they could inform website structure, landing page development, and supporting blog content.",
    note: "Research sheets were organized by page type and intent so the findings could move directly into content production and site planning.",
    images: [
      { src: "/assets/seo-keyword-research-pages.png", alt: "Keyword research sheet with homepage and service page keyword clusters", width: 1916, height: 874 },
      { src: "/assets/seo-keyword-mapping.png", alt: "Keyword mapping sheet with location, blog, material, and service page planning", width: 1919, height: 868 },
    ],
  },
  {
    id: "seo-editorial-workflow",
    title: "Content Planning & Editorial Workflow",
    description: "Content opportunities were turned into working publishing plans rather than treated as isolated topics. Research, priorities, production timing, and publishing cadence could be organized into a clearer editorial workflow.",
    note: "The goal was to turn strategy into something writers and teams could actually execute consistently.",
    images: [
      { src: "/assets/seo-content-calendar.png", alt: "Client content calendar with content scope, writing week, and publishing cadence", width: 1920, height: 873 },
    ],
  },
  {
    id: "seo-content-systems",
    title: "Brand Voice & Content Systems",
    description: "I created client-specific content guidelines covering brand background, positioning, tone, terminology, audience considerations, and writing standards. I also documented the process for building these guidelines so the work could be repeated more consistently across accounts.",
    note: "The writing was one part of the job. The larger work was building the structure, research, and systems that made consistent content possible.",
    images: [
      { src: "/assets/seo-content-guidelines-example.png", alt: "Precision Stone Design Content Guidelines document", width: 1920, height: 870 },
      { src: "/assets/seo-content-guidelines-sop.png", alt: "Content Guidelines Creation Process SOP naming SEO Strategist and Content Specialist as owner", width: 1920, height: 864 },
    ],
  },
];

const number = (value) => String(value).padStart(2, "0");

function StrategySlide({ slide, index, active, onNavigate, onOpenImage }) {
  const [imageIndex, setImageIndex] = useState(0);
  const image = slide.images[imageIndex];

  return (
    <article className={styles.slide} id={slide.id} aria-labelledby={`${slide.id}-title`} aria-hidden={!active} inert={!active}>
      <div className={styles.slideCopy}>
        <p className={styles.slideNumber}>{number(index + 1)} / 04</p>
        <h3 id={`${slide.id}-title`}>{slide.title}</h3>
        <p className={styles.description}>{slide.description}</p>
        <p className={styles.note}>{slide.note}</p>
        <div className={styles.slideControls}>
          <button type="button" onClick={() => onNavigate(index - 1)} disabled={index === 0} aria-label="Previous strategy topic">←</button>
          <button type="button" onClick={() => onNavigate(index + 1)} disabled={index === slides.length - 1} aria-label="Next strategy topic">→</button>
          <span>SWIPE OR USE ARROWS</span>
        </div>
      </div>

      <div className={styles.visualPanel}>
        <button type="button" className={styles.imageOpen} onClick={() => onOpenImage(image)} aria-label={`View full-size image: ${image.alt}`}>
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 899px) 90vw, 55vw" />
        </button>
        <div className={styles.imageControls}>
          <span>CLICK IMAGE TO INSPECT</span>
          {slide.images.length > 1 ? (
            <div className={styles.imageNavigation}>
              <button type="button" onClick={() => setImageIndex((current) => Math.max(0, current - 1))} disabled={imageIndex === 0} aria-label={`Previous image in ${slide.title}`}>←</button>
              <span aria-live="polite">{number(imageIndex + 1)} / {number(slide.images.length)}</span>
              <button type="button" onClick={() => setImageIndex((current) => Math.min(slide.images.length - 1, current + 1))} disabled={imageIndex === slide.images.length - 1} aria-label={`Next image in ${slide.title}`}>→</button>
            </div>
          ) : <span>01 / 01</span>}
        </div>
      </div>
    </article>
  );
}

export default function SeoContentStrategy() {
  const trackRef = useRef(null);
  const dialogRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewerImage, setViewerImage] = useState(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (viewerImage && !dialog.open) dialog.showModal();
    if (!viewerImage && dialog.open) dialog.close();
  }, [viewerImage]);

  const navigate = (index) => {
    if (index < 0 || index >= slides.length || !trackRef.current) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    trackRef.current.scrollTo({ left: index * trackRef.current.clientWidth, behavior: reducedMotion ? "instant" : "smooth" });
    setActiveIndex(index);
  };

  const syncActiveSlide = () => {
    const track = trackRef.current;
    if (track) setActiveIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <section className={styles.section} id="seo-strategy" aria-labelledby="seo-strategy-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.kicker}>CONTENT STRATEGY &amp; SYSTEMS</p>
          <h2 id="seo-strategy-title">The strategy behind the content.</h2>
          <p>At Milia Marketing, my work extended beyond writing individual pages and articles. I worked across keyword research, content mapping, site structure, editorial planning, brand voice, and repeatable content systems for local SEO clients.</p>
        </div>

        <div className={styles.track} ref={trackRef} onScroll={syncActiveSlide} onKeyDown={(event) => {
          if (event.target === event.currentTarget && (event.key === "ArrowRight" || event.key === "ArrowLeft")) {
            event.preventDefault();
            navigate(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
          }
        }} tabIndex={0} role="region" aria-roledescription="carousel" aria-label="Content strategy work areas">
          {slides.map((slide, index) => <StrategySlide key={slide.id} slide={slide} index={index} active={activeIndex === index} onNavigate={navigate} onOpenImage={setViewerImage} />)}
        </div>
      </div>

      <dialog className={styles.viewer} ref={dialogRef} onClose={() => setViewerImage(null)} onClick={(event) => {
        if (event.target === event.currentTarget) setViewerImage(null);
      }} aria-label="Full-size strategy document viewer">
        {viewerImage ? (
          <div className={styles.viewerContent}>
            <button type="button" className={styles.viewerClose} onClick={() => setViewerImage(null)} aria-label="Close full-size image">CLOSE ×</button>
            <div className={styles.viewerScroll}>
              <Image src={viewerImage.src} alt={viewerImage.alt} width={viewerImage.width} height={viewerImage.height} unoptimized />
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
