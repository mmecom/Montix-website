const compare = [
  { what: "Ochtendstart", now: "Planner opent WhatsApp met tien onbekeken berichten", next: "Elke monteur heeft zijn dagoverzicht al op zijn telefoon" },
  { what: "Werk uitgeven", now: "Berichten die verdwijnen in de groep, ochtendtelefoon", next: "Opdracht toegewezen, bevestigd en zichtbaar in één scherm" },
  { what: "Dubbele inzet", now: "Je merkt het als de monteur ter plekke staat", next: "Gesignaleerd vóór de rit, gecorrigeerd in 30 seconden" },
  { what: "Werkbonnen", now: "Papier of losse app, komt dagen later binnen", next: "Ingevuld en afgesloten op locatie" },
  { what: "Overzicht directeur", now: "Bellen, Excel en gevoel", next: "Cockpit: stand van vandaag in 30 seconden" },
  { what: "Opdrachtgevers", now: "Klachten over communicatie en doorlooptijd", next: "Maandrapportage in hun inbox, in twee klikken" },
  { what: "Planner op vakantie", now: "Zijn telefoon rinkelt alsnog", next: "Het overzicht zit in het systeem, niet in zijn hoofd" },
];

export default function CompareSection() {
  return (
    <section className="py-[88px] border-t border-hairline-light">
      <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-accent mb-[22px]">
        04 · Nu vs. straks
      </div>
      <h2 className="text-[32px] sm:text-[46px] leading-[1.06] tracking-[-0.03em] font-[800] mb-12 max-w-[26ch]">
        Zo ziet maandagochtend eruit als de operatie voorspelbaar draait.
      </h2>

      {/* Desktop table */}
      <div className="hidden md:block border border-hairline">
        <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-panel border-b border-hairline">
          <div className="px-6 py-4 font-mono text-[11px] tracking-[0.14em] uppercase text-text-dimmer">Onderdeel</div>
          <div className="px-6 py-4 font-mono text-[11px] tracking-[0.14em] uppercase text-text-dimmer border-l border-hairline">WhatsApp + Excel</div>
          <div className="px-6 py-4 font-mono text-[11px] tracking-[0.14em] uppercase text-accent border-l border-hairline">Met Montix</div>
        </div>
        {compare.map((c, i) => (
          <div key={i} className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-hairline-faint">
            <div className="px-6 py-[22px] text-[16px] font-medium">{c.what}</div>
            <div className="px-6 py-[22px] text-[15.5px] text-text-dimmer border-l border-hairline-faint">{c.now}</div>
            <div className="px-6 py-[22px] text-[15.5px] text-text-alt border-l border-hairline-faint">{c.next}</div>
          </div>
        ))}
      </div>

      {/* Mobile stacked cards */}
      <div className="md:hidden flex flex-col gap-4">
        {compare.map((c, i) => (
          <div key={i} className="border border-hairline p-5">
            <div className="text-[16px] font-medium mb-3">{c.what}</div>
            <div className="text-[14px] text-text-dimmer mb-2">
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-text-dimmer block mb-1">WhatsApp + Excel</span>
              {c.now}
            </div>
            <div className="text-[14px] text-text-alt">
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent block mb-1">Met Montix</span>
              {c.next}
            </div>
          </div>
        ))}
      </div>

      <p className="text-[17px] text-text-muted mt-7 max-w-[76ch]">
        Een extra planner aannemen kost{" "}
        <strong className="text-text-primary font-semibold">€33.600–€42.000 per jaar</strong>, elk jaar — en lost het
        onderliggende probleem niet op. Het overzicht blijft in één hoofd zitten.
      </p>
    </section>
  );
}
