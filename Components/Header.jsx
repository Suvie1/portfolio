const navItems = [
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "Services", href: "#capabilities-title" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="/" aria-label="Joseph Omosuvie home">
          Joseph Omosuvie
        </a>

        <div className="nav-links">
          {navItems.map(({ label, href }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
