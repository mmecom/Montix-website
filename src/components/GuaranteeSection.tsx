const security = [
  { title: "Gratis eerste stap", body: "De kosten-audit kost je niets en verplicht je tot niets." },
  { title: "Pas tekenen bij akkoord", body: "Je gaat door nadat de scope staat en jij hem goedkeurt." },
  { title: "In twee termijnen", body: "Tweede deel pas nadat het systeem live staat en werkt." },
  { title: "Nul dagen stilstand", body: "Parallel draaien, met terugvaloptie op papier." },
  { title: "Rollen & rechten", body: "Monteur ziet zijn werk, kantoor ziet de hele operatie." },
  { title: "Jouw data, EU", body: "Klant- en opdrachtgegevens blijven binnen de EU." },
];

export default function GuaranteeSection() {
  return (
    <section
      id="veilig"
      className="py-[88px] border-t border-hairline-light grid grid-cols-1 lg:grid-cols-2 gap-16"
    >
      <div>
        <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-accent mb-[22px]">
          06 · Garantie &amp; risico
        </div>
        <h2 className="text-[32px] sm:text-[44px] leading-[1.06] tracking-[-0.03em] font-[800] mb-5">
          Wint je planner geen 2 uur per dag terug? Dan werken we gratis door.
        </h2>
        <p className="text-[18px] leading-[1.6] text-text-muted mb-[18px]">
          Binnen 60 dagen na go-live minimaal 2 uur per dag minder aan planningsbeheer. Haal je dat niet, dan stoppen
          wij niet. Geen kleine lettertjes, geen uitzondering omdat het systeem &ldquo;technisch werkt&rdquo;.
        </p>
        <p className="text-[18px] leading-[1.6] text-text-muted">
          De eerste stap kost je niets: de Operationele Kosten-Audit is gratis en vrijblijvend. Je tekent pas als de
          scope staat en jij akkoord bent.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-px bg-hairline border border-hairline self-start">
        {security.map((s, i) => (
          <div key={i} className="bg-panel p-[22px] sm:p-[24px_22px]">
            <div className="text-[16px] font-semibold mb-[7px]">{s.title}</div>
            <div className="text-[13.5px] leading-[1.5] text-text-dimmer">{s.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
