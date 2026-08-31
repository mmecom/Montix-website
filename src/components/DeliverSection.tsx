const tiers = [
  {
    no: "Onderdeel 01",
    badge: "",
    name: "De bouw",
    tag: "Done For You",
    body: "Het complete operationele systeem, gebouwd op de blauwdruk van jouw werkwijze.",
    items: [
      "Plannersdashboard",
      "Monteurs-app",
      "Directeurscockpit",
      "Digitale werkbon & rapportage",
      "Werkend dashboard vroeg in het traject",
    ],
  },
  {
    no: "Onderdeel 02",
    badge: "Waar het meestal misgaat",
    name: "De overstap",
    tag: "Adoptie, niet oplevering",
    body: "Een systeem dat niemand gebruikt is geen systeem. Daarom zit de invoering er standaard bij.",
    items: [
      "Stille Overstap: parallel draaien",
      "Rolspecifieke training per gebruiker",
      "Adoptiekit voor je monteurs",
      "Intensieve begeleiding op dag 1",
      "Jouw werkwijze op papier vastgelegd",
    ],
  },
  {
    no: "Onderdeel 03",
    badge: "",
    name: "De garantie",
    tag: "90 dagen na go-live",
    body: "Nazorg met een harde belofte eronder in plaats van een supportadres.",
    items: [
      "Bugs opgelost binnen één werkdag",
      "Aanpassingen verwerkt",
      "Check-in per kwartaal",
      "2 uur per dag terug of we werken door",
      "Eerste recht op nieuwe modules",
    ],
  },
];

export default function DeliverSection() {
  return (
    <section id="krijg" className="py-[88px] border-t border-hairline-light">
      <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-accent mb-[22px]">
        05 · Wat je krijgt
      </div>
      <h2 className="text-[32px] sm:text-[46px] leading-[1.06] tracking-[-0.03em] font-[800] mb-[18px] max-w-[24ch]">
        Done For You — van blauwdruk tot go-live en daarna.
      </h2>
      <p className="text-[18px] leading-[1.55] text-text-muted max-w-[60ch] mb-12">
        De scope wordt bepaald in de blauwdruksessie, want geen twee operaties zijn hetzelfde. Dit is wat er standaard
        in zit.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {tiers.map((t) => (
          <div
            key={t.no}
            className="border border-hairline bg-panel p-[30px] sm:p-[34px_30px_30px] flex flex-col"
          >
            <div className="flex items-center justify-between mb-[26px]">
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-text-dimmer">{t.no}</span>
              {t.badge && (
                <span className="font-mono text-[10px] tracking-[0.1em] uppercase bg-accent text-bg px-2 py-1 rounded-[2px]">
                  {t.badge}
                </span>
              )}
            </div>
            <h3 className="text-[23px] sm:text-[25px] font-semibold tracking-[-0.02em] mb-2.5">{t.name}</h3>
            <div className="font-mono text-[13.5px] text-accent mb-5">{t.tag}</div>
            <p className="text-[15.5px] leading-[1.6] text-text-dim mb-6">{t.body}</p>
            <div className="flex flex-col gap-[11px] mb-[30px]">
              {t.items.map((item) => (
                <div key={item} className="flex gap-[11px] text-[14.5px] text-text-secondary leading-[1.45]">
                  <span className="text-accent font-mono">—</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-auto text-center border border-hairline-outline text-text-primary text-[14.5px] font-medium py-3.5 rounded-[2px] hover:border-accent hover:text-accent transition-colors"
            >
              Bespreek jouw scope
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
