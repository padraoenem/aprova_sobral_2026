import Image from "next/image";
import PlatformCta from "./PlatformCta";
import { MUNICIPIO, PROJETO_NOME } from "@/app/_lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 pt-12 pb-16 md:pt-19 md:pb-24">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 text-center md:grid-cols-[1.1fr_1fr] md:gap-14 md:text-left">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-navy/8 px-4 py-2 font-label text-xs font-extrabold uppercase tracking-[.14em] text-navy">
            <span className="h-2 w-2 rounded-full bg-cta" aria-hidden="true" />
            Edição 2026
          </span>

          <h1 className="mt-6 font-heading text-4xl leading-[1.08] font-extrabold text-navy md:text-[54px]">
            Preparação para o ENEM que{" "}
            <span className="text-cta">transforma o futuro</span> de{" "}
            {MUNICIPIO}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-body md:mx-0">
            Aulões presenciais, plataforma de estudos 24h e simulados no
            padrão ENEM — gratuito para os estudantes de {MUNICIPIO}.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
            <PlatformCta variant="large" />
            <a
              href="#projeto"
              className="border-b-2 border-accent1 pb-0.5 font-label text-sm font-bold tracking-[.04em] text-navy uppercase hover:text-cta"
            >
              Conheça o projeto
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[280px] w-full max-w-[420px] items-center justify-center md:min-h-[380px] md:max-w-none">
          <span
            className="ab-float absolute h-[220px] w-[220px] rounded-full bg-accent2/28 blur-[2px] md:h-[300px] md:w-[300px]"
            aria-hidden="true"
          />
          <span
            className="ab-float absolute bottom-[8%] left-[6%] h-[70px] w-[70px] rounded-full bg-accent3/35 blur-[2px] md:h-[100px] md:w-[100px]"
            aria-hidden="true"
          />
          <span
            className="ab-float-slow absolute top-[6%] right-[8%] h-[46px] w-[46px] rounded-full bg-accent1/35 blur-[2px] md:h-[60px] md:w-[60px]"
            aria-hidden="true"
          />
          <Image
            src="/assets/logo-aprova-sobral-transparent.png"
            alt={`${PROJETO_NOME} — Aulões e plataforma de estudos para o ENEM, edição 2026`}
            width={889}
            height={632}
            className="relative z-10 h-auto w-[78%] max-w-[380px] drop-shadow-[0_18px_30px_rgba(0,40,90,0.35)] md:w-[85%] md:max-w-[440px]"
            loading="eager"
            priority
          />
        </div>
      </div>

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[160px] w-full text-transparent"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,420 C240,480 480,360 720,400 C960,440 1200,520 1440,460 L1440,600 L0,600 Z"
          fill="rgba(214,40,92,0.06)"
        />
        <path
          d="M0,480 C260,440 520,540 780,500 C1040,460 1260,560 1440,520 L1440,600 L0,600 Z"
          fill="rgba(63,168,74,0.06)"
        />
      </svg>
    </section>
  );
}
