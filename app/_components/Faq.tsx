"use client";

import { useState } from "react";
import { MUNICIPIO, PROJETO_NOME } from "@/app/_lib/constants";

const QUESTIONS = [
  {
    q: "A participação é gratuita?",
    a: `Sim. O ${PROJETO_NOME} é uma realização do Padrão ENEM em parceria com a Prefeitura de ${MUNICIPIO}, sem custo para os estudantes do município.`,
  },
  {
    q: "Como eu entro na plataforma?",
    a: `Se você faz parte do ${PROJETO_NOME}, seu cadastro já foi feito pela escola/coordenação. Use o login que foi disponibilizado para você.`,
  },
  {
    q: "Não recebi meu login, o que eu faço?",
    a: `Procure a coordenação do ${PROJETO_NOME} ou a secretaria da sua escola.`,
  },
  {
    q: "Consigo estudar pelo celular?",
    a: "Sim. Videoaulas, questões, simulados, redação, flash cards e cronograma funcionam no celular, no computador e no tablet.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-cream px-6 py-[88px]">
      <div className="mx-auto max-w-[820px]">
        <h2 className="text-center font-heading text-3xl font-extrabold text-navy md:text-[44px]">
          Perguntas frequentes
        </h2>

        <div className="mt-10 flex flex-col gap-4">
          {QUESTIONS.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div
                key={item.q}
                className="rounded-[18px] bg-white shadow-[4px_4px_0_rgba(0,80,160,.08)]"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-lg font-bold text-navy md:text-[21px]"
                  >
                    <span>{item.q}</span>
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-cta text-xl leading-none text-cta"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-6 pb-6 text-base leading-relaxed text-body"
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
