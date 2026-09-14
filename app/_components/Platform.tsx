import PlatformCta from "./PlatformCta";
import { PROJETO_NOME } from "@/app/_lib/constants";

const FEATURES = [
  {
    icon: "▶",
    color: "bg-accent1",
    title: "Videoaulas",
    text: "Aulas por assunto, para complementar o que foi visto na escola.",
  },
  {
    icon: "✎",
    color: "bg-accent2",
    title: "Banco de questões",
    text: "Mais de 4000 questões desenvolvidas para a sua aprovação!",
  },
  {
    icon: "◉",
    color: "bg-cta",
    title: "Simulados",
    text: "Provas no formato do ENEM para o grande dia não ser uma surpresa!",
  },
  {
    icon: "📝",
    color: "bg-highlight",
    title: "Redação",
    text: "Propostas de tema, repertório e envio de redação para correção pelas cinco competências.",
  },
  {
    icon: "⚡",
    color: "bg-accent3",
    title: "Flash cards",
    text: "Revisão rápida por repetição espaçada, para fixar fórmulas, datas e conceitos-chave.",
  },
  {
    icon: "🗓",
    color: "bg-accent1",
    title: "Cronograma",
    text: "Um plano de estudos organizado por semana, ajustado ao tempo real que o aluno tem.",
  },
];

export default function Platform() {
  return (
    <section id="plataforma" className="bg-navy px-6 py-24 text-white">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto max-w-[720px] text-center">
          <span className="inline-block rounded-full bg-white/10 px-3.5 py-2 font-label text-xs font-extrabold uppercase tracking-[.14em] text-cta">
            A plataforma
          </span>
          <h2 className="mt-4 font-heading text-4xl font-extrabold md:text-[54px]">
            Um ambiente inteiro desenhado para o aluno
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75 md:text-[19px]">
            O estudo não para. Cada aluno do {PROJETO_NOME} tem acesso à
            plataforma do Padrão ENEM.
          </p>
          <PlatformCta variant="large" className="mt-9" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-[22px] border-2 border-white/14 bg-white/6 p-7 transition-all duration-200 hover:-translate-y-1 hover:border-white/30"
            >
              <div
                className={`flex h-[52px] w-[52px] items-center justify-center rounded-2xl text-2xl text-navy ${f.color}`}
              >
                {f.icon}
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold md:text-[23px]">
                {f.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/75">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
