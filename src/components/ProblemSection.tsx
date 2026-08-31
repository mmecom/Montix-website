const pains = [
  {
    no: "01",
    title: "Dubbele ritten",
    body: "Twee monteurs rijden naar hetzelfde adres. Eén belt terug, jij belt de planner, de planner belt de monteur. Twee uur weg, twee mensen betaald voor niets. Twee, drie keer per week.",
    cost: "≈ €3.200 per maand bij 20 monteurs",
  },
  {
    no: "02",
    title: "Opdrachten die verdwijnen",
    body: "Een opdracht gaat de WhatsApp-groep in en is tien berichten later begraven. Niemand plant hem in. De opdrachtgever belt een week later boos — dan hoor je het voor het eerst.",
    cost: "≈ €1.500 omzet per gemiste opdracht",
  },
  {
    no: "03",
    title: "De planner als bottleneck",
    body: "Eén persoon weet wie waar zit en wat er moet gebeuren. Is hij ziek, weet niemand het. Gaat hij op vakantie, rinkelt zijn telefoon toch. Vertrekt hij, dan neemt hij het overzicht mee.",
    cost: "Het hele overzicht in één hoofd",
  },
];

const losses = [
  { label: "Dubbele ritten (2–3 per week)", amount: "€3.200" },
  { label: "Verspilde planneruren (4 uur/dag)", amount: "€3.200" },
  { label: "Gemiste opdrachten (1–2 per maand)", amount: "€2.250" },
  { label: "Totaal aantoonbaar verlies", amount: "€8.650+" },
];

export default function ProblemSection() {
  return (
    <section id="probleem" className="py-[88px] pt-24">
      <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-accent mb-[22px]">
        01 · Waar het vastloopt
      </div>
      <h2 className="text-[32px] sm:text-[46px] leading-[1.06] tracking-[-0.03em] font-[800] mb-[18px] max-w-[26ch]">
        Je dag is al begonnen zonder je planner.
      </h2>
      <p className="text-[18px] leading-[1.55] text-text-muted max-w-[64ch] mb-[52px]">
        07:15. Hij opent WhatsApp: tien berichten van gisteren die niemand heeft gezien, drie vragen van monteurs over
        vandaag, en een opdrachtgever die vraagt waarom die opdracht van vorige week nog openstaat.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline mb-11">
        {pains.map((p) => (
          <div key={p.no} className="bg-panel p-[30px] sm:p-[34px_30px_36px]">
            <div className="font-mono text-[12px] text-accent mb-5">{p.no}</div>
            <h3 className="text-[22px] font-semibold tracking-[-0.02em] mb-3">{p.title}</h3>
            <p className="text-[15.5px] leading-[1.6] text-text-dim mb-[18px]">{p.body}</p>
            <div className="font-mono text-[12.5px] text-accent-tint">{p.cost}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div>
          <h3 className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] mb-3.5">
            Je hebt niet de verkeerde mensen. Je hebt het verkeerde systeem gehad.
          </h3>
          <p className="text-[17px] leading-[1.6] text-text-muted mb-3.5">
            Planday, Monday.com, Fieldwire — je hebt de demo gezien, de tool aangeschaft, je monteurs gevraagd het te
            gebruiken. Na twee weken was het terug naar WhatsApp.
          </p>
          <p className="text-[17px] leading-[1.6] text-text-muted">
            Generieke planningssoftware is gebouwd voor iedereen — en werkt daardoor voor niemand specifiek. Niet voor
            een glasvezelbedrijf dat ad-hoc plant, met monteurs in het veld en onderaannemers ertussen.
          </p>
        </div>

        <div className="border border-hairline">
          <div className="px-6 py-[18px] border-b border-hairline font-mono text-[11px] tracking-[0.14em] uppercase text-text-dimmer flex justify-between gap-4">
            <span>Verliespost</span>
            <span>Per maand</span>
          </div>
          {losses.map((l, i) => (
            <div
              key={i}
              className="flex items-baseline justify-between gap-5 px-6 py-[18px] border-b border-hairline-faint"
            >
              <span className="text-[15.5px] text-text-secondary">{l.label}</span>
              <span className="font-mono text-[14px] text-accent">{l.amount}</span>
            </div>
          ))}
          <div className="px-6 py-5 text-[14.5px] leading-[1.55] text-text-dimmer">
            Je betaalt al voor een systeem. Het heet WhatsApp en Excel, en het kost je meer dan een ton per jaar.
          </div>
        </div>
      </div>
    </section>
  );
}
