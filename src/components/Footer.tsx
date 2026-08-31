export default function Footer() {
  return (
    <footer className="border-t border-hairline-light py-10 pb-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 flex-wrap">
      <div className="flex items-baseline gap-3">
        <span className="text-[17px] font-[800] tracking-[-0.02em]">Montix</span>
        <span className="font-mono text-[11px] text-text-faint">
          Operationele systemen voor glasvezel installatiebedrijven
        </span>
      </div>
      <div className="flex flex-wrap gap-x-[22px] gap-y-2 text-[13.5px] text-text-faint">
        <a href="#bouw" className="hover:text-text-primary transition-colors">Wat we bouwen</a>
        <a href="#krijg" className="hover:text-text-primary transition-colors">Wat je krijgt</a>
        <a href="#contact" className="hover:text-text-primary transition-colors">Kosten-audit</a>
        <span>&copy; 2026 Montix</span>
      </div>
    </footer>
  );
}
