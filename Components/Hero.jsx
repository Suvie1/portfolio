"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";

export default function Hero() {
  const artRef = useRef(null);

  const handlePointerMove = useCallback((event) => {
    if (!artRef.current || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;

    artRef.current.style.setProperty("--drift-x", `${x.toFixed(2)}px`);
    artRef.current.style.setProperty("--drift-y", `${y.toFixed(2)}px`);
  }, []);

  const resetPointer = useCallback(() => {
    if (!artRef.current) return;
    artRef.current.style.setProperty("--drift-x", "0px");
    artRef.current.style.setProperty("--drift-y", "0px");
  }, []);

  return (
    <section
      className="hero"
      aria-labelledby="hero-title"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <div className="hero-inner">
        <div className="headline-wrap">
          <h1 id="hero-title" className="hero-title">
            <span className="reveal-line">
              <span>DIGITAL WORK</span>
            </span>
            <span className="reveal-line">
              <span>DESIGNED TO</span>
            </span>
            <span className="reveal-line">
              <span className="serif-line">MOVE PEOPLE.</span>
            </span>
          </h1>
        </div>

        <p className="hero-meta">WEB DESIGN / EMAIL DESIGN / UX / CONTENT</p>

        <div className="hero-art" ref={artRef} aria-label="Joseph Omosuvie portrait with portfolio work previews">
          <div className="outline-rect" aria-hidden="true" />
          <div className="accent-marker" aria-hidden="true" />

          <figure className="art-board hero-board hero-board-web">
            <Image
              src="/assets/clearstone-homepage-hero.png"
              alt="Clearstone Surfaces desktop homepage design screenshot"
              fill
              priority
              sizes="(max-width: 767px) 58vw, 24vw"
            />
          </figure>

          <figure className="art-board hero-board hero-board-email">
            <Image
              src="/assets/fenty-email-hero.png"
              alt="Fenty Beauty email design crop"
              fill
              priority
              sizes="(max-width: 767px) 42vw, 18vw"
            />
          </figure>

          <figure className="art-board headshot-board">
            <Image
              src="/assets/portfolio-headshot.jpeg"
              alt="Portrait of Joseph Omosuvie"
              fill
              priority
              sizes="(max-width: 767px) 58vw, 24vw"
            />
          </figure>
        </div>

        <p className="scroll-cue">SCROLL TO EXPLORE ↓</p>
      </div>
    </section>
  );
}
