import Image from "next/image";
import SeoContentStrategy from "./SeoContentStrategy";
import EmailDesignShowcase from "./EmailDesignShowcase";
import WebDesignShowcase from "./WebDesignShowcase";

export default function SelectedWork() {
  return (
    <>
      <SeoContentStrategy />

      <EmailDesignShowcase />

      <WebDesignShowcase />

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
