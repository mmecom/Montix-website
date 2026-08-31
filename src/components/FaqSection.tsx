"use client";

import { useState } from "react";

const faqSrc: [string, string][] = [
  ["Werkt Montix ook als we maar 12 monteurs hebben?", "Ja — de drempel ligt rond 10 monteurs. Daaronder is de pijn meestal nog beheersbaar zonder eigen systeem. Vanaf 10 monteurs wordt WhatsApp-planning een reëel risico voor je operatie en je omzet. De blauwdruksessie bepaalt of het een goede match is."],
  ["We hebben al software geprobeerd — dat werkt bij ons niet.", "Dat klopt, en het is precies de reden dat we anders beginnen. Planday, Monday.com en Fieldwire zijn voor iedereen gebouwd, dus voor niemand specifiek. Wij starten met jouw werkwijze in kaart brengen en bouwen daarna. Niet een systeem dat jij moet aanpassen — een systeem dat al op jou is aangepast."],
  ["Mijn monteurs gaan toch niets nieuws gebruiken.", "De meest gehoorde zorg, en de best op te lossen. De monteurs-app doet drie dingen: dagoverzicht zien, status doorgeven, werkbon invullen. Niet ingewikkelder dan WhatsApp. Training is 30 minuten per monteur, en de adoptiekit zit erbij: introductieplan, FAQ-kaart, video en checklist voor week 1."],
  ["We kunnen de operatie niet stilleggen voor een implementatie.", "Dat hoeft niet. Het nieuwe systeem draait naast het oude tot alles werkt en het team erop vertrouwt. Monteurs gaan gefaseerd over, niemand schakelt ineens om. Er is geen dag zonder systeem, en er is een terugvaloptie beschreven."],
  ["We werken ook met onderaannemers. Past dat in het systeem?", "Ja. De blauwdruksessie legt jouw exacte werkwijze vast — inclusief hoe je externe monteurs en onderaannemers inzet. We bouwen op die realiteit, niet op een standaardscenario."],
  ["Ik heb geen tijd om dit op te zetten.", "Daarom is het Done For You. Jouw inzet: de blauwdruksessie, drie korte feedbackmomenten en de training. Bij elkaar minder dan één werkdag. De bouw, de configuratie, de overstap, de training van je team en de go-live begeleiding zijn voor onze rekening."],
  ["Hoe weet ik dat jullie dit kunnen? Ik zie geen portfolio.", "Eerlijke vraag. Begin met de gratis kosten-audit: 60 minuten, geen verplichtingen. Daarna weet je hoe ik naar jouw operatie kijk en heb je een rapport met je eigen cijfers in handen. Kort na de blauwdruksessie zie je bovendien je eigen plannersdashboard werkend — gevuld met jouw monteursnamen en opdrachttypen. Geen mockup."],
  ["Kan het koppelen met onze boekhouding of GPS?", "De kernbuild richt zich op planning, dispatch en werkbonbeheer. Koppelingen met boekhouding en GPS-tracking zijn uitbreidingsmodules; de eerste klanten krijgen daar als eerste toegang toe."],
  ["Wat als onze werkwijze verandert na oplevering?", "Kleine aanpassingen vallen binnen de garantieperiode van 90 dagen na go-live. Grotere uitbreidingen — nieuwe modules, koppelingen, extra functies — pakken we als losse opdracht op, in korte rondes."],
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-[88px] border-t border-hairline-light">
      <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-accent mb-[22px]">
        08 · Vragen
      </div>
      <h2 className="text-[32px] sm:text-[46px] leading-[1.06] tracking-[-0.03em] font-[800] mb-11 max-w-[20ch]">
        Wat directeuren als eerste vragen.
      </h2>

      <div className="border-t border-hairline">
        {faqSrc.map(([q, a], i) => (
          <div key={i} className="border-b border-hairline">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full bg-transparent border-0 py-[26px] flex items-center justify-between gap-6 text-left text-text-primary cursor-pointer hover:text-accent transition-colors"
              aria-expanded={open === i}
            >
              <span className="text-[17px] sm:text-[19px] font-medium tracking-[-0.01em]">{q}</span>
              <span className="font-mono text-[18px] text-accent shrink-0">{open === i ? "–" : "+"}</span>
            </button>
            {open === i && (
              <p className="text-[16.5px] leading-[1.65] text-text-muted mb-7 max-w-[78ch]">{a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
