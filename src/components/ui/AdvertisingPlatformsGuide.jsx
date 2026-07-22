import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

// These three come from your existing shared sections file (the one with
// Hero, About, ServicesGrid, etc.). Update this import path so it points to
// wherever Reveal / Eyebrow / SectionHead actually live in your project.
import { Reveal, Eyebrow, SectionHead } from "../../sections";
import {
  GUIDE_INTRO,
  KEY_ADVANTAGES,
  COST_DISCLAIMER,
  COST_TABLE,
  SERVICES_RECAP,
  SERVICE_OVERVIEW,
  SELECTION_CRITERIA,
  CHOOSE_STEPS,
  FINAL_THOUGHTS,
  SERVICE_FAQS,
} from '@/data/adPlatformsData';

function Icon({ name, className }) {
  // eslint-disable-next-line import/namespace
  const Cmp = Icons[name] || Icons.Sparkles;
  return <Cmp className={className} strokeWidth={1.8} />;
}

// ---------------------------------------------------------------------------
// Table of Contents — one entry per section heading below. Clicking an
// item smooth-scrolls to that section's id. Highlights whichever section is
// currently in view.
// ---------------------------------------------------------------------------
const TOC_ITEMS = [
  { id: 'why-essential', label: 'Why These Services Matter' },
  { id: 'service-pricing', label: 'Pricing & Timelines' },
  { id: 'core-services', label: 'Our Core Services' },
  { id: 'service-overview', label: 'Service Overview' },
  { id: 'our-methodology', label: 'Our Methodology' },
  { id: 'how-to-choose', label: 'How to Choose' },
  { id: 'final-thoughts', label: 'Final Thoughts' },
];

// Adjust if your site nav is taller/shorter, so headings don't land under it.
const SCROLL_OFFSET = 96;

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function TableOfContents() {
  const [active, setActive] = useState(TOC_ITEMS[0].id);

  useEffect(() => {
    const sections = TOC_ITEMS.map((t) => document.getElementById(t.id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: `-${SCROLL_OFFSET + 20}px 0px -70% 0px`, threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto max-w-[90rem] px-5 lg:px-10">
      <Reveal>
        <nav aria-label="Table of contents" className="rounded-2xl border border-border bg-card p-5 sm:p-6">
          <p className="font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">
            In This Guide
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {TOC_ITEMS.map((item, i) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToId(item.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                    active === item.id
                      ? 'bg-primary/10 font-semibold text-primary'
                      : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
                  }`}
                >
                  <span
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[11px] font-bold ${
                      active === item.id ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="leading-tight">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </Reveal>
    </section>
  );
}

export function GuideIntro() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="relative mx-auto max-w-3xl px-4 pb-12 pt-10 text-center sm:px-5 sm:pb-16 sm:pt-14 lg:pt-20">
        <Reveal><Eyebrow>{GUIDE_INTRO.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.15] tracking-tight sm:mt-6 sm:text-4xl sm:leading-[1.1] md:text-5xl">
            {GUIDE_INTRO.title}
          </h1>
        </Reveal>
        {GUIDE_INTRO.paragraphs.map((p, i) => (
          <Reveal key={i} delay={0.1 + i * 0.05}>
            <p className="mt-4 text-left text-sm text-muted-foreground sm:mt-5 sm:text-base md:text-lg">{p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function KeyAdvantages() {
  return (
    <section id="why-essential" className="scroll-mt-24 bg-secondary/30 py-14 sm:py-20">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-5 lg:px-10">
        <SectionHead
          center
          eyebrow="Why It Matters"
          title="Why a full-service approach drives better growth"
          sub="Combining SEO, paid media, social, web, branding, and content lets every channel reinforce the others instead of competing for attention on its own."
        />
        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {KEY_ADVANTAGES.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 0.06}>
              <div className="flex h-full gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:bg-secondary/40 sm:gap-4 sm:p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent sm:h-11 sm:w-11">
                  <Icon name={a.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold sm:text-base">{a.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{a.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CostTable() {
  return (
    <section id="service-pricing" className="scroll-mt-24 mx-auto max-w-[90rem] px-4 py-14 sm:px-5 sm:py-20 lg:px-10">
      <SectionHead
        center
        eyebrow="Pricing & Timelines"
        title="What our services cost and how long they take"
        sub="Starting price ranges and typical timelines to use as a benchmark, not a fixed quote."
      />
      <Reveal delay={0.08}>
        <div className="mx-auto mt-8 max-w-3xl space-y-3 rounded-2xl border-l-4 border-accent bg-secondary/50 p-4 text-xs text-muted-foreground sm:p-5 sm:text-sm">
          {COST_DISCLAIMER.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>
      </Reveal>

      {/* Desktop / tablet: full table */}
      <Reveal delay={0.12}>
        <div className="mt-10 hidden overflow-x-auto rounded-2xl border border-border bg-card sm:block">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-secondary/50">
                <th className="whitespace-nowrap p-4 font-display font-bold">Service</th>
                <th className="whitespace-nowrap p-4 font-display font-bold">Starting Price</th>
                <th className="whitespace-nowrap p-4 font-display font-bold">Typical Timeline</th>
                <th className="whitespace-nowrap p-4 font-display font-bold">What's Included</th>
                <th className="whitespace-nowrap p-4 font-display font-bold">Best For</th>
              </tr>
            </thead>
            <tbody>
              {COST_TABLE.map((row) => (
                <tr key={row.service} className="border-t border-border align-top">
                  <td className="whitespace-nowrap p-4 font-display font-semibold">{row.service}</td>
                  <td className="p-4 text-muted-foreground">{row.price}</td>
                  <td className="p-4 text-muted-foreground">{row.timeline}</td>
                  <td className="p-4 text-muted-foreground">{row.included}</td>
                  <td className="p-4 text-muted-foreground">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* Mobile: stacked cards instead of a cramped scrolling table */}
      <div className="mt-8 space-y-3 sm:mt-10 sm:hidden">
        {COST_TABLE.map((row, i) => (
          <Reveal key={row.service} delay={(i % 4) * 0.05}>
            <div className="rounded-2xl border border-border bg-card p-4">
              <h3 className="font-display text-sm font-bold">{row.service}</h3>
              <dl className="mt-3 space-y-2 text-xs">
                <div className="flex justify-between gap-4">
                  <dt className="shrink-0 font-medium text-foreground">Starting Price</dt>
                  <dd className="text-right text-muted-foreground">{row.price}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="shrink-0 font-medium text-foreground">Timeline</dt>
                  <dd className="text-right text-muted-foreground">{row.timeline}</dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-border pt-2">
                  <dt className="shrink-0 font-medium text-foreground">Included</dt>
                  <dd className="text-right text-muted-foreground">{row.included}</dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-border pt-2">
                  <dt className="shrink-0 font-medium text-foreground">Best For</dt>
                  <dd className="text-right text-muted-foreground">{row.bestFor}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ServicesRecap() {
  return (
    <section id="core-services" className="scroll-mt-24 bg-secondary/30 py-14 sm:py-20">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-5 lg:px-10">
        <SectionHead
          center
          eyebrow="Our Core Services"
          title="The services that make up our full-service offering"
          sub="What each service focuses on, and who it fits best."
        />
        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {SERVICES_RECAP.map((s, i) => (
            <Reveal key={s.service} delay={(i % 3) * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 sm:p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary sm:h-12 sm:w-12">
                  <Icon name={s.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold sm:mt-5 sm:text-lg">{s.service}</h3>
                <p className="mt-1.5 text-[0.7rem] font-semibold uppercase tracking-wide text-accent sm:text-xs">{s.highlight}</p>
                <p className="mt-3 text-xs text-muted-foreground sm:text-sm">{s.features}</p>
                <p className="mt-4 border-t border-border pt-4 text-[0.7rem] font-medium text-muted-foreground sm:text-xs">
                  Best for: <span className="text-foreground">{s.bestFor}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceOverview() {
  return (
    <section id="service-overview" className="scroll-mt-24 mx-auto max-w-[90rem] px-4 py-14 sm:px-5 sm:py-20 lg:px-10">
      <SectionHead
        center
        eyebrow="Service Overview"
        title="How each service fits into your growth plan"
        sub="A quick side-by-side look at what each service focuses on, who it's built for, and the outcome you can expect."
      />

      {/* Desktop / tablet: full table, matching the pricing table styling */}
      <Reveal delay={0.12}>
        <div className="mt-10 hidden overflow-x-auto rounded-2xl border border-border bg-card sm:block">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-secondary/50">
                <th className="whitespace-nowrap p-4 font-display font-bold">Service</th>
                <th className="whitespace-nowrap p-4 font-display font-bold">Best For</th>
                <th className="whitespace-nowrap p-4 font-display font-bold">Key Features</th>
                <th className="whitespace-nowrap p-4 font-display font-bold">Expected Outcome</th>
              </tr>
            </thead>
            <tbody>
              {SERVICE_OVERVIEW.map((row) => (
                <tr key={row.service} className="border-t border-border align-top">
                  <td className="whitespace-nowrap p-4 font-display font-semibold">{row.service}</td>
                  <td className="p-4 text-muted-foreground">{row.bestFor}</td>
                  <td className="p-4 text-muted-foreground">{row.keyFeatures}</td>
                  <td className="p-4 text-muted-foreground">{row.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* Mobile: stacked cards, same pattern as the pricing table */}
      <div className="mt-8 space-y-3 sm:mt-10 sm:hidden">
        {SERVICE_OVERVIEW.map((row, i) => (
          <Reveal key={row.service} delay={(i % 4) * 0.05}>
            <div className="rounded-2xl border border-border bg-card p-4">
              <h3 className="font-display text-sm font-bold">{row.service}</h3>
              <dl className="mt-3 space-y-2 text-xs">
                <div className="flex justify-between gap-4">
                  <dt className="shrink-0 font-medium text-foreground">Best For</dt>
                  <dd className="text-right text-muted-foreground">{row.bestFor}</dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-border pt-2">
                  <dt className="shrink-0 font-medium text-foreground">Key Features</dt>
                  <dd className="text-right text-muted-foreground">{row.keyFeatures}</dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-border pt-2">
                  <dt className="shrink-0 font-medium text-foreground">Expected Outcome</dt>
                  <dd className="text-right text-muted-foreground">{row.outcome}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function SelectionMethodology() {
  return (
    <section id="our-methodology" className="scroll-mt-24 mx-auto max-w-[90rem] px-4 pb-14 pt-8 sm:px-5 sm:pb-20 sm:pt-10 lg:px-10">
      <SectionHead
        center
        eyebrow="Our Methodology"
        title="How we scope and recommend services"
        sub="We weigh each client's situation against five factors that drive real ROI, rather than defaulting to a one-size-fits-all package."
      />
      <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {SELECTION_CRITERIA.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 0.06}>
            <div className="flex h-full gap-3 rounded-2xl border border-border p-4 transition-colors hover:bg-secondary/40 sm:gap-4 sm:p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent sm:h-11 sm:w-11">
                <Icon name={c.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <div>
                <h3 className="font-display text-sm font-bold sm:text-base">{c.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{c.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function HowToChoose() {
  return (
    <section id="how-to-choose" className="scroll-mt-24 bg-secondary/30 pb-14 pt-8 sm:pb-20 sm:pt-10">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-5 lg:px-10">
        <SectionHead
          center
          eyebrow="Decision Guide"
          title="How to choose the right service (or mix of services)"
          sub="The right starting point depends on your goals, your audience's habits, and how much your team can take on at once."
        />
        <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {CHOOSE_STEPS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06}>
              <div className="flex h-full gap-3 rounded-2xl border border-border bg-card p-5 sm:p-6">
                <Icon name="CheckCircle2" className="mt-0.5 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                <div>
                  <h3 className="font-display text-sm font-bold sm:text-base">{s.title}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalThoughts() {
  return (
    <section id="final-thoughts" className="scroll-mt-24 mx-auto max-w-3xl px-4 pb-14 pt-8 sm:px-5 sm:pb-20 sm:pt-10">
      <SectionHead center eyebrow="Final Thoughts" title="Treat every channel as one connected system" />
      <Reveal delay={0.08}>
        <div className="mt-6 rounded-2xl border-l-4 border-accent bg-secondary/50 p-4 sm:mt-8 sm:p-6">
          <p className="text-sm text-muted-foreground sm:text-base">{FINAL_THOUGHTS}</p>
        </div>
      </Reveal>
    </section>
  );
}

export function ServiceFAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="mx-auto max-w-3xl px-4 pb-14 pt-8 sm:px-5 sm:pb-20 sm:pt-10">
      <SectionHead center eyebrow="FAQ" title="Questions, answered" />
      <div className="mt-6 space-y-2.5 sm:mt-10 sm:space-y-3">
        {SERVICE_FAQS.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.04}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left font-display text-sm font-semibold sm:p-5 sm:text-base"
              >
                {f.q}
                <Icons.ChevronDown className={`h-4 w-4 shrink-0 text-primary transition-transform sm:h-5 sm:w-5 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="px-4 pb-4 text-xs text-muted-foreground sm:px-5 sm:pb-5 sm:text-sm">{f.a}</p>
              </motion.div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function GuideCTA() {
  return (
    <section className="mx-auto max-w-[90rem] px-4 pb-16 pt-8 sm:px-5 sm:pt-10 lg:px-10">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-accent px-6 py-10 text-center text-white sm:px-8 sm:py-14 lg:py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-2xl font-extrabold sm:text-3xl md:text-4xl">
            Not sure which service is right for you?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/85 sm:mt-4 sm:text-base">
            Book a free consultation and we'll help you prioritize the right mix of services for your budget and goals.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8">
            <Link to="/contact" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5 sm:px-6 sm:py-3.5 sm:text-base">
              Get Free Consultation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Full page assembly. Drop this on whatever route this guide lives on
// (e.g. a /blog/:slug page), or import the individual section exports above
// wherever you'd rather place them.
export default function AgencyServicesGuide() {
  return (
    <>
      <GuideIntro />
      <TableOfContents />
      <KeyAdvantages />
      <CostTable />
      <ServicesRecap />
      <ServiceOverview />
      <SelectionMethodology />
      <HowToChoose />
      <FinalThoughts />
      <ServiceFAQ />
      <GuideCTA />
    </>
  );
}