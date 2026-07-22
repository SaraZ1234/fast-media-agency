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
  Check, HeadphonesIcon,
  Star as StarIcon, Clock,
  Zap, ShoppingBag, CreditCard, Send, Calendar,
} from 'lucide-react';

import {
  Eye,
  ShieldCheck,
  Users2,
  Handshake,
  Award,
  Rocket,
  CheckCircle2,
} from "lucide-react";




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
      <Reveal delay={0.05}>
        <h2
          className="mt-5 font-display font-black leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: 'clamp(1.5rem, 1.1rem + 1.8vw, 2.75rem)' }}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.1}>
          <p
            className="mt-4 text-muted-foreground"
            style={{ fontSize: 'clamp(0.9375rem, 0.85rem + 0.4vw, 1.125rem)' }}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-40 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-[90rem] grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-10 lg:py-20">
        <div className="min-w-0">
          <Reveal><Eyebrow>Full-Service Digital Marketing Agency</Eyebrow></Reveal>

          <Reveal delay={0.05}>
            <h1
              className="mt-5 font-display font-extrabold leading-[1.18] tracking-tight"
              style={{ fontSize: 'clamp(1.5rem, 1.15rem + 1.6vw, 2.5rem)' }}
            >
              Turn Clicks Into Customers with{' '}
              <span className="relative inline-block whitespace-nowrap text-primary">
                Result-Driven
                <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 9c40-6 120-6 196-4" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>{' '}
              Digital Marketing That Grows Your Business
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              className="mt-5 max-w-xl leading-relaxed text-muted-foreground"
              style={{ fontSize: 'clamp(0.9rem, 0.82rem + 0.3vw, 1.0625rem)' }}
            >
              We help ambitious businesses attract more customers, generate high-quality leads, and turn traffic into
              revenue — through data-driven SEO, high-converting Google Ads, modern websites, and social media
              strategies built to scale.
            </p>
          </Reveal>

          {/* Service badges */}
          <Reveal delay={0.12}>
            <div className="mt-5 flex flex-wrap gap-2">
              {SERVICE_BADGES.map((service) => (
                <span
                  key={service}
                  className="inline-flex cursor-default items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-[11px] font-semibold text-foreground/80 transition-colors hover:border-primary/40 hover:bg-secondary sm:text-xs"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {service}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Trust indicator */}
          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-medium text-muted-foreground">
              <div className="flex text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 shrink-0">
                    <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L1.3 7.8l6.1-.7z" />
                  </svg>
                ))}
              </div>
              <span>Trusted by businesses across Pakistan</span>
            </div>
          </Reveal>

          {/* CTA buttons — your original color scheme, hierarchy via size/order */}
          <Reveal delay={0.18}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-primary/40 active:scale-[0.98] sm:px-7 sm:py-3.5 sm:text-base"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/contact"
                className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-md shadow-accent/25 transition-all hover:-translate-y-0.5 hover:shadow-accent/35 active:scale-[0.98] sm:px-6 sm:py-3.5"
              >
                Request a Quote
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary sm:px-6 sm:py-3.5"
              >
                Start Your Project
              </Link>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.22}>
            <div className="mt-10 max-w-lg border-t border-border pt-6">
              <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-x-6">
                {STATS.map((s) => (
                  <div key={s.label} className="min-w-0 sm:border-l sm:border-border sm:pl-4 sm:first:border-l-0 sm:first:pl-0">
                    <div
                      className="font-display font-extrabold text-foreground"
                      style={{ fontSize: 'clamp(1.15rem, 0.95rem + 0.8vw, 1.625rem)' }}
                    >
                      {s.value}
                    </div>
                    <div className="mt-1 text-[11px] leading-tight text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Hero image — width-driven aspect-ratio, no viewport units in the sizing chain */}
        <Reveal delay={0.1} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute inset-0 -rotate-3 rounded-[1.5rem] bg-gradient-to-br from-primary/30 to-accent/30 blur-xl sm:rounded-[2rem]" />
          <div className="relative aspect-[4/3.2] w-full overflow-hidden rounded-[1.5rem] border border-border shadow-2xl sm:rounded-[2rem]">
            <img
              src={HERO_IMG}
              alt="FAST MEDIA AGENCY team collaborating on marketing analytics"
              className="animate-float-slow block h-full w-full object-cover object-center ring-1 ring-white/10 transition-transform duration-500 will-change-transform hover:scale-[1.02]"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-background/90 px-4 py-3 shadow-xl backdrop-blur-md sm:block">
            <div className="font-display text-lg font-extrabold text-foreground">100+</div>
            <div className="text-[11px] text-muted-foreground">Projects Delivered</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const SERVICE_BADGES = ['SEO', 'Google Ads', 'Website Development', 'Social Media Marketing', 'Branding'];

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
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-28">
      {/* Ambient gradient orbs — consistent with Hero */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-5 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow>All-In-One Growth Platform</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-2xl font-extrabold leading-[1.15] tracking-tight sm:mt-6 sm:text-3xl sm:leading-[1.1] md:text-4xl lg:text-5xl">
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
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:mt-6 sm:text-base md:text-lg">
              Replace a stack of disconnected tools with one intelligent platform — Fast High Level brings your CRM, marketing, sales, and communication into a single AI-powered command center.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 active:scale-[0.98] sm:px-6 sm:py-3.5 sm:text-base"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary sm:px-6 sm:py-3.5 sm:text-base"
              >
                Learn More
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Feature grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-5">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={0.03 * (i % 10)}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-secondary/40 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-secondary/60 hover:shadow-xl hover:shadow-primary/10 sm:p-6">
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground sm:h-11 sm:w-11">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
                  </div>
                  <h3 className="relative mt-3 font-display text-sm font-bold sm:mt-4 sm:text-base">{f.title}</h3>
                  <p className="relative mt-1.5 text-xs leading-snug text-muted-foreground sm:text-sm">{f.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Why Fast High Level */}
        <Reveal delay={0.1}>
          <div className="mt-14 rounded-[2rem] border border-border bg-gradient-to-br from-primary/10 to-accent/10 p-6 shadow-lg backdrop-blur sm:mt-20 sm:p-8 lg:p-12">
            <h3 className="text-center font-display text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl">
              Why Fast High Level?
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:grid-cols-5">
              {WHY_US.map((w) => {
                const Icon = w.icon;
                return (
                  <div key={w.title} className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 sm:h-14 sm:w-14">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
                    </div>
                    <h4 className="mt-3 font-display text-sm font-bold sm:mt-4 sm:text-base">{w.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{w.desc}</p>
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
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-28">
      {/* Ambient gradient orbs — consistent with Hero / FastHighLevel */}
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-5 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><Eyebrow>Fast High Level Pricing & Benefits</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-2xl font-extrabold leading-[1.15] tracking-tight sm:mt-6 sm:text-3xl sm:leading-[1.1] md:text-4xl lg:text-5xl">
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
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:mt-6 sm:text-base md:text-lg">
              Choose the plan that fits your business today, and scale up anytime with Fast High Level's all-in-one platform.
            </p>
          </Reveal>
        </div>

        {/* Pricing cards */}
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={0.05 * i}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${plan.popular
                    ? 'border-primary/40 bg-gradient-to-br from-primary/10 to-accent/10 shadow-lg shadow-primary/20 hover:shadow-primary/30'
                    : 'border-border bg-secondary/40 hover:border-primary/40 hover:shadow-primary/10'
                  }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/30">
                    Most Popular
                  </span>
                )}

                <h3 className="font-display text-lg font-bold sm:text-xl">{plan.name}</h3>
                <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{plan.tagline}</p>

                <div className="mt-5 flex items-baseline gap-1 sm:mt-6">
                  <span className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{plan.price}</span>
                  <span className="text-xs text-muted-foreground sm:text-sm">{plan.period}</span>
                </div>

                <ul className="mt-5 flex flex-1 flex-col gap-2.5 sm:mt-6 sm:gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs sm:text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-6 w-full rounded-full px-5 py-3 text-center text-sm font-semibold shadow-lg transition-transform hover:-translate-y-0.5 active:scale-[0.98] sm:mt-8 sm:px-6 sm:py-3.5 sm:text-base ${plan.popular
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
          <div className="mx-auto mt-14 max-w-5xl text-center sm:mt-20">
            <h3 className="font-display text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl">
              Everything Included with Fast High Level
            </h3>
          </div>
        </Reveal>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {INCLUDED.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={0.03 * (i % 8)}>
                <div className="group flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-secondary/40 p-4 text-center shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-secondary/60 hover:shadow-lg hover:shadow-primary/10 sm:gap-3 sm:p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground sm:h-11 sm:w-11">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-semibold sm:text-sm">{item.title}</span>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Customer Success Stories */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-16 max-w-3xl text-center sm:mt-24">
            <Eyebrow>Customer Success Stories</Eyebrow>
            <h3 className="mt-4 font-display text-xl font-extrabold tracking-tight sm:mt-6 sm:text-2xl md:text-3xl">
              Trusted by Growing Businesses
            </h3>
          </div>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={0.05 * i}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-secondary/40 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 sm:p-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-4 w-4 ${idx < t.rating ? 'fill-accent text-accent' : 'text-border'}`}
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">"{t.review}"</p>
                <div className="mt-5 flex items-center gap-3 sm:mt-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground sm:h-10 sm:w-10 sm:text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-xs font-semibold sm:text-sm">{t.name}</div>
                    <div className="text-[0.7rem] text-muted-foreground sm:text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Integrations */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-16 max-w-3xl text-center sm:mt-24">
            <h3 className="font-display text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl">
              Integrates With Your Favorite Tools
            </h3>
            <p className="mt-3 text-sm text-muted-foreground sm:mt-4 sm:text-base">
              Fast High Level connects seamlessly with the apps you already use.
            </p>
          </div>
        </Reveal>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-3 gap-3 sm:mt-10 sm:grid-cols-6 sm:gap-4">
          {INTEGRATIONS.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <Reveal key={tool.name} delay={0.03 * i}>
                <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-secondary/40 p-3 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 sm:p-4">
                  <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" strokeWidth={1.8} />
                  <span className="text-center text-[0.7rem] font-medium text-muted-foreground sm:text-xs">{tool.name}</span>
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
    <section
      className="mx-auto w-full max-w-[90rem] overflow-hidden"
      style={{ paddingInline: 'clamp(1.25rem, 4vw, 2.5rem)', paddingBlock: 'clamp(2.75rem, 5vw, 3.75rem)' }}
    >
      <Reveal>
        <div className="flex items-center justify-center gap-3 sm:gap-5">
          <span className="h-px w-6 shrink-0 bg-border sm:w-12 sm:max-w-20 sm:flex-1" />
          <span
            className="min-w-0 max-w-[80%] text-balance text-center font-semibold uppercase leading-snug tracking-[0.14em] text-muted-foreground sm:max-w-none sm:whitespace-nowrap sm:tracking-[0.16em]"
            style={{ fontSize: 'clamp(0.6875rem, 0.65rem + 0.2vw, 0.75rem)' }}
          >
            Trusted by growing brands across the region
          </span>
          <span className="h-px w-6 shrink-0 bg-border sm:w-12 sm:max-w-20 sm:flex-1" />
        </div>
      </Reveal>

      <div
        className="mt-7 flex flex-wrap items-center justify-center px-2 sm:mt-8 sm:px-0"
        style={{ columnGap: 'clamp(1.5rem, 3.5vw, 2.5rem)', rowGap: 'clamp(0.875rem, 1.8vw, 1.25rem)' }}
      >
        {CLIENTS.map((c, i) => (
          <Reveal key={c} delay={(i % 8) * 0.03}>
            <span
              className="group relative inline-block cursor-default font-display font-bold tracking-tight text-muted-foreground/60 grayscale transition-all duration-300 hover:text-primary hover:grayscale-0"
              style={{ fontSize: 'clamp(0.875rem, 0.8rem + 0.35vw, 1.0625rem)' }}
            >
              {c}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </span>
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
    <div className="overflow-hidden border-y border-border bg-primary/5 py-3 sm:py-4">
      <div
        className="flex w-max animate-marquee whitespace-nowrap"
        style={{ gap: 'clamp(1.5rem, 4vw, 2.5rem)' }}
      >
        {loop.map((t, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center font-display font-semibold text-muted-foreground"
            style={{ gap: 'clamp(1.5rem, 4vw, 2.5rem)', fontSize: 'clamp(0.875rem, 0.78rem + 0.4vw, 1.125rem)' }}
          >
            {t}
            <Icons.Sparkle className="h-3.5 w-3.5 shrink-0 text-accent sm:h-4 sm:w-4" />
          </span>
        ))}
      </div>
    </div>
  );
}


export function About({ full }) {
  const CORE_VALUES = [
    { icon: ShieldCheck, title: "Radical Transparency", desc: "No vanity metrics, no black boxes. You get real-time reporting and honest conversations about what's working and what isn't." },
    { icon: Target, title: "Data-Driven Strategy", desc: "Every creative decision and every dollar of spend is backed by data, not guesswork or industry trends for their own sake." },
    { icon: Handshake, title: "Long-Term Partnership", desc: "We measure success in years, not campaigns. Our best client relationships are the ones that keep compounding over time." },
    { icon: Sparkles, title: "Creative Excellence", desc: "Performance and craft aren't a trade-off. We build campaigns that convert and still look like nobody else's." },
    { icon: TrendingUp, title: "Relentless Optimisation", desc: "Launch is where we start, not where we finish. Continuous testing keeps your growth curve pointed up and to the right." },
    { icon: Users2, title: "Client-First Accountability", desc: "Your goals set the roadmap. We report on the metrics that matter to your business, not the ones that flatter ours." },
  ];

  const TRUST_STATS = [
    { icon: Users2, value: "150+", label: "Brands Grown" },
    { icon: Rocket, value: "500+", label: "Campaigns Launched" },
    { icon: TrendingUp, value: "3.2x", label: "Average ROI Increase" },
    { icon: Award, value: "92%", label: "Client Retention Rate" },
  ];

  const MILESTONES = [
    { year: "2015", title: "Founded on a simple idea", desc: "FAST MEDIA AGENCY started with one belief: marketing should be measured in revenue, not impressions." },
    { year: "2018", title: "Full-service expansion", desc: "Grew from a paid media shop into a full-service partner spanning strategy, creative, web and analytics." },
    { year: "2021", title: "150+ brands and counting", desc: "Crossed the milestone of 150 long-term client partnerships across e-commerce, SaaS and local business." },
    { year: "Today", title: "Scaling smarter, not just bigger", desc: "A senior, in-house team obsessed with pipeline, not just performance — building for your next five years of growth." },
  ];

  const TEAM_MEMBERS = [
    { name: "Sarah Whitfield", role: "Founder & Chief Strategist", photo: "https://i.pravatar.cc/300?img=47", bio: "Leads overall account strategy and growth planning, translating business goals into media roadmaps that scale predictably.", expertise: ["Growth Strategy", "Paid Media", "12+ yrs"], linkedin: "https://www.linkedin.com/" },
    { name: "Daniel Okafor", role: "Head of Performance Marketing", photo: "https://i.pravatar.cc/300?img=12", bio: "Owns paid acquisition across search and social, obsessing over CAC and ROAS so every dollar of spend works harder.", expertise: ["Paid Search", "Meta Ads", "9+ yrs"], linkedin: "https://www.linkedin.com/" },
    { name: "Mei Lin Tan", role: "Creative Director", photo: "https://i.pravatar.cc/300?img=32", bio: "Shapes the visual and narrative identity behind every campaign, keeping performance work sharp, distinct and on-brand.", expertise: ["Brand Design", "Art Direction", "10+ yrs"], linkedin: "https://www.linkedin.com/" },
    { name: "James Carter", role: "Senior Web & Analytics Lead", photo: "https://i.pravatar.cc/300?img=15", bio: "Builds the tracking, dashboards and web experiences that turn traffic into measurable, attributable revenue.", expertise: ["Web Dev", "Analytics", "8+ yrs"], linkedin: "https://www.linkedin.com/" },
    { name: "Priya Sharma", role: "Client Success Lead", photo: "https://i.pravatar.cc/300?img=44", bio: "The day-to-day partner for our clients, making sure reporting stays honest and every roadmap keeps moving forward.", expertise: ["Account Strategy", "Reporting", "7+ yrs"], linkedin: "https://www.linkedin.com/" },
    { name: "Lucas Bennett", role: "SEO & Content Strategist", photo: "https://i.pravatar.cc/300?img=53", bio: "Drives organic growth through technical SEO and content systems built to compound traffic and authority over time.", expertise: ["SEO", "Content Strategy", "6+ yrs"], linkedin: "https://www.linkedin.com/" },
  ];

  return (
    <section className="mx-auto max-w-[90rem] px-4 pb-12 pt-8 sm:px-5 sm:pb-16 sm:pt-10 lg:px-10">
      {/* Hero: story + image */}
      <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
        <Reveal className="relative">
          <img src={ABOUT_IMG} alt="Marketing strategist workspace" className="w-full rounded-[1.75rem] border border-border object-cover shadow-xl" loading="lazy" />
          <div className="absolute -bottom-6 -right-4 rounded-2xl border border-border bg-card p-4 shadow-xl sm:right-6 sm:p-5">
            <div className="font-display text-[clamp(1rem,1.3vw,1.25rem)] font-extrabold text-primary">10+ yrs</div>
            <div className="text-[clamp(0.6875rem,0.8vw,0.75rem)] text-muted-foreground">combined experience</div>
          </div>
          <div className="absolute -top-6 left-4 hidden rounded-2xl border border-border bg-card p-4 shadow-xl sm:block">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
              <span className="text-[clamp(0.6875rem,0.8vw,0.75rem)] font-semibold">150+ brands trust us</span>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHead
            eyebrow="About Us"
            title="A full-service growth partner, not just another agency."
            sub="FAST MEDIA AGENCY is a full-service digital marketing agency helping brands turn attention into revenue. We combine creative storytelling, precise media buying and modern web technology under one roof."
          />

          {full && (
            <Reveal delay={0.08}>
              <p className="mt-3 text-[clamp(0.8125rem,0.85vw,0.875rem)] leading-relaxed text-muted-foreground sm:mt-4">
                What began as a small team obsessed with performance has grown into a senior
                collective of strategists, creatives and analysts trusted by ambitious brands
                across e-commerce, SaaS and local business. We don't chase trends — we build
                repeatable systems for growth that compound year after year.
              </p>
            </Reveal>
          )}

          <Reveal delay={0.12}>
            <div className="mt-4 rounded-2xl border-l-4 border-accent bg-secondary/50 p-4 transition-transform duration-300 hover:-translate-y-0.5 sm:mt-5 sm:p-5">
              <p className="font-display text-[clamp(0.9375rem,0.95vw,1rem)] font-semibold">Our Mission</p>
              <p className="mt-1 text-[clamp(0.8125rem,0.85vw,0.875rem)] leading-relaxed text-muted-foreground">
                To empower every business we work with to grow faster and smarter through honest,
                data-driven marketing that delivers measurable results.
              </p>
            </div>
          </Reveal>

          {full && (
            <Reveal delay={0.16}>
              <div className="mt-3 rounded-2xl border-l-4 border-primary bg-secondary/50 p-4 transition-transform duration-300 hover:-translate-y-0.5 sm:p-5">
                <p className="font-display text-[clamp(0.9375rem,0.95vw,1rem)] font-semibold">Our Vision</p>
                <p className="mt-1 text-[clamp(0.8125rem,0.85vw,0.875rem)] leading-relaxed text-muted-foreground">
                  To be the most trusted growth partner for ambitious brands worldwide — known as
                  much for our transparency and results as for our creative work.
                </p>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.2}>
            <Link to="/services" className="mt-5 inline-block rounded-full bg-primary px-5 py-2.5 text-[clamp(0.8125rem,0.8vw,0.875rem)] font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:mt-6 sm:px-6 sm:py-3">
              Explore our services
            </Link>
          </Reveal>
        </div>
      </div>

      {full && (
        <>
          {/* Trust stats */}
          <Reveal delay={0.05}>
            <div className="mt-10 grid grid-cols-2 gap-4 rounded-[1.75rem] border border-border bg-card p-5 shadow-xl sm:mt-14 sm:p-8 lg:grid-cols-4 lg:gap-8">
              {TRUST_STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent sm:h-11 sm:w-11">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <span className="font-display text-[clamp(1rem,1.2vw,1.25rem)] font-extrabold text-primary">{value}</span>
                  <span className="text-[clamp(0.625rem,0.7vw,0.75rem)] text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Core values */}
          <div className="mt-12 sm:mt-16">
            <Reveal>
              <SectionHead eyebrow="What Drives Us" title="Our core values" sub="The principles that shape every strategy, every campaign and every conversation we have with clients." center />
            </Reveal>
            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
              {CORE_VALUES.map(({ icon: Icon, title, desc }, i) => (
                <Reveal key={title} delay={0.05 * i}>
                  <div className="group h-full rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                    <p className="mt-4 font-display text-[clamp(0.875rem,0.85vw,0.9375rem)] font-semibold">{title}</p>
                    <p className="mt-2 text-[clamp(0.75rem,0.75vw,0.8125rem)] leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Milestones / timeline */}
          <div className="mt-12 sm:mt-16">
            <Reveal>
              <SectionHead eyebrow="Our Journey" title="Built on results, proven over time" sub="A track record of growth — for our clients and for ourselves." center />
            </Reveal>

            <div className="relative mt-6 sm:mt-10">
              <div aria-hidden className="absolute left-[15px] top-0 h-full w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />
              <div className="space-y-6 sm:space-y-0">
                {MILESTONES.map((m, i) => (
                  <Reveal key={m.year} delay={0.06 * i}>
                    <div className={`relative flex flex-col gap-4 sm:mb-8 sm:grid sm:grid-cols-2 sm:gap-10 ${i % 2 === 1 ? "sm:text-right" : ""}`}>
                      <span className="absolute left-0 top-1 z-10 flex h-7 w-7 items-center justify-center rounded-full border-4 border-background bg-accent shadow sm:left-1/2 sm:h-8 sm:w-8 sm:-translate-x-1/2" />
                      <div className={`pl-9 sm:pl-0 ${i % 2 === 1 ? "sm:order-2 sm:pl-10" : "sm:pr-10"}`}>
                        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg sm:inline-block sm:p-5">
                          <div className="font-display text-[clamp(0.875rem,0.85vw,0.9375rem)] font-extrabold text-primary">{m.year}</div>
                          <p className="mt-1 text-[clamp(0.8125rem,0.8vw,0.875rem)] font-semibold">{m.title}</p>
                          <p className="mt-1 text-[clamp(0.75rem,0.75vw,0.8125rem)] leading-relaxed text-muted-foreground">{m.desc}</p>
                        </div>
                      </div>
                      <div className={i % 2 === 1 ? "sm:order-1" : ""} />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Closing statement */}
          {/* <Reveal delay={0.1}>
            <div className="mt-24 rounded-[1.75rem] border border-border bg-secondary/50 p-8 text-center sm:p-12">
              <Eye className="mx-auto h-8 w-8 text-accent" />
              <p className="mx-auto mt-4 max-w-2xl text-[clamp(1.05rem,2.2vw,1.375rem)] font-display font-semibold">
                From your first consultation to ongoing optimisation, we operate as an extension
                of your team — obsessed with the metrics that actually matter to your bottom
                line: qualified leads, sales and sustainable growth.
              </p>
              <Link to="/contact" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
                Start a conversation
              </Link>
            </div>
          </Reveal> */}
        </>
      )}
    </section>
  );
}

export function ServicesGrid({ full, hideHead }) {
  const list = full ? SERVICES : SERVICES;
  return (
    <section className="bg-secondary/30 py-14 sm:py-20">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-5 lg:px-10">
        {!hideHead && <SectionHead center eyebrow="Our Services" title="Everything you need to grow, under one roof" sub="Eight core services engineered to attract, convert and retain customers." />}
        <div className={`grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 ${hideHead ? '' : 'mt-8 sm:mt-12'}`}>
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.06}>
              <Link to={`/services/${s.slug}`} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 sm:p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-colors group-hover:from-primary group-hover:to-accent group-hover:text-white sm:h-12 sm:w-12">
                  <Icon name={s.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <h3 className="mt-4 font-display font-bold sm:mt-5" style={{ fontSize: 'clamp(0.9375rem, 0.86rem + 0.35vw, 1.125rem)' }}>
                  {s.title}
                </h3>
                <p className="mt-1.5 text-muted-foreground" style={{ fontSize: 'clamp(0.8125rem, 0.77rem + 0.25vw, 0.875rem)' }}>
                  {s.tagline}
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5 sm:mt-4">
                  {s.features.slice(0, full ? 30 : 5).map((f) => (
                    <li
                      key={f}
                      className="cursor-default rounded-full bg-secondary px-2.5 py-1 font-medium text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/10 hover:text-primary"
                      style={{ fontSize: 'clamp(0.625rem, 0.6rem + 0.15vw, 0.6875rem)' }}
                    >
                      {f}
                    </li>
                  ))}
                  {!full && s.features.length > 5 && (
                    <li
                      className="rounded-full bg-primary/10 px-2.5 py-1 font-medium text-primary"
                      style={{ fontSize: 'clamp(0.625rem, 0.6rem + 0.15vw, 0.6875rem)' }}
                    >
                      +{s.features.length - 5} more
                    </li>
                  )}
                </ul>
                <span
                  className="mt-4 inline-flex items-center gap-1 font-bold text-primary transition-colors group-hover:gap-1.5 group-hover:text-accent sm:mt-5"
                  style={{ fontSize: 'clamp(0.8125rem, 0.77rem + 0.25vw, 0.875rem)' }}
                >
                  Learn more <Icons.ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
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
    <section
      className="mx-auto max-w-[90rem]"
      style={{
        paddingInline: 'clamp(1.25rem, 4vw, 2.5rem)',
        paddingTop: 'clamp(2.5rem, 5vw, 4rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
      }}
    >
      <SectionHead center eyebrow="Why Choose Us" title="Why businesses trust FAST MEDIA AGENCY" />

      <Reveal delay={0.05}>
        <p
          className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-muted-foreground"
          style={{ fontSize: 'clamp(0.8125rem, 0.72rem + 0.5vw, 1rem)' }}
        >
          We combine data-driven strategy with hands-on execution — so every campaign is built to deliver measurable
          growth, not just impressions.
        </p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
        {WHY_US.map((w, i) => (
          <Reveal key={w.title} delay={(i % 3) * 0.06}>
            <div className="group flex h-full min-w-0 gap-4 rounded-2xl border border-border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-secondary/40 hover:shadow-xl hover:shadow-primary/5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <Icon name={w.icon} className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3
                  className="font-display font-bold"
                  style={{ fontSize: 'clamp(0.875rem, 0.8rem + 0.4vw, 1.0625rem)' }}
                >
                  {w.title}
                </h3>
                <p
                  className="mt-1 leading-relaxed text-muted-foreground"
                  style={{ fontSize: 'clamp(0.75rem, 0.7rem + 0.3vw, 0.9375rem)' }}
                >
                  {w.text}
                </p>
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

  const PRICING = [
    {
      name: "Foundation",
      desc: "For businesses building a credible digital presence from the ground up.",
      price: "$1,500",
      period: "/mo",
      billedNote: "Billed monthly, no long-term contract",
      bestFor: "Best for new & local businesses",
      features: [
        "Website audit & on-page SEO",
        "1 social media platform, fully managed",
        "Monthly content calendar (4 posts)",
        "Google Business Profile optimization",
        "Monthly performance report & review",
        "Dedicated email support",
      ],
      notIncluded: ["Paid media management", "Dedicated account manager"],
      cta: "Schedule a Consultation",
      footnote: "Backed by a 14-day satisfaction guarantee",
    },
    {
      name: "Growth",
      desc: "Full-funnel SEO, paid media, and social strategy for brands ready to scale.",
      price: "$3,500",
      period: "/mo",
      billedNote: "Billed monthly, no long-term contract",
      bestFor: "Best for growing businesses",
      featured: true,
      features: [
        "Everything in Foundation, plus:",
        "Technical & content SEO strategy",
        "Google Ads & Meta Ads management",
        "Up to 3 social platforms, fully managed",
        "Monthly content creation (12 posts + 2 articles)",
        "Bi-weekly strategy & reporting calls",
        "Dedicated account manager",
        "Conversion-focused landing page updates",
      ],
      notIncluded: [],
      cta: "Schedule a Consultation",
      footnote: "Our clients' most selected plan",
    },
    {
      name: "Enterprise",
      desc: "A bespoke strategy, creative, and web team for brands with complex, multi-market needs.",
      price: "Custom",
      period: "pricing",
      bestFor: "Best for established & multi-location brands",
      features: [
        "Everything in Growth, plus:",
        "Custom website design & development",
        "Full brand identity & style guidelines",
        "Multi-market & multi-location campaign management",
        "Weekly strategy calls & executive reporting",
        "Dedicated strategist & creative team",
        "Priority support, seven days a week",
      ],
      notIncluded: [],
      cta: "Request a Custom Proposal",
      footnote: "Receive a tailored proposal within 48 business hours",
    },
  ];

  const FEATURE_ROWS = [
    { label: "SEO strategy", values: ["Foundational", "Technical & content", "Technical & content"] },
    { label: "Paid media management", values: [false, true, true] },
    { label: "Social platforms managed", values: ["1", "Up to 3", "Custom"] },
    { label: "Content creation", values: ["4 posts/mo", "12 posts + 2 articles/mo", "Custom content calendar"] },
    { label: "Website design & development", values: [false, "Landing pages", "Full website build"] },
    { label: "Branding & creative direction", values: [false, false, true] },
    { label: "Reporting cadence", values: ["Monthly", "Bi-weekly", "Weekly"] },
    { label: "Dedicated account manager", values: [false, true, true] },
  ];

  const WHY_CHOOSE = [
    { title: "Accelerated onboarding", desc: "Move from initial consultation to a live campaign in under two weeks, guided by our team at every step." },
    { title: "Transparent, data-driven reporting", desc: "No vanity metrics. You see precisely how your investment in SEO, ads, and content is performing." },
    { title: "One team, every channel", desc: "SEO, paid media, social, web, and branding, coordinated by a single strategist instead of five vendors." },
    { title: "Dedicated strategists", desc: "You work directly with the specialists managing your account, not a rotating support queue." },
  ];

  const PROCESS_STEPS = [
    { step: "01", title: "Discovery & consultation", desc: "We assess your business objectives, target audience, competitors, and current marketing performance." },
    { step: "02", title: "Strategic audit & planning", desc: "You receive a full audit of your website, SEO, and channels, plus a clear plan with milestones and KPIs." },
    { step: "03", title: "Launch & execution", desc: "Our team builds and deploys your campaigns, content, and creative, with structured check-ins as work goes live." },
    { step: "04", title: "Optimization & reporting", desc: "We continuously refine performance and provide clear, actionable reporting on results." },
  ];

  const WHATS_INCLUDED = [
    "Dedicated onboarding & strategy session",
    "Access to our SEO, ads, and social platforms",
    "Comprehensive monthly performance reports",
    "Direct access to your dedicated strategist",
    "Real-time analytics dashboard",
    "Flexibility to adjust or cancel your plan at any time",
  ];

  const ADDONS = [
    { name: "Additional social platform", price: "$299", period: "/mo", desc: "Expand your content and community management to another social channel." },
    { name: "Website design & development", price: "From $4,500", period: "one-time", desc: "A custom-built, conversion-optimized website designed around your brand." },
    { name: "Brand identity package", price: "From $2,500", period: "one-time", desc: "Logo, visual identity, and brand guidelines built for consistency across every channel." },
  ];

  const LOCAL_FAQS = [
    { q: "Can I change plans at a later date?", a: "Yes. You may upgrade or downgrade at any time, with changes prorated automatically on your next invoice." },
    { q: "Is a long-term contract required?", a: "No. All plans are billed monthly with no long-term commitment, allowing you to adjust your engagement as your needs evolve." },
    { q: "Is ad spend included in the plan fee?", a: "No. Your plan fee covers strategy and management. Advertising spend is billed separately, directly to your ad accounts, ensuring full visibility into your budget." },
    { q: "Do you build websites, or only manage marketing?", a: "Both. Our Growth and Enterprise plans include web development, from landing pages to full custom builds, designed to support your marketing goals." },
    { q: "When can I expect to see results?", a: "Most clients observe early traction within 30 to 60 days, with stronger, compounding results by the third month as campaigns are optimized." },
  ];

  const TRUST_BADGES = ["Google Partner", "Meta Business Partner", "200+ Campaigns Delivered", "4.9/5 Client Rating"];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerParent = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <section className="mx-auto max-w-[90rem] px-5 pb-16 pt-10 sm:pb-20 sm:pt-12 lg:px-10">
      {!hideHead && (
        <SectionHead
          center
          eyebrow="Pricing"
          title="Full-service marketing, built to scale your business"
          sub="SEO, paid media, social, web, and branding under one roof. Transparent pricing, custom proposals available for enterprise brands."
        />
      )}

      {/* Pricing cards */}
      <div className={`grid gap-6 lg:grid-cols-3 ${hideHead ? "" : "mt-12"}`}>
        {PRICING.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`relative flex h-full flex-col rounded-3xl border p-6 sm:p-8 ${p.featured
                  ? "border-primary bg-primary text-primary-foreground shadow-2xl shadow-primary/30 lg:-mt-4"
                  : "border-border bg-card"
                }`}
            >
              {p.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                  Most Popular
                </span>
              )}

              <h3 className="font-display font-bold" style={{ fontSize: 'clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)' }}>{p.name}</h3>
              <p className={`mt-1 ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`} style={{ fontSize: 'clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)' }}>
                {p.desc}
              </p>

              <div className="mt-5 flex items-end gap-1">
                <span className="font-display font-extrabold" style={{ fontSize: 'clamp(1.75rem, 1.5rem + 1.2vw, 2.25rem)' }}>{p.price}</span>
                <span className={p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}>{p.period}</span>
              </div>

              {p.billedNote && (
                <p className={`mt-1 text-xs ${p.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {p.billedNote}
                </p>
              )}

              {p.bestFor && (
                <p
                  className={`mt-4 text-xs font-semibold uppercase tracking-wide ${p.featured ? "text-primary-foreground/70" : "text-accent"
                    }`}
                >
                  {p.bestFor}
                </p>
              )}

              <div className={`mt-6 h-px w-full ${p.featured ? "bg-white/15" : "bg-border"}`} />

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5" style={{ fontSize: 'clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)' }}>
                    <Icons.Check className={`h-4 w-4 shrink-0 ${p.featured ? "text-accent-foreground" : "text-accent"}`} />
                    {f}
                  </li>
                ))}
                {p.notIncluded?.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-2.5 ${p.featured ? "text-primary-foreground/40" : "text-muted-foreground/50"
                      }`}
                    style={{ fontSize: 'clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)' }}
                  >
                    <Icons.X className="h-4 w-4 shrink-0" />
                    <span className="line-through">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`mt-8 block rounded-full px-5 py-2.5 text-center font-medium transition-transform hover:-translate-y-0.5 sm:px-6 sm:py-3 ${p.featured ? "bg-white text-primary" : "bg-primary text-primary-foreground"
                  }`}
                style={{ fontSize: 'clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)' }}
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
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-y border-border py-6 sm:mt-14">
          {TRUST_BADGES.map((b) => (
            <div key={b} className="flex items-center gap-2 font-medium text-muted-foreground" style={{ fontSize: 'clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)' }}>
              <Icons.Check className="h-4 w-4 text-accent" />
              {b}
            </div>
          ))}
        </div>
      </Reveal>

      {/* What's included */}
      <div className="mt-16 sm:mt-24">
        <SectionHead center eyebrow="What's Included" title="Every engagement begins on solid ground" sub="The standard of service included with every FAST MEDIA partnership, regardless of plan." />
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
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
              <span className="font-medium" style={{ fontSize: 'clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)' }}>{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Why choose us */}
      <div className="mt-16 sm:mt-24">
        <SectionHead center eyebrow="Why Choose Us" title="A partner built for serious growth" sub="We treat your objectives with the same rigor and accountability we bring to our own." />
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {WHY_CHOOSE.map((w) => (
            <motion.div key={w.title} variants={fadeUp} className="rounded-3xl border border-border bg-card p-6 sm:p-7">
              <h4 className="font-display font-bold" style={{ fontSize: 'clamp(0.9375rem, 0.88rem + 0.3vw, 1.0625rem)' }}>{w.title}</h4>
              <p className="mt-2 text-muted-foreground" style={{ fontSize: 'clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)' }}>{w.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Process timeline */}
      <div className="mt-16 sm:mt-24">
        <SectionHead center eyebrow="Our Process" title="A disciplined path to measurable results" sub="From first consultation to ongoing optimization, every engagement follows a proven methodology." />
        <div className="relative mt-12 grid gap-10 sm:mt-16 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.1}>
              <div className="relative flex flex-col items-start">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                  {s.step}
                </span>
                <h4 className="mt-5 font-display font-bold" style={{ fontSize: 'clamp(0.9375rem, 0.88rem + 0.3vw, 1.0625rem)' }}>{s.title}</h4>
                <p className="mt-2 text-muted-foreground" style={{ fontSize: 'clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)' }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Feature comparison table */}
      <div className="mt-16 sm:mt-24">
        <SectionHead center eyebrow="Compare Plans" title="A complete breakdown of every service" sub="Review the full scope of what's included across each engagement tier." />
        <Reveal delay={0.1}>
          <div className="mt-10 overflow-x-auto rounded-3xl border border-border bg-card sm:mt-12">
            <table className="w-full min-w-[640px] border-collapse" style={{ fontSize: 'clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)' }}>
              <thead>
                <tr className="border-b border-border">
                  <th className="p-5 text-left font-display font-bold" style={{ fontSize: 'clamp(0.875rem, 0.83rem + 0.25vw, 0.9375rem)' }}>Feature</th>
                  {PRICING.map((p) => (
                    <th
                      key={p.name}
                      className={`p-5 text-center font-display font-bold ${p.featured ? "text-accent" : ""}`}
                      style={{ fontSize: 'clamp(0.875rem, 0.83rem + 0.25vw, 0.9375rem)' }}
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
      <div className="mt-16 sm:mt-24">
        <SectionHead center eyebrow="Add-ons" title="Extend your engagement" sub="Tailor any plan further with additional services, added whenever your business requires them." />
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ADDONS.map((a) => (
            <motion.div
              key={a.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 sm:p-7"
            >
              <h4 className="font-display font-bold" style={{ fontSize: 'clamp(0.9375rem, 0.88rem + 0.3vw, 1.0625rem)' }}>{a.name}</h4>
              <div className="mt-3 flex items-end gap-1">
                <span className="font-display font-extrabold" style={{ fontSize: 'clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)' }}>{a.price}</span>
                <span className="text-sm text-muted-foreground">{a.period}</span>
              </div>
              <p className="mt-3 flex-1 text-muted-foreground" style={{ fontSize: 'clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)' }}>{a.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* FAQ */}
      {/* <div className="mt-16 sm:mt-24">
        <SectionHead center eyebrow="FAQ" title="Frequently asked questions" sub="Answers to what prospective clients most often ask before engaging our team." />
        <div className="mx-auto mt-10 max-w-3xl space-y-4 sm:mt-12">
          {LOCAL_FAQS.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={item.q} className="rounded-2xl border border-border bg-card">
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display font-semibold" style={{ fontSize: 'clamp(0.9375rem, 0.88rem + 0.3vw, 1.0625rem)' }}>{item.q}</span>
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
                      <p className="px-6 pb-5 text-muted-foreground" style={{ fontSize: 'clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)' }}>{item.a}</p>
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
          <h3 className="font-display text-3xl font-extrabold sm:text-4xl">Ready to grow your business?</h3>
          <p className="mt-3 max-w-xl text-primary-foreground/70">
            Partner with FAST MEDIA and put a dedicated team behind your growth. Schedule a complimentary strategy call, no obligation required.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full bg-white px-8 py-3 text-center font-semibold text-primary transition-transform hover:-translate-y-0.5"
            >
              Schedule a Consultation
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
    <section className="mx-auto max-w-3xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8">
      {!hideHead && (
        <SectionHead
          center
          eyebrow="FAQ"
          title="Questions, answered"
          subtitle="Find answers to the most common questions about our services, process, pricing, and support."
        />
      )}
      <div className={`space-y-3.5 ${hideHead ? '' : 'mt-7 sm:mt-10'}`}>
        {FAQS.map((f, i) => {
          const isOpen = open === i;

          return (
            <Reveal key={f.q} delay={i * 0.04}>
              <div
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                    ? 'border-primary/50 bg-primary/[0.02] shadow-md'
                    : 'border-border bg-card hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg'
                  }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 p-4 sm:p-6 text-left font-display font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  style={{
                    fontSize: 'clamp(0.9375rem, 0.88rem + 0.3vw, 1.0625rem)', // ~15px on mobile to 17px on desktop
                  }}
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{f.q}</span>
                  <Icons.ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p
                    className="px-4 pb-4 sm:px-6 sm:pb-6 text-muted-foreground leading-relaxed"
                    style={{
                      fontSize: 'clamp(0.8125rem, 0.78rem + 0.2vw, 0.875rem)', // ~13px on mobile to 14px on desktop
                    }}
                  >
                    {f.a}
                  </p>
                </motion.div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="mx-auto max-w-[90rem] px-5 pb-10 pt-4 lg:px-10 lg:pb-14 lg:pt-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-accent px-6 pb-10 pt-8 text-center text-white sm:px-8 sm:pb-12 sm:pt-9 lg:pb-16 lg:pt-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 animate-pulse rounded-full bg-white/10 blur-2xl" />
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-2xl font-extrabold sm:text-3xl lg:text-4xl">Ready to grow your business faster?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/85 sm:text-base">Book a free consultation today and get a custom growth plan for your brand, no strings attached.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5 sm:text-base">Get Free Consultation</Link>
            <a href={`https://wa.me/${AGENCY.whatsapp}`} target="_blank" rel="noreferrer" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10 sm:text-base">Chat on WhatsApp</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
