"use client";

import { useState, type FormEvent } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/xzebdlbr", {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (res.ok) setSent(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-[88px] pb-24 border-t border-hairline-light">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-accent mb-[22px]">
            09 · Eerste stap
          </div>
          <h2 className="text-[36px] sm:text-[52px] leading-[1.03] tracking-[-0.035em] font-[800] mb-5">
            Plan de gratis Operationele Kosten-Audit.
          </h2>
          <p className="text-[18px] leading-[1.6] text-text-muted mb-[26px] max-w-[48ch]">
            60 minuten, live. Jij vertelt hoe je planning nu werkt. Ik reken uit wat dubbele ritten, verloren
            planneruren en gemiste opdrachten je kosten. Je krijgt het schriftelijk terug — of je daarna verder gaat of
            niet.
          </p>
          <p className="text-[18px] leading-[1.6] text-text-muted mb-8 max-w-[48ch]">
            Geen pitch. Geen druk. Klopt het niet, dan zeg ik dat.
          </p>
          <div className="flex flex-col gap-3.5 text-[16px] text-text-secondary">
            <div>
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-text-faint block mb-[5px]">
                E-mail
              </span>
              info@montix.com
            </div>
            <div>
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-text-faint block mb-[5px]">
                Reactietijd
              </span>
              Binnen 24 uur, werkdagen
            </div>
          </div>
        </div>

        <div className="border border-hairline bg-panel p-[28px] sm:p-[34px_32px]">
          {sent ? (
            <div className="py-10">
              <div className="text-[24px] font-semibold mb-3">Aanvraag staat klaar.</div>
              <p className="text-[16px] leading-[1.6] text-text-dim">
                Je krijgt binnen 24 uur een voorstel voor een moment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-text-dimmer">Naam</span>
                <input
                  type="text"
                  name="naam"
                  required
                  placeholder="Jouw naam"
                  className="bg-bg border border-hairline-input text-text-primary text-[15.5px] px-3.5 py-[13px] rounded-[2px] outline-none focus:border-accent transition-colors"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-text-dimmer">Bedrijf</span>
                <input
                  type="text"
                  name="bedrijf"
                  required
                  placeholder="Bedrijfsnaam"
                  className="bg-bg border border-hairline-input text-text-primary text-[15.5px] px-3.5 py-[13px] rounded-[2px] outline-none focus:border-accent transition-colors"
                />
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-text-dimmer">E-mail</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="naam@bedrijf.nl"
                    className="bg-bg border border-hairline-input text-text-primary text-[15.5px] px-3.5 py-[13px] rounded-[2px] outline-none focus:border-accent transition-colors"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-text-dimmer">
                    Aantal monteurs
                  </span>
                  <input
                    type="text"
                    name="aantalMonteurs"
                    placeholder="bijv. 24"
                    className="bg-bg border border-hairline-input text-text-primary text-[15.5px] px-3.5 py-[13px] rounded-[2px] outline-none focus:border-accent transition-colors"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-text-dimmer">
                  Hoe loopt je planning nu?
                </span>
                <textarea
                  name="bericht"
                  rows={4}
                  placeholder="Bijv. planning in Excel, monteurs via WhatsApp-groep, werkbonnen komen dagen later binnen."
                  className="bg-bg border border-hairline-input text-text-primary text-[15.5px] px-3.5 py-[13px] rounded-[2px] outline-none resize-y focus:border-accent transition-colors"
                />
              </label>
              <button
                type="submit"
                className="bg-accent text-bg border-0 text-[16px] font-semibold py-4 rounded-[2px] cursor-pointer hover:bg-accent-hover transition-colors"
              >
                {submitting ? "Verzenden..." : "Vraag de gratis kosten-audit aan"}
              </button>
              <span className="text-[13px] text-text-faint leading-[1.5]">
                Vrijblijvend. Je gegevens gebruik ik alleen om contact op te nemen over je aanvraag.
              </span>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
