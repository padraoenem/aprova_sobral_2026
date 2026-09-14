import { PLATFORM_URL } from "@/app/_lib/constants";

type Variant = "header" | "large" | "final";

const VARIANT_CLASSES: Record<Variant, string> = {
  header:
    "bg-cta text-white shadow-[0_5px_0_var(--color-cta-dark)] hover:bg-highlight hover:text-navy hover:shadow-[0_5px_0_#b89400] px-5 py-3 text-[13px] md:text-sm",
  large:
    "bg-highlight text-navy shadow-[0_8px_0_#b89400] hover:bg-white hover:shadow-[0_8px_0_var(--color-accent1)] hover:-translate-y-0.5 px-10 py-6 text-lg md:text-xl",
  final:
    "bg-navy text-white shadow-[0_6px_0_#00295a] hover:bg-accent1 hover:text-navy hover:shadow-[0_6px_0_#0a7ba8] px-8 py-5 text-base md:text-lg",
};

export default function PlatformCta({
  variant,
  className = "",
}: {
  variant: Variant;
  className?: string;
}) {
  return (
    <a
      href={PLATFORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-label font-extrabold uppercase tracking-[0.08em] transition-all duration-200 min-h-11 ${VARIANT_CLASSES[variant]} ${className}`}
    >
      Acessar plataforma
      {variant !== "header" && <span aria-hidden="true">→</span>}
    </a>
  );
}
