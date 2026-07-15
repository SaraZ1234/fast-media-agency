export const AGENCY = {
  name: 'FAST MEDIA AGENCY',
  phone: '+971 50 123 4567',
  email: 'hello@fastmediaagency.com',
  whatsapp: '971501234567',
  address: 'Office 1204, Business Bay Tower, Dubai, UAE',
  hours: 'Mon – Sat: 9:00 AM – 7:00 PM',
};

export const HERO_IMG = 'https://images.hostinger.com/d011803a-6144-4613-8f9e-a1217e14416c.png';
export const ABOUT_IMG = 'https://images.hostinger.com/2a155ae6-1d4b-462d-9a38-5b6482f97377.png';
export const ABSTRACT_IMG = 'https://images.hostinger.com/5ccd8212-88e0-4203-9ab5-d2dac268175d.png';

export const SERVICES = [
  {
    slug: 'social-media-marketing',
    icon: 'Share2',
    title: 'Social Media Management',
    tagline: 'Own every feed your audience scrolls.',
    features: ['Facebook', 'Instagram', 'LinkedIn', 'TikTok', 'X (Twitter)', 'Content Calendar', 'Daily Posting', 'Story Design', 'Reel Creation', 'Community Management', 'Hashtag Research', 'Monthly Reports'],
  },
  {
    slug: 'google-ads',
    icon: 'Target',
    title: 'Google Ads',
    tagline: 'Capture high-intent buyers the moment they search.',
    features: ['Search Ads', 'Display Ads', 'Shopping Ads', 'YouTube Ads', 'Performance Max', 'Remarketing', 'Conversion Tracking', 'Keyword Research', 'Competitor Analysis', 'Landing Page Optimization'],
  },
  {
    slug: 'meta-ads',
    icon: 'Megaphone',
    title: 'Facebook & Instagram Ads',
    tagline: 'Scroll-stopping campaigns that convert.',
    features: ['Lead Generation', 'Sales Campaigns', 'Brand Awareness', 'Website Traffic', 'WhatsApp Campaigns', 'Messenger Ads', 'Remarketing', 'Pixel Setup', 'Audience Targeting', 'Campaign Optimization'],
  },
  {
    slug: 'website-development',
    icon: 'Code2',
    title: 'Website Development',
    tagline: 'Fast, secure websites built to sell.',
    features: ['Business Websites', 'Corporate Websites', 'Portfolio Websites', 'E-commerce Stores', 'Landing Pages', 'News Portals', 'Blogs', 'Educational Websites', 'Real Estate Websites', 'Medical Websites', 'Mobile Responsive', 'Fast Loading', 'SEO Friendly', 'SSL Security', 'Contact Forms', 'WhatsApp Integration', 'Google Maps', 'Analytics', 'CMS Dashboard'],
  },
  {
    slug: 'seo',
    icon: 'Search',
    title: 'SEO',
    tagline: 'Rank higher, earn traffic that compounds.',
    features: ['Technical SEO', 'On-Page SEO', 'Off-Page SEO', 'Local SEO', 'Keyword Research', 'Competitor Analysis', 'Link Building', 'SEO Audit', 'Content Optimization'],
  },
  {
    slug: 'graphic-design',
    icon: 'PenTool',
    title: 'Graphic Design',
    tagline: 'Visuals that make your brand unmissable.',
    features: ['Logo Design', 'Social Media Posts', 'Flyers', 'Brochures', 'Business Cards', 'Banners', 'Posters', 'Packaging', 'Brand Identity'],
  },
  {
    slug: 'video-editing',
    icon: 'Clapperboard',
    title: 'Video Editing',
    tagline: 'Reels and films that hold attention.',
    features: ['Reels', 'Shorts', 'Promotional Videos', 'Corporate Videos', 'Motion Graphics', 'YouTube Editing', 'Subtitle Editing'],
  },
  {
    slug: 'branding',
    icon: 'Sparkles',
    title: 'Branding',
    tagline: 'A brand people remember and trust.',
    features: ['Brand Strategy', 'Brand Identity', 'Logo', 'Color Palette', 'Typography', 'Brand Guidelines', 'Marketing Materials'],
  },
];

const slugify = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Rich per-service detail keyed by slug
export const SERVICE_DETAILS = {
  'social-media-marketing': {
    description: 'We turn your social channels into a consistent engine for reach, engagement and leads. From strategy and content calendars to daily posting, reels and community management, we own every feed your audience scrolls so your brand stays top of mind.',
    benefits: ['Consistent, on-brand presence across every platform', 'Higher engagement and organic reach', 'A steady flow of inbound leads and DMs', 'Time saved with fully managed content'],
    process: ['Audit & goal setting', 'Content strategy + calendar', 'Design, copy & scheduling', 'Community management', 'Monthly reporting & optimisation'],
  },
  'google-ads': {
    description: 'Capture high-intent buyers the moment they search. We build, manage and optimise Google Ads campaigns across Search, Display, Shopping and YouTube to deliver qualified traffic at the lowest possible cost per conversion.',
    benefits: ['Reach customers actively searching for you', 'Lower cost per lead through constant optimisation', 'Full conversion tracking and transparency', 'Scalable, predictable pipeline'],
    process: ['Account & competitor audit', 'Keyword & audience research', 'Campaign build + tracking setup', 'Launch & bid management', 'A/B testing & scaling'],
  },
  'meta-ads': {
    description: 'Scroll-stopping Facebook and Instagram campaigns that convert. We craft creative, target the right audiences and optimise for the outcomes that matter, whether that is leads, sales or WhatsApp conversations.',
    benefits: ['Creative that stops the scroll', 'Precise audience targeting & remarketing', 'Lower acquisition costs at scale', 'Direct-to-WhatsApp lead flows'],
    process: ['Pixel & tracking setup', 'Audience & creative strategy', 'Campaign build & launch', 'Creative testing', 'Scaling winning ad sets'],
  },
  'website-development': {
    description: 'Fast, secure, mobile-first websites built to sell. From business sites to full e-commerce stores, we design and develop platforms that load quickly, rank well and turn visitors into customers.',
    benefits: ['Fast, SEO-friendly, secure builds', 'Mobile responsive on every device', 'Conversion-focused layouts', 'Easy-to-manage CMS dashboard'],
    process: ['Discovery & wireframes', 'Design & content', 'Development & integrations', 'QA & launch', 'Support & optimisation'],
  },
  'seo': {
    description: 'Rank higher and earn traffic that compounds. Our technical, on-page, off-page and local SEO work builds sustainable organic visibility that keeps delivering long after the work is done.',
    benefits: ['Sustainable, compounding organic traffic', 'Higher rankings for money keywords', 'Stronger local visibility & Maps presence', 'Clear reporting on rankings and traffic'],
    process: ['Technical & content audit', 'Keyword & competitor research', 'On-page optimisation', 'Link building & authority', 'Tracking & reporting'],
  },
  'graphic-design': {
    description: 'Visuals that make your brand unmissable. From logos and social posts to brochures, packaging and full brand identities, we craft design that communicates clearly and looks the part.',
    benefits: ['Cohesive, professional brand visuals', 'Assets ready for every channel', 'Faster turnaround on creative', 'A brand that stands out'],
    process: ['Brief & moodboard', 'Concepts & direction', 'Design & revisions', 'Final files & handover'],
  },
  'video-editing': {
    description: 'Reels and films that hold attention. We edit short-form and long-form video with motion graphics, subtitles and pacing engineered to keep viewers watching and taking action.',
    benefits: ['Higher watch-time and retention', 'Platform-ready reels and shorts', 'Professional motion graphics', 'Consistent content pipeline'],
    process: ['Footage review & script', 'Rough cut', 'Motion graphics & sound', 'Revisions & export'],
  },
  'branding': {
    description: 'A brand people remember and trust. We build brand strategy, identity systems and guidelines that give your business a clear, consistent and confident presence in the market.',
    benefits: ['A distinct, memorable identity', 'Consistency across every touchpoint', 'Clear brand guidelines', 'Stronger customer trust'],
    process: ['Discovery & strategy', 'Identity design', 'Guidelines & assets', 'Rollout support'],
  },
};

export const WHY_US = [
  { icon: 'Users', title: 'Experienced Team', text: 'Specialists across ads, design, dev and content.' },
  { icon: 'BadgeDollarSign', title: 'Affordable Pricing', text: 'Premium output without the agency bloat.' },
  { icon: 'MessagesSquare', title: 'Transparent Communication', text: 'You always know what we are doing and why.' },
  { icon: 'Route', title: 'Custom Marketing Strategies', text: 'Built around your goals, not templates.' },
  { icon: 'Rocket', title: 'Fast Project Delivery', text: 'Speed is in our name and our workflow.' },
  { icon: 'LineChart', title: 'Data-Driven Decisions', text: 'Every move backed by numbers.' },
  { icon: 'FileBarChart', title: 'Monthly Performance Reports', text: 'Clear reporting on what moved the needle.' },
  { icon: 'Headset', title: 'Dedicated Support', text: 'A real team on call, not a ticket queue.' },
  { icon: 'HeartHandshake', title: '100% Client Satisfaction Focus', text: 'We win when you grow.' },
];

export const INDUSTRIES = ['Healthcare', 'Real Estate', 'Restaurants', 'Fashion', 'Education', 'Travel', 'Construction', 'Automotive', 'E-commerce', 'Beauty & Salon', 'Law Firms', 'Finance', 'Technology', 'Manufacturing'];

export const PROCESS = [
  { n: '01', title: 'Consultation', text: 'We learn your business, goals and challenges.' },
  { n: '02', title: 'Strategy Planning', text: 'A roadmap tailored to measurable outcomes.' },
  { n: '03', title: 'Research', text: 'Audience, competitors and market deep-dive.' },
  { n: '04', title: 'Design & Development', text: 'We build the assets, campaigns and platforms.' },
  { n: '05', title: 'Campaign Launch', text: 'Go live with tracking dialled in from day one.' },
  { n: '06', title: 'Optimization', text: 'Continuous testing to lower cost and lift results.' },
  { n: '07', title: 'Reporting', text: 'Transparent monthly performance breakdowns.' },
  { n: '08', title: 'Growth', text: 'Scale what works into sustained momentum.' },
];

export const STATS = [
  { value: '450+', label: 'Projects Delivered' },
  { value: '12M+', label: 'Ad Spend Managed' },
  { value: '98%', label: 'Client Retention' },
  { value: '14', label: 'Industries Served' },
];

export const PRICING = [
  { name: 'Starter', price: '$499', period: '/mo', desc: 'For small businesses getting online.', features: ['2 Social Platforms', '12 Posts / Month', 'Basic SEO Setup', 'Monthly Report', 'Email Support'], featured: false },
  { name: 'Growth', price: '$1,299', period: '/mo', desc: 'For brands ready to scale fast.', features: ['4 Social Platforms', 'Daily Posting + Reels', 'Google + Meta Ads', 'Advanced SEO', 'Bi-weekly Reports', 'Dedicated Manager'], featured: true },
  { name: 'Scale', price: 'Custom', period: '', desc: 'Full-service growth partnership.', features: ['Unlimited Platforms', 'Full Ads Management', 'Website + Landing Pages', 'Video + Design Team', 'Weekly Strategy Calls', 'Priority Support'], featured: false },
];

const PORTFOLIO_RAW = [
  { title: 'Luxe Real Estate', cat: 'Website + Google Ads', industry: 'Real Estate', metric: '+320% qualified leads', client: 'Luxe Properties LLC', tech: ['React', 'Google Ads', 'Search', 'Landing Pages'], challenge: 'A premium developer was generating plenty of clicks but few serious buyer enquiries, with a bloated cost per lead.', solution: 'We rebuilt their website around high-intent property landing pages and restructured Google Ads campaigns with tighter targeting and conversion tracking.', results: ['+320% qualified leads', '-42% cost per lead', '2.1x more booked viewings'] },
  { title: 'Verde Restaurant Group', cat: 'Social Media + Reels', industry: 'Restaurants', metric: '2.4M organic reach', client: 'Verde Hospitality', tech: ['Instagram', 'Reels', 'Content Strategy'], challenge: 'Multiple restaurant locations with inconsistent social presence and low organic reach.', solution: 'We built a unified content calendar with daily reels, story design and community management across all locations.', results: ['2.4M organic reach', '+68% follower growth', '+35% weekend covers'] },
  { title: 'Nova Fashion', cat: 'E-commerce + Meta Ads', industry: 'Fashion', metric: '5.8x return on ad spend', client: 'Nova Apparel', tech: ['Shopify', 'Meta Ads', 'Pixel', 'Remarketing'], challenge: 'A growing fashion label struggled to scale paid social profitably.', solution: 'We rebuilt the pixel setup, created a testing framework for creative and scaled winning audiences with remarketing funnels.', results: ['5.8x ROAS', '+210% online revenue', '-31% cost per purchase'] },
  { title: 'BrightSmile Dental', cat: 'Local SEO', industry: 'Healthcare', metric: '#1 ranking in 4 months', client: 'BrightSmile Clinic', tech: ['Local SEO', 'Google Business', 'On-Page SEO'], challenge: 'A dental clinic was invisible in local search despite excellent reviews.', solution: 'We optimised their Google Business Profile, fixed technical SEO and built local citations and content.', results: ['#1 local ranking in 4 months', '+240% Maps calls', '+3x new patient bookings'] },
  { title: 'Apex Auto', cat: 'Branding + Video', industry: 'Automotive', metric: '+180% showroom bookings', client: 'Apex Motors', tech: ['Branding', 'Video Editing', 'Motion Graphics'], challenge: 'An auto dealership needed a modern brand and content to attract younger buyers.', solution: 'We delivered a full rebrand plus a library of promotional reels and showroom videos.', results: ['+180% showroom bookings', '+92% social engagement', '4.2M video views'] },
  { title: 'Meridian Finance', cat: 'Website + SEO', industry: 'Finance', metric: '3x organic traffic', client: 'Meridian Advisory', tech: ['Web Development', 'Technical SEO', 'Content'], challenge: 'A finance firm had an outdated site with almost no organic traffic.', solution: 'We built a fast, SEO-friendly website and executed a content and technical SEO strategy.', results: ['3x organic traffic', '+150% enquiry form submissions', 'Page 1 for 20+ keywords'] },
];
export const PORTFOLIO = PORTFOLIO_RAW.map((p) => ({ ...p, slug: slugify(p.title) }));

export const FAQS = [
  { q: 'How soon will I see results?', a: 'Paid campaigns can drive leads within the first week. SEO and organic growth typically show meaningful movement in 2–4 months as we compound results.' },
  { q: 'Do you work with small businesses?', a: 'Absolutely. Our Starter plans are designed for local and small businesses, and we scale with you as you grow.' },
  { q: 'Are there long-term contracts?', a: 'We offer flexible monthly plans. Most clients stay because of results, not lock-in contracts.' },
  { q: 'Who owns the ad accounts and website?', a: 'You do. Everything we build and manage stays under your ownership, always.' },
  { q: 'Do you provide monthly reports?', a: 'Yes. You receive clear, jargon-free performance reports so you always know your return.' },
  { q: 'Which industries do you specialise in?', a: 'We serve 14+ industries including healthcare, real estate, restaurants, e-commerce, finance and more.' },
];

const BLOG_RAW = [
  { title: '7 Google Ads Mistakes Draining Your Budget', cat: 'Google Ads', date: 'Jul 2, 2026', read: '6 min', author: 'Sara Malik', excerpt: 'The most common Google Ads mistakes that quietly waste budget, and exactly how to fix each one.' },
  { title: 'How to Build a Content Calendar That Converts', cat: 'Social Media', date: 'Jun 24, 2026', read: '8 min', author: 'Omar Haddad', excerpt: 'A repeatable framework for planning social content that drives engagement and leads, not just likes.' },
  { title: 'Local SEO in 2026: The Complete Playbook', cat: 'SEO', date: 'Jun 10, 2026', read: '11 min', author: 'Sara Malik', excerpt: 'Everything a local business needs to dominate Google Maps and local search this year.' },
  { title: 'Why Your Website Is Losing Sales (And How to Fix It)', cat: 'Web Development', date: 'May 30, 2026', read: '7 min', author: 'Daniel Reyes', excerpt: 'The conversion killers hiding on most business websites, and the quick wins that recover lost revenue.' },
  { title: 'Reels That Actually Drive Revenue', cat: 'Video', date: 'May 18, 2026', read: '5 min', author: 'Omar Haddad', excerpt: 'How to make short-form video that does more than entertain, it sells.' },
  { title: 'Branding on a Budget: A Founder\u2019s Guide', cat: 'Branding', date: 'May 4, 2026', read: '9 min', author: 'Layla Aziz', excerpt: 'Build a memorable brand without a huge budget using these practical, founder-tested steps.' },
];
export const BLOG = BLOG_RAW.map((b) => ({ ...b, slug: slugify(b.title) }));

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];
