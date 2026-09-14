const PILLARS = [
  {
    icon: "🎓",
    color: "bg-highlight",
    title: "Aulões com especialistas",
    text: "Professores que vivem o ENEM todos os dias, com aulas de alta energia e revisão de alto rendimento.",
  },
  {
    icon: "📚",
    color: "bg-accent1",
    title: "Conteúdo focado no ENEM",
    text: "Material construído a partir da matriz de referência e das tendências das últimas edições da prova.",
  },
  {
    icon: "📈",
    color: "bg-accent2",
    title: "Evolução acompanhada",
    text: "O aluno enxerga o próprio desempenho por área e sabe exatamente onde precisa melhorar.",
  },
];

export default function Pillars() {
  return (
    <section id="projeto" className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-navy/8 px-3.5 py-2 font-label text-xs font-extrabold uppercase tracking-[.14em] text-navy">
            O projeto
          </span>
          <h2 className="mt-4 font-heading text-4xl font-extrabold text-navy md:text-[44px]">
            Um projeto feito para a sua aprovação
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="rounded-[22px] border-[3px] border-navy bg-white p-8 shadow-[8px_8px_0_rgba(0,80,160,.12)]"
            >
              <div
                className={`flex h-[52px] w-[52px] items-center justify-center rounded-2xl text-2xl ${p.color}`}
              >
                {p.icon}
              </div>
              <h3 className="mt-5 font-heading text-2xl font-bold text-navy">
                {p.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-body">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
