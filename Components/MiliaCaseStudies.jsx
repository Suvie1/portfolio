"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./MiliaCaseStudies.module.css";

const cases = [
  { name: "RMI Surfaces", file: "rmi-surfaces.png", width: 534, height: 538, url: "https://miliamarketing.com/rmi-surfaces-case-study/" },
  { name: "Pacific Shore Stones", file: "pacific-shore-stones.png", width: 535, height: 538, url: "https://miliamarketing.com/pss-case-study/" },
  { name: "Elements Room", file: "elements-room.png", width: 536, height: 538, url: "https://miliamarketing.com/elements-room-case-study/" },
  { name: "Carolina Custom Surfaces", file: "carolina-custom-surfaces.png", width: 534, height: 538, url: "https://miliamarketing.com/carolina-custom-surfaces-case-study/" },
  { name: "Italian Marble & Granite", file: "italian-marble-granite.png", width: 535, height: 538, url: "https://miliamarketing.com/case-study-italian-marble-granites-digital-revamp/" },
  { name: "AMC Countertops", file: "amc-countertops.png", width: 536, height: 538, url: "https://miliamarketing.com/stone-solid-strategy-amc-countertops-journey-to-digital-excellence/" },
  { name: "Kitchen & Bath Specialists", file: "kitchen-bath-specialists.png", width: 534, height: 539, url: "https://miliamarketing.com/revitalizing-digital-presence-and-boosting-engagement-kitchen-bath-specialists-partnership-with-milia-marketing/" },
  { name: "Marble Uniques", file: "marble-uniques.png", width: 535, height: 539, url: "https://miliamarketing.com/transforming-a-countertop-fabrication-leader-a-comprehensive-marketing-success-story/" },
  { name: "Cutting Edge Countertops", file: "cutting-edge-countertops.png", width: 536, height: 539, url: "https://miliamarketing.com/increased-roi-a-strategic-marketing-partnership-with-cutting-edge-countertops/" },
];

export default function MiliaCaseStudies() {
  const [expanded, setExpanded] = useState(false);
  const [viewerCase, setViewerCase] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (viewerCase && !dialog.open) dialog.showModal();
    if (!viewerCase && dialog.open) dialog.close();
  }, [viewerCase]);

  return (
    <section className={styles.section} id="client-results" aria-labelledby="client-results-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 id="client-results-title">Proven Results for Real Clients.</h2>
          <p>During my five years at Milia Marketing, I worked on SEO, content strategy, website content, and digital marketing projects for clients across multiple industries. I also researched and wrote published case studies documenting the strategies, challenges, and measurable outcomes of the agency&apos;s work.</p>
          <p className={styles.attribution}>Client projects completed during my employment at Milia Marketing. Published performance figures reflect results achieved through the agency&apos;s collaborative work.</p>
        </div>

        <div className={styles.grid}>
          {cases.slice(0, expanded ? cases.length : 6).map((study) => (
            <article className={styles.card} key={study.file} aria-label={`${study.name} case study`}>
              <button className={styles.preview} type="button" onClick={() => setViewerCase(study)} aria-label={`View full-size ${study.name} case study tile`}>
                <Image src={`/assets/case-studies/${study.file}`} alt={`Milia Marketing case study tile for ${study.name}, showing its published project photograph and performance figures`} width={study.width} height={study.height} sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1023px) 44vw, 29vw" />
              </button>
              <a className={styles.link} href={study.url} target="_blank" rel="noopener noreferrer" aria-label={`Read ${study.name} case study on Milia Marketing (opens in a new tab)`}>Read Case Study <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>

        <button className={styles.expand} type="button" aria-expanded={expanded} onClick={() => setExpanded((value) => !value)}>{expanded ? "Show Fewer Case Studies" : "View All Case Studies"} <span aria-hidden="true">{expanded ? "↑" : "↓"}</span></button>
      </div>

      <dialog className={styles.viewer} ref={dialogRef} aria-label="Full-size Milia Marketing case study tile" onClose={() => setViewerCase(null)} onClick={(event) => { if (event.target === event.currentTarget) setViewerCase(null); }}>
        {viewerCase && <div className={styles.viewerContent}>
          <button type="button" className={styles.close} onClick={() => setViewerCase(null)} aria-label="Close full-size case study tile">CLOSE ×</button>
          <div className={styles.viewerScroll}>
            <Image src={`/assets/case-studies/${viewerCase.file}`} alt={`Full-size Milia Marketing case study tile for ${viewerCase.name}, with original published performance figures`} width={viewerCase.width} height={viewerCase.height} unoptimized />
          </div>
        </div>}
      </dialog>
    </section>
  );
}
