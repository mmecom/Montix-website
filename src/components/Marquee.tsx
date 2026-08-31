const terms = [
  "Glasvezel & FttH",
  "Aansluitingen",
  "Storingsdienst",
  "Onderaannemers",
  "Buitendienst 10–50 monteurs",
  "Werkbonnen",
];

function MarqueeContent() {
  return (
    <>
      {terms.map((term, i) => (
        <span key={i} className="flex items-center gap-12">
          <span>{term}</span>
          <span className="text-accent">/</span>
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <div
      className="overflow-hidden border-t border-b border-hairline-light py-[18px]"
      aria-hidden="true"
    >
      <div className="flex gap-12 w-max animate-[mx-marq_34s_linear_infinite] font-mono text-[11.5px] tracking-[0.14em] uppercase text-text-faint">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}
