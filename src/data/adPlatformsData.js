// Content data for the "Complete Guide to Our Services" page.
// Kept separate from the component so copy can be edited without touching
// any JSX/markup. All pricing/timeline figures below are illustrative
// starting points — replace with your agency's real numbers before publishing.

export const GUIDE_INTRO = {
  eyebrow: 'Agency Services Guide',
  title: "A Complete Guide to FAST MEDIA AGENCY's Digital Marketing Services",
  paragraphs: [
    'Growing a business today rarely comes down to a single channel. The brands that scale fastest combine search visibility, paid advertising, an active social presence, a strong website, consistent branding, and content that keeps audiences engaged — all working together rather than in isolation.',
    'This guide walks through the six core services we offer at FAST MEDIA AGENCY: SEO, Google Ads Management, Social Media Marketing, Website Development, Branding, and Content Marketing. We break down what each service includes, typical pricing and timelines, and how to decide which combination is right for your business right now.',
  ],
};

export const KEY_ADVANTAGES = [
  { icon: 'Target', title: 'One unified strategy', text: 'A single team aligns SEO, ads, social, and content so every channel reinforces the others instead of working in silos.' },
  { icon: 'Activity', title: 'Measurable ROI', text: 'Track leads, traffic, and conversions across every service from one shared reporting dashboard.' },
  { icon: 'Wallet', title: 'Flexible engagements', text: 'Start with a single service and scale up to a full multi-channel retainer as your budget and needs grow.' },
  { icon: 'Globe', title: 'Cross-channel reach', text: 'Meet your customers wherever they search, scroll, shop, or watch.' },
  { icon: 'Users', title: 'Dedicated specialists', text: 'Experts in SEO, paid media, design, and content — not one generalist stretched across everything.' },
  { icon: 'Zap', title: 'Fast iteration', text: 'Weekly optimization and reporting keep every campaign improving instead of standing still.' },
];

export const COST_DISCLAIMER = [
  "The figures below are starting benchmarks, not fixed quotes. Actual pricing depends on your industry, competitive landscape, current website or social baseline, and how aggressive your growth goals are.",
  'Timelines are approximate too: a Google Ads account can go live within days, while SEO and branding work compound over months. Combining services usually shortens the path to results because each channel reinforces the others.',
  'Every engagement starts with a short discovery call so we can scope the work accurately — use this table to get oriented, not as a final invoice.',
];

export const COST_TABLE = [
  {
    service: 'SEO',
    price: 'From $750/month',
    timeline: '3\u20136 months for meaningful ranking movement',
    included: 'Technical audit, on-page optimization, content strategy, link building, monthly reporting',
    bestFor: 'Businesses wanting sustainable, long-term organic traffic',
  },
  {
    service: 'Google Ads',
    price: 'From $500/month management + ad spend',
    timeline: 'Live in 24\u201348 hours; optimized within 2\u20134 weeks',
    included: 'Campaign setup, keyword research, bid management, landing page guidance, conversion tracking',
    bestFor: 'Businesses that want fast, measurable traffic and leads',
  },
  {
    service: 'Social Media Marketing',
    price: 'From $600/month',
    timeline: 'Consistent engagement within 4\u20136 weeks',
    included: 'Content calendar, creative design, community management, paid boosting, performance reporting',
    bestFor: 'Brands building awareness and community on social platforms',
  },
  {
    service: 'Website Development',
    price: 'From $1,500 one-time',
    timeline: '2\u20136 weeks depending on scope',
    included: 'UX/UI design, responsive development, CMS setup, on-page SEO basics, launch support',
    bestFor: 'Businesses needing a new site or a conversion-focused redesign',
  },
  {
    service: 'Branding',
    price: 'From $1,200 one-time',
    timeline: '3\u20135 weeks',
    included: 'Logo & visual identity, brand guidelines, messaging framework, collateral templates',
    bestFor: 'New businesses or rebrands that need a consistent, professional identity',
  },
  {
    service: 'Content Marketing',
    price: 'From $700/month',
    timeline: 'Ongoing, with traction building over 2\u20133 months',
    included: 'Blog articles, video and short-form scripts, email newsletters, editorial calendar',
    bestFor: 'Businesses building authority and nurturing leads over time',
  },
];

export const SERVICES_RECAP = [
  {
    service: 'SEO',
    icon: 'Search',
    highlight: 'Compounding organic growth',
    features: 'Technical optimization, content strategy, authoritative link building',
    bestFor: 'Businesses playing the long game on organic traffic',
  },
  {
    service: 'Google Ads',
    icon: 'MousePointerClick',
    highlight: 'Traffic live in 24\u201348 hours',
    features: 'Smart Bidding, precise keyword and audience targeting',
    bestFor: 'Businesses that need fast, high-intent leads',
  },
  {
    service: 'Social Media Marketing',
    icon: 'Users',
    highlight: 'Always-on community building',
    features: 'Content calendars, creative production, paid social boosts',
    bestFor: 'Brands wanting to engage and grow an audience',
  },
  {
    service: 'Website Development',
    icon: 'Code2',
    highlight: 'Conversion-focused design',
    features: 'Responsive builds, CMS setup, performance optimization',
    bestFor: 'Businesses needing a site that actually converts',
  },
  {
    service: 'Branding',
    icon: 'Palette',
    highlight: 'One consistent identity everywhere',
    features: 'Logo, visual identity, messaging, brand guidelines',
    bestFor: 'New brands or businesses overdue for a refresh',
  },
  {
    service: 'Content Marketing',
    icon: 'PenTool',
    highlight: 'Authority that nurtures leads',
    features: 'Blogs, newsletters, video scripts, editorial planning',
    bestFor: 'Businesses building trust and staying top-of-mind',
  },
];

export const SELECTION_CRITERIA = [
  { icon: 'Target', title: 'Alignment with business goals', text: 'Every recommendation starts with what you actually need: awareness, leads, sales, or a rebuild from the ground up.' },
  { icon: 'Users', title: 'Audience and channel fit', text: 'We match the service to where your customers actually spend their time and how they make decisions.' },
  { icon: 'Zap', title: 'Speed to results', text: 'Some services show impact in days, others compound over months — we set expectations accordingly.' },
  { icon: 'DollarSign', title: 'Budget efficiency', text: 'Every engagement is scoped to make the most of your budget, not to upsell services you don\u2019t need yet.' },
  { icon: 'LifeBuoy', title: 'Ongoing optimization & reporting', text: 'Ongoing tracking and reporting shows exactly what\u2019s working — and what we\u2019ll adjust next.' },
];

export const CHOOSE_STEPS = [
  { title: 'Define your primary objective', text: 'Decide whether you need brand awareness, lead generation, direct sales, or a full rebrand, since each service is built to support different outcomes.' },
  { title: "Understand where your audience spends time", text: 'Identify whether your customers search, scroll, or browse — that shapes whether SEO, social, or paid search comes first.' },
  { title: 'Match your content readiness to the service', text: 'Social media and content marketing need a steady stream of creative; SEO and Google Ads can run with a leaner content footprint.' },
  { title: 'Evaluate your internal resources', text: 'Consider how much your team can review, approve, and collaborate on before adding more moving pieces.' },
  { title: 'Consider your sales cycle', text: 'Google Ads and SEO suit high-intent, ready-to-buy searches, while social and content marketing nurture longer consideration journeys.' },
  { title: 'Start with one core service', text: 'Launch with the service that matches your most urgent goal, measure results, then layer in the next channel.' },
  { title: 'Check how it fits your existing stack', text: "Make sure new services connect cleanly with your CRM, analytics, and any tools you're already using to track performance." },
];

export const FINAL_THOUGHTS = "Every business has a different starting point, so the right mix of services depends on your goals, budget, and how quickly you need results. A practical approach is to start with one or two priority services, measure the impact, and layer in more channels as momentum builds. Over time, the businesses that grow fastest are the ones that treat SEO, paid media, social, web, branding, and content as one connected system rather than six separate line items.";

export const SERVICE_FAQS = [
  {
    q: 'Which service should we start with?',
    a: "It depends on your goal. If you need fast, measurable leads, Google Ads is usually the quickest starting point. If you're building long-term organic visibility, SEO is the better first investment. We'll help you prioritize during a discovery call.",
  },
  {
    q: 'How long until we see results?',
    a: 'Paid channels like Google Ads and social ads can show traffic and leads within days to weeks. SEO, branding, and content marketing are longer-term investments that typically build momentum over 2\u20136 months and continue compounding after that.',
  },
  {
    q: 'Can we combine multiple services?',
    a: "Yes — most clients see the strongest results from combining two or three services, for example Google Ads paired with a website refresh, or SEO paired with content marketing. Each service is scoped individually so you can add more whenever you're ready.",
  },
  {
    q: 'Do you require long-term contracts?',
    a: 'No. Website Development and Branding are typically one-time projects, while SEO, Google Ads, Social Media, and Content Marketing run month-to-month so you can scale up, pause, or adjust as your needs change.',
  },
  {
    q: 'How is pricing determined for each service?',
    a: "Pricing depends on the scope of work — for example, the number of keywords targeted in SEO, your monthly ad spend for Google Ads, or the number of pages in a website build. The ranges in this guide are starting points; we finalize an exact quote after understanding your goals.",
  },
];

export const SERVICE_OVERVIEW = [
  {
    service: 'SEO',
    bestFor: 'Businesses building long-term organic visibility',
    keyFeatures: 'Keyword research, on-page optimization, technical audits, link building',
    outcome: 'Higher organic rankings and compounding, low-cost traffic over time',
  },
  {
    service: 'Google Ads',
    bestFor: 'Teams needing fast, measurable lead or sales volume',
    keyFeatures: 'Campaign strategy, bid management, ad copy testing, conversion tracking',
    outcome: 'Immediate qualified traffic with a clear, trackable return on spend',
  },
  {
    service: 'Social Media Marketing',
    bestFor: 'Brands growing awareness and community engagement',
    keyFeatures: 'Content calendars, platform-native creative, community management, analytics',
    outcome: 'Stronger brand affinity and consistent audience growth',
  },
  {
    service: 'Website Development',
    bestFor: 'Companies needing a fast, conversion-ready site',
    keyFeatures: 'Custom design, responsive builds, performance optimization, CMS setup',
    outcome: 'A polished site that converts visitors and scales with the business',
  },
  {
    service: 'Branding',
    bestFor: 'Businesses defining or refreshing their market identity',
    keyFeatures: 'Logo and visual identity, brand guidelines, messaging, positioning',
    outcome: 'A cohesive, memorable identity that builds trust across every touchpoint',
  },
  {
    service: 'Content Marketing',
    bestFor: 'Brands establishing authority and nurturing leads',
    keyFeatures: 'Editorial strategy, blog and long-form content, SEO alignment, distribution',
    outcome: 'Sustained organic reach and a pipeline of educated, warmer leads',
  },
];
