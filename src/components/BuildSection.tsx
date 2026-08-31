const modules = [
  {
    no: "01",
    title: "De Plannersbrug",
    body: "Eén scherm voor alle monteurs, alle opdrachten en alle statusupdates. Je planner werkt van 07:00 tot 17:00 vanuit één overzicht — geen WhatsApp naast een Excel naast een telefoon. Dubbele inzet in hetzelfde postcodegebied wordt gesignaleerd vóórdat de bus rijdt.",
    tags: ["Dagplanning", "Capaciteit", "Conflictsignalering", "Onderaannemers"],
  },
  {
    no: "02",
    title: "DispatchDirect",
    body: "De monteurs-app is gebouwd voor één gebruiker: een monteur met handschoenen aan, op een dak of in een kruipruimte. Drie functies, niets meer. Dagoverzicht zien, status doorgeven, werkbon invullen bij afronding.",
    tags: ["Dagoverzicht", "Status op locatie", "Werkbon", "Foto's"],
  },
  {
    no: "03",
    title: "Het Directeurscockpit",
    body: "In 30 seconden zie je of de operatie van vandaag op schema ligt: afgeronde opdrachten, openstaande punten, capaciteit voor morgen. Geen telefoontjes, geen rapport laten maken, geen Excel op zondagavond.",
    tags: ["KPI's", "Capaciteit", "Signaleringen"],
  },
  {
    no: "04",
    title: "Werkbon & opdrachtgeverrapportage",
    body: "Werkbonnen worden op locatie ingevuld en afgesloten in plaats van dagen later. Richting je opdrachtgevers staat de maandrapportage in twee klikken klaar — professioneel, zonder dat iemand het handmatig samenstelt.",
    tags: ["Digitale werkbon", "Maandrapport", "Archief"],
  },
];

export default function BuildSection() {
  return (
    <section id="bouw" className="py-[88px] border-t border-hairline-light">
      <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-accent mb-[22px]">
        02 · Wat we bouwen
      </div>
      <h2 className="text-[32px] sm:text-[46px] leading-[1.06] tracking-[-0.03em] font-[800] mb-[18px] max-w-[24ch]">
        Drie systemen die samenwerken. Op jouw werkwijze gebouwd.
      </h2>
      <p className="text-[18px] leading-[1.55] text-text-muted max-w-[62ch] mb-[52px]">
        Geen pakket dat je zelf moet configureren. Elke module, elke flow en elk formulier komt uit wat jij ons vertelt
        in de Blauwdrukkensessie.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline border border-hairline">
        {modules.map((m) => (
          <div
            key={m.no}
            className="bg-panel p-[30px] sm:p-[36px_34px_40px] hover:bg-panel-hover transition-colors"
          >
            <div className="font-mono text-[12px] text-accent mb-[22px]">{m.no}</div>
            <h3 className="text-[22px] sm:text-[24px] font-semibold tracking-[-0.02em] mb-3">{m.title}</h3>
            <p className="text-[15.5px] leading-[1.6] text-text-dim mb-[22px]">{m.body}</p>
            <div className="flex flex-wrap gap-2">
              {m.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] text-text-body border border-hairline-input px-[9px] py-[5px] rounded-[2px]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
