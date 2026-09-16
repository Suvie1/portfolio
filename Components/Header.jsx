"use client";

import { useEffect, useState } from "react";

const navItems = ["WORK", "ABOUT", "CONTACT"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    const scrollPoll = window.setInterval(onScroll, 160);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
      window.clearInterval(scrollPoll);
    };
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="/" aria-label="Joseph Omosuvie home">
          JOSEPH OMOSUVIE
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
          <a className="talk-link" href="mailto:omosuvieodjuvwu@gmail.com">
            LET&apos;S TALK <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
