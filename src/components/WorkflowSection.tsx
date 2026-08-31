const steps = [
  {
    title: "De Blauwdrukkensessie",
    body: "We brengen je operatie van voor naar achter in kaart: hoe komen opdrachten binnen, hoe stuur je monteurs aan, wat gaat er elke week mis. Je krijgt een scopedocument plus een ROI-berekening op jouw cijfers.",
  },
  {
    title: "De bouw",
    body: "Wij bouwen, jij werkt gewoon door. Je wordt twee of drie keer gevraagd voor een feedbackmoment van 30 minuten. Al vroeg in het traject krijg je een link naar je eigen dashboard, gevuld met jouw monteurs en opdrachttypen.",
  },
  {
    title: "De Stille Overstap",
    body: "Het nieuwe systeem draait naast het oude. Monteurs gaan gefaseerd over, niemand schakelt ineens om. Pas als alles werkt en het team erop vertrouwt, gaan we live. Nul dagen stilstand.",
  },
  {
    title: "De garantieperiode",
    body: "90 dagen intensieve beschikbaarheid na go-live: bugs opgelost binnen één werkdag, aanpassingen verwerkt, check-in per kwartaal. Jij draait, wij staan erachter.",
  },
];

export default function WorkflowSection() {
  return (
    <section id="werk" className="py-[88px] border-t border-hairline-light">
      <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-accent mb-[22px]">
        03 · Werkwijze
      </div>
      <h2 className="text-[32px] sm:text-[46px] leading-[1.06] tracking-[-0.03em] font-[800] mb-[18px] max-w-[22ch]">
        Vier stappen. Jij werkt gewoon door.
      </h2>
      <p className="text-[18px] leading-[1.55] text-text-muted max-w-[60ch] mb-[52px]">
        Jouw hele tijdsinvestering: de blauwdruksessie, drie korte feedbackmomenten en de training. Bij elkaar minder
        dan één werkdag. De rest is voor onze rekening.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {steps.map((s, i) => (
          <div key={i} className="border-t-2 border-accent pt-[22px]">
            <h3 className="text-[21px] font-semibold tracking-[-0.02em] mb-2.5">{s.title}</h3>
            <p className="text-[15px] leading-[1.6] text-text-dim">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
