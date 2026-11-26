"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import base from "./SeoContentStrategy.module.css";
import styles from "./WebDesignShowcase.module.css";
import { webDesignProjects } from "./webDesignProjects";

const number = (value) => String(value).padStart(2, "0");

function ProjectSlide({ project, index, active, screenshotIndex, onScreenshotChange, onNavigate, onOpenImage }) {
  const image = project.images[active ? screenshotIndex : 0];

  return (
    <article className={base.slide} id={`web-${project.id}`} aria-labelledby={`web-${project.id}-title`} aria-hidden={!active} inert={!active}>
      <div className={base.slideCopy}>
        <p className={base.slideNumber}>{number(index + 1)} / 04</p>
        <h3 id={`web-${project.id}-title`}>{project.title}</h3>
        <p className={styles.category}>{project.category}</p>
        <p className={base.description}>{project.description}</p>
        <p className={styles.approach}>{project.approach}</p>
        {project.url ? (
          <a className={styles.projectCta} href={project.url} target="_blank" rel="noopener noreferrer">
            Visit Website <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <button className={styles.projectCta} type="button" onClick={(event) => onOpenImage(image, event.currentTarget)}>
            Explore Design <span aria-hidden="true">↗</span>
          </button>
        )}
        <div className={base.slideControls}>
          <button type="button" onClick={() => onNavigate(index - 1)} disabled={index === 0} aria-label="Previous website project">←</button>
          <button type="button" onClick={() => onNavigate(index + 1)} disabled={index === webDesignProjects.length - 1} aria-label="Next website project">→</button>
          <span>SWIPE OR USE ARROWS</span>
        </div>
      </div>

      <div className={base.visualPanel}>
        <button className={`${base.imageOpen} ${styles.preview}`} type="button" onClick={(event) => onOpenImage(image, event.currentTarget)} aria-label={`View full-size screenshot: ${image.alt}`}>
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 899px) 90vw, 55vw" />
        </button>
        <div className={base.imageControls}>
          <span>CLICK IMAGE TO INSPECT</span>
          <div className={base.imageNavigation}>
            <button type="button" onClick={() => onScreenshotChange(Math.max(0, screenshotIndex - 1))} disabled={screenshotIndex === 0} aria-label={`Previous screenshot in ${project.title}`}>←</button>
            <span aria-live="polite">{number(screenshotIndex + 1)} / 03</span>
            <button type="button" onClick={() => onScreenshotChange(Math.min(2, screenshotIndex + 1))} disabled={screenshotIndex === 2} aria-label={`Next screenshot in ${project.title}`}>→</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function WebDesignShowcase() {
  const trackRef = useRef(null);
  const dialogRef = useRef(null);
  const openerRef = useRef(null);
  const activeRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [screenshotIndex, setScreenshotIndex] = useState(0);
  const [viewerImage, setViewerImage] = useState(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    if (viewerImage) {
      document.body.style.overflow = "hidden";
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
    return () => { document.body.style.overflow = previousOverflow; };
  }, [viewerImage]);

  const openImage = (image, opener) => {
    openerRef.current = opener;
    setViewerImage(image);
  };

  const navigate = (index) => {
    const track = trackRef.current;
    if (!track || index < 0 || index >= webDesignProjects.length) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: index * track.clientWidth, behavior: reducedMotion ? "instant" : "smooth" });
  };

  const syncActiveSlide = () => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    if (index !== activeRef.current) {
      activeRef.current = index;
      setActiveIndex(index);
      setScreenshotIndex(0);
    }
  };

  return (
    <section className={`${base.section} ${styles.section}`} id="work" aria-labelledby="web-design-title">
      <div className={base.inner}>
        <div className={base.intro}>
          <p className={base.kicker}>WEBSITE DESIGN &amp; DEVELOPMENT</p>
          <h2 id="web-design-title">Where content, design, and usability come together.</h2>
          <p>I approach website design with the same thinking I bring to content: clear structure, purposeful messaging, and a good user experience. These projects explore how visual design and content can work together to help businesses communicate more effectively.</p>
        </div>

        <div className={base.track} ref={trackRef} onScroll={syncActiveSlide} onKeyDown={(event) => {
          if (event.target === event.currentTarget && (event.key === "ArrowRight" || event.key === "ArrowLeft")) {
            event.preventDefault();
            navigate(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
          }
        }} tabIndex={0} role="region" aria-roledescription="carousel" aria-label="Website design projects">
          {webDesignProjects.map((project, index) => (
            <ProjectSlide key={project.id} project={project} index={index} active={activeIndex === index} screenshotIndex={activeIndex === index ? screenshotIndex : 0} onScreenshotChange={setScreenshotIndex} onNavigate={navigate} onOpenImage={openImage} />
          ))}
        </div>
      </div>

      <dialog className={base.viewer} ref={dialogRef} onClose={() => {
        setViewerImage(null);
        openerRef.current?.focus();
      }} onClick={(event) => {
        if (event.target === event.currentTarget) setViewerImage(null);
      }} aria-label="Full-size website screenshot viewer">
        {viewerImage ? (
          <div className={base.viewerContent}>
            <button className={base.viewerClose} type="button" onClick={() => setViewerImage(null)} aria-label="Close full-size screenshot">CLOSE ×</button>
            <div className={base.viewerScroll}>
              <Image className={styles.viewerImage} src={viewerImage.src} alt={viewerImage.alt} width={viewerImage.width} height={viewerImage.height} unoptimized />
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
