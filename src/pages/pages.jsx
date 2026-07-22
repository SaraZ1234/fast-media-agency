import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, Check, ArrowRight, ArrowLeft, TrendingUp, Search as SearchIcon, Calendar, User, Tag, Sparkles } from 'lucide-react';
import * as Icons from 'lucide-react';
import { AGENCY, SERVICES, SERVICE_DETAILS, PORTFOLIO, BLOG, PRICING, TESTIMONIALS } from '@/data/site';
// import { Hero, Marquee, About, ServicesGrid, WhyUs, Industries, Process, PortfolioGrid, Pricing, BlogGrid, FAQ, CTA, SectionHead, Reveal, Eyebrow } from '@/components/sections';
import { Hero, Marquee, TrustBar, About, ServicesGrid, WhyUs, Industries, Process, PortfolioGrid, Testimonials, Team, Pricing, BlogGrid, FAQ, CTA, SectionHead, Reveal, Eyebrow, FastHighLevel, FastHighLevelPricing } from "@/sections";
import AdvertisingPlatformsGuide from "@/components/ui/AdvertisingPlatformsGuide";
import { FAQS } from "../data/site";


function CtaButtons({ light }) {
  return (
    <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
      <Link to="/contact" className={`rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98] sm:px-6 sm:py-3 sm:text-base ${light ? 'bg-white text-primary' : 'bg-primary text-primary-foreground shadow-primary/30'}`}>Get Free Consultation</Link>
      <Link to="/contact" className={`rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98] sm:px-6 sm:py-3 sm:text-base ${light ? 'bg-white/20 text-white border border-white/40' : 'bg-accent text-accent-foreground shadow-accent/25'}`}>Request a Quote</Link>
      <Link to="/contact" className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] sm:px-6 sm:py-3 sm:text-base ${light ? 'border-white/40 text-white hover:bg-white/10' : 'border-border hover:bg-secondary'}`}>Start Your Project</Link>
    </div>
  );
}

function Seo({ title, desc }) {
  return (
    <Helmet>
      <title>{title} | FAST MEDIA AGENCY</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={`${title} | FAST MEDIA AGENCY`} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

function PageHero({ eyebrow, title, sub }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[40rem] -translate-x-1/2 animate-pulse rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-[90rem] px-4 pb-10 pt-8 text-center sm:px-6 sm:pb-14 sm:pt-10 lg:px-10 lg:pb-24 lg:pt-14">
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.05}>
          <h1
            className="mx-auto mt-3 max-w-3xl font-display font-extrabold leading-[1.05] tracking-tight text-foreground sm:mt-4"
            style={{ fontSize: 'clamp(2rem, 3vw + 0.6rem, 3.25rem)' }}
          >
            {title}
          </h1>
        </Reveal>
        {sub && (
          <Reveal delay={0.1}>
            <p
              className="mx-auto mt-3 max-w-2xl leading-relaxed text-muted-foreground sm:mt-3.5"
              style={{ fontSize: 'clamp(1rem, 1vw + 0.65rem, 1.2rem)' }}
            >
              {sub}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Seo title="Result-Driven Digital Marketing Agency" desc="FAST MEDIA AGENCY helps businesses grow sales, generate leads and build a powerful online presence through digital marketing, ads, SEO, web development and branding." />
      <Hero />
      <Marquee />
      <TrustBar />
      <WhyUs />
      <FastHighLevel />

      {/* <About />
      <ServicesGrid />
      <WhyUs />
      <Industries /> */}
      {/* <Process /> */}
      {/* <PortfolioGrid />
      <Testimonials />
      <Pricing /> */}
      <ServicesGrid />
      <FastHighLevelPricing />
      <AdvertisingPlatformsGuide />
      {/* <CTA /> */}
    </>
  );
}

export function AboutPage() {
  return (<>
    <Seo title="About Us" desc="Learn about FAST MEDIA AGENCY, a full-service digital marketing agency on a mission to grow your business." />
    <PageHero eyebrow="About Us" title="We turn attention into revenue" sub="A full-service digital marketing agency built for ambitious brands." />
    <About full />
    <Team />
    <WhyUs />
    <Process />
    <Testimonials />
    <CTA />
  </>);
}

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Our Services"
        desc="Explore FAST MEDIA AGENCY services: social media, Google Ads, Meta Ads, SEO, web development, graphic design, video editing and branding."
      />

      <PageHero
        eyebrow="Our Services"
        title="Everything you need to grow"
        sub="Eight core services engineered to attract, convert and retain customers."
      />

      <ServicesGrid full hideHead />

      <WhyUs />

      <Process />

      <CTA />
    </>
  );
}

const TYPE_CONFIG = {
  branding: { label: 'Branding', icon: 'Sparkles' },
  social: { label: 'Social Media', icon: 'Share2' },
  website: { label: 'Website', icon: 'Globe' },
  video: { label: 'Video Editing', icon: 'PlayCircle' },
};

export function PortfolioPage() {
  const cats = ['All', ...Array.from(new Set(PORTFOLIO.map((p) => p.industry)))];
  const [active, setActive] = useState('All');

  const list =
    active === 'All'
      ? PORTFOLIO
      : PORTFOLIO.filter((p) => p.industry === active);

  return (
    <>
      <Seo
        title="Portfolio & Case Studies"
        desc="See real results FAST MEDIA AGENCY delivered across industries."
      />

      <PageHero
        eyebrow="Portfolio"
        title="Real work. Real growth. Real numbers."
        sub="Branding, social, websites, and video — browse the work we've shipped and the measurable results behind each one."
      />

      <section className="mx-auto max-w-[90rem] px-5 pb-12 pt-8 sm:pb-16 sm:pt-10 lg:px-10">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] font-semibold transition-all duration-200 ${active === c
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border hover:-translate-y-0.5 hover:border-primary hover:text-primary'
                }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => {
            const cfg = TYPE_CONFIG[p.type] || null;
            // eslint-disable-next-line import/namespace
            const TypeIcon = (cfg && Icons[cfg.icon]) || (p.icon && Icons[p.icon]) || Sparkles;
            const tags = p.tags || [p.industry, p.cat].filter(Boolean);
            const isVideo = p.type === 'video';
            const isWebsite = p.type === 'website';

            return (
              <Reveal key={p.slug} delay={(i % 3) * 0.06}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">

                  {/* Thumbnail */}
                  <Link
                    to={`/portfolio/${p.slug}`}
                    className="relative block overflow-hidden"
                  >
                    {isWebsite ? (
                      // Browser-chrome mockup frame for website projects
                      <div className="bg-secondary/60">
                        <div className="flex items-center gap-1.5 border-b border-border/60 px-3 py-2">
                          <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                          <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                          <span className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                        </div>
                        <div className="h-40 w-full overflow-hidden sm:h-44">
                          {p.image ? (
                            <img
                              src={p.image}
                              alt={p.title}
                              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="grid h-full w-full place-items-center bg-gradient-to-br from-primary/80 to-accent/80 font-display text-5xl font-extrabold text-white/20">
                              {p.title.charAt(0)}
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="relative h-44 overflow-hidden sm:h-48">
                        {p.image ? (
                          <img
                            src={p.image}
                            alt={p.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="relative h-full w-full bg-gradient-to-br from-primary/80 to-accent/80">
                            <div className="absolute inset-0 grid place-items-center font-display text-5xl font-extrabold text-white/20">
                              {p.title.charAt(0)}
                            </div>
                          </div>
                        )}

                        {/* Play overlay for video samples */}
                        {isVideo && (
                          <div className="absolute inset-0 grid place-items-center bg-black/20 transition-colors duration-300 group-hover:bg-black/30">
                            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/95 text-primary shadow-md transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                              <Icons.PlayCircle className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.6} />
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {cfg && (
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[clamp(0.625rem,0.6rem+0.1vw,0.6875rem)] font-semibold text-primary shadow-sm backdrop-blur-sm">
                        <TypeIcon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
                        {cfg.label}
                      </span>
                    )}

                    {p.link && (
                      <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[clamp(0.625rem,0.6rem+0.1vw,0.6875rem)] font-semibold text-primary shadow-sm backdrop-blur-sm">
                        Live site
                      </span>
                    )}
                  </Link>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <span className="text-[clamp(0.6875rem,0.66rem+0.1vw,0.75rem)] font-semibold uppercase tracking-wider text-primary">
                      {p.cat}
                    </span>

                    <Link to={`/portfolio/${p.slug}`}>
                      <h3 className="mt-2 font-display text-[clamp(1.0625rem,1rem+0.3vw,1.1875rem)] font-bold leading-snug transition-colors group-hover:text-primary">
                        {p.title}
                      </h3>
                    </Link>

                    {(p.description || p.summary) && (
                      <p className="mt-2 text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] leading-relaxed text-muted-foreground">
                        {p.description || p.summary}
                      </p>
                    )}

                    {tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {tags.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-secondary px-2.5 py-1 text-[clamp(0.6875rem,0.66rem+0.1vw,0.75rem)] font-medium text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-4 flex-1 space-y-1.5">
                      <p className="flex items-center gap-2 text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] font-semibold text-accent">
                        <TrendingUp className="h-4 w-4 shrink-0" />
                        {p.metric}
                      </p>

                      {p.metrics &&
                        p.metrics.slice(0, 2).map((m) => (
                          <p
                            key={m}
                            className="flex items-center gap-2 text-[clamp(0.75rem,0.72rem+0.15vw,0.8125rem)] font-medium text-muted-foreground"
                          >
                            <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                            {m}
                          </p>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-4">
                      <Link
                        to={`/portfolio/${p.slug}`}
                        className="inline-flex items-center gap-1 text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] font-bold text-primary transition-all group-hover:gap-1.5"
                      >
                        View project
                        <Icons.ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                      </Link>

                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] font-semibold text-muted-foreground transition-colors hover:text-accent"
                        >
                          Visit live website
                          <Icons.ExternalLink className="h-3.5 w-3.5 shrink-0" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}

export function PortfolioDetailPage() {
  const { slug } = useParams();
  const item = PORTFOLIO.find((p) => p.slug === slug);
  if (!item) return <NotFound label="Portfolio item" to="/portfolio" cta="Back to portfolio" />;
  const related = PORTFOLIO.filter((p) => p.slug !== slug).slice(0, 3);
  const quote = TESTIMONIALS.find((t) => item.client.toLowerCase().includes(t.company.toLowerCase()) || t.company.toLowerCase().includes(item.client.toLowerCase().split(' ')[0].toLowerCase()));
  const gallery = item.gallery || [];
  const hasBeforeAfter = item.before && item.after;

  return (<>
    <Seo title={item.title} desc={item.challenge} />
    <PageHero eyebrow={item.industry} title={item.title} sub={`${item.client} \u2014 ${item.cat}`} />

    <section className="mx-auto max-w-4xl px-5 pb-12 pt-8 sm:pb-16 sm:pt-10">

      {/* Hero image / banner */}
      <Reveal>
        <div className="relative h-56 overflow-hidden rounded-3xl sm:h-72 lg:h-80">
          {item.image ? (
            <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
          ) : (
            <div className="relative h-full w-full bg-gradient-to-br from-primary/80 to-accent/80">
              <div className="absolute inset-0 grid place-items-center font-display text-[clamp(3.5rem,3rem+2vw,6rem)] font-extrabold text-white/20">
                {item.title.charAt(0)}
              </div>
            </div>
          )}
          {item.link && (
  <a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] font-bold text-primary shadow-lg transition-transform duration-200 hover:scale-105 sm:bottom-5 sm:right-5"
  >
    Visit live website
    <Icons.ExternalLink className="h-4 w-4 shrink-0" />
  </a>
)}
        </div>
      </Reveal>

      {/* Info cards */}
      <Reveal delay={0.05}>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <InfoCard label="Client" value={item.client} icon={User} />
          <InfoCard label="Industry" value={item.industry} icon={Tag} />
          <InfoCard label="Services" value={item.cat} icon={Sparkles} />
        </div>
      </Reveal>

      {(item.duration || item.teamSize) && (
        <Reveal delay={0.08}>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {item.duration && <InfoCard label="Project duration" value={item.duration} icon={Icons.Clock3} />}
            {item.teamSize && <InfoCard label="Team involved" value={item.teamSize} icon={Icons.Users} />}
          </div>
        </Reveal>
      )}

      <div className="mt-10 space-y-8 sm:mt-12">

        {/* Challenge */}
        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Icons.AlertCircle className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h3 className="font-display text-base font-bold sm:text-lg">The challenge</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.challenge}</p>
          </div>
        </Reveal>

        {/* Solution */}
        <Reveal delay={0.05}>
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                <Icons.Lightbulb className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h3 className="font-display text-base font-bold sm:text-lg">Our solution</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.solution}</p>
          </div>
        </Reveal>

        {/* Approach */}
        {item.approach && item.approach.length > 0 && (
          <div>
            <h3 className="font-display text-base font-bold sm:text-lg">Our approach</h3>
            <div className="mt-4 space-y-3">
              {item.approach.map((step, i) => (
                <Reveal key={step} delay={(i % 6) * 0.05}>
                  <div className="flex gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 font-display text-sm font-extrabold text-primary">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="pt-1.5 text-sm leading-relaxed text-muted-foreground">{step}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Gallery */}
        {gallery.length > 0 && (
          <div>
            <h3 className="font-display text-base font-bold sm:text-lg">Project gallery</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {gallery.map((g, i) => (
                <Reveal key={g.src || g} delay={(i % 6) * 0.05}>
                  <div className="group overflow-hidden rounded-2xl border border-border bg-card">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={g.src || g}
                        alt={g.caption || `${item.title} preview ${i + 1}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {g.caption && (
                      <p className="px-4 py-3 text-sm text-muted-foreground">{g.caption}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Before / After */}
        {hasBeforeAfter && (
          <div>
            <h3 className="font-display text-base font-bold sm:text-lg">Before &amp; after</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src={item.before} alt={`${item.title} before`} className="h-full w-full object-cover" />
                </div>
                <p className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Before</p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-primary/40 bg-card">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src={item.after} alt={`${item.title} after`} className="h-full w-full object-cover" />
                </div>
                <p className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary">After</p>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        <div>
          <h3 className="font-display text-base font-bold sm:text-lg">Results achieved</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {item.results.map((r, i) => {
              const isObj = typeof r === 'object' && r !== null;
              const value = isObj ? r.value : r;
              const label = isObj ? r.label : null;
              return (
                <Reveal key={value} delay={(i % 6) * 0.05}>
                  <div className="rounded-2xl border border-border bg-card p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                    <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-accent/10 text-accent">
                      <TrendingUp className="h-5 w-5" />
                    </span>
                    <p className="mt-3 font-display text-lg font-bold text-primary">{value}</p>
                    {label && <p className="mt-1 text-xs text-muted-foreground">{label}</p>}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Tech */}
        <div>
          <h3 className="font-display text-base font-bold sm:text-lg">Technologies used</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tech.map((t) => (
              <span key={t} className="rounded-full bg-secondary px-3 py-1.5 text-sm font-medium">{t}</span>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {quote && (
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-7">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: quote.rating }).map((_, idx) => <Icons.Star key={idx} className="h-4 w-4 fill-accent" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground sm:text-base">&ldquo;{quote.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold">
                {quote.name} <span className="font-normal text-muted-foreground">— {quote.role}, {quote.company}</span>
              </p>
            </div>
          </Reveal>
        )}
      </div>

     {/* CTA */}
<Reveal>
  <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent px-6 pb-10 pt-8 text-center text-white sm:px-8 sm:pb-12 sm:pt-9">
    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 animate-pulse rounded-full bg-white/10 blur-2xl" />
    <h3 className="relative font-display text-lg font-bold sm:text-xl">Want results like these?</h3>
    <p className="relative mx-auto mt-3 max-w-md text-xs text-white/85 sm:text-sm">
      Let's build something similarly impactful for your brand — book a free consultation, no strings attached.
    </p>
    <div className="relative mt-6 flex justify-center"><CtaButtons light /></div>
  </div>
</Reveal>
      {/* Related — reverted to original, untouched */}
      <h3 className="mt-14 font-display text-xl font-bold">More case studies</h3>
      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        {related.map((p) => (
          <Link key={p.slug} to={`/portfolio/${p.slug}`} className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg">
            <span className="text-xs font-semibold text-primary">{p.cat}</span>
            <h4 className="mt-1 font-display font-bold transition-colors group-hover:text-primary">{p.title}</h4>
          </Link>
        ))}
      </div>

      <Link to="/portfolio" className="mt-10 inline-flex items-center gap-2 font-semibold text-primary">
        <ArrowLeft className="h-4 w-4" /> Back to portfolio
      </Link>
    </section>
  </>);
}

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <NotFound label="Service" to="/services" cta="Back to services" />;
  const detail = SERVICE_DETAILS[slug] || { description: service.tagline, benefits: [], process: [] };
  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);
  // eslint-disable-next-line import/namespace
  const IconCmp = Icons[service.icon] || Sparkles;
  const example = PORTFOLIO.find((p) => p.cat.toLowerCase().includes(service.title.split(' ')[0].toLowerCase())) || PORTFOLIO[0];
  const testimonials = (typeof TESTIMONIALS !== 'undefined' && TESTIMONIALS) || [];

  return (<>
    <Seo title={service.title} desc={detail.description} />
    <PageHero eyebrow="Service" title={service.title} sub={service.tagline} />

    <section className="mx-auto max-w-[72rem] px-4 py-10 sm:px-5 sm:py-16 lg:px-10">

      {/* Intro + trust indicators */}
      <Reveal>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white sm:h-14 sm:w-14">
            <IconCmp className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.8} />
          </span>
          <div className="flex-1">
            <p className="max-w-2xl text-[clamp(0.9375rem,0.88rem+0.3vw,1.125rem)] leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Grow faster with expert-led {service.title.toLowerCase()}. </span>
              {detail.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Icons.Users className="h-4 w-4 shrink-0 text-primary" />500+ businesses served</span>
              <span className="inline-flex items-center gap-1.5"><Icons.Star className="h-4 w-4 shrink-0 fill-accent text-accent" />4.9/5 average rating</span>
              <span className="inline-flex items-center gap-1.5"><Icons.ShieldCheck className="h-4 w-4 shrink-0 text-primary" />No long-term contracts</span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Included + Ideal for / Benefits */}
      <div className="mt-10 grid gap-8 sm:mt-12 sm:gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="font-display text-[clamp(1.25rem,1.15rem+0.5vw,1.5rem)] font-bold">What is included</h2>
          <ul className="mt-5 grid gap-2 xs:grid-cols-2">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-3 py-2.5 text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] sm:px-4 sm:py-3">
                <Check className="h-4 w-4 shrink-0 text-accent" />{f}
              </li>
            ))}
          </ul>

          {detail.faqs && detail.faqs.length > 0 && (
            <div className="mt-12 sm:mt-14">
              <div className="max-w-2xl">
                <span className="text-[clamp(0.6875rem,0.66rem+0.1vw,0.75rem)] font-semibold uppercase tracking-wider text-primary">
                  FAQs
                </span>
                <h2 className="mt-2 font-display text-[clamp(1.375rem,1.2rem+0.9vw,1.625rem)] font-extrabold leading-tight">
                  {service.title} FAQs
                </h2>
                <p className="mt-2 text-[clamp(0.875rem,0.83rem+0.25vw,1rem)] leading-relaxed text-muted-foreground">
                  Answers to the questions we hear most about {service.title.toLowerCase()}.
                </p>
              </div>

              <div className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                {detail.faqs.map((f, i) => (
                  <Reveal key={f.q} delay={(i % 6) * 0.05}>
                    <div
                      className="px-4 py-1 transition-colors duration-200 hover:bg-secondary/40 sm:px-6
              [&_button]:text-[clamp(0.875rem,0.83rem+0.25vw,1rem)]
              [&_h3]:text-[clamp(0.875rem,0.83rem+0.25vw,1rem)]
              [&_h4]:text-[clamp(0.875rem,0.83rem+0.25vw,1rem)]
              [&_p]:text-[clamp(0.8125rem,0.78rem+0.2vw,0.9375rem)]"
                    >
                      <ServiceFaqItem q={f.q} a={f.a} />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <h2 className="font-display text-[clamp(1.25rem,1.15rem+0.5vw,1.5rem)] font-bold">Benefits</h2>
          <ul className="mt-5 grid gap-3">
            {detail.benefits.map((b, i) => (
              <Reveal key={b} delay={(i % 6) * 0.05}>
                <li className="group flex items-start gap-3 rounded-2xl border border-border bg-card p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 sm:p-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white sm:h-9 sm:w-9">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="pt-1.5 text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] leading-relaxed text-muted-foreground">{b}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          {detail.timeline && (
            <div className="mt-8 rounded-2xl border-l-4 border-accent bg-secondary/50 p-4 sm:p-5">
              <p className="flex items-center gap-2 font-display text-[clamp(0.875rem,0.84rem+0.2vw,1rem)] font-semibold">
                <Icons.Clock3 className="h-4 w-4 shrink-0 text-accent" />Typical timeline
              </p>
              <p className="mt-1.5 text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] text-muted-foreground">{detail.timeline}</p>
            </div>
          )}
        </div>
      </div>

      {/* Process */}
      <div className="mt-12 sm:mt-14">
        <h2 className="font-display text-[clamp(1.25rem,1.15rem+0.5vw,1.5rem)] font-bold">Our process</h2>
        <div className="mt-6 grid gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {detail.process.map((step, i) => (
            <Reveal key={step} delay={(i % 5) * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg sm:p-5">
                <span className="font-display text-[clamp(1.5rem,1.35rem+0.75vw,1.875rem)] font-extrabold text-primary/20">{String(i + 1).padStart(2, '0')}</span>
                <p className="mt-2 text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] font-semibold leading-snug">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="mt-12 sm:mt-14">
        <h2 className="font-display text-[clamp(1.25rem,1.15rem+0.5vw,1.5rem)] font-bold">Pricing</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className={`relative flex h-full flex-col rounded-3xl border p-5 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${p.featured
                ? 'border-2 border-primary bg-primary text-primary-foreground hover:shadow-xl hover:shadow-primary/20'
                : 'border-border bg-card hover:border-primary/40 hover:shadow-lg'
                }`}>
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-4 py-1 text-[clamp(0.625rem,0.6rem+0.1vw,0.6875rem)] font-bold uppercase tracking-wide text-white">
                    Recommended
                  </span>
                )}
                <h3 className="font-display text-[clamp(1.0625rem,1rem+0.3vw,1.25rem)] font-bold">{p.name}</h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className="font-display text-[clamp(1.5rem,1.35rem+0.75vw,1.875rem)] font-extrabold">{p.price}</span>
                  <span className={`text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] ${p.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{p.period}</span>
                </div>
                <p className={`mt-2 text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] ${p.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{p.desc}</p>

                {(p.deliverables || p.features) && (
                  <ul className="mt-5 flex-1 space-y-2">
                    {(p.deliverables || p.features).map((d) => (
                      <li key={d} className={`flex items-start gap-2 text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] ${p.featured ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? 'text-white' : 'text-primary'}`} />{d}
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  to="/contact"
                  className={`mt-6 block rounded-full px-5 py-2.5 text-center text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] font-semibold transition-transform duration-200 hover:scale-[1.02] ${p.featured ? 'bg-white text-primary' : 'bg-primary text-primary-foreground'
                    }`}
                >
                  Get started
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Case study */}
      <Reveal>
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-secondary/40 sm:mt-14">
          {example.image && (
            <div className="aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
              <img
                src={example.image}
                alt={example.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          )}
          <div className="p-5 sm:p-8">
            <span className="text-[clamp(0.6875rem,0.66rem+0.1vw,0.75rem)] font-semibold uppercase tracking-wider text-primary">Case study</span>
            <h2 className="mt-2 font-display text-[clamp(1.25rem,1.15rem+0.5vw,1.5rem)] font-bold">{example.title}</h2>
            <p className="mt-3 max-w-2xl text-[clamp(0.875rem,0.84rem+0.2vw,1rem)] leading-relaxed text-muted-foreground">{example.solution}</p>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
              <p className="flex items-center gap-2 text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] font-semibold text-accent">
                <TrendingUp className="h-4 w-4 shrink-0" />{example.metric}
              </p>
              {example.metrics && example.metrics.map((m) => (
                <p key={m} className="flex items-center gap-2 text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] font-semibold text-muted-foreground">
                  <Check className="h-4 w-4 shrink-0 text-primary" />{m}
                </p>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link to={`/portfolio/${example.slug}`} className="inline-flex items-center gap-1 text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] font-semibold text-primary transition-colors hover:text-accent">
                Read the case study <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
              {example.link && (
                <a href={example.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] font-semibold text-accent transition-colors hover:text-primary">
                  View live project <Icons.ExternalLink className="h-4 w-4 shrink-0" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Reveal>

      {/* FAQs */}
      {detail.faqs && detail.faqs.length > 0 && (
        <div className="mt-12 sm:mt-14">
          <h2 className="font-display text-[clamp(1.25rem,1.15rem+0.5vw,1.5rem)] font-bold">{service.title} FAQs</h2>
          <div className="mt-6 space-y-3">
            {detail.faqs.map((f) => <ServiceFaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <div className="mt-12 sm:mt-14">
          <h2 className="font-display text-[clamp(1.25rem,1.15rem+0.5vw,1.5rem)] font-bold">What clients say</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg sm:p-6">
                  <div className="flex items-center gap-1 text-accent">
                    {Array.from({ length: t.rating || 5 }).map((_, si) => (
                      <Icons.Star key={si} className="h-4 w-4 shrink-0 fill-accent" />
                    ))}
                  </div>
                  <p className="mt-3 flex-1 text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] leading-relaxed text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4 flex items-center gap-3">
                    {t.avatar
                      ? <img src={t.avatar} alt={t.name} className="h-9 w-9 shrink-0 rounded-full object-cover" />
                      : (
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-[0.7rem] font-semibold text-primary">
                          {t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                        </span>
                      )}
                    <div>
                      <p className="text-[clamp(0.8125rem,0.78rem+0.2vw,0.875rem)] font-semibold">{t.name}</p>
                      {(t.role || t.company) && (
                        <p className="text-[clamp(0.6875rem,0.66rem+0.1vw,0.75rem)] text-muted-foreground">
                          {t.role}{t.role && t.company ? ', ' : ''}{t.company}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
<Reveal>
  <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-accent px-5 pb-8 pt-6 text-center text-white sm:mt-14 sm:px-8 sm:pb-12 sm:pt-9">
    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 animate-pulse rounded-full bg-white/10 blur-2xl" />
    <h2 className="relative font-display text-lg font-extrabold leading-tight sm:text-xl">
      Ready to get started with {service.title}?
    </h2>
    <div className="relative mt-6 flex justify-center"><CtaButtons light /></div>
  </div>
</Reveal>

      {/* Related services */}
      <div className="mt-12 sm:mt-14">
        <h2 className="font-display text-[clamp(1.25rem,1.15rem+0.5vw,1.5rem)] font-bold">Related services</h2>
        <div className="mt-6 grid gap-4 xs:grid-cols-2 lg:grid-cols-4">
          {related.map((s, i) => { // eslint-disable-next-line import/namespace
            const RI = Icons[s.icon] || Sparkles;
            return (
              <Reveal key={s.slug} delay={(i % 4) * 0.06}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group block h-full rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg sm:p-5"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white sm:h-10 sm:w-10">
                    <RI className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
                  </span>
                  <h4 className="mt-3 font-display text-[clamp(0.9375rem,0.9rem+0.2vw,1.0625rem)] font-bold transition-colors group-hover:text-primary">{s.title}</h4>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>

    </section>
  </>);
}

function InfoCard({ label, value, icon: I }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5"><I className="h-5 w-5 text-primary" /><div className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div><div className="mt-1 font-semibold">{value}</div></div>
  );
}

function Block({ title, children }) {
  return (<div><h3 className="font-display text-xl font-bold">{title}</h3><p className="mt-3 text-muted-foreground">{children}</p></div>);
}

function ServiceFaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-display font-semibold">
        {q}
        <Icons.ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="px-5 pb-5 text-sm text-muted-foreground">{a}</p>}
    </div>
  );
}

function NotFound({ label, to, cta }) {
  return (
    <section className="mx-auto max-w-xl px-5 py-32 text-center">
      <h1 className="font-display text-3xl font-extrabold">{label} not found</h1>
      <p className="mt-3 text-muted-foreground">The page you are looking for does not exist or has moved.</p>
      <Link to={to} className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"><ArrowLeft className="h-4 w-4" /> {cta}</Link>
    </section>
  );
}

export function PricingPage() {
  return (<>
    <Seo title="Pricing" desc="Transparent, flexible pricing plans from FAST MEDIA AGENCY." />
    <PageHero eyebrow="Pricing" title="Plans that scale with you" sub="Transparent pricing with no hidden fees." />
    <Pricing hideHead />
    <FAQ hideHead />
    <CTA />
  </>);
}

// ---- Content parsing helpers -----------------------------------------------

function mdInline(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
    .replace(/`(.+?)`/g, '<code class="rounded bg-secondary px-1.5 py-0.5 text-[0.85em] font-mono text-primary">$1</code>');
}

function parseBlocks(content) {
  const lines = content.split('\n');
  const blocks = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }

    if (line.startsWith('### ')) {
      blocks.push({ type: 'h3', text: line.slice(4) });
      i++;
    } else if (line.startsWith('> ')) {
      const parts = [];
      while (i < lines.length && lines[i].trim().startsWith('> ')) {
        parts.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push({ type: 'quote', text: parts.join(' ') });
    } else if (/^-\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^-\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^-\s+/, ''));
        i++;
      }
      blocks.push({ type: 'ul', items });
    } else if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }
      blocks.push({ type: 'ol', items });
    } else {
      const parts = [];
      while (i < lines.length && lines[i].trim() && !/^(###\s|>\s|-\s|\d+\.\s)/.test(lines[i].trim())) {
        parts.push(lines[i].trim());
        i++;
      }
      blocks.push({ type: 'p', text: parts.join(' ') });
    }
  }
  return blocks;
}

// Topic keywords per category so cover art is visually relevant, not random.
// Swap picsum for a real photo/CDN URL per slug whenever you have final assets —
// this function is the single place that needs to change.
const CATEGORY_SEED = {
  'Google Ads': 'ppc-search-analytics',
  'Social Media': 'social-content-creator',
  SEO: 'search-ranking-data',
  'Web Development': 'website-code-design',
  Video: 'video-production-camera',
  Branding: 'brand-identity-design',
  'Email Marketing': 'email-inbox-campaign',
  'Paid Social': 'social-ads-mobile',
  'UI/UX Design': 'app-interface-design',
  Copywriting: 'writing-desk-notebook',
  Analytics: 'data-dashboard-charts',
  Growth: 'team-collaboration-growth',
};

function coverImage(slug, cat, w = 1200, h = 700) {
  const seed = CATEGORY_SEED[cat] || 'marketing-strategy';
  return `https://picsum.photos/seed/${seed}-${slug}/${w}/${h}`;
}

function ContentRenderer({ post }) {
  const blocks = useMemo(() => parseBlocks(post.content), [post.content]);
  let h3Count = 0;

  return (
    <div className="space-y-6">
      {blocks.map((b, idx) => {
        if (b.type === 'h3') {
          h3Count += 1;
          const withImage = h3Count % 2 === 0;
          return (
            <div key={idx}>
              <h2 className="mt-10 font-display text-xl font-bold text-foreground sm:text-2xl">
                {b.text}
              </h2>
              {withImage && (
                <figure className="mt-5 overflow-hidden rounded-2xl border border-border">
                  <img
                    src={coverImage(`${post.slug}-${h3Count}`, post.cat, 900, 500)}
                    alt={`${b.text} illustration`}
                    className="h-48 w-full object-cover sm:h-64"
                    loading="lazy"
                  />
                </figure>
              )}
            </div>
          );
        }
        if (b.type === 'quote') {
          return (
            <blockquote
              key={idx}
              className="my-6 rounded-2xl border-l-4 border-primary bg-primary/5 px-5 py-4 text-foreground"
              dangerouslySetInnerHTML={{ __html: mdInline(b.text) }}
            />
          );
        }
        if (b.type === 'ul') {
          return (
            <ul key={idx} className="space-y-2.5">
              {b.items.map((it, j) => (
                <li key={j} className="flex gap-3 text-muted-foreground">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  <span dangerouslySetInnerHTML={{ __html: mdInline(it) }} />
                </li>
              ))}
            </ul>
          );
        }
        if (b.type === 'ol') {
          return (
            <ol key={idx} className="space-y-3">
              {b.items.map((it, j) => (
                <li key={j} className="flex gap-3 text-muted-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {j + 1}
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: mdInline(it) }} />
                </li>
              ))}
            </ol>
          );
        }
        return (
          <p
            key={idx}
            className="leading-relaxed text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: mdInline(b.text) }}
          />
        );
      })}
    </div>
  );
}

// ---- BlogPage ---------------------------------------------------------------

export function BlogPage() {
  const cats = ['All', ...Array.from(new Set(BLOG.map((b) => b.cat)))];
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');
  const list = useMemo(
    () =>
      BLOG.filter(
        (b) =>
          (active === 'All' || b.cat === active) &&
          (b.title.toLowerCase().includes(query.toLowerCase()) ||
            b.excerpt.toLowerCase().includes(query.toLowerCase()))
      ),
    [active, query]
  );

  const featured = active === 'All' && !query ? list[0] : null;
  const rest = featured ? list.slice(1) : list;

  return (
    <>
      <Seo title="Blog & Insights" desc="Marketing tips, guides and insights from FAST MEDIA AGENCY." />
      <PageHero eyebrow="Blog" title="Insights to grow smarter" sub="Practical marketing tips, playbooks and guides." />

      <section className="mx-auto max-w-[90rem] px-5 pb-16 pt-10 sm:pt-12 lg:px-10">
        <div className="flex flex-col items-center gap-5">
          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-full border border-input bg-background py-3 pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${active === c
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border hover:border-primary hover:text-primary'
                  }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {list.length === 0 ? (
          <p className="mt-16 text-center text-muted-foreground">No articles match your search.</p>
        ) : (
          <>
            {featured && (
              <Reveal>
                <Link
                  to={`/blog/${featured.slug}`}
                  className="group mt-10 grid gap-6 overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-sm transition-shadow hover:shadow-xl sm:mt-12 sm:grid-cols-2 sm:p-4"
                >
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={coverImage(featured.slug, featured.cat)}
                      alt={featured.title}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-3 sm:p-6">
                    <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Latest • {featured.cat}
                    </span>
                    <h2
                      className="mt-4 font-display font-bold leading-snug transition-colors group-hover:text-primary"
                      style={{ fontSize: 'clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)' }}
                    >
                      {featured.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground" style={{ fontSize: 'clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)' }}>
                      {featured.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-bold text-foreground">
                        {featured.author.split(' ').map((n) => n[0]).join('')}
                      </span>
                      <span>{featured.author}</span>
                      <span>•</span>
                      <span>{featured.date}</span>
                      <span>•</span>
                      <span>{featured.read} read</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            )}

            <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((b, i) => (
                <Reveal key={b.slug} delay={(i % 3) * 0.06}>
                  <Link
                    to={`/blog/${b.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={coverImage(b.slug, b.cat, 800, 450)}
                        alt={b.title}
                        className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {b.cat}
                      </span>
                      <h3
                        className="mt-4 font-display font-bold leading-snug transition-colors group-hover:text-primary"
                        style={{ fontSize: 'clamp(0.9375rem, 0.88rem + 0.3vw, 1.0625rem)' }}
                      >
                        {b.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground" style={{ fontSize: 'clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)' }}>
                        {b.excerpt}
                      </p>
                      <div className="mt-auto flex items-center gap-3 pt-5 text-xs text-muted-foreground">
                        <span>{b.author}</span>
                        <span>•</span>
                        <span>{b.date}</span>
                        <span>•</span>
                        <span>{b.read} read</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </section>
      <CTA />
    </>
  );
}

// ---- BlogDetailPage -----------------------------------------------------------

export function BlogDetailPage() {
  const { slug } = useParams();
  const post = BLOG.find((b) => b.slug === slug);
  const [comments, setComments] = useState([]);
  const [cForm, setCForm] = useState({ name: '', text: '' });

  if (!post) return <NotFound label="Article" to="/blog" cta="Back to blog" />;

  const related = BLOG.filter((b) => b.slug !== slug && b.cat === post.cat).slice(0, 3);
  const relatedFallback = related.length ? related : BLOG.filter((b) => b.slug !== slug).slice(0, 3);

  const addComment = (e) => {
    e.preventDefault();
    if (!cForm.name || !cForm.text) return;
    setComments((c) => [...c, { ...cForm, id: Date.now() }]);
    setCForm({ name: '', text: '' });
  };

  return (
    <>
      <Seo title={post.title} desc={post.excerpt} />
      <PageHero eyebrow={post.cat} title={post.title} sub={post.excerpt} />

      <article className="mx-auto max-w-3xl px-5 pb-12 pt-6 sm:pb-16 sm:pt-10">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground" style={{ fontSize: 'clamp(0.75rem, 0.71rem + 0.2vw, 0.875rem)' }}>
          <span className="flex items-center gap-1.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-[9px] font-bold text-foreground sm:h-7 sm:w-7 sm:text-[10px]">
              {post.author.split(' ').map((n) => n[0]).join('')}
            </span>
            {post.author}
          </span>
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />{post.date}</span>
          <span className="flex items-center gap-1.5"><Tag className="h-3.5 w-3.5 sm:h-4 sm:w-4" />{post.cat}</span>
          <span>{post.read} read</span>
        </div>

        <Reveal>
          <figure className="mt-5 overflow-hidden rounded-2xl sm:mt-6 sm:rounded-3xl">
            <img
              src={coverImage(post.slug, post.cat)}
              alt={post.title}
              className="h-48 w-full object-cover sm:h-80"
              loading="eager"
            />
          </figure>
        </Reveal>

        <div className="mt-8 sm:mt-10">
          <p className="leading-relaxed text-foreground" style={{ fontSize: 'clamp(0.9375rem, 0.88rem + 0.3vw, 1.125rem)' }}>{post.excerpt}</p>
          <div className="mt-6 sm:mt-8">
            <ContentRenderer post={post} />
          </div>
        </div>

        <Reveal>
          <div className="mt-10 rounded-2xl border border-border bg-secondary/40 p-5 text-center sm:mt-12 sm:rounded-3xl sm:p-8">
            <h3 className="font-display font-bold" style={{ fontSize: 'clamp(1.125rem, 1.03rem + 0.5vw, 1.5rem)' }}>Grow your business with FAST MEDIA AGENCY</h3>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground" style={{ fontSize: 'clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)' }}>
              Want a hand putting this into practice? Our team can build and run it for you.
            </p>
            <div className="mt-5 flex justify-center sm:mt-6"><CtaButtons /></div>
          </div>
        </Reveal>

        <div className="mt-12 sm:mt-14">
          <h3 className="font-display font-bold" style={{ fontSize: 'clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)' }}>Comments ({comments.length})</h3>
          <form onSubmit={addComment} className="mt-4 space-y-3 sm:mt-5">
            <input
              value={cForm.name}
              onChange={(e) => setCForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Your name"
              className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 sm:py-3"
            />
            <textarea
              value={cForm.text}
              onChange={(e) => setCForm((f) => ({ ...f, text: e.target.value }))}
              rows={3}
              placeholder="Add a comment..."
              className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 sm:py-3"
            />
            <button type="submit" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 active:scale-[0.98]">
              Post comment
            </button>
          </form>
          <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
            {comments.map((c) => (
              <Reveal key={c.id}>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                      {c.name.slice(0, 1).toUpperCase()}
                    </span>
                    {c.name}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <h3 className="mt-12 font-display font-bold sm:mt-14" style={{ fontSize: 'clamp(1.0625rem, 1rem + 0.35vw, 1.25rem)' }}>Related posts</h3>
        <div className="mt-4 grid gap-4 sm:mt-5 sm:grid-cols-3 sm:gap-5">
          {relatedFallback.map((b, i) => (
            <Reveal key={b.slug} delay={i * 0.06}>
              <Link
                to={`/blog/${b.slug}`}
                className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <img src={coverImage(b.slug, b.cat, 500, 300)} alt={b.title} className="h-28 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-32" loading="lazy" />
                <div className="p-4 sm:p-5">
                  <span className="text-xs font-semibold text-primary">{b.cat}</span>
                  <h4 className="mt-1 font-display font-bold leading-snug transition-colors group-hover:text-primary" style={{ fontSize: 'clamp(0.875rem, 0.83rem + 0.2vw, 0.9375rem)' }}>
                    {b.title}
                  </h4>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link to="/blog" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent sm:mt-10">
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
      </article>
    </>
  );
}

export function FaqPage() {
  const cats = ['All', ...Array.from(new Set(FAQS.map((f) => f.cat)))];
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');
  const [openId, setOpenId] = useState(0);

  const list = useMemo(
    () =>
      FAQS.map((f, i) => ({ ...f, id: i })).filter(
        (f) =>
          (active === 'All' || f.cat === active) &&
          (f.q.toLowerCase().includes(query.toLowerCase()) ||
            f.a.toLowerCase().includes(query.toLowerCase()))
      ),
    [active, query]
  );

  const toggle = (id) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <>
      <Seo title="FAQ" desc="Frequently asked questions about working with FAST MEDIA AGENCY." />

      <style>{`
        @keyframes faqFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes faqPulseRing {
          0% { box-shadow: 0 0 0 0 hsl(var(--primary) / 0.35); }
          70% { box-shadow: 0 0 0 10px hsl(var(--primary) / 0); }
          100% { box-shadow: 0 0 0 0 hsl(var(--primary) / 0); }
        }
        .faq-item { animation: faqFadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both; }
        .faq-badge-active { animation: faqPulseRing 1.8s ease-out; }
      `}</style>

      <PageHero eyebrow="FAQ" title="Questions, answered" sub="Everything you need to know before we start." />

      <section className="mx-auto max-w-4xl px-5 pb-16 pt-8 sm:pb-20 sm:pt-10">
        {/* Search + filters */}
        <div className="flex flex-col items-center gap-5 sm:gap-6">
          <div className="group relative w-full max-w-md">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full rounded-full border border-input bg-background py-3.5 pl-11 pr-4 text-sm shadow-sm outline-none transition-all focus:border-primary focus:shadow-md focus:ring-4 focus:ring-primary/10"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Clear search"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`relative rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${active === c
                  ? 'scale-105 border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20'
                  : 'border-border bg-background hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary hover:shadow-sm'
                  }`}
              >
                {c}
              </button>
            ))}
          </div>

          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {list.length} {list.length === 1 ? 'question' : 'questions'}
            {active !== 'All' ? ` in ${active}` : ''}
          </p>
        </div>

        {/* Accordion list */}
        {list.length === 0 ? (
          <div className="mt-16 flex flex-col items-center gap-3 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
              <svg className="h-6 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
            </div>
            <p className="text-muted-foreground">No questions match your search.</p>
            <button
              onClick={() => { setQuery(''); setActive('All'); }}
              className="text-sm font-semibold text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="mt-8 space-y-3 sm:mt-10">
            {list.map((f, i) => {
              const isOpen = openId === f.id;
              return (
                <div
                  key={f.id}
                  style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}
                  className={`faq-item group relative overflow-hidden rounded-2xl border bg-card transition-all duration-300 ${isOpen
                    ? 'border-primary/50 shadow-lg shadow-primary/[0.06]'
                    : 'border-border hover:border-primary/30 hover:shadow-sm'
                    }`}
                >
                  {/* Active left accent bar */}
                  <span
                    className={`absolute left-0 top-0 h-full w-[3px] bg-primary transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
                      }`}
                  />

                  <button
                    onClick={() => toggle(f.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                  >
                    <div className="min-w-0">
                      <span
                        className={`mb-1.5 inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide transition-colors ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                          }`}
                      >
                        {f.cat}
                      </span>
                      <span
                        className={`block font-display font-bold leading-snug transition-colors ${isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary'
                          }`}
                        style={{ fontSize: 'clamp(0.9375rem, 0.88rem + 0.3vw, 1.0625rem)' }}
                      >
                        {f.q}
                      </span>
                    </div>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-9 sm:w-9 ${isOpen ? 'rotate-180 bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                        }`}
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <div
                    style={{ maxHeight: isOpen ? '600px' : '0px' }}
                    className="overflow-hidden transition-all duration-400 ease-in-out"
                  >
                    <div className="px-5 pb-5 pl-[1.65rem] sm:px-6 sm:pb-6 sm:pl-[1.9rem]">
                      <p
                        className="border-l-2 border-primary/20 pl-4 leading-relaxed text-muted-foreground"
                        style={{ fontSize: 'clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)' }}
                      >
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Still have questions */}
        {/* <div className="relative mt-16 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-secondary/60 via-secondary/30 to-transparent p-8 text-center sm:p-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" /> */}

        {/* <div className="relative flex flex-col items-center gap-4">
            <div className="faq-badge-active flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="font-display font-bold" style={{ fontSize: 'clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)' }}>Still have questions?</h3>
            <p className="max-w-md text-muted-foreground" style={{ fontSize: 'clamp(0.875rem, 0.84rem + 0.2vw, 0.9375rem)' }}>
              Can't find what you're looking for? Our team is happy to walk you through anything
              specific to your business, budget, or industry.
            </p>
            <div className="mt-2 flex justify-center"><CtaButtons /></div>
          </div> */}
        {/* </div> */}
      </section>

      <CTA />
    </>
  );
}

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '', company: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    if (form.company) return; // honeypot spam protection
    setSent(true);
  };
  const info = [
    { icon: Phone, label: 'Phone', value: AGENCY.phone, href: `tel:${AGENCY.phone.replace(/\s/g, '')}` },
    { icon: Mail, label: 'Email', value: AGENCY.email, href: `mailto:${AGENCY.email}` },
    { icon: MapPin, label: 'Office', value: AGENCY.address },
    { icon: Clock, label: 'Business Hours', value: AGENCY.hours },
  ];
  return (<>
    <Seo title="Contact Us" desc="Get in touch with FAST MEDIA AGENCY for a free consultation, quote or new project." />
    <PageHero eyebrow="Contact Us" title="Let us build your growth plan" sub="Reach out for a free consultation, a quote, or to start your project." />
    <section className="mx-auto max-w-[90rem] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
        <div>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {info.map((it) => (
              <div key={it.label} className="rounded-2xl border border-border bg-card p-4 transition-colors sm:p-5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary sm:h-10 sm:w-10">
                  <it.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <div className="mt-2.5 text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground sm:mt-3 sm:text-xs">{it.label}</div>
                {it.href ? (
                  <a href={it.href} className="mt-1 block text-sm font-medium transition-colors hover:text-primary sm:text-base">{it.value}</a>
                ) : (
                  <div className="mt-1 text-sm font-medium sm:text-base">{it.value}</div>
                )}
              </div>
            ))}
          </div>
          <a href={`https://wa.me/${AGENCY.whatsapp}`} target="_blank" rel="noreferrer" className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:mt-4 sm:py-4 sm:text-base">
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" /> Chat with us on WhatsApp
          </a>
          <div className="mt-3 overflow-hidden rounded-2xl border border-border sm:mt-4">
            <iframe title="Office location" className="h-52 w-full grayscale sm:h-64" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Business+Bay+Dubai&output=embed" />
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-card p-5 sm:p-6 lg:p-8">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center sm:py-16">
              <CheckCircle2 className="h-12 w-12 text-accent sm:h-14 sm:w-14" />
              <h3 className="mt-3 font-display text-xl font-bold sm:mt-4 sm:text-2xl">Thank you!</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground sm:text-base">Your message has been received. Our team will get back to you within one business day.</p>
              <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', service: '', message: '', company: '' }); }} className="mt-5 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 sm:mt-6">Send another</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-3.5 sm:space-y-4">
              <h3 className="font-display text-lg font-bold sm:text-xl">Send us a message</h3>
              <input type="text" tabIndex={-1} autoComplete="off" value={form.company} onChange={set('company')} className="hidden" aria-hidden="true" />
              <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
                <Field label="Full Name" required value={form.name} onChange={set('name')} placeholder="Jane Cooper" />
                <Field label="Email" type="email" required value={form.email} onChange={set('email')} placeholder="jane@company.com" />
              </div>
              <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
                <Field label="Phone" value={form.phone} onChange={set('phone')} placeholder="+971 50 000 0000" />
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <label className="text-xs font-medium sm:text-sm">Service Interested In</label>
                  <select value={form.service} onChange={set('service')} className="rounded-xl border border-input bg-background px-4 py-2.5 text-xs outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 sm:py-3 sm:text-sm">
                    <option value="">Select a service</option>
                    {['Social Media', 'Google Ads', 'Meta Ads', 'SEO', 'Web Development', 'Graphic Design', 'Video Editing', 'Branding'].map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label className="text-xs font-medium sm:text-sm">Message <span className="text-accent">*</span></label>
                <textarea required rows={5} value={form.message} onChange={set('message')} placeholder="Tell us about your project and goals..." className="rounded-xl border border-input bg-background px-4 py-2.5 text-xs outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 sm:py-3 sm:text-sm" />
              </div>
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 active:scale-[0.98] sm:py-3.5 sm:text-base">
                <Send className="h-4 w-4" /> Send Message
              </button>
              <p className="text-center text-[0.7rem] text-muted-foreground sm:text-xs">Protected against spam. We reply within 1 business day.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  </>);
}

function Field({ label, required, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">{label} {required && <span className="text-accent">*</span>}</label>
      <input required={required} {...props} className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
    </div>
  );
}

function LegalPage({ title, children }) {
  return (<>
    <Seo title={title} desc={`${title} for FAST MEDIA AGENCY.`} />
    <PageHero eyebrow="Legal" title={title} />
    <section className="mx-auto max-w-3xl px-5 py-16">
      <div className="prose-sm space-y-5 text-muted-foreground">
        <p className="text-sm">Last updated: July 2026</p>
        {children}
      </div>
    </section>
  </>);
}

export function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>FAST MEDIA AGENCY respects your privacy. This policy explains how we collect, use and protect your personal information when you use our website and services.</p>
      <h3 className="font-display text-lg font-bold text-foreground">Information We Collect</h3>
      <p>We collect information you provide directly, such as your name, email, phone number and message when you submit a form, as well as usage data via cookies and analytics tools like Google Analytics 4 and Meta Pixel.</p>
      <h3 className="font-display text-lg font-bold text-foreground">How We Use It</h3>
      <p>To respond to enquiries, deliver our services, improve our website, and, with your consent, send relevant marketing communications.</p>
      <h3 className="font-display text-lg font-bold text-foreground">Cookies</h3>
      <p>We use essential and analytics cookies. You can manage your preferences via our cookie consent banner at any time.</p>
      <h3 className="font-display text-lg font-bold text-foreground">Your Rights</h3>
      <p>You may request access, correction or deletion of your data by contacting us at {AGENCY.email}.</p>
    </LegalPage>
  );
}

export function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions">
      <p>By accessing this website and engaging FAST MEDIA AGENCY, you agree to the following terms.</p>
      <h3 className="font-display text-lg font-bold text-foreground">Services</h3>
      <p>All services are provided under individual agreements. Deliverables, timelines and pricing are defined per project or retainer.</p>
      <h3 className="font-display text-lg font-bold text-foreground">Payments</h3>
      <p>Fees are billed as agreed. Late payments may pause active campaigns and services.</p>
      <h3 className="font-display text-lg font-bold text-foreground">Ownership</h3>
      <p>Upon full payment, ownership of final deliverables transfers to the client. Ad accounts and website assets remain your property.</p>
      <h3 className="font-display text-lg font-bold text-foreground">Liability</h3>
      <p>We work to deliver strong results but do not guarantee specific outcomes, as performance depends on many external factors.</p>
    </LegalPage>
  );
}
