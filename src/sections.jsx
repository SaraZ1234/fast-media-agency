import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { AGENCY, HERO_IMG, ABOUT_IMG, SERVICES, WHY_US, INDUSTRIES, PROCESS, STATS, PRICING, PORTFOLIO, FAQS, BLOG, CLIENTS, TESTIMONIALS, TEAM } from '@/data/site';
import { motion, AnimatePresence } from 'framer-motion';

import {
  Users, Mic, Filter, Layout, Globe, Workflow, Mail, MessageCircle,
  ClipboardList, CalendarCheck, PhoneCall, Share2, BarChart3, Star,
  Smartphone, Layers, Sparkles, Target, Heart, TrendingUp,
} from 'lucide-react';

import {
  Check,HeadphonesIcon,
  Star as StarIcon, Clock,
  Zap, ShoppingBag, CreditCard, Send, Calendar,
} from 'lucide-react';



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

export function FastHighLevel() {
  const FEATURES = [
    { icon: Users, title: 'CRM', desc: 'Manage every contact and pipeline in one place.' },
    { icon: Mic, title: 'AI Voice', desc: 'Automated voice agents that call, qualify & follow up.' },
    { icon: Filter, title: 'Sales Funnels', desc: 'Build high-converting funnels in minutes.' },
    { icon: Layout, title: 'Landing Pages', desc: 'Drag-and-drop pages that convert visitors.' },
    { icon: Globe, title: 'Website Builder', desc: 'Launch fast, responsive websites with ease.' },
    { icon: Workflow, title: 'Marketing Automation', desc: 'Trigger the right message at the right time.' },
    { icon: Mail, title: 'Email & SMS Marketing', desc: 'Reach customers across every channel.' },
    { icon: MessageCircle, title: 'WhatsApp Integration', desc: 'Chat with leads where they already are.' },
    { icon: ClipboardList, title: 'Forms & Surveys', desc: 'Capture leads and feedback effortlessly.' },
    { icon: CalendarCheck, title: 'Appointment Booking', desc: 'Let clients book themselves, automatically.' },
    { icon: PhoneCall, title: 'Call Tracking', desc: 'Know exactly which campaigns drive calls.' },
    { icon: Share2, title: 'Social Media Planner', desc: 'Schedule and publish across platforms.' },
    { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Real-time insights on every metric.' },
    { icon: Star, title: 'Review Management', desc: 'Generate and manage reviews on autopilot.' },
    { icon: Smartphone, title: 'Mobile App', desc: 'Run your entire business from your phone.' },
  ];

  const WHY_US = [
    { icon: Layers, title: 'All-in-One Platform', desc: 'Every tool your business needs, unified.' },
    { icon: Sparkles, title: 'AI-Powered Automation', desc: 'Work smarter with built-in AI at every step.' },
    { icon: Target, title: 'Lead Management', desc: 'Never let a lead slip through the cracks.' },
    { icon: Heart, title: 'Customer Engagement', desc: 'Build lasting relationships, effortlessly.' },
    { icon: TrendingUp, title: 'Business Growth', desc: 'Scale faster with data-driven insights.' },
  ];

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Ambient gradient orbs — consistent with Hero */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto max-w-[90rem] px-5 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow>All-In-One Growth Platform</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Fast High Level —{' '}
              <span className="relative whitespace-nowrap text-primary">
                The AI-Powered
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 9c40-6 120-6 196-4" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{' '}
              Business Operating System
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Replace a stack of disconnected tools with one intelligent platform — Fast High Level brings your CRM, marketing, sales, and communication into a single AI-powered command center.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-border px-6 py-3.5 font-semibold transition-colors hover:bg-secondary"
              >
                Learn More
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={0.03 * (i % 10)}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-secondary/40 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-secondary/60 hover:shadow-xl hover:shadow-primary/10">
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="relative mt-4 font-display text-base font-bold">{f.title}</h3>
                  <p className="relative mt-1.5 text-sm leading-snug text-muted-foreground">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Why Fast High Level */}
        <Reveal delay={0.1}>
          <div className="mt-20 rounded-[2rem] border border-border bg-gradient-to-br from-primary/10 to-accent/10 p-8 shadow-lg backdrop-blur lg:p-12">
            <h3 className="text-center font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              Why Fast High Level?
            </h3>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {WHY_US.map((w) => {
                const Icon = w.icon;
                return (
                  <div key={w.title} className="flex flex-col items-center text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </div>
                    <h4 className="mt-4 font-display text-base font-bold">{w.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


export function FastHighLevelPricing() {
  const PLANS = [
    {
      name: 'Starter',
      price: '$97',
      period: '/month',
      tagline: 'Perfect for solo entrepreneurs and small teams getting started.',
      popular: false,
      features: [
        'CRM & Pipeline Management',
        'Unlimited Contacts',
        'Sales Funnels & Landing Pages',
        'Email & SMS Marketing',
        'Appointment Booking',
        'Basic Automation Workflows',
        'Mobile App Access',
      ],
      cta: 'Start Free Trial',
    },
    {
      name: 'Unlimited',
      price: '$297',
      period: '/month',
      tagline: 'For growing businesses that need full automation & AI power.',
      popular: true,
      features: [
        'Everything in Starter',
        'AI Voice & AI Automation',
        'WhatsApp Integration',
        'Advanced Marketing Automation',
        'Call Tracking & Analytics Dashboard',
        'Review Management',
        'Social Media Planner',
        'Priority 24/7 Support',
      ],
      cta: 'Start Free Trial',
    },
  ];

  const INCLUDED = [
    { icon: Smartphone, title: 'Mobile App' },
    { icon: HeadphonesIcon, title: 'Award-Winning Support' },
    { icon: Sparkles, title: 'AI Automation' },
    { icon: Users, title: 'CRM' },
    { icon: Filter, title: 'Funnels' },
    { icon: Globe, title: 'Websites' },
    { icon: Mail, title: 'Email & SMS Marketing' },
    { icon: MessageCircle, title: 'WhatsApp Integration' },
    { icon: StarIcon, title: 'Review Management' },
    { icon: BarChart3, title: 'Analytics Dashboard' },
    { icon: Clock, title: '24/7 Support' },
  ];

  const TESTIMONIALS = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder, Bloom Studio',
      avatar: 'SM',
      rating: 5,
      review: 'Fast High Level replaced five different tools we were paying for. Our lead follow-up is now fully automated and our close rate jumped noticeably.',
    },
    {
      name: 'David Chen',
      role: 'CEO, Chen Consulting',
      avatar: 'DC',
      rating: 5,
      review: 'The AI Voice feature alone paid for the subscription in the first month. Our team finally has time to focus on closing instead of chasing leads.',
    },
    {
      name: 'Priya Patel',
      role: 'Marketing Director, Nova Retail',
      avatar: 'PP',
      rating: 5,
      review: 'Switching to Fast High Level gave us one dashboard for everything — funnels, email, SMS, and reviews. Onboarding was smooth and support has been outstanding.',
    },
    {
      name: 'Marcus Johnson',
      role: 'Owner, Johnson Home Services',
      avatar: 'MJ',
      rating: 4,
      review: 'Appointment booking and call tracking transformed how we manage our field team. Highly recommend for any local service business.',
    },
  ];

  const INTEGRATIONS = [
    { icon: Zap, name: 'Zapier' },
    { icon: ShoppingBag, name: 'Shopify' },
    { icon: CreditCard, name: 'Stripe' },
    { icon: Send, name: 'Mailchimp' },
    { icon: Calendar, name: 'Google Calendar' },
    { icon: Share2, name: 'Meta Ads' },
  ];

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Ambient gradient orbs — consistent with Hero / FastHighLevel */}
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto max-w-[90rem] px-5 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow>Fast High Level Pricing & Benefits</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Simple Pricing,{' '}
              <span className="relative whitespace-nowrap text-primary">
                Powerful Results
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 9c40-6 120-6 196-4" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Choose the plan that fits your business today, and scale up anytime with Fast High Level's all-in-one platform.
            </p>
          </Reveal>
        </div>

        {/* Pricing cards */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={0.05 * i}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  plan.popular
                    ? 'border-primary/40 bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg shadow-primary/20 hover:shadow-primary/30'
                    : 'border-border bg-secondary/40 hover:border-primary/40 hover:shadow-primary/10'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/30">
                    Most Popular
                  </span>
                )}

                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-8 w-full rounded-full px-6 py-3.5 text-center font-semibold shadow-lg transition-transform hover:-translate-y-0.5 active:scale-[0.98] ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground shadow-primary/30'
                      : 'bg-accent text-accent-foreground shadow-accent/25'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Everything Included */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-20 max-w-5xl text-center">
            <h3 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              Everything Included with Fast High Level
            </h3>
          </div>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {INCLUDED.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={0.03 * (i % 8)}>
                <div className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-secondary/40 p-5 text-center shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-secondary/60 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <span className="text-sm font-semibold">{item.title}</span>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Customer Success Stories */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-24 max-w-3xl text-center">
            <Eyebrow>Customer Success Stories</Eyebrow>
            <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              Trusted by Growing Businesses
            </h3>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={0.05 * i}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-secondary/40 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-4 w-4 ${idx < t.rating ? 'fill-accent text-accent' : 'text-border'}`}
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">"{t.review}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Integrations */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-24 max-w-3xl text-center">
            <h3 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              Integrates With Your Favorite Tools
            </h3>
            <p className="mt-4 text-muted-foreground">
              Fast High Level connects seamlessly with the apps you already use.
            </p>
          </div>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-4 sm:grid-cols-6">
          {INTEGRATIONS.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <Reveal key={tool.name} delay={0.03 * i}>
                <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-secondary/40 p-4 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.8} />
                  <span className="text-center text-xs font-medium text-muted-foreground">{tool.name}</span>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA Banner */}
        {/* <Reveal delay={0.1}>
          <div className="relative mt-24 overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-primary to-accent p-10 text-center shadow-2xl shadow-primary/30 lg:p-16">
            <div className="pointer-events-none absolute -top-20 left-10 h-64 w-64 rounded-full bg-white/10 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 right-10 h-64 w-64 rounded-full bg-white/10 blur-[100px]" />
            <h3 className="relative font-display text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">
              Built to Make Business Growth Easier
            </h3>
            <p className="relative mx-auto mt-4 max-w-2xl text-primary-foreground/90">
              Join thousands of businesses using Fast High Level to automate marketing, close more sales, and deliver exceptional customer experiences — all from one platform.
            </p>
            <Link
              to="/contact"
              className="relative mt-8 inline-block rounded-full bg-background px-8 py-3.5 font-semibold text-foreground shadow-lg transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Start Free Trial
            </Link>
          </div>
        </Reveal> */}
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
  const [openFaq, setOpenFaq] = useState(0);

  const FEATURE_ROWS = [
    { label: "Projects", values: ["3 active", "Unlimited", "Unlimited"] },
    { label: "Team seats", values: ["1", "Up to 10", "Unlimited"] },
    { label: "Storage", values: ["5 GB", "250 GB", "Unlimited"] },
    { label: "Priority support", values: [false, true, true] },
    { label: "Custom integrations", values: [false, true, true] },
    { label: "Dedicated account manager", values: [false, false, true] },
    { label: "SLA & uptime guarantee", values: [false, false, true] },
    { label: "SSO & advanced security", values: [false, false, true] },
  ];

  const WHY_CHOOSE = [
    { title: "Fast onboarding", desc: "Go from signup to fully configured in under a day, guided every step of the way." },
    { title: "Transparent pricing", desc: "No surprise invoices. What you see on this page is exactly what you pay." },
    { title: "Built to scale", desc: "Upgrade, downgrade, or add seats anytime as your team and needs grow." },
    { title: "Real human support", desc: "Talk to people who actually know your account, not a ticket queue." },
  ];

  const PROCESS_STEPS = [
    { step: "01", title: "Discovery call", desc: "We learn about your goals, constraints, and timeline before anything else." },
    { step: "02", title: "Plan & scope", desc: "You get a clear proposal with milestones, deliverables, and pricing." },
    { step: "03", title: "Build & iterate", desc: "Regular check-ins and demos keep you in the loop as work progresses." },
    { step: "04", title: "Launch & support", desc: "We ship, monitor, and stay on hand for the adjustments that follow." },
  ];

  const WHATS_INCLUDED = [
    "Dedicated onboarding session",
    "Access to all core features",
    "Regular product updates",
    "Community & knowledge base access",
    "Usage analytics dashboard",
    "Cancel or change plans anytime",
  ];

  const ADDONS = [
    { name: "Extra seats", price: "$9", period: "/seat/mo", desc: "Add teammates beyond your plan's included limit." },
    { name: "Priority onboarding", price: "$299", period: "one-time", desc: "White-glove setup with a dedicated specialist." },
    { name: "Advanced analytics", price: "$49", period: "/mo", desc: "Deeper reporting, exports, and custom dashboards." },
  ];

  const LOCAL_FAQS = [
    { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade at any time. Changes are prorated automatically on your next invoice." },
    { q: "Is there a free trial?", a: "Every plan includes a 14-day trial with full access, no credit card required to start." },
    { q: "What payment methods do you accept?", a: "We accept all major credit cards, along with invoicing for annual Enterprise plans." },
    { q: "Do you offer refunds?", a: "If you're not satisfied within the first 30 days, reach out and we'll issue a full refund." },
    { q: "Can I cancel anytime?", a: "Absolutely. There are no lock-in contracts, and cancelling takes effect at the end of your billing cycle." },
  ];

  const TRUST_BADGES = ["SOC 2 Certified", "GDPR Compliant", "99.9% Uptime SLA", "256-bit Encryption"];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerParent = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <section className="mx-auto max-w-[90rem] px-5 py-20 lg:px-10">
      {!hideHead && (
        <SectionHead
          center
          eyebrow="Pricing"
          title="Transparent plans that scale with you"
          sub="No hidden fees. Cancel anytime. Custom quotes available."
        />
      )}

      {/* Pricing cards */}
      <div className={`grid gap-6 lg:grid-cols-3 ${hideHead ? "" : "mt-12"}`}>
        {PRICING.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                p.featured
                  ? "border-primary bg-primary text-primary-foreground shadow-2xl shadow-primary/30 lg:-mt-4"
                  : "border-border bg-card"
              }`}
            >
              {p.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                  Most Popular
                </span>
              )}

              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {p.desc}
              </p>

              <div className="mt-5 flex items-end gap-1">
                <span className="font-display text-4xl font-extrabold">{p.price}</span>
                <span className={p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}>{p.period}</span>
              </div>

              {p.billedNote && (
                <p className={`mt-1 text-xs ${p.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {p.billedNote}
                </p>
              )}

              {p.bestFor && (
                <p
                  className={`mt-4 text-xs font-semibold uppercase tracking-wide ${
                    p.featured ? "text-primary-foreground/70" : "text-accent"
                  }`}
                >
                  {p.bestFor}
                </p>
              )}

              <div className={`mt-6 h-px w-full ${p.featured ? "bg-white/15" : "bg-border"}`} />

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <Icons.Check className={`h-4 w-4 shrink-0 ${p.featured ? "text-accent-foreground" : "text-accent"}`} />
                    {f}
                  </li>
                ))}
                {p.notIncluded?.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-2.5 text-sm ${
                      p.featured ? "text-primary-foreground/40" : "text-muted-foreground/50"
                    }`}
                  >
                    <Icons.X className="h-4 w-4 shrink-0" />
                    <span className="line-through">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`mt-8 block rounded-full px-6 py-3 text-center font-semibold transition-transform hover:-translate-y-0.5 ${
                  p.featured ? "bg-white text-primary" : "bg-primary text-primary-foreground"
                }`}
              >
                {p.cta || "Get Started"}
              </Link>

              {p.footnote && (
                <p className={`mt-3 text-center text-xs ${p.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {p.footnote}
                </p>
              )}
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* Trust badges */}
      <Reveal delay={0.1}>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-y border-border py-6">
          {TRUST_BADGES.map((b) => (
            <div key={b} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Icons.Check className="h-4 w-4 text-accent" />
              {b}
            </div>
          ))}
        </div>
      </Reveal>

      {/* What's included */}
      <div className="mt-24">
        <SectionHead center eyebrow="What's Included" title="Every plan starts strong" sub="The foundation that ships with all of our plans, no matter your tier." />
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {WHATS_INCLUDED.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icons.Check className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Why choose us */}
      <div className="mt-24">
        <SectionHead center eyebrow="Why Choose Us" title="Built for teams that move fast" sub="A partner that treats your roadmap like our own." />
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {WHY_CHOOSE.map((w) => (
            <motion.div key={w.title} variants={fadeUp} className="rounded-3xl border border-border bg-card p-7">
              <h4 className="font-display text-lg font-bold">{w.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Development process timeline */}
      <div className="mt-24">
        <SectionHead center eyebrow="Our Process" title="How we get you set up" sub="A straightforward path from first call to live product." />
        <div className="relative mt-16 grid gap-10 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.1}>
              <div className="relative flex flex-col items-start">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                  {s.step}
                </span>
                <h4 className="mt-5 font-display text-lg font-bold">{s.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Feature comparison table */}
      <div className="mt-24">
        <SectionHead center eyebrow="Compare Plans" title="See exactly what you get" sub="A full breakdown of every feature across all three plans." />
        <Reveal delay={0.1}>
          <div className="mt-12 overflow-x-auto rounded-3xl border border-border bg-card">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-5 text-left font-display text-base font-bold">Feature</th>
                  {PRICING.map((p) => (
                    <th
                      key={p.name}
                      className={`p-5 text-center font-display text-base font-bold ${p.featured ? "text-accent" : ""}`}
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURE_ROWS.map((row, ri) => (
                  <tr key={row.label} className={ri % 2 === 0 ? "bg-transparent" : "bg-muted/30"}>
                    <td className="p-5 font-medium text-muted-foreground">{row.label}</td>
                    {row.values.map((v, vi) => (
                      <td key={vi} className="p-5 text-center">
                        {typeof v === "boolean" ? (
                          v ? (
                            <Icons.Check className="mx-auto h-4 w-4 text-accent" />
                          ) : (
                            <Icons.X className="mx-auto h-4 w-4 text-muted-foreground/40" />
                          )
                        ) : (
                          <span className="font-medium">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>

      {/* Add-ons */}
      <div className="mt-24">
        <SectionHead center eyebrow="Add-ons" title="Optional extras" sub="Tailor any plan further with these add-ons, added anytime." />
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ADDONS.map((a) => (
            <motion.div
              key={a.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-3xl border border-border bg-card p-7"
            >
              <h4 className="font-display text-lg font-bold">{a.name}</h4>
              <div className="mt-3 flex items-end gap-1">
                <span className="font-display text-2xl font-extrabold">{a.price}</span>
                <span className="text-sm text-muted-foreground">{a.period}</span>
              </div>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* FAQ */}
      {/* <div className="mt-24">
        <SectionHead center eyebrow="FAQ" title="Questions, answered" sub="Everything you need to know before you get started." />
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {LOCAL_FAQS.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={item.q} className="rounded-2xl border border-border bg-card">
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent"
                  >
                    <Icons.Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-muted-foreground">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div> */}

      {/* Final CTA */}
      {/* <Reveal delay={0.1}>
        <div className="mt-24 flex flex-col items-center rounded-3xl border border-primary bg-primary px-8 py-16 text-center text-primary-foreground">
          <h3 className="font-display text-3xl font-extrabold sm:text-4xl">Ready to get started?</h3>
          <p className="mt-3 max-w-xl text-primary-foreground/70">
            Join the teams already scaling with us. Start your free trial today, no credit card required.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-white px-8 py-3 text-center font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/30 px-8 py-3 text-center font-semibold transition-transform hover:-translate-y-0.5"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </Reveal> */}
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
