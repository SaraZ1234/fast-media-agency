import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { AGENCY, HERO_IMG, ABOUT_IMG, SERVICES, WHY_US, INDUSTRIES, PROCESS, STATS, PRICING, PORTFOLIO, FAQS, BLOG, CLIENTS, TESTIMONIALS, TEAM } from '@/data/site';

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Icon({ name, className }) {
  // eslint-disable-next-line import/namespace
  const Cmp = Icons[name] || Icons.Sparkles;
  return <Cmp className={className} strokeWidth={1.8} />;
}

export function Eyebrow({ children }) {
  return <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">{children}</span>;
}

export function SectionHead({ eyebrow, title, sub, center }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
      <Reveal delay={0.05}><h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]">{title}</h2></Reveal>
      {sub && <Reveal delay={0.1}><p className="mt-4 text-lg text-muted-foreground">{sub}</p></Reveal>}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-40 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[120px]" />
      <div className="relative mx-auto grid max-w-[90rem] items-center gap-12 px-5 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-20">
        <div>
          <Reveal><Eyebrow>Full-Service Digital Marketing Agency</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Grow Your Business with{' '}
              <span className="relative whitespace-nowrap text-primary">Result-Driven
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none"><path d="M2 9c40-6 120-6 196-4" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinecap="round"/></svg>
              </span>{' '}Digital Marketing
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              We help businesses increase sales, generate quality leads, and build a powerful online presence through Digital Marketing, Social Media Management, Google Ads, Website Development, SEO, and Branding.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 active:scale-[0.98]">Get Free Consultation</Link>
              <Link to="/contact" className="rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-transform hover:-translate-y-0.5 active:scale-[0.98]">Request a Quote</Link>
              <Link to="/contact" className="rounded-full border border-border px-6 py-3.5 font-semibold transition-colors hover:bg-secondary">Start Your Project</Link>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 grid max-w-lg grid-cols-4 gap-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">{s.value}</div>
                  <div className="mt-1 text-[11px] leading-tight text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="relative">
          <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-gradient-to-br from-primary/30 to-accent/30 blur-xl" />
          <img src={HERO_IMG} alt="FAST MEDIA AGENCY team collaborating on marketing analytics" className="animate-float-slow relative w-full rounded-[2rem] border border-border object-cover shadow-2xl" loading="eager" />
        </Reveal>
      </div>
    </section>
  );
}

export function TrustBar() {
  return (
    <section className="mx-auto max-w-[90rem] px-5 py-14 lg:px-10">
      <Reveal className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Trusted by growing brands across the region</Reveal>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
        {CLIENTS.map((c, i) => (
          <Reveal key={c} delay={(i % 8) * 0.03}>
            <span className="font-display text-base font-bold tracking-tight text-muted-foreground/70 grayscale transition-all hover:text-primary hover:grayscale-0 sm:text-lg">{c}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionHead center eyebrow="Client Testimonials" title="Don't just take our word for it" sub="Real feedback from the businesses we have helped grow." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Icons.Star key={idx} className="h-4 w-4 fill-accent" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-accent font-display text-sm font-bold text-white">{t.initials}</span>
                  <div>
                    <p className="font-display text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section className="mx-auto max-w-[90rem] px-5 py-20 lg:px-10">
      <SectionHead center eyebrow="Our Team" title="The people behind your growth" sub="A small, senior team of specialists who care about your results as much as you do." />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((m, i) => (
          <Reveal key={m.name} delay={(i % 4) * 0.06}>
            <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-7 text-center transition-colors hover:bg-secondary/40">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-primary to-accent font-display text-2xl font-bold text-white shadow-lg shadow-primary/20">{m.initials}</span>
              <h3 className="mt-4 font-display font-bold">{m.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Marquee() {
  const items = ['Social Media', 'Google Ads', 'Meta Ads', 'SEO', 'Web Development', 'Branding', 'Video Editing', 'Graphic Design'];
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-primary/5 py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-lg font-semibold text-muted-foreground">
            {t} <Icons.Sparkle className="h-4 w-4 text-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function About({ full }) {
  return (
    <section className="mx-auto max-w-[90rem] px-5 py-20 lg:px-10">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="relative">
          <img src={ABOUT_IMG} alt="Marketing strategist workspace" className="w-full rounded-[1.75rem] border border-border object-cover shadow-xl" loading="lazy" />
          <div className="absolute -bottom-6 -right-4 rounded-2xl border border-border bg-card p-5 shadow-xl sm:right-6">
            <div className="font-display text-3xl font-extrabold text-primary">10+ yrs</div>
            <div className="text-sm text-muted-foreground">combined experience</div>
          </div>
        </Reveal>
        <div>
          <SectionHead eyebrow="About Us" title="A full-service growth partner, not just another agency." sub="FAST MEDIA AGENCY is a full-service digital marketing agency helping brands turn attention into revenue. We combine creative storytelling, precise media buying and modern web technology under one roof." />
          <Reveal delay={0.1}>
            <div className="mt-6 rounded-2xl border-l-4 border-accent bg-secondary/50 p-5">
              <p className="font-display text-lg font-semibold">Our Mission</p>
              <p className="mt-1 text-muted-foreground">To empower every business we work with to grow faster and smarter through honest, data-driven marketing that delivers measurable results.</p>
            </div>
          </Reveal>
          {full && (
            <Reveal delay={0.15}>
              <p className="mt-6 text-muted-foreground">From your first consultation to ongoing optimisation, we operate as an extension of your team, obsessed with the metrics that actually matter to your bottom line: qualified leads, sales and sustainable growth.</p>
            </Reveal>
          )}
          <Reveal delay={0.2}>
            <Link to="/services" className="mt-8 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Explore our services</Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid({ full, hideHead }) {
  const list = full ? SERVICES : SERVICES;
  return (
    <section className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        {!hideHead && <SectionHead center eyebrow="Our Services" title="Everything you need to grow, under one roof" sub="Eight core services engineered to attract, convert and retain customers." />}
        <div className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ${hideHead ? '' : 'mt-12'}`}>
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.06}>
              <Link to={`/services/${s.slug}`} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-colors group-hover:from-primary group-hover:to-accent group-hover:text-white">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.tagline}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {s.features.slice(0, full ? 30 : 5).map((f) => (
                    <li key={f} className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground">{f}</li>
                  ))}
                  {!full && s.features.length > 5 && <li className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">+{s.features.length - 5} more</li>}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">Learn more <Icons.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="mx-auto max-w-[90rem] px-5 py-20 lg:px-10">
      <SectionHead center eyebrow="Why Choose Us" title="Why businesses trust FAST MEDIA AGENCY" />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_US.map((w, i) => (
          <Reveal key={w.title} delay={(i % 3) * 0.06}>
            <div className="flex h-full gap-4 rounded-2xl border border-border p-5 transition-colors hover:bg-secondary/40">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent"><Icon name={w.icon} className="h-5 w-5" /></span>
              <div>
                <h3 className="font-display font-bold">{w.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{w.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionHead center eyebrow="Industries We Serve" title="Deep expertise across 14+ industries" />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind} delay={(i % 6) * 0.04}>
              <span className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">{ind}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="mx-auto max-w-[90rem] px-5 py-20 lg:px-10">
      <SectionHead center eyebrow="Our Process" title="A clear path from idea to growth" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((p, i) => (
          <Reveal key={p.n} delay={(i % 4) * 0.06}>
            <div className="relative h-full rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-4xl font-extrabold text-primary/20">{p.n}</span>
              <h3 className="mt-2 font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function PortfolioGrid() {
  return (
    <section className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionHead center eyebrow="Portfolio & Case Studies" title="Results we are proud of" sub="Real outcomes for real businesses across every service we offer." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06}>
              <Link to={`/portfolio/${p.slug}`} className="group block h-full overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-40 bg-gradient-to-br from-primary/80 to-accent/80">
                  <div className="absolute inset-0 grid place-items-center font-display text-5xl font-extrabold text-white/20">{p.title.charAt(0)}</div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.cat}</span>
                  <h3 className="mt-2 font-display text-lg font-bold transition-colors group-hover:text-primary">{p.title}</h3>
                  <p className="mt-3 flex items-center gap-2 font-semibold text-accent"><Icons.TrendingUp className="h-4 w-4" />{p.metric}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing({ hideHead }) {
  return (
    <section className="mx-auto max-w-[90rem] px-5 py-20 lg:px-10">
      {!hideHead && <SectionHead center eyebrow="Pricing" title="Transparent plans that scale with you" sub="No hidden fees. Cancel anytime. Custom quotes available." />}
      <div className={`grid gap-6 lg:grid-cols-3 ${hideHead ? '' : 'mt-12'}`}>
        {PRICING.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div className={`relative h-full rounded-3xl border p-8 ${p.featured ? 'border-primary bg-primary text-primary-foreground shadow-2xl shadow-primary/30 lg:-mt-4' : 'border-border bg-card'}`}>
              {p.featured && <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">Most Popular</span>}
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{p.desc}</p>
              <div className="mt-5 flex items-end gap-1"><span className="font-display text-4xl font-extrabold">{p.price}</span><span className={p.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}>{p.period}</span></div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm"><Icons.Check className={`h-4 w-4 ${p.featured ? 'text-accent-foreground' : 'text-accent'}`} />{f}</li>
                ))}
              </ul>
              <Link to="/contact" className={`mt-8 block rounded-full px-6 py-3 text-center font-semibold transition-transform hover:-translate-y-0.5 ${p.featured ? 'bg-white text-primary' : 'bg-primary text-primary-foreground'}`}>Get Started</Link>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function BlogGrid() {
  return (
    <section className="mx-auto max-w-[90rem] px-5 py-20 lg:px-10">
      <SectionHead center eyebrow="Blog & Insights" title="Marketing tips that drive growth" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {BLOG.map((b, i) => (
          <Reveal key={b.title} delay={(i % 3) * 0.06}>
            <Link to={`/blog/${b.slug}`} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
              <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{b.cat}</span>
              <h3 className="mt-4 font-display text-lg font-bold leading-snug transition-colors group-hover:text-primary">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.excerpt}</p>
              <div className="mt-auto flex items-center gap-3 pt-5 text-xs text-muted-foreground"><span>{b.date}</span><span>•</span><span>{b.read} read</span></div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function FAQ({ full, hideHead }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="mx-auto max-w-3xl px-5 py-20">
      {!hideHead && <SectionHead center eyebrow="FAQ" title="Questions, answered" />}
      <div className={`space-y-3 ${hideHead ? '' : 'mt-10'}`}>
        {FAQS.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.04}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-display font-semibold">
                {f.q}
                <Icons.ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <motion.div initial={false} animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }} className="overflow-hidden">
                <p className="px-5 pb-5 text-muted-foreground">{f.a}</p>
              </motion.div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="mx-auto max-w-[90rem] px-5 py-16 lg:px-10">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-accent px-8 py-14 text-center text-white lg:py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold sm:text-4xl">Ready to grow your business faster?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">Book a free consultation today and get a custom growth plan for your brand, no strings attached.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-full bg-white px-6 py-3.5 font-semibold text-primary transition-transform hover:-translate-y-0.5">Get Free Consultation</Link>
            <a href={`https://wa.me/${AGENCY.whatsapp}`} target="_blank" rel="noreferrer" className="rounded-full border border-white/40 px-6 py-3.5 font-semibold transition-colors hover:bg-white/10">Chat on WhatsApp</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
