import PlatformCta from "./PlatformCta";
import { PROJETO_NOME } from "@/app/_lib/constants";

export default function FinalCta() {
  return (
    <section id="acesso" className="bg-cta px-6 py-24">
      <div className="mx-auto max-w-[900px] rounded-[32px] bg-white px-8 py-14 text-center shadow-[0_24px_60px_rgba(0,80,160,.22)] md:px-14">
        <span className="inline-block rounded-full bg-highlight/20 px-3.5 py-2 font-label text-xs font-extrabold uppercase tracking-[.14em] text-[#8a6e00]">
          Acesso liberado
        </span>
        <h2 className="mt-5 font-heading text-3xl font-extrabold text-navy md:text-[48px]">
          Sua plataforma de estudos está esperando por você
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-lg leading-relaxed text-body">
          Se você faz parte do {PROJETO_NOME}, seu acesso já está pronto. É só
          entrar com seu login e começar.
        </p>
        <PlatformCta variant="final" className="mt-8" />
        <p className="mt-6 text-sm text-muted">
          Dúvidas sobre seu acesso? Procure a coordenação do {PROJETO_NOME} na
          sua escola.
        </p>
      </div>
    </section>
  );
}
