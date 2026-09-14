import { MUNICIPIO, PROJETO_NOME } from "@/app/_lib/constants";

const STEPS = [
  {
    number: "01",
    color: "text-cta",
    title: "Você já está matriculado",
    text: `O cadastro é feito pela escola/coordenação do ${PROJETO_NOME} em ${MUNICIPIO}.`,
  },
  {
    number: "02",
    color: "text-accent1",
    title: "Acesse a plataforma",
    text: "Entre com seu login e comece a estudar.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-cream px-6 py-24">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <span className="inline-block rounded-full bg-navy/8 px-3.5 py-2 font-label text-xs font-extrabold uppercase tracking-[.14em] text-navy">
            Como funciona
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold text-navy md:text-[48px]">
            Você já faz parte — é só acessar
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {STEPS.map((s) => (
            <div
              key={s.number}
              className="rounded-[20px] border-[3px] border-navy bg-white p-7 shadow-[8px_8px_0_rgba(0,80,160,.12)]"
            >
              <span
                className={`font-heading text-[34px] font-extrabold ${s.color}`}
              >
                {s.number}
              </span>
              <h3 className="mt-2 font-heading text-xl font-bold text-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-body">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
