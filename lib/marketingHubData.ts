export type Difficulty = "Beginner" | "Intermediate" | "Advanced";
export type ResourceType = "guide" | "template" | "checklist" | "calculator";

export interface PremiumGuide {
  id: string;
  title: string;
  subtitle: string;
  pages: number;
  readTime: string;
  difficulty: Difficulty;
  color: string;
  coverFrom: string;
  coverTo: string;
  chapters: string[];
  keyTakeaways: string[];
  tags: string[];
  isNew?: boolean;
  isPopular?: boolean;
  lastUpdated: string;
  description: string;
}

export interface Resource {
  id: string;
  title: string;
  category: string;
  type: ResourceType;
  difficulty: Difficulty;
  readTime: string;
  pages?: number;
  description: string;
  tags: string[];
  isNew?: boolean;
  isPopular?: boolean;
  lastUpdated: string;
  color: string;
  keyTakeaways?: string[];
}

export interface HubCategory {
  id: string;
  label: string;
  description: string;
  color: string;
  emoji: string;
}

export interface Toolkit {
  id: string;
  name: string;
  desc: string;
  format: string;
  size: string;
  color: string;
}

export interface Checklist {
  id: string;
  name: string;
  desc: string;
  items: number;
  color: string;
}

export const HUB_CATEGORIES: HubCategory[] = [
  { id: "getting-started", label: "Getting Started", description: "Everything a new IB needs to launch successfully.", color: "#6366F1", emoji: "🚀" },
  { id: "client-acquisition", label: "Client Acquisition", description: "Proven methods to attract and convert trading clients.", color: "#34D399", emoji: "🎯" },
  { id: "social-media", label: "Social Media", description: "Platform-specific growth strategies for IBs.", color: "#A78BFA", emoji: "📱" },
  { id: "content-marketing", label: "Content Marketing", description: "Build authority and attract clients through content.", color: "#FFD700", emoji: "✍️" },
  { id: "advertising", label: "Advertising", description: "Meta, Google, YouTube — run profitable campaigns.", color: "#F97316", emoji: "📣" },
  { id: "business-growth", label: "Business Growth", description: "Scale from startup to established IB operation.", color: "#34D399", emoji: "📈" },
  { id: "client-retention", label: "Client Retention", description: "Keep clients engaged, active and loyal long-term.", color: "#EC4899", emoji: "🤝" },
  { id: "compliance", label: "Compliance", description: "Market ethically, legally and protect your business.", color: "#94a3b8", emoji: "⚖️" },
];

export const PREMIUM_GUIDES: PremiumGuide[] = [
  {
    id: "ib-blueprint",
    title: "The Complete Introducing Broker Blueprint",
    subtitle: "How to Build a Professional IB Business From Scratch",
    pages: 60,
    readTime: "3 hrs",
    difficulty: "Beginner",
    color: "#6366F1",
    coverFrom: "#0a1628",
    coverTo: "#1a3a6e",
    chapters: [
      "What Is an Introducing Broker?",
      "How IB Rebates Work",
      "Building Recurring Revenue",
      "Finding Your First Clients",
      "Keeping Clients Long-Term",
      "Growing Through Referrals",
      "Creating Business Systems",
      "Scaling Sustainably",
      "90-Day Action Plan",
      "Checklists & Templates",
    ],
    keyTakeaways: [
      "Understand the full IB business model and rebate structure",
      "Build a repeatable client acquisition system from day one",
      "Create the systems needed to scale beyond 100 clients",
      "Follow a 90-day plan from application to profitable IB",
      "Access ready-to-use checklists, templates and action plans",
    ],
    tags: ["getting-started", "business-growth"],
    isNew: false,
    isPopular: true,
    lastUpdated: "January 2025",
    description: "The definitive guide to launching and growing a professional IB business. Covers everything from the rebate model to scalable systems, with a 90-day action plan and ready-to-use templates.",
  },
  {
    id: "client-acquisition-playbook",
    title: "The Ultimate Client Acquisition Playbook",
    subtitle: "A Complete Framework for Finding and Converting Trading Clients",
    pages: 52,
    readTime: "2.5 hrs",
    difficulty: "Intermediate",
    color: "#34D399",
    coverFrom: "#0a2820",
    coverTo: "#0d4a38",
    chapters: [
      "Defining Your Ideal Client",
      "Creating Compelling Offers",
      "Referral Marketing Systems",
      "Networking That Works",
      "Cold Outreach Framework",
      "Warm Introduction Strategies",
      "Building Client Trust",
      "Educational Marketing",
      "Follow-Up Systems",
      "Lead Nurturing Sequences",
      "Weekly Growth Framework",
      "KPIs to Monitor",
    ],
    keyTakeaways: [
      "Define your ideal IB client profile in specific, actionable terms",
      "Build a referral system that generates leads on autopilot",
      "Create trust-based marketing that attracts quality clients",
      "Implement follow-up sequences that convert without being pushy",
      "Track the KPIs that actually predict IB business growth",
    ],
    tags: ["client-acquisition"],
    isNew: false,
    isPopular: true,
    lastUpdated: "February 2025",
    description: "A complete 52-page playbook covering every aspect of finding, attracting and converting trading clients — from defining your ideal audience to building automated follow-up systems.",
  },
  {
    id: "social-media-growth-guide",
    title: "The Social Media Growth Guide for IBs",
    subtitle: "Platform-by-Platform Strategies to Build Your Audience",
    pages: 78,
    readTime: "4 hrs",
    difficulty: "Beginner",
    color: "#A78BFA",
    coverFrom: "#12082a",
    coverTo: "#2d1566",
    chapters: [
      "Instagram: Building a Trading Brand",
      "TikTok: Short-Form Education",
      "Facebook: Community and Reach",
      "LinkedIn: Professional Authority",
      "X (Twitter): Real-Time Positioning",
      "YouTube: Long-Form Expertise",
      "Telegram: Private Communities",
      "Discord: Engaged Ecosystems",
      "Cross-Platform Content Strategy",
      "Analytics and Measurement",
    ],
    keyTakeaways: [
      "Choose platforms based on your audience and content strengths",
      "Create a posting strategy that builds compounding reach",
      "Build engaged communities that naturally refer new traders",
      "Repurpose content across platforms without burning out",
      "Measure what drives referred clients, not just followers",
    ],
    tags: ["social-media"],
    isNew: true,
    isPopular: false,
    lastUpdated: "March 2025",
    description: "A comprehensive platform-by-platform guide covering Instagram, TikTok, Facebook, LinkedIn, X, YouTube, Telegram and Discord — with specific strategies and frameworks tailored for Introducing Brokers.",
  },
  {
    id: "ib-website-guide",
    title: "Building a High-Converting IB Website",
    subtitle: "Design, Copy and SEO Strategies That Generate Leads",
    pages: 44,
    readTime: "2 hrs",
    difficulty: "Intermediate",
    color: "#FFD700",
    coverFrom: "#1a1400",
    coverTo: "#3d3000",
    chapters: [
      "Homepage Design Principles",
      "Landing Pages That Convert",
      "Writing Compelling CTAs",
      "Lead Forms and Capture",
      "SEO Fundamentals",
      "Mobile Optimisation",
      "Page Speed Improvements",
      "Conversion Rate Optimisation",
      "Analytics Setup",
    ],
    keyTakeaways: [
      "Design a homepage that builds instant trust with potential clients",
      "Create landing pages optimised for IB lead generation",
      "Implement SEO strategies that attract organic trading traffic",
      "Optimise for mobile-first users — the majority of your audience",
      "Track and improve your conversion rate over time",
    ],
    tags: ["content-marketing", "advertising"],
    isNew: false,
    isPopular: false,
    lastUpdated: "December 2024",
    description: "A practical guide to building an IB website that generates consistent leads — covering design, landing page strategy, SEO basics, lead capture and conversion optimisation.",
  },
  {
    id: "email-marketing-guide",
    title: "Email Marketing for Introducing Brokers",
    subtitle: "Build Sequences That Nurture Leads and Retain Clients",
    pages: 38,
    readTime: "1.5 hrs",
    difficulty: "Beginner",
    color: "#F97316",
    coverFrom: "#1a0a00",
    coverTo: "#3d2000",
    chapters: [
      "Email Marketing Fundamentals",
      "Welcome Sequence Design",
      "Educational Email Sequences",
      "Monthly Newsletter Templates",
      "Client Retention Campaigns",
      "Re-Engagement Campaigns",
      "Email Segmentation",
      "Automation Setup",
      "Performance Metrics",
      "Sample Templates",
    ],
    keyTakeaways: [
      "Build a welcome sequence that converts new leads into active clients",
      "Create educational email content that establishes authority",
      "Design automated sequences that retain clients without manual effort",
      "Segment your list to send the right message to the right people",
      "Track the email metrics that matter for IB growth",
    ],
    tags: ["content-marketing", "client-retention"],
    isNew: false,
    isPopular: false,
    lastUpdated: "November 2024",
    description: "A practical email marketing guide for IBs — covering welcome sequences, educational campaigns, client retention emails and re-engagement sequences, with templates you can use immediately.",
  },
  {
    id: "seo-guide",
    title: "SEO Guide for Introducing Brokers",
    subtitle: "Rank Higher, Attract More Clients, Build Long-Term Authority",
    pages: 48,
    readTime: "2.5 hrs",
    difficulty: "Intermediate",
    color: "#6366F1",
    coverFrom: "#060e1e",
    coverTo: "#0f2a52",
    chapters: [
      "Keyword Research for IBs",
      "On-Page SEO Essentials",
      "Technical SEO Basics",
      "Local SEO Strategies",
      "Link Building Approaches",
      "Content Cluster Strategy",
      "Building an IB Blog",
      "Analytics and Tracking",
      "SEO Tools Overview",
    ],
    keyTakeaways: [
      "Find the keywords your ideal clients actually search for",
      "Optimise pages so search engines understand your content",
      "Build an SEO-driven content strategy that compounds over time",
      "Track rankings, traffic and conversions in one clear system",
      "Avoid common SEO mistakes that waste time and budget",
    ],
    tags: ["content-marketing"],
    isNew: false,
    isPopular: false,
    lastUpdated: "January 2025",
    description: "A comprehensive SEO guide for IB websites — covering keyword research, on-page optimisation, technical SEO, local SEO, link building and a complete content cluster strategy.",
  },
  {
    id: "branding-guide",
    title: "The Complete IB Branding Guide",
    subtitle: "Build a Professional Brand That Attracts Premium Clients",
    pages: 36,
    readTime: "1.5 hrs",
    difficulty: "Beginner",
    color: "#EC4899",
    coverFrom: "#1a0814",
    coverTo: "#3d1030",
    chapters: [
      "Why Branding Matters for IBs",
      "Choosing Your Brand Colours",
      "Typography That Communicates Trust",
      "Personal Brand Development",
      "Logo and Visual Identity",
      "Photography and Visual Style",
      "Social Media Brand Consistency",
      "Tone of Voice Guidelines",
      "Professional Positioning",
    ],
    keyTakeaways: [
      "Define a brand identity that attracts your ideal client type",
      "Build visual consistency across all platforms and materials",
      "Develop a personal brand that establishes genuine authority",
      "Create brand guidelines to share with designers and assistants",
      "Position as a premium IB rather than a generic referrer",
    ],
    tags: ["getting-started", "social-media"],
    isNew: false,
    isPopular: false,
    lastUpdated: "October 2024",
    description: "A practical branding guide for IBs — covering colour, typography, personal brand development, visual consistency and professional positioning. No design background required.",
  },
  {
    id: "paid-advertising-guide",
    title: "Paid Advertising Guide for IBs",
    subtitle: "Run Profitable Campaigns on Meta, Google and YouTube",
    pages: 54,
    readTime: "2.5 hrs",
    difficulty: "Advanced",
    color: "#F97316",
    coverFrom: "#1a0800",
    coverTo: "#4a1c00",
    chapters: [
      "Campaign Planning Fundamentals",
      "Audience Research and Targeting",
      "Creative Development and Testing",
      "Landing Page Alignment",
      "Budget Allocation Strategies",
      "Meta Ads for IBs",
      "Google Ads Basics",
      "YouTube Advertising Overview",
      "Performance Tracking",
      "Scaling What Works",
      "Compliance Considerations",
    ],
    keyTakeaways: [
      "Plan campaigns with realistic budgets and measurable goals",
      "Build audiences based on actual client demographics",
      "Test creatives systematically to find what drives registrations",
      "Keep ad spend compliant with financial marketing regulations",
      "Scale campaigns profitably using proven budget allocation methods",
    ],
    tags: ["advertising"],
    isNew: false,
    isPopular: false,
    lastUpdated: "February 2025",
    description: "A 54-page guide to running paid advertising campaigns for IB client acquisition — covering Meta, Google and YouTube ads, with campaign planning frameworks and compliance guidance.",
  },
  {
    id: "client-retention-handbook",
    title: "The Client Retention Handbook",
    subtitle: "Keep Clients Engaged, Active and Loyal Long-Term",
    pages: 40,
    readTime: "2 hrs",
    difficulty: "Intermediate",
    color: "#34D399",
    coverFrom: "#061a14",
    coverTo: "#0a3828",
    chapters: [
      "Why Retention Drives IB Revenue",
      "Client Onboarding Best Practices",
      "Communication Cadence",
      "Educational Follow-Up Content",
      "Building Long-Term Relationships",
      "Re-Engagement Campaigns",
      "Community and Events",
      "Loyalty Strategies",
      "Identifying At-Risk Clients",
      "Building Long-Term Value",
    ],
    keyTakeaways: [
      "Build onboarding that sets clients up for long-term success",
      "Create a communication schedule that maintains relationships",
      "Identify early warning signs that a client may become inactive",
      "Design re-engagement campaigns that bring dormant clients back",
      "Build a community that clients value independently",
    ],
    tags: ["client-retention"],
    isNew: false,
    isPopular: false,
    lastUpdated: "November 2024",
    description: "A comprehensive handbook for retaining IB clients over the long term — covering onboarding, communication strategies, educational follow-up, re-engagement campaigns and loyalty frameworks.",
  },
  {
    id: "scaling-guide",
    title: "Scaling Your IB Business",
    subtitle: "A Business Strategy Guide for Ambitious Introducing Brokers",
    pages: 66,
    readTime: "3.5 hrs",
    difficulty: "Advanced",
    color: "#A78BFA",
    coverFrom: "#0e0620",
    coverTo: "#231048",
    chapters: [
      "Assessing Your Business Today",
      "Building Business Systems",
      "Hiring Your First Team Member",
      "Standard Operating Procedures",
      "Marketing Automation",
      "Sales Process Development",
      "CRM and Client Management",
      "Financial Planning and Forecasting",
      "KPIs and Reporting",
      "Delegation Frameworks",
      "Growth Strategy Planning",
    ],
    keyTakeaways: [
      "Audit your current business to identify growth bottlenecks",
      "Build systems that allow the business to operate without you",
      "Know when and how to make your first hire",
      "Create KPI dashboards that keep the business on track",
      "Plan growth strategically rather than reactively",
    ],
    tags: ["business-growth"],
    isNew: true,
    isPopular: false,
    lastUpdated: "March 2025",
    description: "A 66-page business strategy guide for established IBs who want to scale — covering systems, hiring, automation, CRM, financial planning and growth frameworks.",
  },
];

export const RESOURCES: Resource[] = [
  // Getting Started (5)
  { id: "becoming-an-ib", title: "Becoming an Introducing Broker", category: "getting-started", type: "guide", difficulty: "Beginner", readTime: "20 min", pages: 12, description: "A step-by-step walkthrough of what it means to be an IB, how the rebate model works, and what to expect in your first 90 days.", tags: ["getting-started"], isNew: false, isPopular: true, lastUpdated: "Jan 2025", color: "#6366F1" },
  { id: "choosing-your-niche", title: "Choosing Your IB Niche", category: "getting-started", type: "guide", difficulty: "Beginner", readTime: "15 min", pages: 10, description: "How to identify a specific niche audience that aligns with your strengths, network and marketing skills.", tags: ["getting-started"], isNew: false, isPopular: false, lastUpdated: "Nov 2024", color: "#6366F1" },
  { id: "building-your-brand-intro", title: "Building Your Brand as an IB", category: "getting-started", type: "guide", difficulty: "Beginner", readTime: "18 min", pages: 11, description: "A practical introduction to personal branding — covering your online presence, messaging and first impressions.", tags: ["getting-started"], isNew: false, isPopular: false, lastUpdated: "Oct 2024", color: "#6366F1" },
  { id: "setting-business-goals", title: "Setting Business Goals", category: "getting-started", type: "guide", difficulty: "Beginner", readTime: "12 min", pages: 8, description: "A framework for setting realistic, measurable goals based on your current position and resources.", tags: ["getting-started"], isNew: false, isPopular: false, lastUpdated: "Dec 2024", color: "#6366F1" },
  { id: "client-acquisition-plan-intro", title: "Creating Your First Client Acquisition Plan", category: "getting-started", type: "template", difficulty: "Beginner", readTime: "25 min", pages: 14, description: "A structured template and guidance for writing your first IB client acquisition plan — even if starting from scratch.", tags: ["getting-started", "client-acquisition"], isNew: false, isPopular: true, lastUpdated: "Jan 2025", color: "#6366F1" },

  // Client Acquisition (6)
  { id: "organic-acquisition", title: "Organic Client Acquisition", category: "client-acquisition", type: "guide", difficulty: "Beginner", readTime: "22 min", pages: 14, description: "Free and low-cost strategies to attract potential trading clients without relying on paid advertising.", tags: ["client-acquisition"], isNew: false, isPopular: true, lastUpdated: "Feb 2025", color: "#34D399" },
  { id: "paid-ads-fundamentals", title: "Paid Advertising Fundamentals", category: "client-acquisition", type: "guide", difficulty: "Intermediate", readTime: "28 min", pages: 16, description: "An introduction to running paid ad campaigns for IB client acquisition — including Meta, Google and compliance basics.", tags: ["client-acquisition", "advertising"], isNew: false, isPopular: false, lastUpdated: "Jan 2025", color: "#34D399" },
  { id: "referral-networks", title: "Building Referral Networks", category: "client-acquisition", type: "guide", difficulty: "Intermediate", readTime: "20 min", pages: 12, description: "Create a structured referral programme that turns existing clients into consistent referral sources.", tags: ["client-acquisition"], isNew: false, isPopular: false, lastUpdated: "Dec 2024", color: "#34D399" },
  { id: "local-networking", title: "Local Networking Strategies", category: "client-acquisition", type: "guide", difficulty: "Beginner", readTime: "15 min", pages: 10, description: "Build your IB client base through in-person networking, events and local community relationships.", tags: ["client-acquisition"], isNew: false, isPopular: false, lastUpdated: "Nov 2024", color: "#34D399" },
  { id: "partnership-opportunities", title: "Partnership Opportunities for IBs", category: "client-acquisition", type: "guide", difficulty: "Intermediate", readTime: "18 min", pages: 11, description: "Identify and approach complementary businesses for mutually beneficial IB partnerships.", tags: ["client-acquisition"], isNew: false, isPopular: false, lastUpdated: "Oct 2024", color: "#34D399" },
  { id: "community-growth", title: "Community Growth Strategies", category: "client-acquisition", type: "guide", difficulty: "Intermediate", readTime: "24 min", pages: 13, description: "Build an online community of engaged traders that generates consistent client referrals through genuine value.", tags: ["client-acquisition", "social-media"], isNew: true, isPopular: false, lastUpdated: "Mar 2025", color: "#34D399" },

  // Social Media (9)
  { id: "instagram-strategy", title: "Instagram Strategy for IBs", category: "social-media", type: "guide", difficulty: "Beginner", readTime: "20 min", pages: 14, description: "Build a professional Instagram presence — covering content formats, posting cadence and audience growth.", tags: ["social-media"], isNew: false, isPopular: true, lastUpdated: "Feb 2025", color: "#A78BFA" },
  { id: "facebook-strategy", title: "Facebook Strategy for IBs", category: "social-media", type: "guide", difficulty: "Beginner", readTime: "18 min", pages: 12, description: "Leverage Facebook groups and organic reach to grow an engaged audience of potential trading clients.", tags: ["social-media"], isNew: false, isPopular: false, lastUpdated: "Jan 2025", color: "#A78BFA" },
  { id: "linkedin-strategy", title: "LinkedIn Strategy for IBs", category: "social-media", type: "guide", difficulty: "Intermediate", readTime: "22 min", pages: 13, description: "Position yourself as a credible professional on LinkedIn and attract higher-value clients through thought leadership.", tags: ["social-media"], isNew: false, isPopular: false, lastUpdated: "Jan 2025", color: "#A78BFA" },
  { id: "tiktok-strategy", title: "TikTok Strategy for IBs", category: "social-media", type: "guide", difficulty: "Beginner", readTime: "16 min", pages: 10, description: "Create educational short-form trading content that builds an engaged following and positions you as an accessible expert.", tags: ["social-media"], isNew: true, isPopular: true, lastUpdated: "Mar 2025", color: "#A78BFA" },
  { id: "twitter-strategy", title: "X (Twitter) Strategy for IBs", category: "social-media", type: "guide", difficulty: "Intermediate", readTime: "18 min", pages: 11, description: "Use X to build real-time authority in trading communities, join relevant conversations and grow a following.", tags: ["social-media"], isNew: false, isPopular: false, lastUpdated: "Dec 2024", color: "#A78BFA" },
  { id: "youtube-strategy", title: "YouTube Strategy for IBs", category: "social-media", type: "guide", difficulty: "Intermediate", readTime: "26 min", pages: 16, description: "Build a YouTube channel that attracts organic trading traffic and positions you as a trusted educator.", tags: ["social-media"], isNew: false, isPopular: false, lastUpdated: "Nov 2024", color: "#A78BFA" },
  { id: "reddit-engagement", title: "Reddit Community Engagement", category: "social-media", type: "guide", difficulty: "Beginner", readTime: "14 min", pages: 9, description: "Participate authentically in Reddit trading communities to build credibility — without spamming or violating rules.", tags: ["social-media"], isNew: false, isPopular: false, lastUpdated: "Oct 2024", color: "#A78BFA" },
  { id: "telegram-building", title: "Telegram Community Building", category: "social-media", type: "guide", difficulty: "Beginner", readTime: "16 min", pages: 10, description: "Create and manage a Telegram community that provides consistent value and naturally generates IB referrals.", tags: ["social-media"], isNew: false, isPopular: true, lastUpdated: "Feb 2025", color: "#A78BFA" },
  { id: "discord-management", title: "Discord Community Management", category: "social-media", type: "guide", difficulty: "Intermediate", readTime: "20 min", pages: 13, description: "Build and manage a Discord server for traders — channel structure, moderation, events and engagement.", tags: ["social-media"], isNew: true, isPopular: false, lastUpdated: "Mar 2025", color: "#A78BFA" },

  // Content Marketing (8)
  { id: "educational-articles", title: "Writing Educational Trading Articles", category: "content-marketing", type: "guide", difficulty: "Beginner", readTime: "18 min", pages: 12, description: "Write educational trading content that attracts search traffic, builds authority and generates IB leads.", tags: ["content-marketing"], isNew: false, isPopular: false, lastUpdated: "Dec 2024", color: "#FFD700" },
  { id: "market-updates", title: "Creating Weekly Market Updates", category: "content-marketing", type: "guide", difficulty: "Beginner", readTime: "14 min", pages: 9, description: "A template approach to producing weekly market updates that keep your audience engaged and informed.", tags: ["content-marketing"], isNew: false, isPopular: true, lastUpdated: "Jan 2025", color: "#FFD700" },
  { id: "newsletter-guide", title: "Building a Newsletter", category: "content-marketing", type: "guide", difficulty: "Beginner", readTime: "20 min", pages: 13, description: "Launch and grow an IB newsletter that builds loyal readership, establishes authority and generates leads.", tags: ["content-marketing"], isNew: false, isPopular: false, lastUpdated: "Nov 2024", color: "#FFD700" },
  { id: "content-calendar-guide", title: "Developing a Content Calendar", category: "content-marketing", type: "template", difficulty: "Beginner", readTime: "10 min", pages: 6, description: "A structured 90-day content calendar template — covering social, email, video and blog content.", tags: ["content-marketing"], isNew: false, isPopular: false, lastUpdated: "Oct 2024", color: "#FFD700" },
  { id: "seo-for-ib-sites", title: "SEO for IB Websites", category: "content-marketing", type: "guide", difficulty: "Intermediate", readTime: "24 min", pages: 15, description: "A practical introduction to SEO — covering keyword research, on-page optimisation and organic traffic.", tags: ["content-marketing"], isNew: false, isPopular: false, lastUpdated: "Jan 2025", color: "#FFD700" },
  { id: "video-planning", title: "Video Content Planning", category: "content-marketing", type: "guide", difficulty: "Beginner", readTime: "16 min", pages: 10, description: "Plan, script and produce video content that educates your audience and builds the trust needed for conversion.", tags: ["content-marketing"], isNew: false, isPopular: false, lastUpdated: "Nov 2024", color: "#FFD700" },
  { id: "short-form-video", title: "50 Short-Form Video Ideas for IBs", category: "content-marketing", type: "guide", difficulty: "Beginner", readTime: "12 min", pages: 8, description: "Fifty short-form video ideas for trading educators and IBs — with hooks, formats and educational angles.", tags: ["content-marketing", "social-media"], isNew: true, isPopular: true, lastUpdated: "Mar 2025", color: "#FFD700" },
  { id: "authority-content", title: "Building Authority Through Educational Content", category: "content-marketing", type: "guide", difficulty: "Intermediate", readTime: "22 min", pages: 14, description: "Position yourself as a genuine trading authority through a consistent educational content strategy.", tags: ["content-marketing"], isNew: false, isPopular: false, lastUpdated: "Dec 2024", color: "#FFD700" },

  // Advertising (7)
  { id: "meta-ads-basics", title: "Meta Ads Basics for IBs", category: "advertising", type: "guide", difficulty: "Intermediate", readTime: "28 min", pages: 17, description: "An introduction to running Facebook and Instagram ad campaigns — covering setup, targeting and compliance.", tags: ["advertising"], isNew: false, isPopular: true, lastUpdated: "Feb 2025", color: "#F97316" },
  { id: "google-ads-basics", title: "Google Ads Basics for IBs", category: "advertising", type: "guide", difficulty: "Intermediate", readTime: "26 min", pages: 16, description: "Run Google Search campaigns capturing traders actively searching for IB services.", tags: ["advertising"], isNew: false, isPopular: false, lastUpdated: "Jan 2025", color: "#F97316" },
  { id: "youtube-ads", title: "YouTube Ads Overview", category: "advertising", type: "guide", difficulty: "Advanced", readTime: "22 min", pages: 14, description: "Advertising on YouTube for IBs — in-stream ads, skippable formats, targeting options and creative guidelines.", tags: ["advertising"], isNew: false, isPopular: false, lastUpdated: "Nov 2024", color: "#F97316" },
  { id: "landing-page-optimisation", title: "Landing Page Optimisation", category: "advertising", type: "guide", difficulty: "Intermediate", readTime: "20 min", pages: 13, description: "Convert paid ad traffic into registered clients with copywriting, layout and trust-building strategies.", tags: ["advertising"], isNew: false, isPopular: true, lastUpdated: "Feb 2025", color: "#F97316" },
  { id: "lead-magnets", title: "Lead Magnets for IBs", category: "advertising", type: "guide", difficulty: "Beginner", readTime: "16 min", pages: 10, description: "Create high-value lead magnets that attract potential trading clients and grow your email list.", tags: ["advertising", "content-marketing"], isNew: false, isPopular: false, lastUpdated: "Dec 2024", color: "#F97316" },
  { id: "email-capture", title: "Email Capture Strategies", category: "advertising", type: "guide", difficulty: "Beginner", readTime: "14 min", pages: 9, description: "Proven methods for building an email list of potential trading clients using opt-in pages and organic capture.", tags: ["advertising", "client-acquisition"], isNew: false, isPopular: false, lastUpdated: "Nov 2024", color: "#F97316" },
  { id: "cro-guide", title: "Conversion Rate Optimisation", category: "advertising", type: "guide", difficulty: "Advanced", readTime: "24 min", pages: 15, description: "Improve the percentage of visitors who take your desired action — with testing frameworks and copy improvements.", tags: ["advertising"], isNew: false, isPopular: false, lastUpdated: "Dec 2024", color: "#F97316" },

  // Business Growth (8)
  { id: "10-to-100", title: "Scaling From 10 to 100 Active Clients", category: "business-growth", type: "guide", difficulty: "Intermediate", readTime: "26 min", pages: 16, description: "The systems, channels and strategies to take an early-stage IB from 10 to 100 active clients.", tags: ["business-growth"], isNew: false, isPopular: true, lastUpdated: "Feb 2025", color: "#34D399" },
  { id: "100-to-500", title: "Scaling From 100 to 500 Clients", category: "business-growth", type: "guide", difficulty: "Advanced", readTime: "30 min", pages: 18, description: "Advanced growth frameworks for established IBs ready to scale to 500+ active clients.", tags: ["business-growth"], isNew: false, isPopular: false, lastUpdated: "Jan 2025", color: "#34D399" },
  { id: "first-team-member", title: "Hiring Your First Team Member", category: "business-growth", type: "guide", difficulty: "Intermediate", readTime: "20 min", pages: 12, description: "Know when and how to make your first hire — covering role definition, recruitment and onboarding.", tags: ["business-growth"], isNew: false, isPopular: false, lastUpdated: "Nov 2024", color: "#34D399" },
  { id: "sops", title: "Building Standard Operating Procedures", category: "business-growth", type: "template", difficulty: "Intermediate", readTime: "18 min", pages: 11, description: "Document your core IB business processes so they run consistently regardless of who executes them.", tags: ["business-growth"], isNew: false, isPopular: false, lastUpdated: "Oct 2024", color: "#34D399" },
  { id: "business-automation", title: "Automating Your IB Business", category: "business-growth", type: "guide", difficulty: "Advanced", readTime: "24 min", pages: 15, description: "Identify and automate repetitive tasks — covering email sequences, CRM workflows and content scheduling.", tags: ["business-growth"], isNew: false, isPopular: false, lastUpdated: "Dec 2024", color: "#34D399" },
  { id: "crm-for-ibs", title: "CRM for Introducing Brokers", category: "business-growth", type: "guide", difficulty: "Intermediate", readTime: "22 min", pages: 14, description: "Choose and use a CRM system to track leads, manage relationships and monitor business performance.", tags: ["business-growth"], isNew: false, isPopular: false, lastUpdated: "Nov 2024", color: "#34D399" },
  { id: "time-management", title: "Time Management for IBs", category: "business-growth", type: "guide", difficulty: "Beginner", readTime: "16 min", pages: 10, description: "Practical time management frameworks for IBs juggling acquisition, content, support and development.", tags: ["business-growth"], isNew: false, isPopular: false, lastUpdated: "Oct 2024", color: "#34D399" },
  { id: "delegation-guide", title: "Delegation for Growing IBs", category: "business-growth", type: "guide", difficulty: "Intermediate", readTime: "18 min", pages: 11, description: "What to delegate, when to delegate and how to delegate effectively as your IB business grows.", tags: ["business-growth"], isNew: true, isPopular: false, lastUpdated: "Mar 2025", color: "#34D399" },

  // Client Retention (6)
  { id: "client-onboarding", title: "Onboarding New Clients", category: "client-retention", type: "guide", difficulty: "Beginner", readTime: "18 min", pages: 12, description: "Design a client onboarding experience that sets expectations, builds trust and reduces early churn.", tags: ["client-retention"], isNew: false, isPopular: true, lastUpdated: "Jan 2025", color: "#EC4899" },
  { id: "client-communication", title: "Client Communication Strategies", category: "client-retention", type: "guide", difficulty: "Beginner", readTime: "15 min", pages: 10, description: "Build a communication rhythm that keeps clients engaged without overwhelming them or consuming your time.", tags: ["client-retention"], isNew: false, isPopular: false, lastUpdated: "Dec 2024", color: "#EC4899" },
  { id: "educational-followups", title: "Educational Follow-Up Content", category: "client-retention", type: "guide", difficulty: "Beginner", readTime: "12 min", pages: 8, description: "Create follow-up content that educates clients, demonstrates value and keeps them active over time.", tags: ["client-retention"], isNew: false, isPopular: false, lastUpdated: "Nov 2024", color: "#EC4899" },
  { id: "long-term-relationships", title: "Building Long-Term Client Relationships", category: "client-retention", type: "guide", difficulty: "Intermediate", readTime: "20 min", pages: 13, description: "Go beyond transactional referrals and build genuine long-term relationships that create consistent IB volume.", tags: ["client-retention"], isNew: false, isPopular: false, lastUpdated: "Oct 2024", color: "#EC4899" },
  { id: "re-engagement", title: "Re-Engagement Campaigns", category: "client-retention", type: "guide", difficulty: "Intermediate", readTime: "16 min", pages: 10, description: "Win back dormant clients with targeted campaigns — email sequences, community invitations and personalised outreach.", tags: ["client-retention"], isNew: false, isPopular: false, lastUpdated: "Nov 2024", color: "#EC4899" },
  { id: "loyalty-strategies", title: "Loyalty Strategies for IBs", category: "client-retention", type: "guide", difficulty: "Advanced", readTime: "22 min", pages: 14, description: "Build loyalty programmes and long-term incentive structures that keep your best clients engaged and active.", tags: ["client-retention"], isNew: true, isPopular: false, lastUpdated: "Mar 2025", color: "#EC4899" },

  // Compliance (6)
  { id: "responsible-marketing", title: "Responsible Financial Marketing", category: "compliance", type: "guide", difficulty: "Beginner", readTime: "20 min", pages: 13, description: "Essential guidelines for marketing financial services responsibly — what to say, what to avoid and how to protect yourself.", tags: ["compliance"], isNew: false, isPopular: true, lastUpdated: "Feb 2025", color: "#94a3b8" },
  { id: "disclosure-requirements", title: "Disclosure Requirements for IBs", category: "compliance", type: "guide", difficulty: "Beginner", readTime: "14 min", pages: 9, description: "Understand the disclosure obligations that apply to your IB marketing — risk warnings and regulatory requirements.", tags: ["compliance"], isNew: false, isPopular: false, lastUpdated: "Jan 2025", color: "#94a3b8" },
  { id: "risk-warnings", title: "Risk Warnings and Disclaimers", category: "compliance", type: "guide", difficulty: "Beginner", readTime: "10 min", pages: 7, description: "How to correctly include risk warnings in your marketing materials — with template language you can adapt.", tags: ["compliance"], isNew: false, isPopular: false, lastUpdated: "Jan 2025", color: "#94a3b8" },
  { id: "ethical-lead-gen", title: "Ethical Lead Generation for IBs", category: "compliance", type: "guide", difficulty: "Intermediate", readTime: "18 min", pages: 12, description: "Principles for generating IB leads ethically — avoiding misleading claims and acting in clients' interests.", tags: ["compliance"], isNew: false, isPopular: false, lastUpdated: "Dec 2024", color: "#94a3b8" },
  { id: "data-privacy", title: "Data Privacy Basics for IBs", category: "compliance", type: "guide", difficulty: "Beginner", readTime: "16 min", pages: 10, description: "Practical introduction to data privacy for IBs — covering lead data collection, storage, use and GDPR basics.", tags: ["compliance"], isNew: false, isPopular: false, lastUpdated: "Nov 2024", color: "#94a3b8" },
  { id: "brand-consistency-compliance", title: "Brand Consistency and Compliance", category: "compliance", type: "guide", difficulty: "Beginner", readTime: "12 min", pages: 8, description: "Maintain consistent, compliant branding across all marketing channels with clear usage guidelines.", tags: ["compliance"], isNew: false, isPopular: false, lastUpdated: "Oct 2024", color: "#94a3b8" },
];

export const TOOLKITS: Toolkit[] = [
  { id: "business-plan", name: "Business Plan Template", desc: "A 12-page template to map your IB strategy, goals and financial projections.", format: "DOCX", size: "124 KB", color: "#6366F1" },
  { id: "marketing-calendar", name: "12-Month Marketing Calendar", desc: "Pre-built content themes and campaign planning slots across 12 months.", format: "XLSX", size: "88 KB", color: "#34D399" },
  { id: "content-planner", name: "Weekly Content Planner", desc: "Weekly content worksheet covering social, email, video and blog slots.", format: "PDF", size: "64 KB", color: "#FFD700" },
  { id: "follow-up-tracker", name: "Client Follow-Up Tracker", desc: "Track follow-up sequences, status and next steps for every prospect.", format: "XLSX", size: "92 KB", color: "#A78BFA" },
  { id: "referral-tracker", name: "Referral Tracker", desc: "Monitor referral sources, conversion rates and value per channel.", format: "XLSX", size: "76 KB", color: "#F97316" },
  { id: "campaign-planner", name: "Campaign Planner", desc: "Plan campaigns with objectives, audiences, budgets and timelines.", format: "PDF", size: "108 KB", color: "#EC4899" },
  { id: "lead-tracker", name: "Lead Tracker", desc: "A simple, powerful lead tracking spreadsheet for your IB pipeline.", format: "XLSX", size: "68 KB", color: "#34D399" },
  { id: "kpi-dashboard", name: "Business KPI Dashboard", desc: "Pre-built KPI dashboard to monitor volume, rebates, clients and growth.", format: "XLSX", size: "112 KB", color: "#6366F1" },
  { id: "quarterly-planner", name: "Quarterly Planning Workbook", desc: "Set quarterly goals and identify priorities for your IB business.", format: "PDF", size: "96 KB", color: "#FFD700" },
  { id: "goal-setting", name: "Goal Setting Workbook", desc: "Structured workbook for setting and reviewing business and personal goals.", format: "PDF", size: "80 KB", color: "#A78BFA" },
  { id: "meeting-notes", name: "Meeting Notes Template", desc: "Clean template for client conversations, team meetings and strategy sessions.", format: "DOCX", size: "48 KB", color: "#94a3b8" },
  { id: "content-calendar-template", name: "90-Day Content Calendar", desc: "Social media and blog content calendar with colour-coding and platform slots.", format: "XLSX", size: "84 KB", color: "#F97316" },
  { id: "sop-template", name: "SOP Template", desc: "Standard Operating Procedure template for documenting your core IB processes.", format: "DOCX", size: "60 KB", color: "#6366F1" },
  { id: "onboarding-checklist-template", name: "Client Onboarding Checklist", desc: "Step-by-step checklist for onboarding new referred clients effectively.", format: "PDF", size: "44 KB", color: "#34D399" },
  { id: "referral-workflow", name: "Referral Workflow Checklist", desc: "Workflow checklist for managing referrals from first contact to active client.", format: "PDF", size: "52 KB", color: "#EC4899" },
];

export const CHECKLISTS: Checklist[] = [
  { id: "new-ib", name: "New IB Checklist", desc: "Everything to set up in your first 30 days as an approved Equity IB partner.", items: 24, color: "#6366F1" },
  { id: "weekly-marketing", name: "Weekly Marketing Checklist", desc: "A recurring routine covering social media, email, content and outreach.", items: 18, color: "#34D399" },
  { id: "monthly-review", name: "Monthly Business Review", desc: "Review monthly performance, volume, rebates and set next month's priorities.", items: 15, color: "#A78BFA" },
  { id: "client-retention-cl", name: "Client Retention Checklist", desc: "Regular actions to keep clients active, engaged and referring others.", items: 20, color: "#EC4899" },
  { id: "seo-checklist", name: "SEO Checklist", desc: "Technical and on-page SEO actions to optimise your IB website for search.", items: 32, color: "#FFD700" },
  { id: "social-media-cl", name: "Social Media Checklist", desc: "Profile setup, posting cadence, engagement and analytics across platforms.", items: 28, color: "#A78BFA" },
  { id: "website-audit", name: "Website Audit Checklist", desc: "Audit your IB website for performance, trust signals, SEO and conversion.", items: 35, color: "#F97316" },
  { id: "ad-audit", name: "Advertising Audit Checklist", desc: "Review paid campaigns for targeting, creative, compliance and performance.", items: 22, color: "#F97316" },
  { id: "business-growth-cl", name: "Business Growth Checklist", desc: "Quarterly health check covering systems, marketing, team and financials.", items: 19, color: "#34D399" },
  { id: "compliance-cl", name: "Compliance Checklist", desc: "Review marketing materials for risk warnings, disclosures and regulations.", items: 26, color: "#94a3b8" },
];

export const DIFFICULTY_COLORS: Record<string, string> = {
  Beginner: "#34D399",
  Intermediate: "#6366F1",
  Advanced: "#A78BFA",
};

export const TYPE_LABELS: Record<string, string> = {
  guide: "Guide",
  template: "Template",
  checklist: "Checklist",
  calculator: "Calculator",
};

export interface Calculator {
  id: string;
  name: string;
  desc: string;
  inputs: string;
  color: string;
  href: string;
}

export const CALCULATORS: Calculator[] = [
  { id: "ib-rebate", name: "IB Rebate Calculator", desc: "Estimate your daily, monthly and annual rebate earnings based on trading volume and your current tier.", inputs: "Lots per day × rebate per lot = daily rebate", color: "#6366F1", href: "/#calculator" },
  { id: "break-even", name: "Client Break-Even Calculator", desc: "Find the minimum monthly volume your referred clients need to generate a meaningful rebate income for you.", inputs: "Target income ÷ rebate rate = volume needed", color: "#34D399", href: "/#calculator" },
  { id: "tier-progression", name: "Tier Progression Estimator", desc: "Model how many active clients you need to hit your next rebate tier and what it means for your monthly income.", inputs: "Avg client volume × clients = total lots / month", color: "#A78BFA", href: "/#tiers" },
  { id: "monthly-income", name: "Monthly Income Estimator", desc: "Project your total monthly IB income across different volume scenarios — conservative, realistic and optimistic.", inputs: "Active clients × avg lots × rebate rate = monthly income", color: "#FFD700", href: "/#calculator" },
  { id: "campaign-roi", name: "Campaign ROI Calculator", desc: "Calculate the expected return on your IB marketing spend — from ad budget to estimated lifetime rebate value.", inputs: "Ad spend ÷ (conversion rate × LTV) = CAC vs ROI", color: "#F97316", href: "/contact" },
  { id: "growth-projector", name: "Business Growth Projector", desc: "Model your IB business trajectory over 1 to 5 years — with volume growth assumptions and tier upgrades factored in.", inputs: "Current volume + growth rate → 5-year rebate projection", color: "#EC4899", href: "/#calculator" },
];
