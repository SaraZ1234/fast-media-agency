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
    description:
      'We help businesses build a strong social media presence that drives awareness, engagement, leads, and sales. Our team creates platform-specific strategies, high-quality content, paid advertising campaigns, and community management to ensure your brand stays active and relevant across every major social network.',

    overview:
      'Social media is more than simply posting content—it is one of the most effective ways to build relationships with customers, strengthen your brand, and generate measurable business growth. At FAST MEDIA AGENCY, we develop customized strategies based on your industry, audience, and business goals. Every campaign is backed by analytics, creative storytelling, and continuous optimization to maximize ROI.',

    challenges: [
      'Low engagement despite regular posting.',
      'Inconsistent branding across multiple social platforms.',
      'No clear content strategy or posting schedule.',
      'Difficulty generating quality leads through social media.',
      'Limited internal resources to manage accounts effectively.',
      'Poor campaign performance and low return on ad spend.',
      'Lack of audience growth and community engagement.',
      'No reporting or performance tracking.'
    ],

    solutions: [
      'Comprehensive social media strategy tailored to your business.',
      'Monthly content calendars with platform-specific content.',
      'Professional graphics, videos, reels, and stories.',
      'Community management and audience engagement.',
      'Facebook & Instagram advertising campaigns.',
      'Performance tracking with monthly reports.',
      'Continuous optimization based on analytics.',
      'Dedicated account manager for ongoing support.'
    ],

    benefits: [
      'Increase brand awareness.',
      'Build trust with your audience.',
      'Generate qualified leads.',
      'Improve customer engagement.',
      'Drive more website traffic.',
      'Increase conversions and sales.',
      'Maintain consistent branding.',
      'Save time with fully managed social media.',
      'Receive detailed monthly performance reports.',
      'Stay ahead of competitors.'
    ],

    services: [
      'Social Media Strategy',
      'Content Planning',
      'Content Writing',
      'Graphic Design',
      'Reel Creation',
      'Short-form Videos',
      'Story Design',
      'Community Management',
      'Hashtag Research',
      'Competitor Analysis',
      'Influencer Collaboration',
      'Monthly Reporting'
    ],

    platforms: [
      'Facebook',
      'Instagram',
      'LinkedIn',
      'TikTok',
      'X (Twitter)',
      'Pinterest',
      'YouTube',
      'Threads'
    ],

    process: [
      'Business Discovery & Goal Setting',
      'Competitor & Audience Research',
      'Content Strategy Development',
      'Monthly Content Calendar',
      'Creative Design & Copywriting',
      'Publishing & Scheduling',
      'Community Management',
      'Paid Campaign Management',
      'Performance Monitoring',
      'Monthly Reporting & Optimization'
    ],

    deliverables: [
      'Monthly content calendar',
      'Custom graphics',
      'Professional captions',
      'Hashtag strategy',
      'Story designs',
      'Reels editing',
      'Community management',
      'Advertising campaigns',
      'Monthly analytics report',
      'Strategy review meetings'
    ],

    idealFor: [
      'Startups',
      'Small businesses',
      'Corporate companies',
      'E-commerce brands',
      'Real estate agencies',
      'Healthcare providers',
      'Restaurants & Cafes',
      'Educational institutions',
      'Professional service firms',
      'Personal brands'
    ],

    industries: [
      'Real Estate',
      'Healthcare',
      'Education',
      'Finance',
      'Technology',
      'Hospitality',
      'E-commerce',
      'Fashion',
      'Automotive',
      'Travel'
    ],

    timeline:
      'Strategy development typically takes 3–5 business days. Content production begins during the first week, with consistent publishing throughout the month. Performance reporting and optimization are provided every month.',

    faqs: [
      {
        q: 'Which social media platforms should my business use?',
        a: 'We recommend platforms based on your target audience, industry, and business objectives rather than using every platform.'
      },
      {
        q: 'Do you create graphics and videos?',
        a: 'Yes. Our team designs graphics, reels, short videos, stories, and promotional creatives.'
      },
      {
        q: 'Do you manage paid advertising?',
        a: 'Yes. We manage Facebook, Instagram, LinkedIn, TikTok, and other paid social campaigns.'
      },
      {
        q: 'How often will you post?',
        a: 'Posting frequency depends on your selected package, typically ranging from 12 to 30+ posts per month.'
      },
      {
        q: 'Will I receive performance reports?',
        a: 'Yes. Every client receives detailed monthly reports showing reach, engagement, leads, and campaign performance.'
      },
      {
        q: 'Can you manage multiple social media platforms?',
        a: 'Absolutely. We can manage all major platforms through a unified content strategy.'
      }
    ]
  },

  'google-ads': {
    description:
      'We help businesses generate qualified leads and sales through high-performing Google Ads campaigns. Our team manages search, display, and YouTube advertising with advanced targeting, conversion tracking, and continuous optimization to maximize your return on investment.',

    overview:
      'Google Ads allows businesses to reach customers at the exact moment they are searching for products or services. At FAST MEDIA AGENCY, we create data-driven campaigns focused on reducing wasted ad spend, improving conversions, and building a predictable customer acquisition system.',

    challenges: [
      'High CPC with poor ROI.',
      'Low quality leads from paid campaigns.',
      'Poor conversion tracking and reporting.',
      'Campaigns running without proper optimization.',
      'Irrelevant traffic from poor keyword targeting.',
      'Limited understanding of customer search behavior.'
    ],

    solutions: [
      'Complete Google Ads account audit.',
      'Keyword research and competitor analysis.',
      'Search, Display, and YouTube campaign setup.',
      'Conversion tracking implementation.',
      'Professional ad copywriting.',
      'Landing page improvement suggestions.',
      'Continuous bid and budget optimization.',
      'Monthly performance reporting.'
    ],

    benefits: [
      'Reach customers actively searching for your services.',
      'Track every click, lead, and conversion.',
      'Generate immediate targeted traffic.',
      'Reduce wasted advertising spend.',
      'Improve return on ad spend (ROAS).',
      'Scale campaigns based on profitable results.',
      'Gain valuable customer insights.',
      'Build a predictable lead generation system.'
    ],

    services: [
      'Google Search Ads',
      'Display Advertising',
      'YouTube Advertising',
      'Keyword Research',
      'Competitor Analysis',
      'Campaign Setup',
      'Conversion Tracking',
      'Bid Optimization',
      'Ad Copywriting',
      'Remarketing Campaigns',
      'Monthly Reporting'
    ],

    platforms: [
      {
        name: 'Google Search',
        features: ['Keyword Research', 'Search Ads', 'Bid Optimization', 'Ad Extensions']
      },
      {
        name: 'Display Network',
        features: ['Banner Ads', 'Remarketing', 'Audience Targeting', 'Brand Awareness']
      },
      {
        name: 'YouTube Ads',
        features: ['Video Ads', 'Skippable Ads', 'Brand Campaigns', 'Lead Generation']
      }
    ],

    process: [
      'Business & Goal Discovery',
      'Google Ads Account Audit',
      'Keyword & Competitor Research',
      'Campaign Structure Planning',
      'Ad Creation & Tracking Setup',
      'Campaign Launch',
      'Performance Monitoring',
      'Optimization & Scaling',
      'Monthly Reporting'
    ],

    deliverables: [
      'Keyword Research',
      'Campaign Setup',
      'Conversion Tracking',
      'Ad Copywriting',
      'Landing Page Suggestions',
      'Campaign Optimization',
      'Monthly Reports'
    ],

    idealFor: [
      'Local businesses',
      'E-commerce stores',
      'Service providers',
      'Startups',
      'B2B companies',
      'Companies wanting measurable advertising results'
    ],

    industries: [
      'Real Estate',
      'Healthcare',
      'Education',
      'Technology',
      'Finance',
      'E-commerce',
      'Travel',
      'Hospitality'
    ],

    timeline:
      'Campaign planning and setup typically takes 7–10 business days. Optimization and performance improvements continue throughout the campaign lifecycle.',

    faqs: [
      {
        q: 'How quickly can Google Ads generate results?',
        a: 'Google Ads can start generating traffic immediately after campaigns are approved. Optimization improves performance over time.'
      },
      {
        q: 'Do you manage the advertising budget?',
        a: 'Yes. We optimize campaigns according to your goals and recommend budget allocation based on performance.'
      }
    ]
  },

  'meta-ads': {
    description:
      'We create high-performing Facebook and Instagram advertising campaigns that help businesses generate leads, increase sales, and grow their online presence. Our team combines audience research, creative strategy, and continuous optimization to maximize campaign performance.',

    overview:
      'Meta Ads provide businesses with powerful targeting capabilities to reach the right customers based on interests, behavior, demographics, and online activity. At FAST MEDIA AGENCY, we design data-driven campaigns focused on improving engagement, reducing acquisition costs, and generating measurable business results.',

    challenges: [
      'Low ROAS from advertising campaigns.',
      'High CPM and expensive customer acquisition.',
      'Creative fatigue causing declining performance.',
      'Poor audience targeting.',
      'Low-quality leads from campaigns.',
      'Lack of proper tracking and optimization.'
    ],

    solutions: [
      'Complete audience and competitor research.',
      'Facebook Pixel and conversion tracking setup.',
      'Creative strategy and ad design.',
      'Campaign structure optimization.',
      'Multiple audience testing.',
      'Remarketing campaigns.',
      'Continuous performance optimization.',
      'Detailed campaign reporting.'
    ],

    benefits: [
      'Reach highly targeted audiences.',
      'Generate qualified leads.',
      'Increase brand awareness.',
      'Improve return on ad spend.',
      'Retarget interested customers.',
      'Scale successful campaigns.',
      'Understand customer behavior through analytics.'
    ],

    services: [
      'Facebook Advertising',
      'Instagram Advertising',
      'Audience Research',
      'Creative Development',
      'Lead Generation Campaigns',
      'Remarketing Campaigns',
      'Pixel Setup',
      'Campaign Optimization',
      'Performance Reporting'
    ],

    platforms: [
      {
        name: 'Facebook',
        features: ['Lead Ads', 'Traffic Campaigns', 'Remarketing', 'Messenger Ads']
      },
      {
        name: 'Instagram',
        features: ['Reels Ads', 'Story Ads', 'Feed Ads', 'Shopping Campaigns']
      }
    ],

    process: [
      'Business Goal Analysis',
      'Audience Research',
      'Creative Planning',
      'Campaign Setup',
      'Pixel & Tracking Setup',
      'Campaign Launch',
      'A/B Testing',
      'Optimization',
      'Monthly Reporting'
    ],

    deliverables: [
      'Audience Research',
      'Creative Design',
      'Video Ads',
      'Pixel Setup',
      'Campaign Optimization',
      'Performance Reports'
    ],

    idealFor: [
      'E-commerce brands',
      'Local businesses',
      'Service providers',
      'Startups',
      'Real estate companies',
      'Online businesses'
    ],

    industries: [
      'E-commerce',
      'Fashion',
      'Healthcare',
      'Real Estate',
      'Education',
      'Technology',
      'Hospitality'
    ],

    timeline:
      'Campaign planning and setup usually takes 5–7 business days. Testing and optimization continue throughout the campaign period.',

    faqs: [
      {
        q: 'Do you create Facebook and Instagram ad creatives?',
        a: 'Yes. We create graphics, videos, reels, and variations designed specifically for advertising campaigns.'
      },
      {
        q: 'How do you measure campaign success?',
        a: 'We track leads, sales, cost per result, ROAS, engagement, and other important performance metrics.'
      }
    ]
  },

  'website-development': {
    description:
      'We design and develop fast, modern, responsive websites that help businesses establish credibility, attract customers, and increase conversions. From business websites to complete e-commerce platforms, we build scalable digital solutions.',

    overview:
      'A professional website is the foundation of your online presence. At FAST MEDIA AGENCY, we create user-focused websites with modern designs, optimized performance, SEO-friendly structures, and powerful functionality that helps businesses grow online.',

    challenges: [
      'Slow website performance.',
      'Poor user experience.',
      'Low conversion rates.',
      'Outdated website design.',
      'Poor mobile responsiveness.',
      'Difficulty managing website content.'
    ],

    solutions: [
      'Custom website design and development.',
      'Responsive layouts for all devices.',
      'SEO-friendly website architecture.',
      'Fast loading optimization.',
      'CMS integration.',
      'E-commerce functionality.',
      'Secure deployment and maintenance.'
    ],

    benefits: [
      'Professional online presence.',
      'Better customer experience.',
      'Higher conversion opportunities.',
      'Improved search visibility.',
      'Mobile-friendly experience.',
      'Scalable website architecture.'
    ],

    services: [
      'Business Websites',
      'E-commerce Websites',
      'Custom Web Applications',
      'Frontend Development',
      'Backend Development',
      'Database Integration',
      'CMS Development',
      'Website Maintenance'
    ],

    platforms: [
      {
        name: 'Business Website',
        features: ['Responsive Design', 'SEO Ready', 'Fast Loading', 'CMS Integration']
      },
      {
        name: 'E-commerce',
        features: ['Shopping Cart', 'Payment Gateway', 'Product Management', 'Order Tracking']
      }
    ],

    process: [
      'Requirement Gathering',
      'Planning & Wireframes',
      'UI/UX Design',
      'Frontend Development',
      'Backend Integration',
      'Testing',
      'Deployment',
      'Maintenance Support'
    ],

    deliverables: [
      'UI Design',
      'Frontend Development',
      'Backend Development',
      'Admin Dashboard',
      'SEO Optimization',
      'Deployment'
    ],

    idealFor: [
      'Startups',
      'Small businesses',
      'Corporate companies',
      'E-commerce brands',
      'Service providers'
    ],

    industries: [
      'Technology',
      'Healthcare',
      'Education',
      'Finance',
      'Real Estate',
      'Retail'
    ],

    timeline:
      'Business websites usually require 3–4 weeks, while complex e-commerce and custom applications may require 5–8 weeks.',

    faqs: [
      {
        q: 'Do you build custom websites or templates?',
        a: 'We build customized websites according to your business goals, branding, and functionality requirements.'
      },
      {
        q: 'Will my website be mobile responsive?',
        a: 'Yes. Every website is optimized to work smoothly across desktop, tablet, and mobile devices.'
      }
    ]
  },

  'seo': {
    description:
      'We help businesses improve their search visibility and attract consistent organic traffic through strategic SEO. Our team focuses on technical SEO, content optimization, keyword targeting, and authority building to improve rankings and generate long-term growth.',

    overview:
      'SEO is a long-term investment that helps businesses attract customers without depending only on paid advertising. At FAST MEDIA AGENCY, we develop customized SEO strategies based on your industry, competition, and business goals to improve rankings, visibility, and organic conversions.',

    challenges: [
      'Low rankings on search engines.',
      'Poor organic traffic.',
      'Technical SEO issues.',
      'Weak backlink profile.',
      'Poor keyword targeting.',
      'Slow website performance affecting rankings.'
    ],

    solutions: [
      'Complete SEO audit and analysis.',
      'Keyword research and competitor analysis.',
      'On-page SEO optimization.',
      'Technical SEO improvements.',
      'Content optimization strategies.',
      'Link building campaigns.',
      'Local SEO optimization.',
      'Monthly SEO reporting.'
    ],

    benefits: [
      'Increase organic website traffic.',
      'Improve search engine rankings.',
      'Generate consistent qualified leads.',
      'Build long-term online visibility.',
      'Reduce dependency on paid advertising.',
      'Improve website performance.',
      'Strengthen brand authority.'
    ],

    services: [
      'SEO Audit',
      'Keyword Research',
      'On-Page SEO',
      'Technical SEO',
      'Content Optimization',
      'Local SEO',
      'Link Building',
      'Competitor Analysis',
      'SEO Reporting'
    ],

    platforms: [
      {
        name: 'On Page SEO',
        features: ['Keyword Optimization', 'Meta Tags', 'Internal Linking', 'Content Optimization']
      },
      {
        name: 'Technical SEO',
        features: ['Speed Optimization', 'Schema Markup', 'Core Web Vitals', 'Indexing']
      },
      {
        name: 'Off Page SEO',
        features: ['Backlinks', 'Guest Posting', 'Local Citations', 'Authority Building']
      }
    ],

    process: [
      'Website Audit',
      'Competitor Research',
      'Keyword Strategy',
      'Technical Optimization',
      'Content Improvement',
      'Authority Building',
      'Performance Monitoring',
      'Monthly Reporting'
    ],

    deliverables: [
      'SEO Audit Report',
      'Keyword Research',
      'Technical SEO Fixes',
      'Content Optimization',
      'Backlink Strategy',
      'Monthly Reports'
    ],

    idealFor: [
      'Businesses wanting long-term growth',
      'Local businesses',
      'E-commerce websites',
      'Service providers',
      'Content-based websites'
    ],

    industries: [
      'Healthcare',
      'Education',
      'Technology',
      'Real Estate',
      'Finance',
      'E-commerce'
    ],

    timeline:
      'SEO improvements usually begin within 2–4 months, with continuous optimization and growth over time.',

    faqs: [
      {
        q: 'How long does SEO take to show results?',
        a: 'SEO is a long-term strategy. Most businesses start seeing meaningful improvements within 2–4 months depending on competition and website condition.'
      },
      {
        q: 'Do you guarantee first-page rankings?',
        a: 'No ethical SEO agency can guarantee exact rankings, but we use proven strategies to improve visibility and performance.'
      }
    ]
  },

  'graphic-design': {
    description:
      'We create professional visual designs that help businesses communicate their message clearly and build a memorable brand identity. From logos and marketing materials to social media creatives, we design assets that make your business stand out.',

    overview:
      'Strong visual communication helps businesses build trust and recognition. At FAST MEDIA AGENCY, our designers create modern, consistent, and engaging designs that align with your brand personality and marketing goals.',

    challenges: [
      'Inconsistent brand visuals.',
      'Low-quality marketing materials.',
      'Outdated design style.',
      'Difficulty creating professional creatives.',
      'Weak visual identity.'
    ],

    solutions: [
      'Custom graphic design solutions.',
      'Brand-focused visual concepts.',
      'Social media creative design.',
      'Marketing material design.',
      'Professional logo development.',
      'Print and digital asset creation.'
    ],

    benefits: [
      'Professional brand appearance.',
      'Consistent visual identity.',
      'Better audience engagement.',
      'High-quality marketing assets.',
      'Stronger brand recognition.'
    ],

    services: [
      'Logo Design',
      'Brand Assets',
      'Social Media Graphics',
      'Flyer Design',
      'Brochure Design',
      'Banner Design',
      'Marketing Materials',
      'Presentation Design'
    ],

    platforms: [
      {
        name: 'Brand Identity',
        features: ['Logo Design', 'Brand Guidelines', 'Typography', 'Color Palette']
      },
      {
        name: 'Marketing Design',
        features: ['Flyers', 'Social Media Posts', 'Brochures', 'Banners']
      }
    ],

    process: [
      'Design Brief',
      'Research & Inspiration',
      'Concept Development',
      'Design Creation',
      'Revisions',
      'Final Delivery'
    ],

    deliverables: [
      'Editable Source Files',
      'Print Files',
      'Social Media Assets',
      'Logo Variations',
      'Brand Kit',
      'Marketing Materials'
    ],

    idealFor: [
      'Startups',
      'Small businesses',
      'Marketing teams',
      'Personal brands',
      'Corporate companies'
    ],

    industries: [
      'Technology',
      'Fashion',
      'Healthcare',
      'Education',
      'Retail',
      'Hospitality'
    ],

    timeline:
      'Individual designs usually take 2–4 business days, while complete branding projects may require 1–2 weeks.',

    faqs: [
      {
        q: 'Do you provide editable design files?',
        a: 'Yes. We provide editable source files along with final export formats.'
      },
      {
        q: 'Can you design complete brand identities?',
        a: 'Yes. We create complete brand identity systems including logos, colors, typography, and guidelines.'
      }
    ]
  },

  'video-editing': {
    description:
      'We produce polished, attention-holding video content for every platform, from fast-paced short-form reels to long-form promotional and corporate videos. Our editors combine strong pacing, motion graphics, sound design, and subtitles to keep viewers watching and turn attention into action.',

    overview:
      'Video is the highest-engagement content format on nearly every platform, but raw footage rarely performs on its own. At FAST MEDIA AGENCY, we take your footage (or coordinate a shoot through our network) and turn it into edits engineered for retention, platform algorithms, and clear calls to action, whether that is a 15-second reel or a 5-minute brand film.',

    challenges: [
      'Raw footage that never gets turned into usable content.',
      'Low watch-time and drop-off in the first few seconds.',
      'Inconsistent visual style across videos.',
      'No in-house capacity to edit at a consistent cadence.',
      'Videos that look unpolished compared to competitors.',
      'Content not formatted correctly for each platform.'
    ],

    solutions: [
      'Structured footage review and scripting support.',
      'Fast-paced editing built for retention.',
      'Custom motion graphics and on-screen text.',
      'Professional sound design and music syncing.',
      'Platform-specific formatting and captions.',
      'Ongoing editing pipeline for consistent output.'
    ],

    benefits: [
      'Higher watch-time and audience retention.',
      'Platform-ready reels, shorts, and long-form video.',
      'Professional, on-brand motion graphics.',
      'Consistent content pipeline without hiring in-house.',
      'Videos that convert attention into clicks and leads.',
      'Faster turnaround from raw footage to finished asset.'
    ],

    services: [
      'Short-form Reels & Shorts',
      'Long-form Promotional Video',
      'Corporate & Brand Video',
      'Motion Graphics',
      'Sound Design & Music',
      'Subtitles & Captions',
      'Color Grading',
      'Multi-platform Formatting'
    ],

    platforms: [
      {
        name: 'Short-form Content',
        features: ['Reels & TikTok', 'YouTube Shorts', 'Fast-paced Cuts', 'Trend-aware Editing']
      },
      {
        name: 'Long-form & Promotional',
        features: ['Brand Films', 'Corporate Videos', 'Testimonials', 'Product Videos']
      },
      {
        name: 'Motion & Sound',
        features: ['Motion Graphics', 'Sound Design', 'Music Syncing', 'Captions & Subtitles']
      }
    ],

    process: [
      'Footage Review & Script Planning',
      'Rough Cut',
      'Motion Graphics & Sound Design',
      'Client Review',
      'Revisions',
      'Final Export & Delivery'
    ],

    deliverables: [
      'Edited video files',
      'Platform-optimized exports',
      'Captions & subtitles',
      'Motion graphics elements',
      'Thumbnail options',
      'Revision rounds'
    ],

    idealFor: [
      'Brands producing raw footage but no polished output',
      'Businesses wanting a steady reel and shorts pipeline',
      'Teams needing promotional or corporate video edits',
      'Creators scaling content across multiple platforms'
    ],

    industries: [
      'E-commerce',
      'Real Estate',
      'Hospitality',
      'Technology',
      'Education',
      'Fashion',
      'Fitness & Wellness'
    ],

    timeline:
      'Short-form reels: 2–3 business days. Longer promotional or corporate videos: 5–7 business days depending on scope.',

    faqs: [
      {
        q: 'Do I need to provide the footage?',
        a: 'You can supply raw footage, or we can coordinate a shoot through our network of videographers.'
      },
      {
        q: 'What formats do you deliver for?',
        a: 'We export optimised versions for Instagram, TikTok, YouTube and any other platform you need, from a single edit.'
      },
      {
        q: 'Can you add subtitles and captions?',
        a: 'Yes, captions are included as standard on all short-form content and available on request for long-form video.'
      }
    ]
  },

  'branding': {
    description:
      'We build brand strategy, identity systems, and guidelines that give your business a clear, consistent, and confident presence in the market. From naming and logo design to full brand guidelines, we create identities people remember and trust.',

    overview:
      'A strong brand is more than a logo. It is the consistent visual and verbal system that shapes how customers perceive, remember, and trust your business. At FAST MEDIA AGENCY, we start with strategy and positioning before moving into design, so every visual and messaging decision is grounded in who you are and who you are trying to reach.',

    challenges: [
      'No cohesive visual identity across materials.',
      'A logo and brand that feel outdated or generic.',
      'Inconsistent brand application across teams and locations.',
      'Difficulty standing out from competitors.',
      'No clear brand guidelines for internal or external use.',
      'Messaging that does not reflect the business clearly.'
    ],

    solutions: [
      'Brand strategy and positioning workshops.',
      'Logo design and visual identity development.',
      'Color palette, typography, and design system.',
      'Brand voice and messaging guidelines.',
      'Comprehensive brand guideline documentation.',
      'Rollout support across marketing materials.'
    ],

    benefits: [
      'A distinct, memorable identity.',
      'Consistency across every touchpoint.',
      'Clear brand guidelines for any team to follow.',
      'Stronger customer trust and recognition.',
      'A brand system that scales as you grow.',
      'Clearer, more confident market positioning.'
    ],

    services: [
      'Brand Strategy',
      'Logo Design',
      'Visual Identity Systems',
      'Typography & Color Palette',
      'Brand Voice & Messaging',
      'Brand Guidelines',
      'Stationery & Collateral Design',
      'Rebrand & Refresh'
    ],

    platforms: [
      {
        name: 'Brand Strategy',
        features: ['Positioning', 'Naming', 'Audience Research', 'Competitor Analysis']
      },
      {
        name: 'Visual Identity',
        features: ['Logo Design', 'Color Palette', 'Typography', 'Iconography']
      },
      {
        name: 'Guidelines & Rollout',
        features: ['Brand Guidelines', 'Templates', 'Collateral', 'Application Examples']
      }
    ],

    process: [
      'Discovery & Strategy',
      'Positioning & Messaging',
      'Identity Design & Concepts',
      'Refinement & Revisions',
      'Guidelines Documentation',
      'Rollout Support'
    ],

    deliverables: [
      'Logo files & variations',
      'Color palette & typography system',
      'Brand voice & messaging guide',
      'Full brand guidelines document',
      'Collateral templates',
      'Rollout support materials'
    ],

    idealFor: [
      'New businesses building their identity from scratch',
      'Established brands in need of a refresh',
      'Franchises needing consistent guidelines across locations',
      'Startups preparing for launch or fundraising'
    ],

    industries: [
      'Technology',
      'Healthcare',
      'Real Estate',
      'Hospitality',
      'Retail',
      'Professional Services',
      'Education'
    ],

    timeline:
      'Full brand identity projects typically run 3–5 weeks from discovery to final handover; refreshes of an existing identity can be faster.',

    faqs: [
      {
        q: 'What is included in a brand guideline?',
        a: 'Logo usage, color palette, typography, tone of voice and application examples across your key marketing materials.'
      },
      {
        q: 'Can you rebrand an existing business?',
        a: 'Yes, we regularly refresh existing brands while preserving the recognition and equity already built with customers.'
      },
      {
        q: 'Do you handle naming as well as visual identity?',
        a: 'Yes, naming and positioning work can be included as part of a full brand strategy engagement.'
      }
    ]
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
  {
    title: 'Luxe Real Estate',
    cat: 'Website + Google Ads',
    industry: 'Real Estate',
    metric: '+320% qualified leads',
    client: 'Luxe Properties LLC',
    location: 'Dubai, UAE',
    tech: ['React', 'Google Ads', 'Search', 'Landing Pages'],
    duration: '6 weeks',
    teamSize: '4 specialists',
    overview: 'Luxe Properties LLC is a premium residential developer generating a healthy volume of ad clicks but converting very few into serious buyer enquiries. Their website was not built to qualify traffic, and their Google Ads account was structured around broad, generic keywords that attracted browsers rather than buyers.',
    challenge: 'A premium developer was generating plenty of clicks but few serious buyer enquiries, with a bloated cost per lead. Their existing site funnelled all traffic to a single generic contact form, with no way to track which campaigns or property types were actually driving results.',
    solution: 'We rebuilt their website around high-intent property landing pages and restructured Google Ads campaigns with tighter targeting and conversion tracking, giving the sales team a clear, trackable pipeline of qualified enquiries by property type.',
    services: ['Website redesign & development', 'Google Ads account restructuring', 'Landing page design', 'Conversion tracking & call recording setup', 'Ongoing campaign optimisation'],
    approach: ['Audited existing site and ad account structure', 'Designed dedicated landing pages per property type', 'Rebuilt Search campaigns around high-intent keywords', 'Installed full conversion tracking and call recording', 'Ran a 3-week testing cycle on ad copy and bidding strategy'],
    deliverables: ['Fully responsive property website', '6 dedicated property landing pages', 'Restructured Google Ads account', 'Conversion & call tracking dashboard', 'Monthly performance reporting'],
    results: ['+320% qualified leads', '-42% cost per lead', '2.1x more booked viewings', '3.4x return on ad spend within 6 weeks'],
    testimonial: { quote: "Our sales team finally has a pipeline they can trust. We went from chasing tyre-kickers to booking serious viewings, and we can see exactly which campaigns are driving it.", author: 'Marketing Director', role: 'Luxe Properties LLC' }
  },

  {
    title: 'Verde Restaurant Group',
    cat: 'Social Media + Reels',
    industry: 'Restaurants',
    metric: '2.4M organic reach',
    client: 'Verde Hospitality',
    location: 'Multi-location, national',
    tech: ['Instagram', 'Reels', 'Content Strategy'],
    duration: '3 months (ongoing)',
    teamSize: '3 specialists',
    overview: 'Verde Hospitality operates several restaurant locations that had grown organically but never developed a consistent social media presence. Each location posted sporadically, in a different tone, with no shared content plan, leaving significant reach and booking potential untapped.',
    challenge: 'Multiple restaurant locations with inconsistent social presence and low organic reach. Content was produced ad hoc by individual location managers, resulting in mismatched branding and minimal engagement across the group.',
    solution: 'We built a unified content calendar with daily reels, story design and community management across all locations, giving Verde a single consistent brand voice while still highlighting what made each location unique.',
    services: ['Social media strategy', 'Content calendar management', 'Reel & story production', 'Community management', 'Cross-location brand alignment'],
    approach: ["Audited each location's existing channels and tone", 'Built a shared content calendar and shoot schedule', 'Produced daily reels, stories and posts per location', 'Managed community replies and DMs across all pages', 'Introduced monthly performance reviews per location'],
    deliverables: ['Unified brand content guidelines', 'Monthly content calendar per location', '20+ reels and stories produced weekly', 'Ongoing community management', 'Monthly reach & engagement reports'],
    results: ['2.4M organic reach', '+68% follower growth', '+35% weekend covers', '4 locations aligned under one content system'],
    testimonial: { quote: "For the first time, all our locations feel like one brand online. The reels alone have driven a noticeable jump in weekend walk-ins.", author: 'Operations Manager', role: 'Verde Hospitality' }
  },

  {
    title: 'Nova Fashion',
    cat: 'E-commerce + Meta Ads',
    industry: 'Fashion',
    metric: '5.8x return on ad spend',
    client: 'Nova Apparel',
    location: 'Online / DTC',
    tech: ['Shopify', 'Meta Ads', 'Pixel', 'Remarketing'],
    duration: '8 weeks',
    teamSize: '3 specialists',
    overview: 'Nova Apparel is a fast-growing direct-to-consumer fashion label that had proven organic demand for its products but had never been able to scale paid social profitably. Their pixel data was incomplete and campaigns were structured with no clear testing framework.',
    challenge: 'A growing fashion label struggled to scale paid social profitably. Broken pixel tracking meant campaign decisions were being made on incomplete data, and creative was rotated without any structured testing process.',
    solution: 'We rebuilt the pixel setup, created a testing framework for creative and scaled winning audiences with remarketing funnels, turning paid social from a guessing game into a repeatable, profitable growth channel.',
    services: ['Meta Ads strategy & management', 'Pixel & server-side tracking setup', 'Creative testing framework', 'Remarketing funnel design', 'Ongoing scaling & optimisation'],
    approach: ['Rebuilt pixel and server-side conversion tracking', 'Ran structured creative testing across audience segments', 'Built remarketing funnels for cart abandoners', 'Scaled winning ad sets while trimming underperformers', 'Introduced weekly creative refresh cycles to avoid fatigue'],
    deliverables: ['Rebuilt Meta Pixel & CAPI integration', 'Structured creative testing library', '3 remarketing funnels (browse, cart, purchase)', 'Weekly ad performance reporting', 'Monthly strategy review'],
    results: ['5.8x ROAS', '+210% online revenue', '-31% cost per purchase', '2.9x increase in repeat purchase rate'],
    testimonial: { quote: "We'd tried scaling paid social before and kept hitting a ceiling. Fixing the tracking and having an actual testing process changed everything.", author: 'Founder', role: 'Nova Apparel' }
  },

  {
    title: 'BrightSmile Dental',
    cat: 'Local SEO',
    industry: 'Healthcare',
    metric: '#1 ranking in 4 months',
    client: 'BrightSmile Clinic',
    location: 'Single-location clinic',
    tech: ['Local SEO', 'Google Business', 'On-Page SEO'],
    duration: '4 months',
    teamSize: '2 specialists',
    overview: 'BrightSmile Clinic had built an excellent local reputation and strong patient reviews, but almost none of that trust was reflected online. The practice was effectively invisible in local search and Google Maps results, losing new patients to lower-rated competitors who simply ranked higher.',
    challenge: 'A dental clinic was invisible in local search despite excellent reviews. Technical issues on the website, an incomplete Google Business Profile, and a lack of local citations meant the clinic rarely appeared for the searches new patients were actually making.',
    solution: 'We optimised their Google Business Profile, fixed technical SEO and built local citations and content, giving BrightSmile the visibility their reputation had already earned offline.',
    services: ['Technical SEO audit & fixes', 'Google Business Profile optimisation', 'Local citation building', 'On-page & content optimisation', 'Review generation strategy'],
    approach: ['Completed a full technical and on-page SEO audit', 'Optimised Google Business Profile and review strategy', 'Built local citations and location-specific content', 'Tracked rankings and Maps calls month over month', 'Refined targeting around highest-intent local keywords'],
    deliverables: ['Full technical SEO audit report', 'Optimised Google Business Profile', '30+ local citations built', 'Location-specific service pages', 'Monthly ranking & call tracking reports'],
    results: ['#1 local ranking in 4 months', '+240% Maps calls', '+3x new patient bookings', 'Top 3 ranking for 12 core local keywords'],
    testimonial: { quote: "Patients kept telling us they found us on Google, which was new for us. Within a few months we went from invisible to the top result in our area.", author: 'Practice Manager', role: 'BrightSmile Clinic' }
  },

  {
    title: 'Apex Auto',
    cat: 'Branding + Video',
    industry: 'Automotive',
    metric: '+180% showroom bookings',
    client: 'Apex Motors',
    location: 'Regional dealership group',
    tech: ['Branding', 'Video Editing', 'Motion Graphics'],
    duration: '5 weeks',
    teamSize: '4 specialists',
    overview: 'Apex Motors had a loyal existing customer base but a dated brand identity that was struggling to resonate with younger buyers. Their marketing materials and video content had not evolved alongside their showroom experience or vehicle lineup.',
    challenge: 'An auto dealership needed a modern brand and content to attract younger buyers. Their existing identity, signage and promotional video felt outdated next to newer competitors targeting the same demographic.',
    solution: 'We delivered a full rebrand plus a library of promotional reels and showroom videos, repositioning Apex as a modern, energetic dealership without losing the trust built with existing customers.',
    services: ['Brand strategy & positioning', 'Visual identity design', 'Brand guidelines', 'Promotional video production', 'Motion graphics & editing'],
    approach: ['Ran discovery workshops to define brand positioning', 'Designed new visual identity and guidelines', 'Produced a launch library of reels and showroom videos', 'Rolled out the new brand across social and signage', 'Trained in-house team on brand guideline application'],
    deliverables: ['Full brand identity & guidelines', 'Updated logo & signage assets', '15+ launch reels and showroom videos', 'Social media rollout kit', 'Brand training session for staff'],
    results: ['+180% showroom bookings', '+92% social engagement', '4.2M video views', '3x increase in under-35 customer enquiries'],
    testimonial: { quote: "The rebrand gave us a completely different energy. The videos alone brought in a younger crowd we just weren't reaching before.", author: 'General Manager', role: 'Apex Motors' }
  },

  {
    title: 'Meridian Finance',
    cat: 'Website + SEO',
    industry: 'Finance',
    metric: '3x organic traffic',
    client: 'Meridian Advisory',
    location: 'National advisory firm',
    tech: ['Web Development', 'Technical SEO', 'Content'],
    duration: '7 weeks',
    teamSize: '3 specialists',
    overview: 'Meridian Advisory is an established financial advisory firm whose website had not been updated in years. Slow load times, an outdated design, and no real content strategy meant the site generated almost no organic traffic despite the firm\u2019s strong industry reputation.',
    challenge: 'A finance firm had an outdated site with almost no organic traffic. Their content was thin, technical SEO fundamentals were largely missing, and the site was not built to earn trust with prospective clients researching advisory services.',
    solution: 'We built a fast, SEO-friendly website and executed a content and technical SEO strategy, positioning Meridian as a credible authority in their space while making the site itself easy for search engines to index and rank.',
    services: ['Website design & development', 'Technical SEO', 'Keyword strategy', 'Content development', 'Ongoing SEO optimisation'],
    approach: ['Rebuilt the website on a fast, SEO-friendly stack', 'Mapped and targeted 20+ priority keywords', 'Published pillar content around core services', 'Built technical SEO foundations and internal linking', 'Monitored rankings and refined content monthly'],
    deliverables: ['Rebuilt, SEO-optimised website', 'Keyword strategy & content map', '10+ pillar content pages', 'Technical SEO implementation', 'Monthly ranking & traffic reports'],
    results: ['3x organic traffic', '+150% enquiry form submissions', 'Page 1 for 20+ keywords', '-38% average page load time'],
    testimonial: { quote: "Our old site was actively working against us. Now it's one of our best sources of new client enquiries, and it keeps improving month over month.", author: 'Managing Partner', role: 'Meridian Advisory' }
  },

  {
    title: 'Bright Path Academy',
    cat: 'SEO + Content Marketing',
    industry: 'Education',
    metric: '+165% enrolment enquiries',
    client: 'Bright Path Academy',
    location: 'Abu Dhabi, UAE',
    tech: ['SEO', 'Content Strategy', 'Local SEO'],
    duration: '5 months',
    teamSize: '3 specialists',
    overview: 'Bright Path Academy is a private K-12 school competing with several established institutions for enrolment in the same district. Their website ranked well for the school\u2019s own name but was invisible for the broader "school near me" and admissions-related searches that parents actually use.',
    challenge: 'A well-regarded private school was losing prospective families to competitors that simply ranked higher for admissions-related searches. Their site had thin admissions content and no structured local SEO presence across campus locations.',
    solution: 'We built out a full admissions content hub, strengthened local SEO for each campus, and restructured key landing pages around the questions parents actually search for during the admissions process.',
    services: ['SEO strategy', 'Local SEO per campus', 'Admissions content development', 'On-page optimisation', 'Monthly reporting'],
    approach: ['Audited admissions funnel and existing content gaps', 'Mapped keyword clusters around parent search intent', 'Built dedicated admissions and curriculum content', 'Optimised Google Business Profiles per campus', 'Tracked enquiry-to-tour conversion monthly'],
    deliverables: ['Admissions content hub', 'Campus-specific local SEO pages', 'Keyword & content roadmap', 'Optimised Google Business Profiles', 'Monthly enrolment funnel report'],
    results: ['+165% enrolment enquiries', '+220% organic admissions traffic', 'Top 3 ranking for 15+ admissions keywords', '+40% campus tour bookings'],
    testimonial: { quote: "Parents now find us when they're actually researching schools, not just searching our name. Our admissions team has never had a fuller pipeline this early in the year.", author: 'Director of Admissions', role: 'Bright Path Academy' }
  },

  {
    title: 'Wanderly Travel',
    cat: 'Website + Meta Ads',
    industry: 'Travel',
    metric: '+275% booking enquiries',
    client: 'Wanderly Travel & Tours',
    location: 'Online / regional tours',
    tech: ['Website Development', 'Meta Ads', 'Remarketing'],
    duration: '6 weeks',
    teamSize: '3 specialists',
    overview: 'Wanderly Travel & Tours runs curated regional tour packages but relied almost entirely on word of mouth and a slow, outdated booking site. Seasonal demand spikes were being missed because the site could not handle traffic or convert browsers into enquiries quickly enough.',
    challenge: 'A regional tour operator had strong offline reputation but a slow, dated website and no paid social presence, leaving seasonal demand largely uncaptured online.',
    solution: 'We rebuilt their booking site for speed and clarity, then launched Meta Ads campaigns timed around seasonal travel demand with remarketing to recapture browsers who didn\u2019t book on the first visit.',
    services: ['Website redesign & development', 'Meta Ads campaign management', 'Remarketing funnel setup', 'Seasonal campaign planning', 'Performance reporting'],
    approach: ['Rebuilt the booking site for speed and mobile conversion', 'Mapped seasonal demand periods for campaign timing', 'Launched Meta Ads across key tour packages', 'Built remarketing funnels for site visitors and cart abandoners', 'Optimised weekly based on booking data'],
    deliverables: ['Rebuilt booking website', 'Seasonal Meta Ads calendar', '2 remarketing funnels', 'Weekly performance reporting', 'Booking enquiry tracking setup'],
    results: ['+275% booking enquiries', '+3.2x return on ad spend', '-45% site load time', '+58% mobile booking completion'],
    testimonial: { quote: "Our busiest season used to mean missed enquiries because the old site just couldn't keep up. Now bookings come in smoothly even during peak demand.", author: 'Owner', role: 'Wanderly Travel & Tours' }
  },

  {
    title: 'Sterling & Cole Law',
    cat: 'Local SEO + Branding',
    industry: 'Law Firms',
    metric: '+190% consultation requests',
    client: 'Sterling & Cole Law Firm',
    location: 'Dubai, UAE',
    tech: ['Local SEO', 'Branding', 'Content'],
    duration: '10 weeks',
    teamSize: '3 specialists',
    overview: 'Sterling & Cole is a boutique law firm with strong client relationships but a generic, dated brand and almost no visibility in local search for the practice areas that drive new client enquiries, such as family and commercial law.',
    challenge: 'A boutique law firm had excellent client retention but almost no new client acquisition through search, and a visual identity that did not reflect the seniority of the partners or the firm\u2019s track record.',
    solution: 'We paired a focused brand refresh with a local SEO campaign built around practice-area pages, positioning the firm as the clear authority for the specific legal services prospective clients were searching for.',
    services: ['Brand refresh', 'Local SEO', 'Practice-area content development', 'Google Business Profile optimisation', 'Monthly reporting'],
    approach: ['Refreshed visual identity and messaging for credibility', 'Built dedicated pages per practice area', 'Optimised Google Business Profile and local citations', 'Developed authority content around common legal questions', 'Tracked consultation requests by practice area'],
    deliverables: ['Refreshed brand identity', 'Practice-area landing pages', 'Optimised Google Business Profile', 'Local citation building', 'Monthly consultation tracking report'],
    results: ['+190% consultation requests', 'Top 3 local ranking for 4 practice areas', '+120% organic profile views', '+65% website-to-consultation conversion'],
    testimonial: { quote: "We finally look and rank like the firm we actually are. New client calls now mention finding us on Google specifically for the service they needed.", author: 'Managing Partner', role: 'Sterling & Cole Law Firm' }
  },

  {
    title: 'Vertex Tech Solutions',
    cat: 'Website Development + SEO',
    industry: 'Technology',
    metric: '+240% demo requests',
    client: 'Vertex Tech Solutions',
    location: 'B2B SaaS',
    tech: ['Website Development', 'Technical SEO', 'Content'],
    duration: '9 weeks',
    teamSize: '4 specialists',
    overview: 'Vertex Tech Solutions is a B2B SaaS company whose product had strong market fit but a website that failed to clearly explain the product or make it easy for prospects to book a demo, resulting in high traffic but very few qualified leads.',
    challenge: 'A B2B SaaS company had healthy organic and paid traffic but a confusing website structure and unclear product messaging, leading to a very low visitor-to-demo conversion rate.',
    solution: 'We rebuilt the site around clear product messaging and a streamlined demo request flow, paired with technical SEO and content aimed at the specific problems the product solves for its target buyers.',
    services: ['Website redesign & development', 'Technical SEO', 'Product messaging & copy', 'Conversion rate optimisation', 'Content development'],
    approach: ['Audited the existing funnel and drop-off points', 'Rebuilt information architecture around buyer journeys', 'Rewrote core product and pricing pages', 'Streamlined the demo request flow', 'Published SEO content targeting buyer pain points'],
    deliverables: ['Rebuilt marketing website', 'Streamlined demo request flow', 'Core messaging & copy overhaul', 'Technical SEO implementation', 'Monthly funnel performance report'],
    results: ['+240% demo requests', '+3x visitor-to-demo conversion rate', '+180% organic traffic within 4 months', '-50% demo form abandonment'],
    testimonial: { quote: "Prospects finally understand what we do within seconds of landing on the site. Our sales team is getting far more qualified demo requests than before.", author: 'VP of Marketing', role: 'Vertex Tech Solutions' }
  },
];
export const PORTFOLIO = PORTFOLIO_RAW.map((p) => ({ ...p, slug: slugify(p.title) }));

export const CLIENTS = ['Luxe Properties', 'Verde Hospitality', 'Nova Apparel', 'BrightSmile Clinic', 'Apex Motors', 'Meridian Advisory', 'Orbit Realty', 'Horizon Retail'];

export const TESTIMONIALS = [
  { name: 'Ahmed Al Farsi', role: 'Managing Director', company: 'Luxe Properties LLC', initials: 'AF', rating: 5, quote: 'FAST MEDIA AGENCY rebuilt our website and Google Ads from scratch. Qualified enquiries tripled within the first quarter and the reporting is refreshingly clear.' },
  { name: 'Priya Nair', role: 'Marketing Lead', company: 'Verde Hospitality', initials: 'PN', rating: 5, quote: 'Our social presence went from inconsistent to genuinely on-brand across every location. The content calendar alone saved our team hours every week.' },
  { name: 'Karim Haddad', role: 'Founder', company: 'Nova Apparel', initials: 'KH', rating: 5, quote: 'They rebuilt our pixel and ad testing framework and our return on ad spend nearly doubled within two months. Communication has been excellent throughout.' },
  { name: 'Dr. Layla Nasser', role: 'Clinic Owner', company: 'BrightSmile Clinic', initials: 'LN', rating: 5, quote: 'We went from invisible on Google to the top local ranking in under four months. New patient calls have never been steadier.' },
  { name: 'Marco Silva', role: 'Brand Manager', company: 'Apex Motors', initials: 'MS', rating: 5, quote: 'The rebrand and video content gave us a completely different presence with younger buyers. Showroom traffic is up and the creative quality is consistently high.' },
  { name: 'Rania Youssef', role: 'CEO', company: 'Meridian Advisory', initials: 'RY', rating: 5, quote: 'A genuine growth partner, not just a vendor. Our organic traffic tripled and their team is proactive about flagging opportunities before we even ask.' },
];

export const TEAM = [
  { name: 'Sara Malik', role: 'Founder & Strategy Director', initials: 'SM' },
  { name: 'Omar Haddad', role: 'Head of Social & Content', initials: 'OH' },
  { name: 'Daniel Reyes', role: 'Head of Web Development', initials: 'DR' },
  { name: 'Layla Aziz', role: 'Creative & Brand Director', initials: 'LA' },
];

export const FAQS = [
  { q: 'How soon will I see results?', a: 'Paid campaigns can drive leads within the first week. SEO and organic growth typically show meaningful movement in 2–4 months as we compound results.' },
  { q: 'Do you work with small businesses?', a: 'Absolutely. Our Starter plans are designed for local and small businesses, and we scale with you as you grow.' },
  { q: 'Are there long-term contracts?', a: 'We offer flexible monthly plans. Most clients stay because of results, not lock-in contracts.' },
  { q: 'Who owns the ad accounts and website?', a: 'You do. Everything we build and manage stays under your ownership, always.' },
  { q: 'Do you provide monthly reports?', a: 'Yes. You receive clear, jargon-free performance reports so you always know your return.' },
  { q: 'Which industries do you specialise in?', a: 'We serve 14+ industries including healthcare, real estate, restaurants, e-commerce, finance and more.' },
];

export const BLOG_RAW = [
  {
    slug: '7-google-ads-mistakes-draining-your-budget',
    title: '7 Google Ads Mistakes Draining Your Budget',
    cat: 'Google Ads',
    date: 'Jul 2, 2026',
    read: '6 min',
    author: 'Sara Malik',
    excerpt: 'The most common Google Ads mistakes that quietly waste budget, and exactly how to fix each one.',
    content: `Google Ads can drive high-intent leads fast, but without strict account hygiene, it quickly turns into a money pit. Here are the seven costliest errors advertisers make—and how to fix them immediately.

### 1. Broad Match Without Smart Bidding Safeguards
Using broad match keywords without Smart Bidding (Target CPA/ROAS) gives Google freedom to match your ads with loosely related, non-converting queries.
- **Fix:** Use **Phrase Match** or **Exact Match** for manual bidding strategies. Ensure 30+ conversions/month before testing Broad Match on Smart Bidding.

### 2. Ignoring Negative Keyword Lists
Not building negative keyword lists means paying for zero-intent traffic.
> **Pro Tip:** Set account-level negative lists for generic terms like *"free"*, *"cheap"*, *"jobs"*, *"courses"*, and *"template"*.

### 3. Mixing Brand and Non-Brand Traffic
Branded queries skew CTR and ROAS, masking poor non-brand performance.
- **Fix:** Split branded and non-branded keywords into separate, dedicated campaigns.

### 4. Poor Landing Page Relevance & Quality Score
Sending paid traffic to a generic homepage lowers Quality Score and inflates your Cost Per Click (CPC). Send traffic to high-converting, topic-specific landing pages instead.

### 5. Neglecting Location Targeting Settings
Google defaults to *"Presence or Interest"*. 
- **Fix:** Change location options to **"Presence: People in or regularly in your targeted locations"** to avoid global accidental clicks.

### 6. Overlooking Ad Assets (Extensions)
Skipping sitelinks, callouts, and structured snippets reduces ad rank and visual real estate.

### 7. Tracking Primary Conversions Incorrectly
Optimizing for secondary events (page views, button hovers) misguides algorithm learning. Track revenue-generating actions strictly.`
  },
  {
    slug: 'how-to-build-a-content-calendar-that-converts',
    title: 'How to Build a Content Calendar That Converts',
    cat: 'Social Media',
    date: 'Jun 24, 2026',
    read: '8 min',
    author: 'Omar Haddad',
    excerpt: 'A repeatable framework for planning social content that drives engagement and leads, not just likes.',
    content: `Consistent publishing is easy; publishing content that moves prospects down the sales funnel requires a strategic blueprint.

### The 4-Pillar Content Framework
1. **Authority Building (30%):** Case studies, client proof, breakdown of industry data.
2. **Problem Awareness (30%):** Educational content addressing core audience pain points.
3. **Culture & Connection (20%):** Founder stories, behind-the-scenes, perspective posts.
4. **Direct Conversion (20%):** Clear, actionable calls-to-action (CTAs) for your services.

### Batch Production Workflow
- **Monday:** Strategy & Hook Development
- **Tuesday:** Copywriting & Scripting
- **Wednesday:** Design & Video Editing
- **Thursday:** Scheduling & Link Tracking (UTMs)`
  },
  {
    slug: 'local-seo-in-2026-the-complete-playbook',
    title: 'Local SEO in 2026: The Complete Playbook',
    cat: 'SEO',
    date: 'Jun 10, 2026',
    read: '11 min',
    author: 'Sara Malik',
    excerpt: 'Everything a local business needs to dominate Google Maps and local search this year.',
    content: `Local search intent has evolved. To win the Google Map Pack in 2026, implement these essential tactics.

### 1. Optimize Your Google Business Profile (GBP)
- **Primary Category:** Match your exact core service.
- **Photo Cadence:** Add high-quality, authentic photos weekly.
- **Services Tab:** List all services with detailed descriptions and pricing.

### 2. Review Velocity & Local Citations
Ensure your Name, Address, and Phone number (NAP) match perfectly across Yelp, Apple Maps, and local directories. Encourage a steady velocity of detailed customer reviews containing service-specific keywords.`
  },
  {
    slug: 'why-your-website-is-losing-sales-and-how-to-fix-it',
    title: 'Why Your Website Is Losing Sales (And How to Fix It)',
    cat: 'Web Development',
    date: 'May 30, 2026',
    read: '7 min',
    author: 'Daniel Reyes',
    excerpt: 'The conversion killers hiding on most business websites, and the quick wins that recover lost revenue.',
    content: `A website without conversions is an expensive digital brochure. Fix these silent conversion killers:

### 1. Unclear Hero Section
In 3 seconds, visitors must know:
- What you offer
- Who it helps
- What step to take next

### 2. Mobile Speed & Friction
Over 65% of web traffic is mobile. Optimize images to WebP/AVIF formats and defer non-essential scripts to prevent drop-offs.`
  },
  {
    slug: 'reels-that-actually-drive-revenue',
    title: 'Reels That Actually Drive Revenue',
    cat: 'Video',
    date: 'May 18, 2026',
    read: '5 min',
    author: 'Omar Haddad',
    excerpt: 'How to make short-form video that does more than entertain, it sells.',
    content: `Short-form video should drive customer acquisition, not just vanity views.

### High-Converting Reel Blueprint
- **Visual Hook (0-3s):** Bold statement or question on-screen.
- **Core Value (3-20s):** Delivering one focused, practical takeaway.
- **Direct CTA (End):** Explicit instruction ("Comment 'GROW' for the full strategy").`
  },
  {
    slug: 'branding-on-a-budget-a-founders-guide',
    title: 'Branding on a Budget: A Founder’s Guide',
    cat: 'Branding',
    date: 'May 4, 2026',
    read: '9 min',
    author: 'Layla Aziz',
    excerpt: 'Build a memorable brand without a huge budget using these practical, founder-tested steps.',
    content: `Consistency beats a massive design budget every single time.

### Core Essentials
1. **Target Persona:** Solve problems for one ideal audience segment first.
2. **Visual Uniformity:** Lock in 2 fonts, 3 primary brand colors, and apply them strictly.
3. **Voice Consistency:** Document your tone across touchpoints—professional, direct, and human.`
  },
  {
    slug: 'ai-search-geo-how-search-engines-are-changing-in-2026',
    title: 'AI Search & GEO: How Search Engines Are Changing in 2026',
    cat: 'SEO',
    date: 'Apr 28, 2026',
    read: '10 min',
    author: 'Sara Malik',
    excerpt: 'Generative Engine Optimization is replacing traditional SEO tactics. Here is how to keep your content ranking.',
    content: `Generative Engine Optimization (GEO) prioritizes entity relationships and authoritative direct answers.

### Strategy Shifts
- **Enforce E-E-A-T:** Emphasize real-world experience and primary research.
- **Structured Schema:** Help AI engines parse your site structure instantly.
- **Concise Summaries:** Format key takeaways clearly for LLM citation.`
  },
  {
    slug: 'email-automation-sequences-that-retain-high-ltv-customers',
    title: 'Email Automation Sequences That Retain High-LTV Customers',
    cat: 'Email Marketing',
    date: 'Apr 15, 2026',
    read: '8 min',
    author: 'Layla Aziz',
    excerpt: 'Five essential automated lifecycle campaigns every e-commerce and B2B brand needs to set up today.',
    content: `Automated lifecycle flows consistently deliver high ROI by messaging users at critical moments.

### Critical Flows
1. **Welcome Series:** Set expectations and introduce top offerings.
2. **Abandoned Checkout:** Recover lost buying intent within 2–4 hours.
3. **Post-Purchase Onboarding:** Drive repeat sales with tailored cross-sells.`
  },
  {
    slug: 'the-modern-landing-page-blueprint-anatomy-of-a-30-percent-converter',
    title: 'The Modern Landing Page Blueprint: Anatomy of a 30% Converter',
    cat: 'Web Development',
    date: 'Apr 02, 2026',
    read: '7 min',
    author: 'Daniel Reyes',
    excerpt: 'Visual breakdown of layout, copywriting hooks, and trust signals that turn cold traffic into paying clients.',
    content: `High-converting landing pages eliminate choices and focus on one clear path.

### Key Conversion Elements
- **Outcome Headline:** Focus on the tangible result.
- **Social Proof Above the Fold:** Display client logos or ratings immediately.
- **Frictionless Form:** Keep form fields minimal to boost completion.`
  },
  {
    slug: 'tiktok-ads-vs-meta-ads-where-should-you-spend-first',
    title: 'TikTok Ads vs. Meta Ads: Where Should You Spend First?',
    cat: 'Paid Social',
    date: 'Mar 21, 2026',
    read: '6 min',
    author: 'Omar Haddad',
    excerpt: 'A budget-by-budget comparison comparing audience targeting, ROAS, and creative fatigue on both platforms.',
    content: `Budget placement depends on target demographic and creative agility.
- **Meta Ads:** Stronger targeting algorithms for broad demographics and mature offers.
- **TikTok Ads:** High engagement for trend-driven, impulse purchases requiring fast creative refreshes.`
  },
  {
    slug: 'b2b-linkedin-marketing-from-zero-connections-to-high-ticket-leads',
    title: 'B2B LinkedIn Marketing: From Zero Connections to High-Ticket Leads',
    cat: 'Social Media',
    date: 'Mar 11, 2026',
    read: '9 min',
    author: 'Sara Malik',
    excerpt: 'How executive ghostwriting and targeted organic reach drive pipeline without sending spammy DMs.',
    content: `Spammy InMail is dead. Build pipeline through organic executive authority and insightful engagement. Optimize your personal profile as a direct conversion page.`
  },
  {
    slug: 'designing-for-mobile-first-ux-patterns-you-can-no-longer-ignore',
    title: 'Designing for Mobile First: UX Patterns You Can No Longer Ignore',
    cat: 'UI/UX Design',
    date: 'Feb 28, 2026',
    read: '6 min',
    author: 'Daniel Reyes',
    excerpt: 'Thumb-friendly navigation, speed optimizations, and micro-interactions that elevate mobile checkout.',
    content: `Design for natural thumb reach, large touch targets, and instant one-tap checkout options.`
  },
  {
    slug: 'how-to-write-ad-copy-that-beats-the-algorithm',
    title: 'How to Write Ad Copy That Beats the Algorithm',
    cat: 'Copywriting',
    date: 'Feb 14, 2026',
    read: '5 min',
    author: 'Layla Aziz',
    excerpt: 'Psychological triggers and hook frameworks that stop the scroll and get prospects to click.',
    content: `Effective ad copy focuses on objections and benefits. Address primary friction directly in the first two lines.`
  },
  {
    slug: 'building-a-first-party-data-strategy-before-cookies-disappear-completely',
    title: 'Building a First-Party Data Strategy Before Cookies Disappear Completely',
    cat: 'Analytics',
    date: 'Jan 30, 2026',
    read: '12 min',
    author: 'Elena Rostova',
    excerpt: 'How to capture, organize, and leverage zero- and first-party customer data to future-proof your tracking.',
    content: `Capture first-party data directly via interactive quizzes, gated resources, and customized post-purchase accounts.`
  },
  {
    slug: 'community-led-growth-turning-users-into-your-best-marketing-channel',
    title: 'Community-Led Growth: Turning Users into Your Best Marketing Channel',
    cat: 'Growth',
    date: 'Jan 18, 2026',
    read: '8 min',
    author: 'Omar Haddad',
    excerpt: 'A step-by-step guide to building engaged Slack, Discord, or newsletter communities that fuel organic acquisition.',
    content: `Turn customers into active advocates by building dedicated spaces for networking, feedback, and early feature access.`
  }
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

