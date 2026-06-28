export interface ArticleSection {
  id: string;
  heading: string;
  body: string; // "\n\n" separates paragraphs
  callout?: {
    type: "tip" | "warning" | "info";
    title?: string;
    text: string;
  };
}

export interface GuideArticle {
  guideId: string;
  intro: string;
  sections: ArticleSection[];
  commonMistakes: string[];
  faqs: { q: string; a: string }[];
  actionChecklist: string[];
  nextGuideId?: string;
}

export const GUIDE_ARTICLES: GuideArticle[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. IB BLUEPRINT
  // ─────────────────────────────────────────────────────────────────────────────
  {
    guideId: "ib-blueprint",
    intro:
      "An Introducing Broker business is one of the few income models in finance where effort compounds over time. Every client you refer continues generating rebates on their trading volume — meaning the relationships you built last month pay you this month, and next month, and the month after. This guide takes you from day zero to a professional, scalable IB operation.",
    sections: [
      {
        id: "what-is-an-ib",
        heading: "What Is an Introducing Broker?",
        body: "As an Introducing Broker, your role is to refer traders to a regulated Forex broker and earn a per-lot rebate on the trading volume those clients generate. Unlike one-off commissions, IB income is genuinely recurring — a single active client can generate rebates every trading day for months or years.\n\nThe broker handles all regulatory requirements, trading infrastructure, client support and fund safety. Your focus is acquisition, education and retention. This division of responsibility is what makes the IB model scalable — you are growing a revenue stream, not managing a brokerage.",
      },
      {
        id: "how-rebates-work",
        heading: "How IB Rebates Work",
        body: "IB rebates are calculated on a per-lot basis. For every standard lot traded by a client you have referred, you receive a fixed amount credited to your IB account. Equity IB's rebate structure is tiered — as your total referred volume grows, your per-lot rebate increases, creating genuine incentive to expand your client base.\n\nAt the Starter tier you earn a base rebate per lot. At Diamond tier, the highest level, estimated earnings can reach up to $30 per lot illustratively. If your client base collectively trades 300 lots per month and you are in the mid tiers, illustrative estimated rebate income is $5,000–$7,000 monthly — actual amounts vary based on your specific tier and client trading conditions.",
        callout: {
          type: "info",
          title: "Daily rebate payments",
          text: "Rebates are credited daily for active trading days. Monitor your IB portal to track live volume and projected monthly earnings. All figures shown are illustrative estimates — actual income varies with market conditions and client activity.",
        },
      },
      {
        id: "finding-first-clients",
        heading: "Finding Your First Clients",
        body: "Your first 10 clients will almost always come from people who already know and trust you. Former colleagues in finance, traders you know from online communities, friends interested in the markets — warm connections convert at dramatically higher rates because trust is already established.\n\nApproach initial outreach as education, not recruitment. Share what you have learned about Forex trading and the advantages of the broker you partner with. When you lead with value — market insights, educational resources, honest answers — the decision to register feels natural, not pressured.",
        callout: {
          type: "warning",
          text: "Never guarantee returns or promise specific income when speaking with potential clients. Always be clear that trading involves significant risk and that past performance is not indicative of future results.",
        },
      },
      {
        id: "building-systems",
        heading: "Building a Sustainable Business",
        body: "The difference between an IB who earns a few hundred dollars a month and one who earns tens of thousands is systems. High earners have repeatable processes for client acquisition, reliable content that generates leads consistently, and structured support that keeps existing clients active.\n\nStart building systems in the first 30 days, not after you have 100 clients. Create a simple content calendar. Set up a basic email list. Define a weekly routine for checking in with active clients. These feel like overkill early on — but they are the foundations that allow you to scale without burning out.",
      },
      {
        id: "90-day-plan",
        heading: "Your 90-Day Action Plan",
        body: "Days 1–30: Apply and get approved, study the rebate tiers, identify 20 warm contacts, set up a single marketing channel, and refer your first 5 clients.\n\nDays 31–60: Start publishing 3x/week on your chosen platform, build a simple email opt-in page, create a 5-email welcome sequence, and push to 20 total referred clients.\n\nDays 61–90: Review which channels generated clients, double down on the top two, implement a monthly newsletter, and set a clear 6-month volume target.",
      },
    ],
    commonMistakes: [
      "Trying to attract everyone rather than defining a specific ideal client profile",
      "Focusing on promotional content at the expense of genuine educational value",
      "Neglecting existing clients while chasing new ones — retention drives compounding income",
      "Skipping email list building in the early days when it is cheapest to grow",
      "Setting unrealistic income expectations and abandoning before systems take effect",
    ],
    faqs: [
      {
        q: "Do I need trading experience to become an IB?",
        a: "Not necessarily, but you should understand the basics of how Forex markets work and be able to answer common questions from potential clients. You do not need to be a professional trader — many successful IBs come from sales, marketing or education backgrounds.",
      },
      {
        q: "How long does IB approval take?",
        a: "Typically 1–3 business days. Your referral link is activated immediately upon approval.",
      },
      {
        q: "Can I be an IB in any country?",
        a: "Equity IB operates internationally. Certain country restrictions may apply — contact the IB support team for guidance on your specific location.",
      },
      {
        q: "How are rebates paid and when?",
        a: "Rebates are credited daily for active trading days. Withdrawals are requested through the broker's secure client portal using the payment methods supported for your account and region. All amounts shown are estimates — actual figures depend on your tier, client trading activity and market conditions.",
      },
    ],
    actionChecklist: [
      "Complete your IB application and receive your referral link",
      "Study the rebate tier structure and calculate your volume targets",
      "Write out your ideal client profile in specific terms",
      "Set up your primary marketing channel",
      "List 20 warm contacts to approach in your first week",
      "Create a referral tracking spreadsheet",
      "Build a basic email capture page",
      "Make your first 5 client referrals",
      "Check the IB portal after 30 days and review rebate data",
      "Set 6-month volume and active client count targets",
    ],
    nextGuideId: "client-acquisition-playbook",
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. CLIENT ACQUISITION PLAYBOOK
  // ─────────────────────────────────────────────────────────────────────────────
  {
    guideId: "client-acquisition-playbook",
    intro:
      "Client acquisition is the bottleneck for most IBs. The broker relationship, the rebate structure, the marketing tools — these are in place from day one. What separates a successful IB from an unsuccessful one is the ability to consistently attract high-quality clients. This playbook gives you a systematic approach to every stage of the acquisition process.",
    sections: [
      {
        id: "ideal-client-profile",
        heading: "Defining Your Ideal Client",
        body: "The most common mistake in IB client acquisition is targeting 'anyone who trades.' This scatters your messaging across platforms, dilutes your content, and results in high-effort, low-reward acquisition. The IBs who build the fastest-growing portfolios define a specific ideal client and direct every piece of marketing at that person.\n\nYour ideal client profile should specify their experience level (new to trading vs. experienced), the instruments they trade (Forex pairs, gold, indices), how frequently they trade, where they get their information, and what problems they are trying to solve. Write this profile out. Every piece of content you create should be speaking directly to that specific person.",
      },
      {
        id: "referral-systems",
        heading: "Referral Systems That Work",
        body: "Referral programmes are the highest-ROI acquisition channel for most IBs because trust is pre-established. When an existing client refers someone in their network, that person is far more likely to register and remain active than a cold lead from an ad.\n\nBuild a referral incentive that is valuable without creating compliance issues. Avoid direct cash payments to clients — instead, offer exclusive educational content, premium market analysis, or priority access to resources. Make the referral mechanism frictionless: a unique link the referrer can share instantly, with a way to track their referrals' progress.",
        callout: {
          type: "tip",
          title: "Best referral incentive",
          text: "The most effective referral incentive is something you are already creating — a weekly market analysis, an educational video series, or access to a private Telegram group. Make it feel premium and exclusive, not transactional.",
        },
      },
      {
        id: "cold-outreach",
        heading: "Cold Outreach That Does Not Feel Cold",
        body: "Effective cold outreach starts with genuine research. Before reaching out to anyone, understand their trading interests, follow their content, and contribute meaningfully to their community. When you first make contact, reference something specific — a post they made, a market view they shared.\n\nYour opening message should deliver value immediately: a market insight, a relevant resource, an honest answer to a question they have publicly asked. Save the conversation about your IB programme for the second or third touchpoint, after you have demonstrated that you are worth talking to.",
      },
      {
        id: "follow-up-system",
        heading: "Follow-Up Without Being Pushy",
        body: "Most IB leads require 5–8 touchpoints before deciding to register. A single conversation or social media post is rarely enough. You need a follow-up system that maintains contact without becoming intrusive.\n\nA simple 7-step email sequence works well: Day 1 (welcome and who you are), Day 3 (educational content, no CTA), Day 5 (social proof or testimonial), Day 7 (FAQ answering common objections), Day 10 (soft CTA), Day 14 (re-engagement question), Day 21 (final value offer). Automate this sequence in any email tool and trigger it when someone joins your list.",
      },
      {
        id: "weekly-growth-framework",
        heading: "Weekly Growth Framework",
        body: "Successful IBs treat growth like a business metric: they track it weekly, identify trends, and adjust. Establish a weekly cadence: Monday (content planning), Tuesday–Thursday (publishing and community engagement), Friday (review lead count, follow-up completion and new client conversions).\n\nKey weekly metrics to track: new leads added, follow-up emails sent, social content published, new clients registered. Set weekly targets for each and review every Friday. Adjust the following week based on what underperformed.",
      },
    ],
    commonMistakes: [
      "Messaging 'everyone who trades' instead of a specific, defined ideal client",
      "Pitching the IB programme before establishing genuine value or trust",
      "No follow-up system — assuming a single message is enough to convert",
      "Building referral systems without clear incentives for existing clients",
      "Treating client acquisition as one-time effort rather than a continuous system",
    ],
    faqs: [
      {
        q: "How do I get my first clients without a social media following?",
        a: "Through warm outreach to your existing network. Identify people who are interested in trading — from colleagues, friends, online communities where you are already active — and approach with genuine educational value, not just a referral link.",
      },
      {
        q: "Should I start with paid ads?",
        a: "Not initially. Build your organic acquisition systems first — content, referrals, community — and add paid advertising only when you have a conversion funnel that works. Otherwise you are paying to send traffic to a system that does not convert.",
      },
      {
        q: "How long before a referral system generates consistent leads?",
        a: "Typically 2–3 months of consistent execution. Referral systems compound over time — your first 20 clients can refer 5 more each, who refer more still. Build it early even if results are slow initially.",
      },
    ],
    actionChecklist: [
      "Write your ideal client profile in specific, detailed terms",
      "Define your primary and secondary acquisition channels",
      "Set up an email opt-in page",
      "Write a 5-email welcome sequence",
      "Create a referral incentive (educational content or community access)",
      "Identify 10 potential referral partners in complementary niches",
      "Launch your first content series on your primary platform",
      "Track weekly: new leads, new clients, lead sources by channel",
      "Follow up with all new leads within 48 hours",
      "Review and adjust your acquisition approach every 4 weeks",
    ],
    nextGuideId: "social-media-growth-guide",
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. SOCIAL MEDIA GROWTH GUIDE
  // ─────────────────────────────────────────────────────────────────────────────
  {
    guideId: "social-media-growth-guide",
    intro:
      "Social media is the primary client acquisition channel for the majority of successful IBs — but only when used strategically. Most IBs post sporadically, promote heavily, and wonder why they see low engagement and no registrations. This guide covers a platform-by-platform approach to building an audience that converts.",
    sections: [
      {
        id: "choosing-platform",
        heading: "Choosing Your Platform",
        body: "Platform selection is one of the highest-leverage decisions you will make as an IB. Each platform has a different audience, content format and engagement dynamic — trying to be everywhere simultaneously leads to mediocrity everywhere.\n\nMatch platforms to your client profile. If your ideal client is a retail Forex trader aged 25–40, Instagram and TikTok reach them efficiently. If you are targeting experienced traders or professionals, LinkedIn and X (Twitter) are more appropriate. If you want to build a high-engagement community, Telegram and Discord create the tightest bonds. Choose one primary platform and one secondary before expanding further.",
      },
      {
        id: "content-that-builds-trust",
        heading: "Content That Builds Trust",
        body: "Trading content that attracts genuine engagement — and ultimately client referrals — falls into three categories: educational (you explain concepts clearly), analytical (you share market views), and personal (you share your process, mistakes and perspective).\n\nMost IBs post primarily promotional content ('sign up here'), which generates no organic engagement. The IBs who build the most engaged audiences post 80% educational or analytical content and keep promotional content below 20%. This ratio builds trust over time, and trust is what converts followers into registered clients.",
        callout: {
          type: "tip",
          text: "The highest-performing IB social content is often the simplest: one clear concept explained, one chart with a brief analysis, or one honest reflection on the market. Resist the urge to make every post complex or sales-driven.",
        },
      },
      {
        id: "building-community",
        heading: "Building an Engaged Community",
        body: "Followers are a vanity metric. Engaged community members are a business asset. The difference is two-way interaction: responding to comments, asking questions, hosting live sessions, creating Telegram or Discord groups where real conversations happen.\n\nBuild community intentionally. Create a private group where your existing audience can interact — not just with you, but with each other. Set a tone of genuine education and mutual support. Community members who value the group for its own sake will still be there — and still referring new traders — two years from now.",
      },
      {
        id: "measuring-results",
        heading: "Measuring What Actually Matters",
        body: "Most social media analytics tell you how many people saw your content. What you need to know is how many people took action as a result. Set up a simple tracking system: note how each new client first found you, which piece of content was their entry point, and which platform drove the most registrations.\n\nThis data will probably surprise you. The platform with the most followers rarely drives the most registrations. The content with the most views is often not the content that converts. Track the path from discovery to registration, not just top-of-funnel numbers.",
      },
    ],
    commonMistakes: [
      "Trying to be active on all platforms simultaneously before mastering one",
      "Posting only promotional content — new followers need education, not ads",
      "Inconsistent posting schedule — disappearing for weeks then posting daily",
      "Measuring success by follower count rather than registrations and active clients",
      "Building an audience without a community or email list to convert them",
    ],
    faqs: [
      {
        q: "Which platform is best for IBs?",
        a: "It depends on your target client profile. Retail Forex traders are well represented on Instagram, TikTok and Telegram. Professional traders tend to use LinkedIn and X. Start with the platform where your ideal client already spends time.",
      },
      {
        q: "How often should I post?",
        a: "Consistency beats frequency. Three times per week every week outperforms daily posting for two weeks then silence. Build a schedule you can sustain long-term before attempting to increase frequency.",
      },
      {
        q: "How do I grow without spending on ads?",
        a: "Through consistent educational content, active community engagement, and collaboration with others in related niches. Organic growth is slower than paid but builds a more engaged audience — one that is far more likely to register and remain active.",
      },
    ],
    actionChecklist: [
      "Choose one primary and one secondary platform based on your target client",
      "Define your content pillars — 3 to 4 topics you will cover consistently",
      "Write a 30-day content calendar with specific post ideas",
      "Set a publishing schedule you can sustain long-term",
      "Create a Telegram or Discord community for your audience",
      "Engage genuinely with 10 accounts in your niche every day",
      "Repurpose each piece of content across two platforms",
      "Track which content types generate the most direct enquiries",
      "Review analytics monthly and adjust content mix accordingly",
      "Set a 90-day follower and engagement growth target",
    ],
    nextGuideId: "email-marketing-guide",
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. IB WEBSITE GUIDE
  // ─────────────────────────────────────────────────────────────────────────────
  {
    guideId: "ib-website-guide",
    intro:
      "A well-built IB website is a 24/7 lead generation asset — it builds credibility, captures email subscribers and converts visitors into registered clients while you sleep. Most IB websites fail at all three because they describe features rather than outcomes. This guide covers the design, copy and SEO strategies that make websites generate real results.",
    sections: [
      {
        id: "homepage-essentials",
        heading: "Homepage Essentials",
        body: "Your homepage needs to answer three questions within five seconds of a visitor landing: who this is for, what they will get, and why they should trust you. Most IB websites fail all three by describing broker features (tight spreads, fast execution) rather than visitor outcomes (build your trading knowledge, access expert market analysis).\n\nLead with the benefit to the visitor, not the specification of the broker. 'Learn to trade from an active market professional with seven years of experience' outperforms 'Choose from 200 trading instruments' for an IB audience every time.",
      },
      {
        id: "landing-pages",
        heading: "Landing Pages That Convert",
        body: "A conversion-focused landing page for IB registration has one job: get the visitor to click 'Register.' Every element on the page should support that goal or be removed.\n\nThe most effective structure: a specific outcome headline, a sub-headline defining who this is for, three bullet-point benefits, social proof (testimonials or number of clients helped), and a single CTA button. Remove the navigation menu, external links and secondary offers. Reduce choices to zero and your conversion rate improves measurably.",
      },
      {
        id: "seo-organic",
        heading: "SEO and Organic Traffic",
        body: "An IB website with basic SEO generates leads without ongoing cost. The goal is to rank for terms your ideal clients are searching: broker comparisons, trading strategy guides, Forex education for beginners. These terms attract traders earlier in their research process — exactly where trust-based IB marketing performs best.\n\nStart with five cornerstone articles on topics you know well. Optimise each for one primary keyword phrase. Build internal links between related articles. This content strategy takes 3–6 months to show results but compounds indefinitely, unlike paid advertising.",
        callout: {
          type: "info",
          title: "Page speed matters for SEO",
          text: "A page that loads in under 2 seconds on mobile outranks identical content on a slow site. Run your site through Google PageSpeed Insights and fix Critical issues before focusing on keyword optimisation.",
        },
      },
      {
        id: "conversion-optimisation",
        heading: "Improving Your Conversion Rate",
        body: "Your website conversion rate — the percentage of visitors who register — is the single most important metric for an IB site. Even a 0.5% improvement across 1,000 monthly visitors is five additional clients per month.\n\nTest one element at a time: headline copy, CTA button text, the number of form fields, placement of testimonials. Most landing page improvements come from removing friction (fewer fields, clearer copy) rather than adding persuasion elements. Track your baseline conversion rate before making any changes, and measure for at least two weeks before drawing conclusions.",
      },
    ],
    commonMistakes: [
      "Homepage copy focused on broker features rather than client benefits",
      "Multiple CTAs competing for attention on the same page",
      "No email capture — relying solely on immediate registration",
      "Slow page load speeds destroying both SEO rankings and conversion rates",
      "No analytics setup — impossible to know what is working or not",
    ],
    faqs: [
      {
        q: "Do I need a website to be an IB?",
        a: "Not necessarily, but a website significantly increases credibility and creates a central hub for your content and lead capture. Even a simple three-page site converts better than no web presence.",
      },
      {
        q: "What pages does an IB website need at minimum?",
        a: "Homepage, about page and a dedicated registration landing page. A blog section is valuable for SEO once your core pages are in place and optimised.",
      },
      {
        q: "How do I drive traffic to my website?",
        a: "Through social media (linking posts to your site), SEO content (articles that rank in search), and email (links in your newsletter). Paid advertising to a landing page works once your conversion rate is optimised — not before.",
      },
    ],
    actionChecklist: [
      "Define your homepage headline and sub-headline",
      "Choose a single specific value proposition for your homepage",
      "Build a dedicated registration landing page with no navigation",
      "Set up Google Analytics before launching",
      "Measure your page speed and resolve any Critical issues",
      "Ensure your site is fully mobile-optimised",
      "Add an email opt-in form to every page",
      "Write five cornerstone SEO articles on your key topics",
      "Build internal links between all related articles and pages",
      "Review conversion rate monthly and test one improvement at a time",
    ],
    nextGuideId: "seo-guide",
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. EMAIL MARKETING GUIDE
  // ─────────────────────────────────────────────────────────────────────────────
  {
    guideId: "email-marketing-guide",
    intro:
      "Email marketing is the highest-ROI channel most IBs underuse. While social media reach is algorithmically throttled, email reaches 100% of your list in a space where people have already indicated they want your content. For both client acquisition and long-term retention, a well-managed email list is one of the most valuable assets an IB can build.",
    sections: [
      {
        id: "why-email",
        heading: "Why Email Outperforms Social Media for IBs",
        body: "Social media platforms control who sees your content. On any given platform, only a fraction of your followers see each post. Your email list, by contrast, reaches every subscriber you have earned the trust of — with no algorithm between you and them.\n\nBuild your email list from day one, even when it starts empty. Every person who subscribes is a relationship you own entirely — no platform can remove your access to them. An email list of 1,000 engaged subscribers is often worth more commercially than a social media following ten times that size.",
      },
      {
        id: "welcome-sequence",
        heading: "Welcome Sequence Design",
        body: "Your welcome sequence is the most important email content you will write. It sets the tone of the relationship before the subscriber has formed a strong opinion of you. A well-designed welcome sequence converts opt-ins into active readers within the first seven days.\n\nStructure: Email 1 (welcome and who you are), Email 2 (educational piece with genuine value), Email 3 (social proof or client case study), Email 4 (FAQ answering common objections), Email 5 (soft invitation to register and start their journey). Each email should be readable in under two minutes.",
      },
      {
        id: "newsletters",
        heading: "Monthly Newsletter Strategy",
        body: "A consistent newsletter maintains your presence in subscribers' inboxes and positions you as a reliable source of information. The most effective IB newsletters follow a repeatable structure: a brief personal note, a market update or insight, one educational piece, one resource recommendation, and a soft CTA.\n\nConsistency is more important than brilliance. A good newsletter sent every month builds more trust than an excellent newsletter sent irregularly. Set a fixed day of the month, build your newsletter template once, and fill it in each cycle.",
        callout: {
          type: "tip",
          text: "Write your newsletter in a personal, conversational tone — as if writing to a colleague. The most opened IB newsletters read like a message from someone the reader knows, not a formal publication.",
        },
      },
      {
        id: "re-engagement",
        heading: "Re-Engagement and Retention Campaigns",
        body: "Most IBs write emails only to acquire new clients. The larger opportunity is in reactivating dormant ones. A client who registered and has not traded in 60 days represents meaningful potential rebate income — and they have already passed through the onboarding process.\n\nA simple re-engagement sequence: Email 1 (market update, no CTA), Email 2 (specific reason to re-engage now, soft CTA), Email 3 (direct invitation with educational incentive), Email 4 (honest final message about the value they are missing). Even a 3–5% re-activation rate on a dormant list of 200 people produces significant additional trading volume.",
      },
    ],
    commonMistakes: [
      "Not starting an email list until you already have a large social following",
      "Sending promotional-only emails — subscribers unsubscribe without educational value",
      "Inconsistent sending schedule — subscribers forget who you are between emails",
      "No welcome sequence — dropping new subscribers into a newsletter immediately",
      "Not segmenting by activity level — sending the same content to active and dormant subscribers",
    ],
    faqs: [
      {
        q: "What email tool should I use?",
        a: "Mailchimp, ConvertKit or ActiveCampaign are all appropriate for IBs starting out. Start with whichever is simplest to use — the platform matters far less than the consistency and quality of your content.",
      },
      {
        q: "How often should I email my list?",
        a: "Minimum once per week, maximum daily. Most IBs find 2–3 times per week optimal — frequent enough to maintain presence, not so frequent that unsubscribes accelerate. Find your sustainable rhythm and stick to it.",
      },
      {
        q: "What should I write about in my emails?",
        a: "Lead with genuine educational value or market insight, then transition to a soft CTA if appropriate. Topics: weekly market commentary, trading concept explained clearly, tool or resource recommendation, client Q&A. Avoid making every email a promotion.",
      },
    ],
    actionChecklist: [
      "Choose and set up an email service provider",
      "Create your email opt-in form and landing page",
      "Write a 5-email welcome sequence before you launch",
      "Schedule your first monthly newsletter",
      "Build one re-engagement campaign for dormant subscribers",
      "Set up open rate and click rate tracking",
      "Segment your list by activity level (active, inactive, dormant)",
      "Write 30 days of email content ideas in advance",
      "Review unsubscribe rate monthly — above 0.5% signals content issues",
      "Test one new subject line format each week",
    ],
    nextGuideId: "seo-guide",
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. SEO GUIDE
  // ─────────────────────────────────────────────────────────────────────────────
  {
    guideId: "seo-guide",
    intro:
      "Search engine optimisation is the only marketing channel where your past effort keeps paying forward indefinitely. An article that ranks on page one of Google can generate IB leads three years after you wrote it. For IBs willing to invest in content consistently, SEO builds a compounding lead generation asset that no paid channel can replicate.",
    sections: [
      {
        id: "keyword-research",
        heading: "Keyword Research for IBs",
        body: "Keyword research for an IB website is not about finding the highest-volume terms — it is about finding keywords where you can realistically compete and that attract your specific client profile. 'Forex trading' has enormous search volume and near-impenetrable competition. 'Best Forex broker for beginners UK' is more specific, moderately competitive and converts far better.\n\nBuild a keyword list in three tiers: navigational (your brand name), informational (educational queries your clients search), and transactional (high-intent phrases indicating readiness to act). Prioritise the informational tier to build authority first, then create transactional pages once you rank for informational terms.",
      },
      {
        id: "on-page-seo",
        heading: "On-Page SEO Essentials",
        body: "On-page SEO for IB content follows clear rules: include your target keyword in the page title, first paragraph, at least one H2 heading, and the meta description. Use related terms naturally throughout — do not force keywords where they do not belong.\n\nPage speed and mobile optimisation matter as much as content for SEO rankings. A page that loads in under 2 seconds on mobile outranks identical content on a slow site. Run your site through Google PageSpeed Insights and address any Critical issues before concentrating on keyword optimisation.",
        callout: {
          type: "info",
          title: "Meta description length",
          text: "Keep meta descriptions between 150–160 characters. Longer descriptions are truncated in search results. Use the description to state clearly what the page covers and who it is for.",
        },
      },
      {
        id: "content-cluster",
        heading: "Content Cluster Strategy",
        body: "A content cluster is a group of related articles linked together — a cornerstone article covering a broad topic, supported by shorter more specific articles that link back to it. For an IB site, a cluster on 'Forex trading for beginners' might have a cornerstone article supported by pieces on specific strategies, platforms, terminology and risk management.\n\nThis architecture signals topical authority to search engines. Sites with well-built content clusters consistently outrank sites with the same volume of isolated articles. Plan your first cluster around the primary topic your ideal client is researching when they first discover the markets.",
      },
      {
        id: "tracking-rankings",
        heading: "Tracking Rankings and Results",
        body: "SEO without tracking is guesswork. Set up Google Search Console from day one — it shows you exactly which queries are appearing for your pages, how many clicks you are getting, and how your average position is trending over time.\n\nSet monthly SEO goals: target keyword positions, organic sessions, and pages with ranking improvements. SEO results are slow initially — expect minimal traction for the first 3 months. The compounding effect becomes clear in months 6–12 when multiple articles are gaining position simultaneously.",
      },
    ],
    commonMistakes: [
      "Targeting highly competitive broad keywords instead of specific, achievable terms",
      "Optimising for keywords without checking search intent — ranking for the wrong reasons",
      "Publishing inconsistently — search engines reward sites that publish regularly",
      "Ignoring internal linking — each new article should link to at least 2 existing ones",
      "Expecting results in weeks — SEO typically requires 3–6 months of consistent effort",
    ],
    faqs: [
      {
        q: "How long does SEO take to show results?",
        a: "Typically 3–6 months for initial traction, 6–12 months for meaningful organic traffic. SEO is a long-term investment that compounds over time — the articles you write today will still generate leads in 3 years.",
      },
      {
        q: "Do I need to hire an SEO specialist?",
        a: "Not initially. With basic on-page optimisation and consistent content creation, most IBs can make significant progress without specialist help. Consider hiring only after you have a clear content strategy in place and are consistently publishing.",
      },
      {
        q: "What are the most important SEO factors for an IB site?",
        a: "Quality content that answers questions your ideal clients are searching for, basic on-page optimisation, page speed and mobile performance, and consistent content publication over time. Technical perfection matters less than consistent educational content.",
      },
    ],
    actionChecklist: [
      "Research 20 keywords your ideal clients search for",
      "Map one primary keyword to each page on your site",
      "Optimise all title tags and meta descriptions",
      "Fix all broken links and 404 errors",
      "Improve page load speed to under 2 seconds",
      "Create and submit an XML sitemap to Google Search Console",
      "Write your first content cluster (cornerstone article plus 4 supporting articles)",
      "Build internal links between all related pages",
      "Set up Google Search Console and Google Analytics",
      "Review ranking progress and organic traffic monthly",
    ],
    nextGuideId: "ib-website-guide",
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 7. BRANDING GUIDE
  // ─────────────────────────────────────────────────────────────────────────────
  {
    guideId: "branding-guide",
    intro:
      "In a market where many IBs offer similar services through the same broker, branding is often the deciding factor. Two IBs with identical rebate structures, the same marketing channels and similar content strategies — the one with a more professional, trustworthy and consistent brand presence converts at significantly higher rates. This guide covers brand building with no design background required.",
    sections: [
      {
        id: "why-branding-matters",
        heading: "Why Branding Matters for IBs",
        body: "Branding is not just a logo and colour palette. It is the complete impression you create across every touchpoint: your profile photo, your bio, the tone of your captions, the consistency of your visual identity. Inconsistency creates friction and doubt in a prospect's mind; consistency creates trust.\n\nThe most trusted IBs in any community are not necessarily the most knowledgeable — they are the ones who have been visibly present, consistent and professional for a sustained period. Brand consistency is what makes 'sustained and visible' legible to a potential client who has seen you once before.",
      },
      {
        id: "personal-brand",
        heading: "Building Your Personal Brand",
        body: "Your personal brand as an IB should communicate three things: expertise (you understand the markets), authenticity (you are a real person with genuine insights), and trustworthiness (you act in clients' interests). These qualities are built through consistent small actions more than any single grand gesture.\n\nShow your thinking publicly. Share analyses before the market proves you right or wrong. Acknowledge mistakes. Answer questions in detail when asked publicly. These behaviours build credibility faster than credentials. The IB who has been sharing genuine market perspectives every week for 18 months will be trusted more than one who appeared recently with impressive claims.",
        callout: {
          type: "tip",
          text: "You do not need to be the most experienced trader to build a compelling personal brand. You need to be genuinely helpful, consistently present, and honest about what you know and do not know. That combination is rarer than expertise alone.",
        },
      },
      {
        id: "visual-identity",
        heading: "Visual Consistency Across Platforms",
        body: "Your visual identity — colour palette, typography, photo style — should be immediately recognisable across all platforms. When someone sees a post from you on Instagram and then visits your Telegram channel, it should feel like the same person and the same brand.\n\nStart with three decisions: your primary colour (should contrast with most platforms' dark or white interfaces), your typography style (bold and minimal, or detailed and precise), and your photo approach (professional and sharp, or candid and approachable). Make these decisions once, document them, and apply them consistently every week.",
      },
      {
        id: "tone-of-voice",
        heading: "Tone of Voice Guidelines",
        body: "Your tone of voice is as important as your visual identity. It should reflect your actual personality — if you try to write in a style that does not feel natural, it will show and undermine the authenticity that trust requires.\n\nChoose three adjectives that describe how you want to communicate (e.g. clear, direct, encouraging) and use them as a filter when writing. Before publishing any piece of content, ask: does this sound like those three adjectives? If not, rewrite it. Over time, your audience will associate those qualities with your brand even if they could not articulate why.",
      },
    ],
    commonMistakes: [
      "Inconsistent visual identity across platforms — different colours, fonts, photo styles",
      "Copying the aesthetic of a successful IB rather than developing your own",
      "Faceless brand with no personal presence — significantly reduces trust in financial content",
      "Over-investing in a logo and under-investing in consistent content quality",
      "Rebranding frequently — brand recognition requires time and consistency to build",
    ],
    faqs: [
      {
        q: "Do I need a professional logo?",
        a: "A professional logo helps, but consistency matters more than perfection. A clean wordmark applied consistently outperforms an elaborate logo used inconsistently. Start simple and refine over time.",
      },
      {
        q: "Can I build a brand as an IB without showing my face?",
        a: "Yes, but it is significantly harder. Personal brand content — where your face, voice and personality are present — builds trust faster than faceless accounts in the financial space. If you prefer privacy, a strong brand voice and consistent expert content can still work.",
      },
      {
        q: "How do I look professional without a big budget?",
        a: "Invest in consistent natural lighting for photos and videos, choose a simple clean visual style in Canva using your brand colours, and use a professional-quality profile photo. These cost nothing but time and have a measurable impact on perceived credibility.",
      },
    ],
    actionChecklist: [
      "Choose your primary colour palette (two to three colours)",
      "Select your typography (one heading font, one body font)",
      "Write a one-paragraph brand statement defining who you help and how",
      "Create a consistent bio across all social platforms",
      "Get a professional or high-quality profile photo",
      "Define three adjectives for your tone of voice",
      "Create branded post templates in Canva",
      "Apply your visual identity consistently for 30 days without changing it",
      "Review brand consistency across all platforms monthly",
      "Document your brand guidelines in a simple one-page reference",
    ],
    nextGuideId: "client-acquisition-playbook",
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 8. PAID ADVERTISING GUIDE
  // ─────────────────────────────────────────────────────────────────────────────
  {
    guideId: "paid-advertising-guide",
    intro:
      "Paid advertising can accelerate IB client acquisition dramatically — but only when you have the fundamentals in place. IBs who launch paid campaigns without a tested conversion funnel, clear compliance understanding and realistic cost-per-acquisition targets typically lose budget fast without results. This guide gives you the framework to run profitable, compliant campaigns from the start.",
    sections: [
      {
        id: "campaign-planning",
        heading: "Campaign Planning Fundamentals",
        body: "Paid advertising for IB acquisition requires a clear cost-per-acquisition (CPA) tolerance before you spend. If a new client has an estimated lifetime rebate value of $800 illustratively, you can potentially spend up to $300–400 to acquire them profitably — but only if you know that number before you start. Calculate your target CPA first.\n\nSet an initial test budget of £300–500. Expect your CPA to be 2–3x your target in the first campaign while you are still learning the audience and creative. Treat early advertising spend as data purchase, not direct revenue generation.",
        callout: {
          type: "warning",
          title: "Compliance requirement",
          text: "All financial services advertising must comply with relevant regulations in your target market. You cannot guarantee returns, must include required risk warnings, and must accurately represent what clients will receive. Review financial advertising rules before launching any paid campaign.",
        },
      },
      {
        id: "audience-targeting",
        heading: "Audience Research and Targeting",
        body: "The most important lever in paid advertising is not the creative — it is the audience. Serving the right message to the wrong audience wastes budget regardless of creative quality.\n\nOn Meta (Facebook and Instagram), use interest-based targeting around trading topics combined with behavioural indicators. On Google, target keywords that indicate genuine intent — 'Forex broker comparison' and 'how to start trading Forex' attract people actively researching, not just browsing. Build custom audiences from your email list and website visitors as soon as you have enough data.",
      },
      {
        id: "ad-creative",
        heading: "Ad Creative That Builds Trust",
        body: "Financial services advertising faces a specific challenge: potential clients are rightly sceptical of financial promotions online. The ad creative that performs best for IBs tends to be educational rather than promotional — a chart explanation, a trading concept overview, a market insight.\n\nAvoid superlatives, guaranteed return language, and lifestyle imagery implying wealth. These trigger both regulatory scrutiny and user distrust. Test educational value propositions instead: 'Learn how Forex markets work', 'New to trading? Start here.' Educational hooks attract genuinely interested leads rather than curiosity clicks.",
      },
      {
        id: "tracking-optimisation",
        heading: "Tracking and Optimisation",
        body: "Paid advertising only becomes profitable when you have the tracking infrastructure to know which campaigns drive registrations. Set up your conversion pixel on your registration confirmation page before spending any budget. Track registration completions, not just landing page visits.\n\nReview campaigns weekly. Pause ad sets spending budget with a CPA more than 3x your target after £100 of spend. Scale winning ad sets by 20% weekly — not more, as aggressive scaling typically breaks performance. Maintain a testing cadence of one new creative variation per week to combat ad fatigue.",
      },
    ],
    commonMistakes: [
      "Running ads without conversion tracking — no way to know which ads drive registrations",
      "Using guaranteed income or lifestyle imagery — a compliance and trust risk",
      "Sending paid traffic to your homepage rather than a dedicated landing page",
      "Scaling budget too fast on winning campaigns — 20% weekly is the safe maximum",
      "No creative testing — one ad set running for months without refresh or variation",
    ],
    faqs: [
      {
        q: "What budget do I need to start with paid ads?",
        a: "A minimum of £300–500 to run a meaningful initial test. Below this level, you will not generate enough data to draw conclusions about what is working and what is not.",
      },
      {
        q: "Which platform should I start with for paid IB advertising?",
        a: "Meta (Facebook and Instagram) has the most accessible targeting options and lowest minimum budgets for financial services. Start here before moving to Google or YouTube, which have higher complexity and cost.",
      },
      {
        q: "How do I ensure my ads comply with regulations?",
        a: "Include required risk warnings, avoid any language that guarantees returns, accurately represent what clients will receive, and review the specific financial advertising rules for your target market and jurisdiction before going live.",
      },
    ],
    actionChecklist: [
      "Define your target cost-per-acquisition before launching any campaign",
      "Set up conversion tracking on your registration confirmation page",
      "Write three ad creative variations to test from launch",
      "Build a dedicated landing page for ad traffic (no site navigation)",
      "Set a weekly budget you are comfortable spending as a learning cost",
      "Launch an initial test campaign with a modest daily budget",
      "Review campaign results after two weeks before making major changes",
      "Pause ad sets with a CPA more than 3x your target after £100 spent",
      "Scale winning ad sets by 20% weekly once they hit your target CPA",
      "Review all ad content for compliance before going live",
    ],
    nextGuideId: "client-retention-handbook",
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 9. CLIENT RETENTION HANDBOOK
  // ─────────────────────────────────────────────────────────────────────────────
  {
    guideId: "client-retention-handbook",
    intro:
      "Retention is the multiplier that determines how fast your IB income grows. Two IBs with the same acquisition rate but different retention rates will have dramatically different portfolios after 12 months. Every percentage point improvement in retention directly increases monthly rebate volume at zero additional acquisition cost — and that effect compounds month after month.",
    sections: [
      {
        id: "retention-economics",
        heading: "Why Retention Drives IB Revenue",
        body: "Acquiring a new client costs time, money and effort. Keeping an existing client active costs a fraction of that. Yet most IBs invest the vast majority of their effort in acquisition and minimal effort in retention — which creates a leaky bucket dynamic where new clients barely offset the ones quietly going inactive.\n\nRetention is also a multiplier on acquisition. If you are acquiring 20 new clients per month with 50% annual retention, your active portfolio grows slowly. With 80% annual retention on the same acquisition rate, your active portfolio grows substantially faster. Fix retention before accelerating acquisition.",
      },
      {
        id: "first-90-days",
        heading: "The First 90 Days Are Critical",
        body: "Most client churn happens in the first 90 days — not because clients had a bad experience, but because they did not have enough support or context to build a successful trading habit. Early inactivity becomes permanent inactivity if nothing intervenes.\n\nDesign your onboarding around answering questions before they are asked. Create a 3-email welcome sequence triggered on registration. Check in personally at Day 7, Day 30 and Day 60. Provide educational resources that help them use the platform effectively. An IB who invests 20 minutes in a new client's onboarding saves hours of re-engagement attempts later.",
        callout: {
          type: "tip",
          title: "Day 7 check-in",
          text: "A personal message at Day 7 — not automated — is one of the highest-impact retention interventions available. Ask what questions they have, what they are finding difficult, and what you can help with. Most IBs never do this. The ones who do have measurably higher 90-day retention.",
        },
      },
      {
        id: "communication-cadence",
        heading: "Communication Cadence",
        body: "Regular, valuable communication is the simplest retention mechanism available. Clients who hear from you regularly — with content that is actually useful to them — maintain a sense of relationship that makes them far less likely to drift to inactivity.\n\nBuild a communication calendar: monthly newsletter, weekly social content they can follow, and a quarterly personal check-in for your highest-value clients. The newsletter and social content are scalable. Reserve personal check-ins for clients generating significant volume — these relationships deserve personal investment.",
      },
      {
        id: "re-engagement-campaigns",
        heading: "Re-Engagement Campaigns",
        body: "Every IB accumulates a pool of dormant clients — people who registered and may have traded briefly, then went quiet. Most IBs ignore this pool entirely. The IBs who maximise rebate income treat it as a recovery opportunity.\n\nA three-step re-engagement campaign: (1) a no-pressure update sharing something genuinely useful with no CTA, (2) a market insight relevant to their stated interests with a soft invitation to return, (3) a direct, honest message about the opportunity they are currently missing with a specific low-friction next step. Expect 3–8% re-activation rates — on 100 dormant clients, that is 3–8 new active traders at zero acquisition cost.",
      },
    ],
    commonMistakes: [
      "No structured onboarding — leaving new clients to figure things out alone",
      "Only communicating when you need something — never with pure educational value",
      "Ignoring dormant clients — treating them as lost rather than as a re-engagement opportunity",
      "No early warning system to identify clients at risk of going inactive",
      "Treating all clients identically — high-value clients deserve personal attention",
    ],
    faqs: [
      {
        q: "What is the most common reason IB clients go dormant?",
        a: "Lack of ongoing support and education. Clients who do not feel equipped to trade confidently — or who lose their sense of connection with their IB — gradually become inactive. The IB relationship is the primary thing keeping them engaged.",
      },
      {
        q: "How often should I communicate with existing clients?",
        a: "At minimum, a monthly newsletter and a personal check-in at key milestones (90 days, 6 months, 1 year). Higher-value clients generating significant volume benefit from more frequent personal outreach — monthly or even weekly.",
      },
      {
        q: "Should I offer incentives to re-engage dormant clients?",
        a: "Yes, but non-monetary ones. Educational resources, market insights, community access — these provide genuine value and do not create compliance concerns. Avoid cash incentive offers that could be construed as financial inducements.",
      },
    ],
    actionChecklist: [
      "Design a 3-email onboarding sequence for all new registrations",
      "Set up Day 7, Day 30 and Day 60 check-in reminders",
      "Create a monthly newsletter template you can fill in quickly",
      "Define your 'at-risk' client criteria (e.g. no trades in 45+ days)",
      "Build a 4-email re-engagement sequence for dormant clients",
      "Create a private community for your most engaged clients",
      "Review your active client count monthly and track trends",
      "Survey churned clients quarterly for honest feedback",
      "Identify your top 20 highest-value clients and give them personal attention",
      "Implement one new retention initiative per quarter",
    ],
    nextGuideId: "scaling-guide",
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 10. SCALING GUIDE
  // ─────────────────────────────────────────────────────────────────────────────
  {
    guideId: "scaling-guide",
    intro:
      "Scaling an IB business is a fundamentally different challenge from starting one. The skills that get you to 50 clients — personal effort, individual relationships, direct outreach — are not the skills that take you to 500 clients. Scaling requires systems, delegation and a shift from doing everything yourself to designing a business that works without you in every step.",
    sections: [
      {
        id: "business-audit",
        heading: "Auditing Your Business Today",
        body: "Before building a scaling plan, you need an honest assessment of where your business stands. The audit covers four areas: acquisition (what channels generate clients, at what cost), retention (what percentage of clients are active at 90 days and 12 months), operations (how many hours per week the business requires of you personally), and revenue (total monthly rebates, broken down by tier).\n\nMost IBs who do this exercise discover that 20% of their clients generate 80% of their rebate volume. Understanding which clients, from which channels, with which characteristics generate the most volume tells you exactly where to focus growth energy.",
      },
      {
        id: "building-systems",
        heading: "Building Systems That Scale",
        body: "A business that requires your personal attention for every task cannot scale. The transition from solo IB to scalable operation requires systematising the functions you currently perform manually.\n\nThe highest-priority systems to build: content creation (calendar, templates, scheduling), lead nurturing (email automation, follow-up sequences), client support (FAQ document, response templates), and performance tracking (weekly KPI dashboard). Each system you build frees capacity for growth activities — and each one you fail to build becomes a ceiling on how large your business can grow.",
        callout: {
          type: "info",
          title: "Start with one system",
          text: "Do not try to build all your systems simultaneously. Choose the function that consumes the most of your time relative to its importance, systematise it first, and move to the next. Incremental system-building is sustainable; wholesale restructuring rarely gets completed.",
        },
      },
      {
        id: "first-hire",
        heading: "When and Who to Hire First",
        body: "The decision to hire is not a revenue threshold — it is a capacity question. When you are consistently missing growth opportunities because of time constraints, when significant hours are spent on tasks that do not require your expertise or relationships, it is time to hire.\n\nYour first hire should free your highest-value activities: client acquisition, relationship building, and content that requires your voice and perspective. This typically means a virtual assistant for scheduling, routine communication and research — not a business development hire who costs significantly more and does not free your time for growth work.",
      },
      {
        id: "kpis",
        heading: "KPIs That Drive Better Decisions",
        body: "Scaling decisions based on revenue alone lead to dangerous assumptions. Build a KPI dashboard tracking: monthly active clients, new client acquisition by channel, client retention rate at 90 days, average rebate per active client, and total monthly volume.\n\nThese five metrics give you a complete picture of growth health. When new client acquisition is high but retention is low, fix retention before scaling acquisition spend. When revenue is growing but active clients are not, you have a volume-per-client opportunity. Let the KPIs drive decisions, not intuition alone.",
      },
    ],
    commonMistakes: [
      "Scaling before having reliable systems — growth amplifies chaos, not efficiency",
      "Hiring too early for business development before systematising client support",
      "No KPI tracking — scaling blind without understanding what is driving or inhibiting growth",
      "Delegating client relationships before building strong retention systems",
      "Chasing the next tier without understanding the volume dynamics required to sustain it",
    ],
    faqs: [
      {
        q: "When is the right time to start scaling?",
        a: "When you have at least 50 active clients, a predictable monthly rebate income, and clear acquisition channels that work consistently. Scaling before these are in place amplifies problems rather than success.",
      },
      {
        q: "What should my first hire focus on?",
        a: "Time-consuming tasks that do not require your specific expertise or client relationships — content scheduling, routine email responses, research and reporting. Protect your client relationship activities and strategic thinking time.",
      },
      {
        q: "How do I know I am ready to target the next rebate tier?",
        a: "When your current volume is consistently hitting the next tier's threshold for three consecutive months, and you have a realistic plan to maintain or grow volume at that level. Build sustainably rather than chasing tiers reactively.",
      },
    ],
    actionChecklist: [
      "Conduct a full business audit across acquisition, retention, revenue and operations",
      "Identify your top 3 acquisition channels by cost and quality of clients",
      "Calculate 90-day and 12-month client retention rates",
      "Identify your top 20% highest-value clients by volume",
      "List every repeatable task you perform that someone else could do",
      "Choose one function to systematise this month",
      "Set up a weekly KPI dashboard with the five key metrics",
      "Define your 6-month and 12-month active client targets",
      "Evaluate whether a virtual assistant would free significant growth time",
      "Review and adjust your scaling plan at the end of every quarter",
    ],
    nextGuideId: "ib-blueprint",
  },
];

/** Look up article content by guide ID. Returns undefined if no bespoke content exists. */
export function getGuideArticle(guideId: string): GuideArticle | undefined {
  return GUIDE_ARTICLES.find((a) => a.guideId === guideId);
}
