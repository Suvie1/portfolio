import Image from "next/image";
import SeoContentStrategy from "./SeoContentStrategy";

const webProjects = [
  {
    title: "Clearstone Surfaces",
    id: "clearstone-title",
    metadata: "WEB DESIGN / CONCEPT STUDY / 2026",
    description:
      "A refined countertop website concept built around premium materials, strong visual hierarchy, and a homeowner-focused browsing experience that makes discovering surfaces, understanding the process, and taking the next step feel simple.",
    images: [
      {
        src: "/assets/clearstone-homepage-hero.png",
        alt: "Clearstone Surfaces homepage hero screenshot",
      },
      {
        src: "/assets/clearstone-homepage-mid.png",
        alt: "Clearstone Surfaces homepage mid-page screenshot",
        unoptimized: true,
      },
      {
        src: "/assets/clearstone-homepage-footer.png",
        alt: "Clearstone Surfaces homepage footer screenshot",
      },
    ],
  },
  {
    title: "HarborStone Insurance",
    id: "harborstone-title",
    metadata: "WEB DESIGN / CONCEPT STUDY / 2026",
    description:
      "A modern insurance website concept designed to make complex coverage feel clearer, calmer, and easier to navigate while maintaining the trust and professionalism expected from a financial-services brand.",
    images: [
      {
        src: "/assets/HSI-homepage-hero.png",
        alt: "HarborStone Insurance homepage hero screenshot",
      },
      {
        src: "/assets/HSI-homepage-mid.png",
        alt: "HarborStone Insurance homepage mid-page screenshot",
      },
      {
        src: "/assets/HSI-homepage-footer.png",
        alt: "HarborStone Insurance homepage footer screenshot",
      },
    ],
  },
  {
    title: "Frugal Kitchens",
    id: "frugal-title",
    metadata: "WEB DESIGN / CONCEPT STUDY / 2026",
    description:
      "A kitchen-design website concept balancing aspirational interiors with practical usability, creating a cleaner path from inspiration and product discovery to understanding the offer and starting a project.",
    images: [
      {
        src: "/assets/fk-homepage-hero.png",
        alt: "Frugal Kitchens homepage hero screenshot",
      },
      {
        src: "/assets/fk-homepage-mid.png",
        alt: "Frugal Kitchens homepage mid-page screenshot",
      },
      {
        src: "/assets/fk-homepage-footer.png",
        alt: "Frugal Kitchens homepage footer screenshot",
      },
    ],
  },
  {
    title: "95 Green Shark",
    id: "green-shark-title",
    metadata: "WEB DESIGN / CONCEPT STUDY / 2026",
    description:
      "A digital-marketing website concept designed to present strategy, content, SEO, and web expertise through a clearer, more confident experience built around strong hierarchy, focused messaging, and conversion-led structure.",
    images: [
      {
        src: "/assets/95GS-homepage-hero.png",
        alt: "95 Green Shark homepage hero screenshot",
      },
      {
        src: "/assets/95GS-homepage-mid.png",
        alt: "95 Green Shark homepage mid-page screenshot",
      },
      {
        src: "/assets/95GS-homepage-footer.png",
        alt: "95 Green Shark homepage footer screenshot",
      },
    ],
  },
];

const emailProjects = [
  {
    title: "Fenty Beauty",
    id: "fenty-title",
    metadata: "EMAIL DESIGN / CONCEPT STUDY / 2026",
    description:
      "A bold promotional email concept using strong imagery, confident typography, and product-led storytelling to create an energetic experience that feels unmistakably rooted in Fenty's visual world.",
    images: [
      {
        src: "/assets/fenty-hero.png",
        alt: "Fenty Beauty promotional email hero section",
      },
      {
        src: "/assets/fenty-mid.png",
        alt: "Fenty Beauty promotional email mid section",
      },
      {
        src: "/assets/fenty-footer.png",
        alt: "Fenty Beauty promotional email footer section",
      },
    ],
  },
  {
    title: "Nike",
    id: "nike-title",
    metadata: "EMAIL DESIGN / CONCEPT STUDY / 2026",
    description:
      "A high-energy email concept built around movement, bold imagery, and direct messaging, designed to carry Nike's visual confidence into a focused promotional experience for the inbox.",
    images: [
      {
        src: "/assets/nike-email-hero.png",
        alt: "Nike promotional email hero section",
      },
      {
        src: "/assets/nike-email-mid.png",
        alt: "Nike promotional email mid section",
      },
      {
        src: "/assets/nike-email-footer.png",
        alt: "Nike promotional email footer section",
      },
    ],
  },
  {
    title: "MyProtein",
    id: "myprotein-title",
    metadata: "EMAIL DESIGN / CONCEPT STUDY / 2026",
    description:
      "A welcome-email concept designed to introduce the brand quickly, create visual momentum, and guide new subscribers from first impression into products, benefits, and a clear reason to keep exploring.",
    images: [
      {
        src: "/assets/mp-hero.png",
        alt: "MyProtein welcome email hero section",
      },
      {
        src: "/assets/mp-mid.png",
        alt: "MyProtein welcome email mid section",
      },
      {
        src: "/assets/mp-footer.png",
        alt: "MyProtein welcome email footer section",
      },
    ],
  },
  {
    title: "The Ordinary",
    id: "ordinary-title",
    metadata: "EMAIL DESIGN / CONCEPT STUDY / 2026",
    description:
      "A skincare email concept focused on helping subscribers understand their concerns, simplify their routine, and move naturally toward relevant formulations through restrained design and clear visual guidance.",
    images: [
      {
        src: "/assets/to-d2-hero.jpg",
        alt: "The Ordinary Build Your Routine email hero section",
      },
      {
        src: "/assets/to-d2-mid.jpg",
        alt: "The Ordinary Build Your Routine email mid section",
      },
      {
        src: "/assets/to-d2-footer.jpg",
        alt: "The Ordinary Build Your Routine email footer section",
      },
    ],
  },
];

function FeaturedProject({ project, variant = "web" }) {
  const isEmail = variant === "email";

  return (
    <section
      className={`featured-project ${isEmail ? "email-project" : ""}`}
      aria-labelledby={project.id}
    >
      <div className="section-inner featured-project-grid">
        <div className="project-copy">
          <p className="project-meta">{project.metadata}</p>
          <h3 id={project.id}>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <a className="project-cta" href={`#${project.id}`}>VIEW PROJECT ↗</a>
        </div>

        <div className="project-gallery-wrap">
          <div
            className={`project-gallery ${isEmail ? "email-gallery" : ""}`}
            aria-label={`${project.title} ${isEmail ? "email design sections" : "website screenshots"}`}
            tabIndex={0}
          >
            {project.images.map((image, index) => (
              <figure
                className={`gallery-slide ${isEmail ? "email-slide" : ""}`}
                key={image.src}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  unoptimized={image.unoptimized}
                  sizes={isEmail ? "(max-width: 899px) 90vw, 56vw" : "(max-width: 899px) 92vw, 62vw"}
                  priority={index === 0 && project.id === "clearstone-title"}
                />
              </figure>
            ))}
          </div>

          <div className="gallery-progress" aria-hidden="true">
            <span>01 / 03</span>
            <div className="gallery-progress-line">
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SelectedWork() {
  return (
    <>
      <section className="work-intro" id="work" aria-labelledby="selected-work-title">
        <div className="section-inner work-intro-inner">
          <p className="section-label">SELECTED WORK / 01</p>
          <h2 id="selected-work-title">
            A selection of content strategy, web, and email design work.
          </h2>
        </div>
      </section>

      <SeoContentStrategy />

      {webProjects.map((project) => (
        <FeaturedProject project={project} key={project.id} />
      ))}

      <section className="email-showcase" aria-labelledby="email-showcase-title">
        <div className="section-inner email-intro">
          <p className="section-label">EMAIL DESIGN / 02</p>
          <h2 id="email-showcase-title">Designed for the inbox.</h2>
          <p>
            Campaign concepts built around clear hierarchy, strong visual storytelling, and the moment a reader decides whether to keep scrolling or click.
          </p>
        </div>

        {emailProjects.map((project) => (
          <FeaturedProject project={project} variant="email" key={project.id} />
        ))}
      </section>

      <section className="capabilities-section" aria-labelledby="capabilities-title">
        <div className="section-inner capabilities-inner">
          <p className="section-label">CAPABILITIES / 03</p>
          <h2 id="capabilities-title">What I work across.</h2>
          <div className="capability-list" aria-label="Design and content capabilities">
            <span>WEB DESIGN</span>
            <span>EMAIL DESIGN</span>
            <span>UX</span>
            <span>CONTENT</span>
            <span>SEO</span>
            <span>CONVERSION</span>
          </div>
        </div>
      </section>

      <section className="philosophy-section" aria-labelledby="philosophy-title">
        <div className="section-inner philosophy-grid">
          <div className="section-heading-block">
            <p className="section-label">HOW I THINK / 04</p>
            <h2 id="philosophy-title">Good design should make the next step feel obvious.</h2>
          </div>

          <div className="philosophy-copy">
            <p>
              The strongest digital experiences do more than look polished. They create hierarchy, reduce friction, guide attention, and make it easier for people to understand what matters and what to do next.
            </p>

            <div className="principles-list">
              <div>
                <h3>CLARITY</h3>
                <p>Make the important thing easy to find.</p>
              </div>
              <div>
                <h3>INTENT</h3>
                <p>Every visual decision should have a reason.</p>
              </div>
              <div>
                <h3>CONVERSION</h3>
                <p>Design should move people toward action.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="section-inner about-grid">
          <figure className="about-portrait">
            <Image
              src="/assets/portfolio-headshot.jpeg"
              alt="Portrait of Joseph Omosuvie"
              fill
              sizes="(max-width: 899px) 92vw, 44vw"
            />
          </figure>

          <div className="about-copy">
            <p className="section-label">ABOUT / 05</p>
            <h2 id="about-title">I work where design, content, and strategy meet.</h2>
            <p>
              I design digital experiences that combine strong visual direction with clear messaging and practical conversion thinking. My work spans web design, email design, SEO, content, and UX — with a focus on making brands easier to understand, trust, and act on.
            </p>
            <p className="discipline-line">WEB / EMAIL / CONTENT / SEO / UX</p>
            <p className="location-line">BASED IN NIGERIA</p>
          </div>
        </div>
      </section>

      <section className="final-cta-section" id="contact" aria-labelledby="final-cta-title">
        <div className="section-inner final-cta-inner">
          <p className="section-label">LET&apos;S WORK TOGETHER</p>
          <h2 id="final-cta-title">Have something worth building?</h2>
          <p>
            If you have a project that needs clearer thinking, stronger design, or a better digital experience, let&apos;s talk.
          </p>
          <a className="conversation-cta" href="mailto:omosuvieodjuvwu@gmail.com">START A CONVERSATION ↗</a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-inner footer-inner">
          <div className="footer-brand">
            <p>JOSEPH OMOSUVIE</p>
            <span>WEB / EMAIL / CONTENT / UX</span>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#work">WORK</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
          </nav>

          <nav className="footer-social" aria-label="Social links">
            <a href="mailto:omosuvieodjuvwu@gmail.com">omosuvieodjuvwu@gmail.com</a>
            <a
              href="https://www.linkedin.com/in/joseph-copywriter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN
            </a>
            <a
              href="https://x.com/suvie_writes"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </nav>

          <p className="footer-bottom">© 2026 JOSEPH OMOSUVIE</p>
        </div>
      </footer>
    </>
  );
}
