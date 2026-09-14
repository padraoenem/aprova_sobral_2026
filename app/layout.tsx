import type { Metadata } from "next";
import { Baloo_2, Archivo, Nunito_Sans } from "next/font/google";
import "./globals.css";

const baloo2 = Baloo_2({
  variable: "--font-baloo2",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Aprova Sobral | Preparação para o ENEM — Padrão ENEM e Prefeitura de Sobral",
  description:
    "O Aprova Sobral é uma realização do Padrão ENEM em parceria com a Prefeitura de Sobral (CE). Acesse a plataforma de estudos e continue sua preparação para o ENEM.",
  openGraph: {
    title: "Aprova Sobral | Preparação para o ENEM",
    description:
      "Aulões, plataforma de estudos, simulados e muito mais para os estudantes de Sobral (CE).",
    images: ["/assets/banner-aprova-sobral.png"],
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${baloo2.variable} ${archivo.variable} ${nunitoSans.variable}`}
    >
      <body className="font-body text-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
