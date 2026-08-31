const dispatch = [
  { time: "07:00", job: "Aansluiting FttH — Kerkweg 14", who: "Ruben · bus 2", state: "bevestigd" },
  { time: "08:30", job: "Storing signaalverlies", who: "Ilse · bus 4", state: "onderweg" },
  { time: "10:15", job: "3 aansluitingen postcode 7412", who: "Onderaannemer Van Dijk", state: "toegewezen" },
  { time: "13:00", job: "Dubbele inzet gesignaleerd", who: "Ruben + Sami · zelfde gebied", state: "conflict" },
  { time: "16:45", job: "12 werkbonnen afgerond", who: "Automatisch gearchiveerd", state: "klaar" },
];

export default function Hero() {
  return (
    <section className="py-20 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-[72px] items-center">
      <div>
        <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-accent mb-[26px]">
          Montix · voor glasvezel installatiebedrijven met 10–50 monteurs
        </div>
        <h1 className="text-[40px] sm:text-[52px] lg:text-[68px] leading-[1.0] tracking-[-0.035em] font-[800] mb-[26px] [text-wrap:balance]">
          Van WhatsApp-planning naar een voorspelbare operatie.
        </h1>
        <p className="text-[18px] sm:text-[20px] leading-[1.5] text-text-body max-w-[50ch] mb-9">
          Geen standaardsoftware die je monteurs na twee weken laten liggen. Wij brengen jouw werkwijze in kaart en
          bouwen daar het systeem om heen: plannersdashboard, monteurs-app, directeurscockpit. Volledig voor jou
          gebouwd.
        </p>
        <div className="flex gap-3.5 flex-wrap">
          <a
            href="#contact"
            className="bg-accent text-bg font-semibold text-[16px] px-[30px] py-[17px] rounded-[2px] hover:bg-accent-hover transition-colors"
          >
            Plan de gratis kosten-audit
          </a>
          <a
            href="#werk"
            className="border border-hairline-outline text-text-primary font-medium text-[16px] px-[30px] py-[17px] rounded-[2px] hover:border-accent transition-colors"
          >
            Zo werkt het
          </a>
        </div>
      </div>

      <div className="bg-dashboard border border-hairline rounded-[3px] overflow-hidden">
        <div className="flex items-center justify-between px-[18px] py-3.5 border-b border-hairline-light">
          <span className="font-mono text-[11px] tracking-[0.1em] text-text-dimmer uppercase">
            Plannersdashboard · vandaag
          </span>
          <span className="flex items-center gap-[7px] font-mono text-[11px] text-green">
            <span className="w-1.5 h-1.5 bg-green rounded-full animate-[mx-pulse_2s_ease-in-out_infinite]" />
            live
          </span>
        </div>
        <div className="flex flex-col">
          {dispatch.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[58px_1fr_auto] gap-3.5 items-center px-[18px] py-[15px] border-b border-hairline-faint"
            >
              <span className="font-mono text-[12px] text-text-faint">{row.time}</span>
              <span>
                <span className="block text-[14.5px] font-medium">{row.job}</span>
                <span className="block text-[12.5px] text-text-dimmest mt-[3px]">{row.who}</span>
              </span>
              <span className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-bg bg-accent px-2 py-1 rounded-[2px]">
                {row.state}
              </span>
            </div>
          ))}
        </div>
        <div className="px-[18px] py-4 font-mono text-[11.5px] text-text-faint">
          Voorbeeldweergave — jouw dashboard wordt gevuld met jouw monteurs en opdrachttypen.
        </div>
      </div>
    </section>
  );
}
