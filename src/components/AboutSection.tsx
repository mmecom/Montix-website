export default function AboutSection() {
  return (
    <section id="over" className="py-[88px] border-t border-hairline-light">
      <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-accent mb-[22px]">
        07 · Over Montix
      </div>
      <div className="max-w-[68ch]">
        <h2 className="text-[32px] sm:text-[42px] leading-[1.08] tracking-[-0.03em] font-[800] mb-5">
          Eén bouwer. Geen bureau, geen accountmanager.
        </h2>
        <p className="text-[18px] leading-[1.6] text-text-muted mb-4">
          Je praat met de persoon die het systeem maakt. Dat betekent korte lijnen, snelle beslissingen en geen briefing
          die onderweg verwatert tussen sales, projectleider en ontwikkelaar.
        </p>
        <p className="text-[18px] leading-[1.6] text-text-muted mb-8">
          Het betekent ook dat ik niet tien opdrachten naast elkaar aanneem. Ik bouw aan één operatie tegelijk — daarom
          is er per keer een beperkt aantal plekken.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-hairline-light pt-[26px]">
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-text-faint mb-2">Specialisme</div>
            <div className="text-[16px]">Glasvezel &amp; buitendienst</div>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-text-faint mb-2">Capaciteit</div>
            <div className="text-[16px]">Eén bouw tegelijk</div>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-text-faint mb-2">Reactietijd</div>
            <div className="text-[16px]">Binnen 24 uur</div>
          </div>
        </div>
      </div>
    </section>
  );
}
