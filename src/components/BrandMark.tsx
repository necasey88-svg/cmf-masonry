import clsx from "clsx";

// The CMF Masonry mark: three coursed blocks, echoing brick/stone coursing.
// Ported from the Codex brand prototype (public/favicon.svg, commit cc4e7c9).
export default function BrandMark({ className, dark = false }: { className?: string; dark?: boolean }) {
  const fill = dark ? "#fff" : "var(--color-brick)";
  return (
    <svg
      viewBox="0 0 64 64"
      className={clsx("shrink-0", className)}
      aria-hidden="true"
    >
      <rect x="10" y="10" width="18" height="44" fill={fill} />
      <rect x="32" y="10" width="22" height="20" fill={fill} />
      <rect x="32" y="34" width="22" height="20" fill={fill} />
    </svg>
  );
}
