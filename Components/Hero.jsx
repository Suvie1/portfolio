import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-label">
            CONTENT WRITER / SEO STRATEGIST / DIGITAL CREATIVE
          </p>
          <h1 id="hero-title" className="hero-title">
            Content, strategy, and digital work that move businesses forward.
          </h1>
          <p className="hero-description">
            I help brands grow and communicate clearly through strategic content
            writing, SEO, web design, and email design that attract, engage, and
            convert the right audience.
          </p>
          <div className="hero-actions">
            <a className="hero-action hero-action-primary" href="#work">
              View My Work
            </a>
            <a className="hero-action hero-action-secondary" href="mailto:omosuvieodjuvwu@gmail.com">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-image-column">
          <figure className="hero-portrait">
            <Image
              src="/assets/portfolio-headshot.jpeg"
              alt="Portrait of Joseph Omosuvie"
              fill
              priority
              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1100px) 38vw, 32vw"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
