import Image from "next/image";
import PlatformCta from "./PlatformCta";
import { PROJETO_NOME } from "@/app/_lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-navy/8 bg-cream/92 backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center rounded-2xl bg-navy px-3 py-1.5">
          <Image
            src="/assets/logo-aprova-sobral.png"
            alt={`Logotipo do ${PROJETO_NOME}`}
            width={220}
            height={187}
            className="h-[52px] w-auto"
            priority
          />
        </a>

        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#projeto"
              className="font-label text-sm font-bold uppercase tracking-[.04em] text-navy hover:text-cta"
            >
              O projeto
            </a>
          </nav>
          <PlatformCta variant="header" />
        </div>
      </div>
    </header>
  );
}
