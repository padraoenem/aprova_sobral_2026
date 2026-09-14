import Image from "next/image";
import { MUNICIPIO, PROJETO_NOME } from "@/app/_lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy px-6 pb-10 pt-16 text-white">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image
            src="/assets/logo-aprova-sobral.png"
            alt={`Logotipo do ${PROJETO_NOME}`}
            width={220}
            height={187}
            className="h-24 w-auto"
            loading="lazy"
          />
        </div>

        <div>
          <h4 className="font-label text-[13px] font-extrabold uppercase tracking-[.04em] text-highlight">
            Navegue
          </h4>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <a href="#projeto" className="text-white/75 hover:text-white">
                O projeto
              </a>
            </li>
            <li>
              <a href="#plataforma" className="text-white/75 hover:text-white">
                Plataforma
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-label text-[13px] font-extrabold uppercase tracking-[.04em] text-highlight">
            Realização
          </h4>
          <div className="mt-4 flex flex-col items-start gap-4">
            <div className="inline-flex items-center rounded-2xl bg-white px-5 py-3">
              <Image
                src="/assets/logo_padraoenem_preto.png"
                alt="Padrão ENEM"
                width={343}
                height={122}
                className="h-7 w-auto"
                loading="lazy"
              />
            </div>
            <Image
              src="/assets/logo-prefeitura-sobral.png"
              alt={`Prefeitura de ${MUNICIPIO}`}
              width={1400}
              height={381}
              className="h-10 w-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[1180px] border-t border-white/14 pt-6 text-center text-sm">
        <p>
          <span className="font-bold text-white">
            Cognos Soluções Educacionais
          </span>
        </p>
        <p className="mt-1 text-white/72">CNPJ: 27.897.225/0001-49</p>
        <p className="text-white/72">
          Rua Francisco José Albuquerque Pereira, 297
        </p>
        <p className="text-white/72">Cajazeiras • Fortaleza/CE • CEP 60864-520</p>
        <p className="mt-4 text-white/55">
          Copyright © 2026 Padrão Enem - Por competências e habilidades!
        </p>
        <p className="text-white/55">Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
