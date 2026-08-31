"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between gap-6 h-[84px] border-b border-hairline-light">
      <div className="flex items-baseline gap-2.5">
        <span className="text-[21px] font-[800] tracking-[-0.02em]">Montix</span>
        <span className="hidden sm:inline font-mono text-[10px] tracking-[0.18em] text-text-dimmest uppercase">
          de voorspelbare operatie
        </span>
      </div>

      <nav className="hidden lg:flex gap-7 text-[14px] text-text-muted">
        <a href="#bouw" className="hover:text-text-primary transition-colors">Wat we bouwen</a>
        <a href="#werk" className="hover:text-text-primary transition-colors">Werkwijze</a>
        <a href="#krijg" className="hover:text-text-primary transition-colors">Wat je krijgt</a>
        <a href="#veilig" className="hover:text-text-primary transition-colors">Garantie</a>
        <a href="#faq" className="hover:text-text-primary transition-colors">FAQ</a>
      </nav>

      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className="hidden sm:inline-block bg-accent text-bg font-semibold text-[14px] px-5 py-3 rounded-[2px] hover:bg-accent-hover transition-colors"
        >
          Plan de gratis kosten-audit
        </a>

        <button
          className="lg:hidden text-text-primary p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-[84px] left-0 right-0 bg-bg border-b border-hairline-light z-50 p-7 flex flex-col gap-5 lg:hidden">
          <a href="#bouw" className="text-[16px] text-text-muted hover:text-text-primary" onClick={() => setMenuOpen(false)}>Wat we bouwen</a>
          <a href="#werk" className="text-[16px] text-text-muted hover:text-text-primary" onClick={() => setMenuOpen(false)}>Werkwijze</a>
          <a href="#krijg" className="text-[16px] text-text-muted hover:text-text-primary" onClick={() => setMenuOpen(false)}>Wat je krijgt</a>
          <a href="#veilig" className="text-[16px] text-text-muted hover:text-text-primary" onClick={() => setMenuOpen(false)}>Garantie</a>
          <a href="#faq" className="text-[16px] text-text-muted hover:text-text-primary" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a
            href="#contact"
            className="sm:hidden bg-accent text-bg font-semibold text-[14px] px-5 py-3 rounded-[2px] text-center hover:bg-accent-hover transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Plan de gratis kosten-audit
          </a>
        </div>
      )}
    </header>
  );
}
