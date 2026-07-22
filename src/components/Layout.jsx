import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import { AGENCY, NAV, SERVICES } from '@/data/site';

function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem('fma-theme');
    return saved ? saved === 'dark' : true;
  });
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('fma-theme', dark ? 'dark' : 'light');
  }, [dark]);
  return [dark, () => setDark((d) => !d)];
}

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white font-display font-extrabold text-lg shadow-lg shadow-primary/30">F</span>
      <span className="font-display font-extrabold tracking-tight text-lg leading-none">
        FAST<span className="text-accent">MEDIA</span>
      </span>
    </Link>
  );
}

function Header() {
  const [dark, toggle] = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();
  useEffect(() => { setOpen(false); }, [loc.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-background/85 backdrop-blur-lg border-b border-border' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-[90rem] items-center justify-between px-5 py-4 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) => `rounded-full px-4 py-2 text-[15px] font-semibold tracking-wide transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label="Toggle theme" onClick={toggle} className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary">
            {dark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>
          <Link to="/contact" className="hidden rounded-full bg-primary px-6 py-3 text-[15px] font-semibold tracking-wide text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-px active:scale-[0.98] sm:inline-block">
            Free Consultation
          </Link>
          <button aria-label="Menu" onClick={() => setOpen((o) => !o)} className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-border bg-background lg:hidden">
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV.map((n) => (
                <NavLink key={n.to} to={n.to} className={({ isActive }) => `rounded-xl px-4 py-3 text-[17px] font-semibold tracking-wide ${isActive ? 'bg-secondary text-primary' : 'text-foreground'}`}>
                  {n.label}
                </NavLink>
              ))}
              <Link to="/contact" className="mt-2 rounded-xl bg-primary px-4 py-3 text-center text-[15px] font-semibold tracking-wide text-primary-foreground">Get Free Consultation</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  const socials = [Facebook, Instagram, Linkedin, Youtube, Twitter];
  return (
    <footer className="mt-16 border-t border-border bg-secondary/40 sm:mt-20 lg:mt-24">
      <div className="mx-auto grid max-w-[90rem] gap-8 px-5 py-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:px-6 sm:py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10 lg:px-10 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-[15px] leading-7 text-muted-foreground">Result-driven digital marketing that grows sales, leads and brand presence for ambitious businesses.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {socials.map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <FooterCol title="Quick Links" links={[['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Portfolio', '/portfolio'], ['Blog', '/blog'], ['Contact', '/contact']]} />
        <FooterCol title="Services" links={SERVICES.slice(0, 6).map((s) => [s.title, `/services`])} />
        <FooterCol title="Legal" links={[['Privacy Policy', '/privacy'], ['Terms & Conditions', '/terms'], ['Cookie Policy', '/privacy'], ['FAQ', '/faq'], ['Case Studies', '/portfolio']]} />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[90rem] flex-col items-center justify-between gap-3 px-5 py-6 text-center text-[15px] text-muted-foreground sm:px-6 lg:flex-row lg:px-10 lg:text-left">
          <p>&copy; 2026 {AGENCY.name}. All Rights Reserved.</p>
          <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-end">
            <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 shrink-0" />{AGENCY.phone}</span>
            <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 shrink-0" />{AGENCY.email}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="font-display text-base font-bold uppercase tracking-[0.08em] text-foreground">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map(([label, to], i) => (
          <li key={i}><Link to={to} className="text-[15px] text-muted-foreground transition-colors hover:text-primary">{label}</Link></li>
        ))}
      </ul>
    </div>
  );
}

function WhatsAppButton() {
  return (
    <a href={`https://wa.me/${AGENCY.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white shadow-xl shadow-[#25D366]/30 transition-transform hover:-translate-y-0.5 active:scale-95">
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}

function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem('fma-cookies')) setShow(true);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-2xl border border-border bg-card p-5 shadow-2xl lg:left-6 lg:right-auto">
      <p className="text-[15px] text-muted-foreground">We use cookies to improve your experience, analyse traffic and personalise content. By continuing you agree to our <Link to="/privacy" className="text-primary underline">Cookie Policy</Link>.</p>
      <div className="mt-3 flex gap-2">
        <button onClick={() => { localStorage.setItem('fma-cookies', 'all'); setShow(false); }} className="rounded-full bg-primary px-4 py-2 text-[15px] font-semibold text-primary-foreground">Accept all</button>
        <button onClick={() => { localStorage.setItem('fma-cookies', 'ess'); setShow(false); }} className="rounded-full border border-border px-4 py-2 text-sm font-semibold">Essential only</button>
      </div>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}

export { Phone, Mail, MapPin, Clock };
