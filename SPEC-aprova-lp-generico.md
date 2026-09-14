# Spec genérica — Landing Page "Aprova [Município]"

Template de implementação para replicar a landing page do programa **Aprova** em outros municípios (atualmente: **Cascavel** e **Sobral**), a partir da base já construída para o **Aprova Beberibe** (`SPEC-aprova-beberibe.md`).

Este documento é **genérico e parametrizado**: antes de implementar, preencha as variáveis `{{...}}` com os dados do município específico. Não escreva "Cascavel" ou "Sobral" diretamente nos componentes — use os tokens/props abaixo para que o mesmo código sirva de base para qualquer município novo.

---

## 0. Como usar este documento

1. O usuário vai fornecer, para o município em questão:
   - Nome do projeto e do município (`{{PROJETO_NOME}}`, `{{MUNICIPIO}}`, `{{UF}}`).
   - A URL de login da plataforma (`{{PLATFORM_URL}}`).
   - **Imagens de contextualização** (posts, sites, materiais oficiais da prefeitura/projeto) para você extrair a paleta de cores.
   - Arquivos de logo (projeto, realizador, prefeitura do município).
2. A partir das imagens de contextualização, derive uma paleta de cores equivalente à seção 6 (mesmos *papéis* de cor — navy/cream/acento/CTA — mas com os hex do novo município). Se a imagem não deixar claro um tom exato, escolha o hex mais próximo e **avise o usuário que o valor foi estimado**, para confirmação.
3. Preencha a tabela de tokens (seção 6) e as tabelas de assets (seção 5) com os valores reais antes de codar.
4. Implemente seguindo a ordem de seções da 7, que já está adaptada para **não ter formulário de inscrição** (ver seção 2).
5. Rode a checklist da seção 10 como definição de pronto.
6. Stack: siga o `CLAUDE.md` do repositório onde a página será construída. Se for um repositório novo sem `CLAUDE.md`, use React (18 ou 19) + CRA ou Vite, sem bibliotecas de UI/CSS externas — apenas React puro (inline styles/CSS Modules/CSS puro), replicando a decisão tomada no Aprova Beberibe.

---

## 1. Contexto

O **{{PROJETO_NOME}}** é um projeto de preparação para o ENEM realizado pelo **Padrão ENEM** (Cognos Soluções Educacionais) em parceria com a **Prefeitura de {{MUNICIPIO}} ({{UF}})**. Diferente do Aprova Beberibe, **não há inscrição via Google Forms**: o aluno já é matriculado/cadastrado pela escola ou coordenação do projeto no município, e a landing page tem **um único objetivo**:

- **Dar acesso rápido à plataforma** de estudos para quem já faz parte do projeto.

Público: estudantes de Ensino Médio de {{MUNICIPIO}} (e egressos que farão o ENEM), além de pais e gestores escolares. Idioma: **português do Brasil**. Tom da copy: direto, animado, sem jargão — sem promessas de resultado.

---

## 2. Escopo

Página **única**, estática, sem backend, sem autenticação, **sem formulário próprio nem externo** (não existe fluxo de inscrição nesta página — o cadastro é feito por fora, pela escola/coordenação). Sem CMS. Sem analytics obrigatório (opcional: GA4/Meta Pixel via env).

**Diferença-chave em relação ao Aprova Beberibe:** todo CTA de "inscrição" é substituído por CTA de **"acessar plataforma"**. Não deve existir nenhuma menção a formulário, envio de dados de inscrição, ou prazo de liberação de cadastro.

**Fora de escopo:** área logada, blog, calendário de aulões, formulário de qualquer tipo, i18n.

---

## 3. Stack

Ver seção 0, item 6. Sem dependências além de React. Fontes via Google Fonts.

---

## 4. Links externos

| Nome | URL |
|---|---|
| `PLATFORM_URL` (login) | `{{PLATFORM_URL}}` |

Não existe `FORM_URL` neste template. Todos os links externos abrem em nova aba: `target="_blank" rel="noopener noreferrer"`.

---

## 5. Assets

Arquivos em `public/assets/`:

| Arquivo | Uso |
|---|---|
| `{{LOGO_PROJETO}}` (ex.: `logo-aprova-{{municipio}}.png`) | logo do projeto (header 52px de altura; footer 96px). **PNG com fundo transparente** |
| `{{BANNER}}` (ex.: `banner-aprova-{{municipio}}.png`) | banner do hero (proporção ~2,5:1) |
| `logo-padrao-enem.png` | logo do realizador (footer) — mesma logo usada no Beberibe, marca fixa |
| `{{LOGO_PREFEITURA}}` (ex.: `logo-prefeitura-{{municipio}}.webp`) | logo da Prefeitura de {{MUNICIPIO}} (footer) |

Regras: todas as imagens com `alt` descritivo; banner com `loading="eager"`, restante `loading="lazy"`.

---

## 6. Design system

### Cores

Mesmos *papéis* de cor do Aprova Beberibe — troque os hex pelos extraídos das imagens de contextualização do município. Preencha esta tabela antes de implementar:

| Token | Papel | Hex Beberibe (referência) | Hex `{{MUNICIPIO}}` |
|---|---|---|---|
| `navy` | texto principal, fundo da seção de plataforma, footer | `#1E1150` | `{{COR_NAVY}}` |
| `cream` | fundo padrão da página | `#F6F3EC` | `{{COR_CREAM}}` |
| `accent1` | acento 1 (ex.: teal), sombras de botão secundário | `#12A8A0` | `{{COR_ACCENT_1}}` |
| `accent2` | acento 2 (ex.: laranja) | `#F58220` | `{{COR_ACCENT_2}}` |
| `cta` | CTA primário ("acessar plataforma"), fundo da seção final | `#EC1E79` | `{{COR_CTA}}` |
| `accent3` | acento 3 (ícone) | `#5B189E` | `{{COR_ACCENT_3}}` |
| `highlight` | CTA da plataforma, labels, detalhes | `#FFC72C` | `{{COR_HIGHLIGHT}}` |
| `bodyText` | parágrafos sobre fundo claro | `#4A3F78` | `{{COR_BODY_TEXT}}` |
| `muted` | notas pequenas | `#7A6FA3` | `{{COR_MUTED}}` |

Regras que **não mudam** entre municípios:
- Máximo de dois fundos por dobra.
- Texto sobre `navy` usa branco com opacidades `.72`/`.75`; nunca abaixo de `.55`.
- Contraste mínimo AA em todo texto — valide isso especialmente ao trocar os hex, já que a paleta de outro município pode ter contrastes diferentes dos usados em Beberibe.

### Tipografia (Google Fonts)

Mesma tipografia do Aprova Beberibe (mantenha, salvo pedido explícito do usuário para trocar):

```
https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Archivo:wght@500;600;700;800&family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700&display=swap
```

- **Baloo 2 800** — todos os títulos (`h2` 44–54px, `h3` 23–26px).
- **Archivo 800** — labels/eyebrows e botões: `text-transform: uppercase`, `letter-spacing: .04em`–`.14em`, 12–22px.
- **Nunito Sans** — corpo: 16–19px, `line-height: 1.55–1.6`.

### Componentes visuais recorrentes

Idênticos ao Aprova Beberibe, apenas usando os novos tokens de cor:

- **Label/eyebrow:** pílula `border-radius: 999px`, `padding: 8px 14px`, Archivo 800 12px uppercase, `letter-spacing: .14em`.
- **Botão:** pílula com sombra sólida deslocada (`box-shadow: 0 4–8px 0 <cor escura>`) — sem gradiente. No hover, troca de cor e (no CTA grande) `translateY(-2px)`.
- **Card claro:** `#fff`, `border: 3px solid <navy>`, `border-radius: 22px`, `box-shadow: 8px 8px 0 rgba(<navy-rgb>,.12)`.
- **Card escuro:** `rgba(255,255,255,.06)`, `border: 2px solid rgba(255,255,255,.14)`, `border-radius: 22px`; hover eleva 4px e colore a borda.
- **Ícone:** quadrado 48–52px, `border-radius: 14px`, fundo colorido, emoji/glifo centralizado.

Container: `max-width: 1180px`, `padding: 0 24px`. Espaçamento vertical das seções: `96px` (FAQ `88px`).

---

## 7. Estrutura da página (ordem obrigatória)

**Diferença geral em relação ao Beberibe:** todo botão que no Beberibe apontava para `FORM_URL` ("INSCREVA-SE JÁ", "FAZER MINHA INSCRIÇÃO") deixa de existir. Sobra apenas o CTA de **"ACESSAR PLATAFORMA"**, repetido nos mesmos pontos de contato (header, seção da plataforma, CTA final, footer).

### 7.1 Header (sticky)

- `position: sticky; top: 0; z-index: 50`, fundo `rgba(<cream-rgb>,.92)` + `backdrop-filter: blur(10px)`, borda inferior `2px solid rgba(<navy-rgb>,.08)`.
- Esquerda: logo do projeto (52px).
- Direita: link "O projeto" (`#projeto`) · **um único CTA primário** — **ACESSAR PLATAFORMA** (cor `cta`, sombra escura; hover para `highlight`) → `PLATFORM_URL`.
- Mobile (<900px): esconder a nav e mostrar apenas o CTA primário.

### 7.2 Hero — banner

Seção de fundo branco, banner centralizado com `width: 100%; max-width: 1180px; height: auto`. Sem texto sobreposto (o banner já traz o título).

### 7.3 Faixa rolante (marquee)

Fundo `navy`, borda superior `4px solid <highlight>`, `padding: 14px 0`, `overflow: hidden`. Duas cópias idênticas da lista lado a lado dentro de um flex `width: max-content`, animadas com `@keyframes ab-marquee { to { transform: translateX(-50%) } }`, 26s linear infinite. Frases separadas por `✦` na cor `highlight`, Archivo 800 16px uppercase `letter-spacing: .12em`. Adapte o texto ao município, por exemplo:

1. Aulões presenciais
2. Plataforma de estudos 24h *(em `accent1`)*
3. Simulados no padrão ENEM
4. Para todo o município de {{MUNICIPIO}}

Respeitar `prefers-reduced-motion: reduce` → pausar a animação.

### 7.4 `#projeto` — três pilares

Grid de 3 colunas (cards claros), fundo `cream`. Mesmo conteúdo do Beberibe (ajustável em texto, mantendo o sentido):

| Ícone / cor | Título | Texto |
|---|---|---|
| 🎓 `highlight` | Aulões com especialistas | Professores que vivem o ENEM todos os dias, com aulas de alta energia e revisão de alto rendimento. |
| 📚 `accent1` | Conteúdo focado no ENEM | Material construído a partir da matriz de referência e das tendências das últimas edições da prova. |
| 📈 `accent2` | Evolução acompanhada | O aluno enxerga o próprio desempenho por área e sabe exatamente onde precisa melhorar. |

### 7.5 `#plataforma` — a plataforma

Fundo `navy`, texto branco. Bloco central (`max-width: 720px`, centralizado):

- Label na cor `cta`: **A plataforma**
- H2 54px: *Um ambiente inteiro desenhado para o aluno*
- Parágrafo: *O estudo não para. Cada aluno do {{PROJETO_NOME}} tem acesso à plataforma do Padrão ENEM.*
- CTA grande na cor `highlight`: **ACESSAR PLATAFORMA →** (Archivo 800 22px, `padding: 24px 48px`, sombra sólida escura; hover branco com sombra na cor `accent1`) → `PLATFORM_URL`

Abaixo, grid de 3×2 cards escuros (mesmo conteúdo do Beberibe):

| Ícone / cor | Título | Texto |
|---|---|---|
| ▶ `accent1` | Videoaulas | Aulas por assunto, para complementar o que foi visto na escola. |
| ✎ `accent2` | Banco de questões | Mais de 4000 questões desenvolvidas para a sua aprovação! |
| ◉ `cta` | Simulados | Provas no formato do ENEM para o grande dia não seja uma surpresa! |
| 📝 `highlight` | Redação | Propostas de tema, repertório e envio de redação para correção pelas cinco competências. |
| ⚡ `accent3` | Flash cards | Revisão rápida por repetição espaçada, para fixar fórmulas, datas e conceitos-chave. |
| 🗓 `accent1` | Cronograma | Um plano de estudos organizado por semana, ajustado ao tempo real que o aluno tem. |

### 7.6 Como funciona *(substitui "Como participar" do Beberibe — sem etapa de inscrição)*

Fundo `cream`, duas colunas (`.9fr 1.1fr`, gap 64px). Esquerda: label navy **Como funciona** + H2 48px *Você já faz parte — é só acessar*. Direita: cartões brancos (`border-radius: 20px`) com número grande em Baloo 2 34px e título. Use **duas etapas** (não três, já que não há inscrição):

1. **01** (`cta`) — Você já está matriculado — o cadastro é feito pela escola/coordenação do {{PROJETO_NOME}} em {{MUNICIPIO}}.
2. **02** (`accent1`) — Acesse a plataforma com seu login e comece a estudar.

> Não usar nenhuma linguagem de "inscrição", "formulário" ou "até 48 horas para liberação" — esse fluxo não existe neste projeto. Se o aluno não tiver login, a copy deve orientá-lo a procurar a escola/coordenação (ver FAQ, seção 7.8).

### 7.7 `#acesso` — CTA final *(substitui o `#inscricao` do Beberibe)*

Fundo `cta`. Card branco centralizado (`max-width: 900px`, `border-radius: 32px`, `padding: 64px 56px`, `box-shadow: 0 24px 60px rgba(<navy-rgb>,.22)`):

- Label na cor `highlight`: **Acesso liberado**
- H2 48px: *Sua plataforma de estudos está esperando por você*
- Parágrafo: *Se você faz parte do {{PROJETO_NOME}}, seu acesso já está pronto. É só entrar com seu login e começar.*
- CTA navy: **ACESSAR PLATAFORMA →** → `PLATFORM_URL` (hover para `accent1` com texto navy)
- Nota 14px `muted`: *Dúvidas sobre seu acesso? Procure a coordenação do {{PROJETO_NOME}} na sua escola.*

### 7.8 FAQ (acordeão)

Fundo `cream`, `max-width: 820px`. H2 44px centralizado *Perguntas frequentes*. Itens em cartões brancos `border-radius: 18px`; cabeçalho é um `<button>` (Baloo 2 700 21px) com marcador circular à direita (`+` fechado / `−` aberto, na cor `cta`). **Apenas um item aberto por vez; o primeiro inicia aberto.**

1. **A participação é gratuita?** — Sim. O {{PROJETO_NOME}} é uma realização do Padrão ENEM em parceria com a Prefeitura de {{MUNICIPIO}}, sem custo para os estudantes do município.
2. **Como eu entro na plataforma?** — Se você faz parte do {{PROJETO_NOME}}, seu cadastro já foi feito pela escola/coordenação. Use o login que foi disponibilizado para você.
3. **Não recebi meu login, o que eu faço?** — Procure a coordenação do {{PROJETO_NOME}} ou a secretaria da sua escola.
4. **Consigo estudar pelo celular?** — Sim. Videoaulas, questões, simulados, redação, flash cards e cronograma funcionam no celular, no computador e no tablet.

Acessibilidade: `aria-expanded` no botão e `aria-controls` apontando para o painel.

### 7.9 Footer

Fundo `navy`, `padding: 64px 24px 40px`. Grid de 3 colunas (`1.2fr 1fr 1fr`, gap 48px):

1. Logo do projeto (96px de altura).
2. **NAVEGUE** (h4 Archivo 800 13px uppercase, cor `highlight`) + links: O projeto (`#projeto`), Plataforma (`#plataforma`). *(Sem link de "Inscrição" — não existe.)*
3. **REALIZAÇÃO** + duas placas brancas empilhadas (`border-radius: 14px`, `padding: 12px 14px`), cada uma com a logo em caixa de **132×74px** e `object-fit: contain` — Padrão ENEM em cima, Prefeitura de {{MUNICIPIO}} embaixo. **As duas devem ter exatamente o mesmo tamanho.**

Barra inferior centralizada (`border-top: 1px solid rgba(255,255,255,.14)`, 14px), texto institucional fixo (não muda por município):

```
Cognos Soluções Educacionais
CNPJ: 27.897.225/0001-49
Rua Francisco José Albuquerque Pereira, 297
Cajazeiras • Fortaleza/CE • CEP 60864-520

Copyright © 2026 Padrão Enem - Por competências e habilidades!
Todos os direitos reservados.
```

("Cognos Soluções Educacionais" em branco e negrito; o restante em `rgba(255,255,255,.72)` e o copyright em `rgba(255,255,255,.55)`.)

---

## 8. Responsividade

Breakpoint principal: **900px**.

- Grids de 3 colunas → 1 coluna.
- "Como funciona" → 1 coluna, gap 32px.
- Footer → 1 coluna.
- Nav do header oculta (manter CTA primário acessível).
- H2 grandes → 36px.
- Alvos de toque com no mínimo 44px de altura.
- Testar em 375px, 768px, 1024px, 1440px e 1920px sem scroll horizontal (`overflow-x: hidden` no wrapper).

---

## 9. Acessibilidade e qualidade

- Hierarquia de headings sem saltos; apenas um `h1` conceitual (o banner traz o título — incluir um `h1` visualmente oculto: "{{PROJETO_NOME}} — preparando para o ENEM, transformando o futuro").
- Contraste mínimo AA para todo texto; foco visível em links e botões (não remover outline sem substituto).
- `prefers-reduced-motion` desliga marquee e transformações de hover.
- Navegação por teclado completa no acordeão e nos CTAs.
- Lighthouse alvo: Performance ≥ 90, Acessibilidade ≥ 95. Banner otimizado (WebP + `width`/`height` explícitos para evitar CLS).
- SEO: `<title>` "{{PROJETO_NOME}} | Preparação para o ENEM — Padrão ENEM e Prefeitura de {{MUNICIPIO}}", meta description, `lang="pt-BR"`, Open Graph com o banner.

---

## 10. Critérios de aceite

- [ ] Todos os CTAs da página ("Acessar plataforma", em qualquer seção) abrem `PLATFORM_URL` em nova aba.
- [ ] **Nenhuma menção a formulário, inscrição, Google Forms, ou prazo de liberação de cadastro** em nenhum lugar da página — o único caminho é acessar a plataforma.
- [ ] Nenhuma seção de aulões com datas/locais (não definidos ainda).
- [ ] Logo do projeto exibida com fundo transparente sobre `cream` e sobre `navy`.
- [ ] Logos de Padrão ENEM e da Prefeitura de {{MUNICIPIO}} no footer com o mesmo tamanho (132×74).
- [ ] Paleta de cores corresponde às imagens de contextualização fornecidas para {{MUNICIPIO}} (hex confirmados com o usuário, não os do Beberibe).
- [ ] Marquee em loop sem emenda visível (duas cópias idênticas).
- [ ] FAQ abre/fecha com mouse e teclado, um item por vez.
- [ ] Sem scroll horizontal em nenhuma largura testada.
- [ ] Nenhum erro no console.

---

## 11. Checklist de preenchimento antes de codar

- [ ] `{{PROJETO_NOME}}`, `{{MUNICIPIO}}`, `{{UF}}` definidos.
- [ ] `{{PLATFORM_URL}}` confirmada com o usuário.
- [ ] Paleta de cores (seção 6) preenchida a partir das imagens de contextualização, com contraste AA validado.
- [ ] Arquivos de logo (projeto, realizador, prefeitura) e banner recebidos e salvos em `public/assets/`.
- [ ] Confirmado com o usuário se algum texto/etapa da seção 7.6/7.7 precisa de ajuste (ex.: se o processo real de "como o aluno recebe o login" for diferente do descrito aqui).
