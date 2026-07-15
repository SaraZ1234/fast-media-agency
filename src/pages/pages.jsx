import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, Check, ArrowRight, ArrowLeft, TrendingUp, Search as SearchIcon, Calendar, User, Tag, Sparkles } from 'lucide-react';
import * as Icons from 'lucide-react';
import { AGENCY, SERVICES, SERVICE_DETAILS, PORTFOLIO, BLOG, PRICING } from '@/data/site';
// import { Hero, Marquee, About, ServicesGrid, WhyUs, Industries, Process, PortfolioGrid, Pricing, BlogGrid, FAQ, CTA, SectionHead, Reveal, Eyebrow } from '@/components/sections';
import { Hero, Marquee, About, ServicesGrid, WhyUs, Industries, Process, PortfolioGrid, Pricing, BlogGrid, FAQ, CTA, SectionHead, Reveal, Eyebrow } from "@/sections";


function CtaButtons({ light }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link to="/contact" className={`rounded-full px-6 py-3.5 font-semibold shadow-lg transition-transform hover:-translate-y-0.5 active:scale-[0.98] ${light ? 'bg-white text-primary' : 'bg-primary text-primary-foreground shadow-primary/30'}`}>Get Free Consultation</Link>
      <Link to="/contact" className={`rounded-full px-6 py-3.5 font-semibold shadow-lg transition-transform hover:-translate-y-0.5 active:scale-[0.98] ${light ? 'bg-white/20 text-white border border-white/40' : 'bg-accent text-accent-foreground shadow-accent/25'}`}>Request a Quote</Link>
      <Link to="/contact" className={`rounded-full border px-6 py-3.5 font-semibold transition-colors ${light ? 'border-white/40 text-white hover:bg-white/10' : 'border-border hover:bg-secondary'}`}>Start Your Project</Link>
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
      <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[110px]" />
      <div className="relative mx-auto max-w-[90rem] px-5 py-16 text-center lg:px-10 lg:py-24">
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.05}><h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1></Reveal>
        {sub && <Reveal delay={0.1}><p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{sub}</p></Reveal>}
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
      <About />
      <ServicesGrid />
      <WhyUs />
      <Industries />
      <Process />
      <PortfolioGrid />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}

export function AboutPage() {
  return (<>
    <Seo title="About Us" desc="Learn about FAST MEDIA AGENCY, a full-service digital marketing agency on a mission to grow your business." />
    <PageHero eyebrow="About Us" title="We turn attention into revenue" sub="A full-service digital marketing agency built for ambitious brands." />
    <About full />
    <WhyUs />
    <Process />
    <CTA />
  </>);
}

export function ServicesPage() {
  return (<>
    <Seo title="Our Services" desc="Explore FAST MEDIA AGENCY services: social media, Google Ads, Meta Ads, SEO, web development, graphic design, video editing and branding." />
    <PageHero eyebrow="Our Services" title="Everything you need to grow" sub="Eight core services engineered to attract, convert and retain customers." />
    <ServicesGrid full />
    <Industries />
    <CTA />
  </>);
}

export function PortfolioPage() {
  const cats = ['All', ...Array.from(new Set(PORTFOLIO.map((p) => p.industry)))];
  const [active, setActive] = useState('All');
  const list = active === 'All' ? PORTFOLIO : PORTFOLIO.filter((p) => p.industry === active);
  return (<>
    <Seo title="Portfolio & Case Studies" desc="See real results FAST MEDIA AGENCY delivered across industries." />
    <PageHero eyebrow="Portfolio" title="Work that drives results" sub="Case studies and outcomes across every service we offer." />
    <section className="mx-auto max-w-[90rem] px-5 py-16 lg:px-10">
      <div className="flex flex-wrap justify-center gap-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setActive(c)} className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${active === c ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:border-primary hover:text-primary'}`}>{c}</button>
        ))}
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 0.06}>
            <Link to={`/portfolio/${p.slug}`} className="group block h-full overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-40 bg-gradient-to-br from-primary/80 to-accent/80"><div className="absolute inset-0 grid place-items-center font-display text-5xl font-extrabold text-white/20">{p.title.charAt(0)}</div></div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.cat}</span>
                <h3 className="mt-2 font-display text-lg font-bold transition-colors group-hover:text-primary">{p.title}</h3>
                <p className="mt-3 flex items-center gap-2 font-semibold text-accent"><TrendingUp className="h-4 w-4" />{p.metric}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
    <CTA />
  </>);
}

export function PortfolioDetailPage() {
  const { slug } = useParams();
  const item = PORTFOLIO.find((p) => p.slug === slug);
  if (!item) return <NotFound label="Portfolio item" to="/portfolio" cta="Back to portfolio" />;
  const related = PORTFOLIO.filter((p) => p.slug !== slug).slice(0, 3);
  return (<>
    <Seo title={item.title} desc={item.challenge} />
    <PageHero eyebrow={item.industry} title={item.title} sub={`${item.client} \u2014 ${item.cat}`} />
    <section className="mx-auto max-w-4xl px-5 py-16">
      <Reveal><div className="relative h-64 overflow-hidden rounded-3xl bg-gradient-to-br from-primary/80 to-accent/80"><div className="absolute inset-0 grid place-items-center font-display text-8xl font-extrabold text-white/20">{item.title.charAt(0)}</div></div></Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <InfoCard label="Client" value={item.client} icon={User} />
        <InfoCard label="Industry" value={item.industry} icon={Tag} />
        <InfoCard label="Services" value={item.cat} icon={Sparkles} />
      </div>
      <div className="mt-10 space-y-8">
        <Block title="The Challenge">{item.challenge}</Block>
        <Block title="Our Solution">{item.solution}</Block>
        <div>
          <h3 className="font-display text-xl font-bold">Results Achieved</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {item.results.map((r) => (
              <div key={r} className="rounded-2xl border border-border bg-card p-5 text-center"><TrendingUp className="mx-auto h-5 w-5 text-accent" /><p className="mt-2 font-display font-bold text-primary">{r}</p></div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold">Technologies Used</h3>
          <div className="mt-4 flex flex-wrap gap-2">{item.tech.map((t) => <span key={t} className="rounded-full bg-secondary px-3 py-1.5 text-sm font-medium">{t}</span>)}</div>
        </div>
      </div>
      <div className="mt-12 rounded-3xl border border-border bg-secondary/40 p-8 text-center">
        <h3 className="font-display text-2xl font-bold">Want results like these?</h3>
        <div className="mt-6 flex justify-center"><CtaButtons /></div>
      </div>
      <h3 className="mt-14 font-display text-xl font-bold">More case studies</h3>
      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        {related.map((p) => (
          <Link key={p.slug} to={`/portfolio/${p.slug}`} className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg"><span className="text-xs font-semibold text-primary">{p.cat}</span><h4 className="mt-1 font-display font-bold transition-colors group-hover:text-primary">{p.title}</h4></Link>
        ))}
      </div>
      <Link to="/portfolio" className="mt-10 inline-flex items-center gap-2 font-semibold text-primary"><ArrowLeft className="h-4 w-4" /> Back to portfolio</Link>
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
  return (<>
    <Seo title={service.title} desc={detail.description} />
    <PageHero eyebrow="Service" title={service.title} sub={service.tagline} />
    <section className="mx-auto max-w-[72rem] px-5 py-16 lg:px-10">
      <Reveal><div className="flex items-center gap-4"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white"><IconCmp className="h-7 w-7" strokeWidth={1.8} /></span><p className="max-w-2xl text-lg text-muted-foreground">{detail.description}</p></div></Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-bold">What is included</h2>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 text-sm"><Check className="h-4 w-4 shrink-0 text-accent" />{f}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold">Benefits</h2>
          <ul className="mt-5 space-y-3">
            {detail.benefits.map((b) => (
              <li key={b} className="flex gap-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary"><Check className="h-4 w-4" /></span><span className="text-sm text-muted-foreground">{b}</span></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-2xl font-bold">Our process</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {detail.process.map((step, i) => (
            <div key={step} className="rounded-2xl border border-border bg-card p-5"><span className="font-display text-3xl font-extrabold text-primary/20">{String(i + 1).padStart(2, '0')}</span><p className="mt-2 text-sm font-semibold">{step}</p></div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-2xl font-bold">Pricing</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {PRICING.map((p) => (
            <div key={p.name} className={`rounded-3xl border p-8 ${p.featured ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card'}`}>
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <div className="mt-3 flex items-end gap-1"><span className="font-display text-3xl font-extrabold">{p.price}</span><span className={p.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}>{p.period}</span></div>
              <p className={`mt-2 text-sm ${p.featured ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{p.desc}</p>
              <Link to="/contact" className={`mt-6 block rounded-full px-5 py-2.5 text-center font-semibold ${p.featured ? 'bg-white text-primary' : 'bg-primary text-primary-foreground'}`}>Get Started</Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-3xl border border-border bg-secondary/40 p-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">Case Study</span>
        <h2 className="mt-2 font-display text-2xl font-bold">{example.title}</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{example.solution}</p>
        <p className="mt-4 flex items-center gap-2 font-semibold text-accent"><TrendingUp className="h-4 w-4" />{example.metric}</p>
        <Link to={`/portfolio/${example.slug}`} className="mt-4 inline-flex items-center gap-1 font-semibold text-primary">Read the case study <ArrowRight className="h-4 w-4" /></Link>
      </div>

      <div className="mt-14 rounded-[2rem] bg-gradient-to-br from-primary to-accent px-8 py-12 text-center text-white">
        <h2 className="font-display text-3xl font-extrabold">Ready to get started with {service.title}?</h2>
        <div className="mt-6 flex justify-center"><CtaButtons light /></div>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-2xl font-bold">Related services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((s) => { // eslint-disable-next-line import/namespace
            const RI = Icons[s.icon] || Sparkles; return (
            <Link key={s.slug} to={`/services/${s.slug}`} className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"><span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><RI className="h-5 w-5" strokeWidth={1.8} /></span><h4 className="mt-3 font-display font-bold transition-colors group-hover:text-primary">{s.title}</h4></Link>
          ); })}
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
    <Pricing />
    <FAQ />
    <CTA />
  </>);
}

export function BlogPage() {
  const cats = ['All', ...Array.from(new Set(BLOG.map((b) => b.cat)))];
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');
  const list = useMemo(() => BLOG.filter((b) => (active === 'All' || b.cat === active) && (b.title.toLowerCase().includes(query.toLowerCase()) || b.excerpt.toLowerCase().includes(query.toLowerCase()))), [active, query]);
  return (<>
    <Seo title="Blog & Insights" desc="Marketing tips, guides and insights from FAST MEDIA AGENCY." />
    <PageHero eyebrow="Blog" title="Insights to grow smarter" sub="Practical marketing tips, playbooks and guides." />
    <section className="mx-auto max-w-[90rem] px-5 py-16 lg:px-10">
      <div className="flex flex-col items-center gap-5">
        <div className="relative w-full max-w-md">
          <SearchIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles..." className="w-full rounded-full border border-input bg-background py-3 pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {cats.map((c) => (<button key={c} onClick={() => setActive(c)} className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${active === c ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:border-primary hover:text-primary'}`}>{c}</button>))}
        </div>
      </div>
      {list.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">No articles match your search.</p>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((b, i) => (
            <Reveal key={b.slug} delay={(i % 3) * 0.06}>
              <Link to={`/blog/${b.slug}`} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
                <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{b.cat}</span>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug transition-colors group-hover:text-primary">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.excerpt}</p>
                <div className="mt-auto flex items-center gap-3 pt-5 text-xs text-muted-foreground"><span>{b.author}</span><span>•</span><span>{b.date}</span></div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </section>
    <CTA />
  </>);
}

export function BlogDetailPage() {
  const { slug } = useParams();
  const post = BLOG.find((b) => b.slug === slug);
  const [comments, setComments] = useState([]);
  const [cForm, setCForm] = useState({ name: '', text: '' });
  if (!post) return <NotFound label="Article" to="/blog" cta="Back to blog" />;
  const related = BLOG.filter((b) => b.slug !== slug).slice(0, 3);
  const addComment = (e) => { e.preventDefault(); if (!cForm.name || !cForm.text) return; setComments((c) => [...c, { ...cForm, id: Date.now() }]); setCForm({ name: '', text: '' }); };
  return (<>
    <Seo title={post.title} desc={post.excerpt} />
    <PageHero eyebrow={post.cat} title={post.title} />
    <article className="mx-auto max-w-3xl px-5 py-16">
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5"><User className="h-4 w-4" />{post.author}</span>
        <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{post.date}</span>
        <span className="flex items-center gap-1.5"><Tag className="h-4 w-4" />{post.cat}</span>
        <span>{post.read} read</span>
      </div>
      <div className="mt-6 h-56 rounded-3xl bg-gradient-to-br from-primary/80 to-accent/80" />
      <div className="mt-8 space-y-5 text-muted-foreground">
        <p className="text-lg text-foreground">{post.excerpt}</p>
        <p>In this article we break down exactly what matters and how to apply it to your business today. The strategies below come straight from campaigns we run for our clients across {post.cat.toLowerCase()} and beyond.</p>
        <h2 className="font-display text-xl font-bold text-foreground">Why this matters</h2>
        <p>Most businesses leave real growth on the table simply because they follow outdated advice. We focus on the fundamentals that consistently move the needle: clear goals, tight targeting, strong creative and disciplined measurement.</p>
        <h2 className="font-display text-xl font-bold text-foreground">Key takeaways</h2>
        <ul className="space-y-2">
          {['Start with a clear, measurable objective', 'Test small, then scale what works', 'Track every conversion so you know your true return', 'Review and optimise on a regular cadence'].map((t) => (
            <li key={t} className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-accent" />{t}</li>
          ))}
        </ul>
        <p>Want a hand putting this into practice? Our team can build and run it for you.</p>
      </div>

      <div className="mt-10 rounded-3xl border border-border bg-secondary/40 p-8 text-center">
        <h3 className="font-display text-2xl font-bold">Grow your business with FAST MEDIA AGENCY</h3>
        <div className="mt-6 flex justify-center"><CtaButtons /></div>
      </div>

      <div className="mt-12">
        <h3 className="font-display text-xl font-bold">Comments ({comments.length})</h3>
        <form onSubmit={addComment} className="mt-5 space-y-3">
          <input value={cForm.name} onChange={(e) => setCForm((f) => ({ ...f, name: e.target.value }))} placeholder="Your name" className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          <textarea value={cForm.text} onChange={(e) => setCForm((f) => ({ ...f, text: e.target.value }))} rows={3} placeholder="Add a comment..." className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          <button type="submit" className="rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground">Post comment</button>
        </form>
        <div className="mt-6 space-y-4">
          {comments.map((c) => (
            <div key={c.id} className="rounded-2xl border border-border bg-card p-4"><div className="font-semibold">{c.name}</div><p className="mt-1 text-sm text-muted-foreground">{c.text}</p></div>
          ))}
        </div>
      </div>

      <h3 className="mt-14 font-display text-xl font-bold">Related posts</h3>
      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        {related.map((b) => (
          <Link key={b.slug} to={`/blog/${b.slug}`} className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-lg"><span className="text-xs font-semibold text-primary">{b.cat}</span><h4 className="mt-1 font-display font-bold leading-snug transition-colors group-hover:text-primary">{b.title}</h4></Link>
        ))}
      </div>
      <Link to="/blog" className="mt-10 inline-flex items-center gap-2 font-semibold text-primary"><ArrowLeft className="h-4 w-4" /> Back to blog</Link>
    </article>
  </>);
}

export function FaqPage() {
  return (<>
    <Seo title="FAQ" desc="Frequently asked questions about working with FAST MEDIA AGENCY." />
    <PageHero eyebrow="FAQ" title="Questions, answered" sub="Everything you need to know before we start." />
    <FAQ full />
    <CTA />
  </>);
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
    <section className="mx-auto max-w-[90rem] px-5 py-16 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {info.map((it) => (
              <div key={it.label} className="rounded-2xl border border-border bg-card p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><it.icon className="h-5 w-5" /></span>
                <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{it.label}</div>
                {it.href ? <a href={it.href} className="mt-1 block font-medium hover:text-primary">{it.value}</a> : <div className="mt-1 font-medium">{it.value}</div>}
              </div>
            ))}
          </div>
          <a href={`https://wa.me/${AGENCY.whatsapp}`} target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-4 font-semibold text-white transition-transform hover:-translate-y-0.5">
            <MessageCircle className="h-5 w-5" /> Chat with us on WhatsApp
          </a>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border">
            <iframe title="Office location" className="h-64 w-full grayscale" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Business+Bay+Dubai&output=embed" />
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <CheckCircle2 className="h-14 w-14 text-accent" />
              <h3 className="mt-4 font-display text-2xl font-bold">Thank you!</h3>
              <p className="mt-2 max-w-sm text-muted-foreground">Your message has been received. Our team will get back to you within one business day.</p>
              <button onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', service: '', message: '', company: '' }); }} className="mt-6 rounded-full border border-border px-5 py-2.5 font-semibold">Send another</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <h3 className="font-display text-xl font-bold">Send us a message</h3>
              <input type="text" tabIndex={-1} autoComplete="off" value={form.company} onChange={set('company')} className="hidden" aria-hidden="true" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" required value={form.name} onChange={set('name')} placeholder="Jane Cooper" />
                <Field label="Email" type="email" required value={form.email} onChange={set('email')} placeholder="jane@company.com" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Phone" value={form.phone} onChange={set('phone')} placeholder="+971 50 000 0000" />
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Service Interested In</label>
                  <select value={form.service} onChange={set('service')} className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <option value="">Select a service</option>
                    {['Social Media', 'Google Ads', 'Meta Ads', 'SEO', 'Web Development', 'Graphic Design', 'Video Editing', 'Branding'].map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Message <span className="text-accent">*</span></label>
                <textarea required rows={5} value={form.message} onChange={set('message')} placeholder="Tell us about your project and goals..." className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </div>
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 active:scale-[0.98]">
                <Send className="h-4 w-4" /> Send Message
              </button>
              <p className="text-center text-xs text-muted-foreground">Protected against spam. We reply within 1 business day.</p>
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
