import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

const TITLE = "Xedruo — Building connected businesses for a digital world";
const DESC =
  "Investor overview of Xedruo, a technology holding company coordinating a portfolio of independent digital businesses through shared API platform services.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const MAIL = "mailto:info@xedruo.com?subject=Xedruo%20investment%20discussion";

const nav = [
  ["Approach", "#approach"],
  ["Portfolio", "#portfolio"],
  ["Platform", "#platform"],
  ["Model", "#model"],
  ["Roadmap", "#roadmap"],
  ["Invest", "#invest"],
] as const;

const portfolio = [
  ["Xedrion AI", "Artificial Intelligence", "AI tools and intelligence services for businesses and the wider ecosystem."],
  [
    "Pay & Play",
    "Fintech · Music Entertainment",
    "A combined fintech and music entertainment platform bringing financial services and music listening together in one experience. Payment services remain subject to licensing and regulated partners.",
  ],
  ["Xedruo Music Distribution", "Music · Media", "Distribution and services for independent artists and creators."],
  ["Healthruo", "Health", "Digital health access and services initiative."],
  ["Hireuo / Xedruo Careers", "Jobs · Hiring", "Jobs marketplace and hiring tools for employers and talent."],
  ["Adom Global Commerce", "Commerce", "Commerce initiative connecting sellers and buyers across markets."],
] as const;

const services = [
  ["Central authentication", "Unified identity across companies"],
  ["Company registry", "Single source of truth for portfolio entities"],
  ["Pricing", "Shared pricing and plan configuration"],
  ["Software updates", "Coordinated release and update delivery"],
  ["Support & monitoring", "Customer support and service health"],
  ["Sales & revenue ops", "Shared revenue operations tooling"],
] as const;

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: ReactNode; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h2 id={`${id}-title`} className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" aria-hidden />
      {children}
    </span>
  );
}

function Constellation() {
  const nodes: [number, number][] = [
    [300, 200], [300, 40], [500, 120], [500, 300], [300, 370], [100, 300], [100, 120],
  ];
  return (
    <svg viewBox="0 0 600 420" className="h-full w-full animate-float" aria-hidden>
      <defs>
        <linearGradient id="ln" x1="0" x2="1">
          <stop offset="0" stopColor="var(--primary)" />
          <stop offset="1" stopColor="var(--violet)" />
        </linearGradient>
      </defs>
      {nodes.slice(1).map(([x, y], i) => (
        <line key={i} x1={300} y1={200} x2={x} y2={y} stroke="url(#ln)" strokeOpacity="0.45" strokeWidth="1" />
      ))}
      {nodes.slice(1).map(([x, y], i) => {
        const [nx, ny] = nodes[((i + 1) % 6) + 1]!;
        return <line key={`o${i}`} x1={x} y1={y} x2={nx} y2={ny} stroke="var(--foreground)" strokeOpacity="0.08" />;
      })}
      {nodes.map(([x, y], i) => (
        <circle key={`c${i}`} cx={x} cy={y} r={i === 0 ? 14 : 5} fill={i === 0 ? "url(#ln)" : "var(--foreground)"} opacity={i === 0 ? 1 : 0.8} />
      ))}
      <circle cx={300} cy={200} r={36} fill="none" stroke="var(--primary)" strokeOpacity="0.3" />
    </svg>
  );
}

const btnPrimary =
  "inline-flex items-center justify-center rounded-md bg-gradient-accent px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
const btnGhost =
  "inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function Index() {
  return (
    <div className="min-h-screen">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-3">Skip to content</a>
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            XEDRUO<span className="text-primary">.</span>
          </a>
          <nav aria-label="Sections" className="hidden gap-6 md:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l}</a>
            ))}
          </nav>
          <a href={MAIL} className="rounded-md border border-border px-3 py-1.5 text-sm hover:bg-accent">Contact</a>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-glow" aria-hidden />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
            <div>
              <Tag>Investor overview · 2026</Tag>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl">
                Building connected businesses for a <span className="text-gradient">digital world.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Xedruo is a technology holding company coordinating a portfolio of independent digital businesses —
                connected by shared platform services delivered through APIs.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={MAIL} className={btnPrimary}>Discuss an investment</a>
                <a href="#portfolio" className={btnGhost}>Explore the portfolio</a>
              </div>
            </div>
            <div className="aspect-[10/7]"><Constellation /></div>
          </div>
        </section>

        <Section id="problem" eyebrow="01 · The problem" title="Digital businesses keep rebuilding the same foundations.">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Isolated systems", "Identity, customer support, payments, operations and data are built separately for every new business."],
              ["Duplicated cost", "Each venture pays again for the same infrastructure, slowing time-to-market and stretching capital."],
              ["Fragmented journeys", "Users face separate accounts and inconsistent experiences across related services."],
            ].map(([t, d]) => (
              <div key={t} className="card-surface p-6">
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="approach" eyebrow="02 · The Xedruo approach" title="Independent companies. Shared platform services.">
          <div className="grid gap-10 md:grid-cols-2">
            <p className="text-lg text-muted-foreground">
              Each operating company keeps its own brand, product, website and customer experience. Xedruo sits
              underneath as a shared service hub — not a consumer destination — supplying common capabilities through
              APIs so every business can launch leaner and connect where it makes sense. Pay & Play, for example, is a
              single company that combines financial services and music listening in one product experience rather than
              two separate businesses.
            </p>
            <ul className="space-y-4">
              {["Brands and customer experiences stay independent", "Shared capabilities delivered via APIs", "Common foundations reduce duplicated build cost", "Optional connections between portfolio companies"].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-accent" aria-hidden />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="portfolio" eyebrow="03 · Ecosystem portfolio" title="Six current portfolio initiatives.">
          <p className="-mt-4 mb-8 max-w-3xl text-muted-foreground">
            A diversified portfolio across AI, combined fintech and music entertainment, music distribution and
            media, health, jobs and hiring, and commerce. All are presented
            as portfolio initiatives; products are in development where applicable and none are represented here as
            launched or with traction.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map(([name, sector, desc], i) => (
              <li key={name} className="card-surface group p-6 transition-colors hover:border-primary/50">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-primary">{sector}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <div className="mt-5"><Tag>Portfolio initiative · in development</Tag></div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="platform" eyebrow="04 · Platform architecture" title="Three layers, one connected ecosystem.">
          <div className="space-y-3">
            <div className="card-surface p-6 text-center">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Layer 1</p>
              <h3 className="mt-1 text-xl font-semibold">Xedruo holding company</h3>
              <p className="mt-1 text-sm text-muted-foreground">Strategy, capital allocation, governance and coordination</p>
            </div>
            <div className="rounded-xl border border-primary/40 bg-accent/40 p-6">
              <p className="text-center font-mono text-xs uppercase tracking-wider text-primary">Layer 2 · Shared API services</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {services.map(([t, d]) => (
                  <div key={t} className="rounded-lg border border-border bg-background/60 p-4">
                    <h4 className="font-semibold">{t}</h4>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-surface p-6">
              <p className="text-center font-mono text-xs uppercase tracking-wider text-muted-foreground">Layer 3 · Independent operating companies</p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {portfolio.map(([n]) => (
                  <span key={n} className="rounded-full border border-border px-3 py-1 text-xs">{n}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-6 rounded-lg border border-border bg-surface p-4 text-sm text-muted-foreground">
            <strong className="text-foreground">Build status:</strong> the central identity and API-first platform is a
            build in progress. Central authentication is currently being developed with Node.js/TypeScript and Neon
            PostgreSQL and is not yet production-proven at scale.
          </p>
        </Section>

        <Section id="model" eyebrow="05 · Business model" title="Potential revenue streams.">
          <p className="-mt-4 mb-8 text-sm text-muted-foreground">
            Planned / potential streams only — Xedruo is not presenting current revenue.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Pay & Play · Fintech", "Potential transaction charges, only through appropriately licensed providers or after required regulatory approvals."],
              ["Pay & Play · Music entertainment", "Potential streaming revenue, subscriptions, artist booking commissions or fees, beat purchases and marketplace fees, advertising, and paid promotion."],
              ["Music services · Royalties", "Potential music streaming revenue and platform-agreed royalty shares across Pay & Play and relevant music services, subject to applicable agreements."],
              ["Xedrion AI & Hireuo", "Potential advertising revenue and subscriptions where those options are offered."],
              ["Adom Global Commerce", "Potential commission on sales, advertising placements, and paid product or store promotion."],
            ].map(([t, d]) => (
              <div key={t} className="card-surface p-6">
                <span className="font-mono text-[11px] uppercase tracking-wider text-violet">Potential</span>
                <h3 className="mt-2 font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-lg border border-border bg-surface p-4 text-sm text-muted-foreground">
            <strong className="text-foreground">Revenue discipline:</strong> these are planned or potential streams, not
            current revenue or confirmed earnings. Each stream belongs to the relevant product and will depend on
            customer demand, commercial agreements, execution, and applicable regulation. Pay & Play remains one
            combined fintech and music entertainment product; its payment services require licensed providers or the
            necessary approvals.
          </p>
        </Section>

        <Section id="market" eyebrow="06 · Market opportunity" title="Digital transformation across African and global markets.">
          <div className="grid gap-8 md:grid-cols-2">
            <p className="text-lg text-muted-foreground">
              Businesses and consumers are moving more of their work, commerce, health, entertainment and finance
              online. Xedruo aims to participate across several of these sectors from a shared foundation, starting
              with Nigeria and expanding into African and international markets.
            </p>
            <p className="rounded-lg border border-border bg-surface p-5 text-sm text-muted-foreground">
              We do not present TAM / SAM / SOM figures or market statistics here. Market sizing will be shared with
              qualified partners once supported by verified research.
            </p>
          </div>
        </Section>

        <Section id="gtm" eyebrow="07 · Go-to-market" title="Focused launches, compounding distribution.">
          <ol className="grid gap-4 md:grid-cols-4">
            {[
              ["Launch focused", "Prioritise a small number of products for validation."],
              ["Partner to acquire", "Acquire users through partnerships and targeted distribution."],
              ["Cross-promote", "Introduce relevant portfolio services to existing users."],
              ["Expand by market", "Grow market-by-market as products prove demand."],
            ].map(([t, d], i) => (
              <li key={t} className="card-surface p-6">
                <span className="font-display text-3xl font-bold text-gradient">{i + 1}</span>
                <h3 className="mt-3 font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="roadmap" eyebrow="08 · Roadmap" title="Roadmap — subject to validation and execution.">
          <ol className="relative space-y-6 border-l border-border pl-8">
            {[
              ["Phase 1", "Strengthen the shared identity and API platform."],
              ["Phase 2", "Validate and launch priority products."],
              ["Phase 3", "Establish strategic partnerships and regulatory compliance."],
              ["Phase 4", "Scale the portfolio based on demonstrated traction."],
            ].map(([p, d]) => (
              <li key={p} className="relative">
                <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-gradient-accent ring-4 ring-background" aria-hidden />
                <p className="font-mono text-xs uppercase tracking-wider text-primary">{p} · Roadmap</p>
                <p className="mt-1 text-lg">{d}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="invest" eyebrow="09 · Investment opportunity" title="Partner with Xedruo at the foundation stage.">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-lg text-muted-foreground">
                We welcome conversations with angel investors, venture studios, accelerators, strategic partners and
                institutional ecosystem programmes.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Seed capital", "Strategic capital", "Partnerships", "Distribution", "Infrastructure", "Mentorship"].map((x) => (
                  <span key={x} className="rounded-full border border-border bg-secondary px-3 py-1 text-sm">{x}</span>
                ))}
              </div>
              <a href={MAIL} className={`${btnPrimary} mt-8`}>Discuss an investment</a>
            </div>
            <div className="card-surface p-6 text-sm text-muted-foreground">
              <h3 className="text-base font-semibold text-foreground">What this page does not include</h3>
              <p className="mt-2">
                No fundraising amount, valuation, equity terms, financial projections, revenue, customer numbers or
                traction figures are presented, because verified operating metrics have not been supplied. Investment
                structure and use of funds are to be discussed with qualified partners.
              </p>
            </div>
          </div>
        </Section>

        <Section id="team" eyebrow="10 · Team" title="Founder-led venture.">
          <div className="card-surface flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-accent font-display text-2xl font-bold text-primary-foreground" aria-hidden>
              X
            </div>
            <div>
              <h3 className="text-lg font-semibold">Founder, Xedruo</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Xedruo is led by its founder. A full founder profile will be added here.
              </p>
            </div>
          </div>
        </Section>

        <Section id="contact" eyebrow="11 · Contact" title="Start the conversation.">
          <div className="flex flex-wrap gap-3">
            <a href={MAIL} className={btnPrimary}>info@xedruo.com</a>
            <a href="https://xedruo.com" target="_blank" rel="noopener noreferrer" className={btnGhost}>xedruo.com ↗</a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-6xl space-y-4 px-6 text-xs text-muted-foreground">
          <p className="font-display text-base font-bold text-foreground">XEDRUO<span className="text-primary">.</span></p>
          <p>
            This presentation is for discussion purposes only and does not constitute an offer to sell securities or
            investment advice. Product status, roadmap and potential revenue streams are subject to validation,
            execution, partnerships and applicable regulation.
          </p>
          <p>Figures and traction are not presented because verified operating metrics have not been supplied.</p>
          <p>© {new Date().getFullYear()} Xedruo · <a className="underline hover:text-foreground" href="https://xedruo.com">xedruo.com</a></p>
        </div>
      </footer>
    </div>
  );
}