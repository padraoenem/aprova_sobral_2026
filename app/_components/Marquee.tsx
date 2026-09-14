import { MUNICIPIO } from "@/app/_lib/constants";

const ITEMS = [
  { text: "Aulões presenciais", className: "text-white" },
  { text: "Plataforma de estudos 24h", className: "text-highlight" },
  { text: "Simulados no padrão ENEM", className: "text-white" },
  { text: `Para todo o município de ${MUNICIPIO}`, className: "text-white" },
];

function List({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-6 pr-6"
      aria-hidden={ariaHidden}
    >
      {ITEMS.map((item, i) => (
        <li key={i} className="flex items-center gap-6">
          <span
            className={`font-label text-base font-extrabold uppercase tracking-[.12em] ${item.className}`}
          >
            {item.text}
          </span>
          <span className="text-highlight" aria-hidden="true">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-t-4 border-highlight bg-navy py-3.5">
      <div className="ab-marquee-track flex w-max">
        <List />
        <List ariaHidden />
      </div>
    </div>
  );
}
