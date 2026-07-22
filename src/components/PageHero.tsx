export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-[color:var(--color-paper-dim)] border-b border-[color:var(--color-line)] py-24">
      <div className="container-page">
        <p className="uppercase tracking-[0.28em] text-[color:var(--color-brick)] text-xs font-medium mb-4">
          {eyebrow}
        </p>
        <h1
          className="text-4xl md:text-5xl font-medium text-[color:var(--color-ink)] mb-5 max-w-3xl"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {title}
        </h1>
        <p className="text-[color:var(--color-ink-soft)] max-w-2xl leading-relaxed">{description}</p>
      </div>
    </section>
  );
}
