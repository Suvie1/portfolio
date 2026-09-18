import Image from "next/image";

const strategyTags = [
  "Keyword Research",
  "Search Intent",
  "Content Mapping",
  "Local SEO",
  "Content Planning",
  "Brand Voice",
  "Content Guidelines",
  "SOP Development",
  "Editorial Standards",
];

function EvidenceImage({
  src,
  alt,
  width,
  height,
  className = "",
  caption,
}) {
  return (
    <figure className={`seo-evidence-figure ${className}`.trim()}>
      <div className="seo-image-frame">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 899px) 92vw, 58vw"
        />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export default function SeoContentStrategy() {
  return (
    <section
      className="seo-strategy-section"
      id="seo-strategy"
      aria-labelledby="seo-strategy-title"
    >
      <div className="section-inner seo-strategy-intro">
        <p className="section-label">SEO CONTENT STRATEGY &amp; SYSTEMS</p>
        <h2 id="seo-strategy-title">The strategy behind the content.</h2>
        <p className="seo-strategy-lead">
          My work at Milia Marketing went beyond writing individual pages and
          articles. I worked across keyword research, content mapping, site
          structure, editorial planning, brand voice, and repeatable content
          systems for local SEO clients.
        </p>
        <ul className="seo-tag-row" aria-label="SEO content strategy skills">
          {strategyTags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <div className="section-inner seo-proof-list">
        <article
          className="seo-proof-block seo-proof-block-primary"
          id="seo-keyword-scale"
          aria-labelledby="seo-keyword-scale-title"
        >
          <div className="seo-proof-copy">
            <h3 id="seo-keyword-scale-title">Keyword Research at Scale</h3>
            <p>
              Managed keyword research and content planning across a large
              portfolio of local SEO clients, building research sheets for
              service pages, location pages, material pages, blog topics, and
              broader site architecture.
            </p>
            <p>
              The screenshot shows only a portion of the keyword research
              projects I worked on.
            </p>
          </div>
          <EvidenceImage
            src="/assets/seo-keyword-research-overview.png"
            alt="Google Sheets project overview showing a portion of Joseph Omosuvie's keyword research projects at Milia Marketing"
            width={1916}
            height={875}
            caption="A portion of the keyword research projects completed during my time at Milia Marketing."
          />
        </article>

        <article
          className="seo-proof-block"
          id="seo-site-structure"
          aria-labelledby="seo-site-structure-title"
        >
          <div className="seo-proof-copy">
            <h3 id="seo-site-structure-title">
              From Keywords to Site Structure
            </h3>
            <p>
              Keyword research was translated into practical content
              opportunities across service pages, material pages, location
              pages, and supporting blog topics. This helped turn search demand
              into an actionable website and editorial structure.
            </p>
            <p>
              Research sheets were organized by page type and intent so the
              findings could move directly into content production and site
              planning.
            </p>
          </div>
          <div className="seo-detail-stack">
            <EvidenceImage
              src="/assets/seo-keyword-research-pages.png"
              alt="Keyword research sheet organized into homepage and service page keyword clusters"
              width={1916}
              height={874}
            />
            <EvidenceImage
              src="/assets/seo-keyword-mapping.png"
              alt="Keyword mapping sheet with location, blog, material, and service page planning tabs"
              width={1919}
              height={868}
            />
          </div>
        </article>

        <article
          className="seo-proof-block seo-proof-block-reversed"
          id="seo-editorial-workflow"
          aria-labelledby="seo-editorial-workflow-title"
        >
          <div className="seo-proof-copy">
            <h3 id="seo-editorial-workflow-title">
              Content Planning &amp; Editorial Workflow
            </h3>
            <p>
              Content opportunities were organized into working publishing
              plans rather than treated as isolated articles. Research,
              priorities, topics, and upcoming content could be mapped into a
              clearer editorial workflow.
            </p>
            <p>
              The goal was to turn strategy into something writers and teams
              could actually execute consistently.
            </p>
          </div>
          <EvidenceImage
            src="/assets/seo-content-calendar.png"
            alt="Client content schedule showing content scope, writing week, publishing cadence, and production resources"
            width={1920}
            height={873}
          />
        </article>

        <article
          className="seo-proof-block seo-guidelines-block"
          id="seo-content-systems"
          aria-labelledby="seo-content-systems-title"
        >
          <div className="seo-proof-copy">
            <h3 id="seo-content-systems-title">
              Brand Voice &amp; Content Systems
            </h3>
            <p>
              Created detailed client content guidelines covering brand
              background, positioning, tone, messaging, terminology, audience
              considerations, and writing standards.
            </p>
            <p>
              I also developed a repeatable SOP for producing these guidelines
              so writers could maintain consistency across websites, blogs,
              social content, email, and other marketing channels.
            </p>
          </div>
          <div className="seo-document-previews">
            <EvidenceImage
              src="/assets/seo-content-guidelines-example.png"
              alt="Precision Stone Design Content Guidelines document covering brand background and writing standards"
              width={1920}
              height={870}
              className="seo-document-main"
            />
            <EvidenceImage
              src="/assets/seo-content-guidelines-sop.png"
              alt="Content Guidelines Creation Process SOP showing Milia Marketing and the owner role SEO Strategist and Content Specialist"
              width={1920}
              height={864}
              className="seo-document-support"
            />
          </div>
        </article>
      </div>

      <div className="section-inner seo-strategy-closing">
        <p>
          The writing was one part of the job. The larger work was building the
          structure, research, and systems that made consistent content
          possible.
        </p>
      </div>
    </section>
  );
}
