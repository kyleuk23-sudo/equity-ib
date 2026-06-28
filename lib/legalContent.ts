// lib/legalContent.ts — All legal document content for the Equity IB Legal Centre

export type CalloutType = "warning" | "info" | "review" | "tip";

export interface LegalCallout {
  type: CalloutType;
  title?: string;
  text: string;
}

export interface LegalTable {
  headers: string[];
  rows: string[][];
}

export interface LegalSection {
  id: string;
  heading: string;
  paragraphs: string[];
  callout?: LegalCallout;
  bullets?: string[];
  table?: LegalTable;
}

export interface LegalDoc {
  slug: string;
  title: string;
  subtitle: string;
  iconName: string;
  category: string;
  lastUpdated: string;
  readingTime: string;
  description: string;
  intro: string;
  sections: LegalSection[];
  relatedSlugs: string[];
}

export const LEGAL_DOCS: LegalDoc[] = [
  // ─── 1. Privacy Policy ──────────────────────────────────────────────────────
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    subtitle: "How we collect, use and protect your personal information",
    iconName: "Shield",
    category: "Privacy & Data",
    lastUpdated: "June 2025",
    readingTime: "9 min read",
    description:
      "Explains how Equity IB collects, uses, stores and protects personal information submitted through our website and IB application process.",
    intro:
      "At Equity IB, we take your privacy seriously. This Privacy Policy describes how we collect, use, store and protect information you provide when you use our website, submit an enquiry or engage with our Introducing Broker partner programme. Please read this policy carefully before sharing any personal information with us.",
    sections: [
      {
        id: "who-we-are",
        heading: "Who We Are",
        paragraphs: [
          "Equity IB is an Introducing Broker marketing platform that facilitates introductions between professional traders and referrers, and regulated broker partners. We operate this website to provide information about our IB partner programme, distribute educational marketing resources and accept enquiries and applications from prospective and existing IB partners.",
          "For the purposes of applicable data protection legislation, Equity IB acts as the data controller in respect of personal information collected through this website and our communications. Where we share your information with broker partners as part of the IB application process, those partners act as independent data controllers in relation to their own processing.",
        ],
        callout: {
          type: "review",
          title: "Review Before Publishing",
          text: "Insert your legal entity name, company registration number, registered address and applicable data protection registration details here before publishing this policy.",
        },
      },
      {
        id: "information-we-collect",
        heading: "Information We Collect",
        paragraphs: [
          "We collect personal information you provide directly, including when you complete our IB enquiry or application form, contact us by email or through our website, subscribe to programme updates, or otherwise communicate with us.",
          "We also collect technical and usage data automatically when you visit our website, including your IP address, browser type, operating system, pages viewed, referring URLs and session duration. This data is collected using cookies and analytics technologies described below.",
        ],
        bullets: [
          "Name, email address and telephone number from contact or application forms",
          "Country of residence and company name where provided",
          "Details of current IB activity, trading volumes and experience",
          "Technical data collected automatically (IP address, browser, device type)",
          "Usage data including pages visited and navigation behaviour",
          "Communications sent to or received from us",
          "Cookie preference records and consent history",
        ],
      },
      {
        id: "how-we-use-information",
        heading: "How We Use Your Information",
        paragraphs: [
          "We use the information we collect to process your IB enquiries and applications, communicate with you about our partner programme, provide access to marketing resources, and manage our ongoing relationship with approved IB partners.",
          "We may also use your information to maintain and improve our website, send relevant programme updates where you have consented, comply with legal obligations, and detect or prevent fraud or misuse of our services.",
        ],
        table: {
          headers: ["Purpose", "Legal Basis"],
          rows: [
            ["Processing IB enquiries and applications", "Legitimate interests / Pre-contractual steps"],
            ["Managing IB partner relationships", "Contract performance"],
            ["Sending programme updates", "Consent"],
            ["Website analytics and improvement", "Legitimate interests"],
            ["Legal and regulatory compliance", "Legal obligation"],
            ["Fraud prevention and security", "Legitimate interests"],
          ],
        },
      },
      {
        id: "cookies-analytics",
        heading: "Cookies and Analytics",
        paragraphs: [
          "Our website uses cookies and similar technologies to distinguish returning visitors, improve the browsing experience and understand how our website is used. We use third-party analytics services that collect anonymised or pseudonymised data about page views, navigation and session behaviour. Analytics data helps us improve our content and user experience.",
          "You can manage cookies through your browser settings at any time. Disabling certain cookies may affect website functionality. For full details of the cookies we use and how to manage them, please see our Cookie Policy.",
        ],
      },
      {
        id: "marketing-communications",
        heading: "Marketing Communications",
        paragraphs: [
          "Where you have given consent, we may contact you with updates about our IB partner programme, changes to rebate structures, new marketing resources, educational content and other information relevant to your IB activity.",
          "You may withdraw consent for marketing communications at any time by clicking the unsubscribe link in any email or by contacting us directly. Withdrawal does not affect the lawfulness of processing carried out before withdrawal.",
        ],
      },
      {
        id: "data-sharing",
        heading: "Data Sharing and Third Parties",
        paragraphs: [
          "We do not sell your personal information to third parties. We may share your data with trusted service providers who support our operations, including website hosting providers, email platforms, analytics services and CRM systems. All such providers are contractually required to process your data only on our instructions and in line with applicable data protection law.",
          "Where your IB application is progressed, we will share relevant details with our broker partners for onboarding purposes. We will inform you before doing so. We may also disclose your information where required by law, to protect legal rights or in connection with a business transfer.",
        ],
      },
      {
        id: "international-transfers",
        heading: "International Data Transfers",
        paragraphs: [
          "Some of our service providers may process your data in countries outside your own that have different data protection standards. Where personal data is transferred internationally, we ensure appropriate safeguards are in place, such as standard contractual clauses or transfers to countries with adequate protection levels.",
        ],
        callout: {
          type: "review",
          title: "Review Before Publishing",
          text: "Review the specific data transfer mechanisms applicable to your hosting and third-party service providers and update this section accordingly.",
        },
      },
      {
        id: "data-retention",
        heading: "Data Retention",
        paragraphs: [
          "We retain personal information for as long as necessary for the purpose for which it was collected. Enquiries that do not result in a partnership are retained for a reasonable follow-up period and then deleted or anonymised. Partner relationship records are retained for the duration of the partnership and for any legally required period afterwards.",
          "You may request deletion of your personal information at any time, subject to our legal obligations and legitimate interests in retaining certain records.",
        ],
      },
      {
        id: "your-rights",
        heading: "Your Rights",
        paragraphs: [
          "Depending on your location and applicable law, you may have rights to access, correct, erase or restrict the processing of your personal data; to object to processing based on legitimate interests; to receive your data in a portable format; and to withdraw consent at any time. To exercise any of these rights, please contact us using the details below.",
          "If you believe we have not handled your data in accordance with this policy or applicable law, you have the right to make a complaint to the relevant data protection supervisory authority in your country.",
        ],
        bullets: [
          "Right of access — obtain a copy of your personal data",
          "Right to rectification — correct inaccurate or incomplete information",
          "Right to erasure — have your data deleted in certain circumstances",
          "Right to restrict processing — limit how we use your data",
          "Right to object — where processing is based on legitimate interests",
          "Right to portability — receive your data in a portable format",
          "Right to withdraw consent — without affecting prior processing",
          "Right to complain — to the relevant supervisory authority",
        ],
      },
      {
        id: "security",
        heading: "Data Security",
        paragraphs: [
          "We implement appropriate technical and organisational measures to protect your information against unauthorised access, loss or disclosure. These include secure server infrastructure, encrypted transmissions, access controls and periodic security reviews. No internet transmission is entirely secure, and we cannot guarantee absolute security. Any transmission of data to us is at your own risk.",
        ],
      },
      {
        id: "childrens-privacy",
        heading: "Children's Privacy",
        paragraphs: [
          "Our website is intended for adults only. We do not knowingly collect personal information from individuals under 18 years of age. If we become aware that we hold data about a child, we will take prompt steps to delete it.",
        ],
      },
      {
        id: "changes",
        heading: "Changes to This Policy",
        paragraphs: [
          "We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. Material changes will be indicated by an updated date on this page. We encourage you to review this policy regularly.",
        ],
      },
      {
        id: "contact",
        heading: "Contact Us",
        paragraphs: [
          "For questions about this policy or requests relating to your personal information, please use the contact form on our Contact page and select 'Privacy / Data Request' as the enquiry type.",
        ],
        callout: {
          type: "info",
          title: "Privacy Enquiries",
          text: "We aim to respond to all data subject requests within 30 days. Please visit our Contact & Complaints page for our full support process.",
        },
      },
    ],
    relatedSlugs: ["cookie-policy", "terms", "complaints"],
  },

  // ─── 2. Terms & Conditions ────────────────────────────────────────────────────
  {
    slug: "terms",
    title: "Terms & Conditions",
    subtitle: "The terms governing your use of the Equity IB website and services",
    iconName: "FileText",
    category: "Terms & Compliance",
    lastUpdated: "June 2025",
    readingTime: "10 min read",
    description:
      "Sets out the rules for using the Equity IB website, accessing our marketing resources and engaging with our Introducing Broker partner programme.",
    intro:
      "Please read these Terms and Conditions carefully before using the Equity IB website. By accessing or using this website you agree to be bound by these terms. If you do not agree, please do not use our website.",
    sections: [
      {
        id: "acceptance",
        heading: "Acceptance of Terms",
        paragraphs: [
          "These Terms and Conditions ('Terms') govern your access to and use of the Equity IB website and all content, tools and services available through it. By visiting this website or submitting an enquiry, you confirm that you have read, understood and agree to be bound by these Terms and our Privacy Policy.",
          "We reserve the right to amend these Terms at any time by posting updated Terms on this page. Your continued use of the website after changes are posted constitutes acceptance of the revised Terms.",
        ],
      },
      {
        id: "about-equity-ib",
        heading: "About Equity IB",
        paragraphs: [
          "Equity IB is an Introducing Broker marketing and partner platform. We are not a licensed financial services provider, broker or investment manager. We do not hold client funds, execute trades, manage investments or provide investment advice. All financial services referenced on this website are delivered by independent, regulated broker partners.",
          "Our role is to facilitate introductions between Introducing Brokers and those broker partners and to support IBs with marketing resources, rebate programme management and account support.",
        ],
        callout: {
          type: "info",
          title: "Not a Financial Services Provider",
          text: "Equity IB does not accept client deposits, provide investment advice, or execute trades. All trading and financial services are provided by independently regulated broker partners.",
        },
      },
      {
        id: "eligibility",
        heading: "Eligibility",
        paragraphs: [
          "Use of this website is open to all visitors. The Equity IB IB Programme is open to individuals and entities who are of legal age and capacity in their jurisdiction, are not located in a restricted jurisdiction, and meet our IB eligibility criteria. We reserve the right to decline any application at our absolute discretion.",
        ],
      },
      {
        id: "website-use",
        heading: "Website Use",
        paragraphs: [
          "You may use this website for lawful purposes in accordance with these Terms. You agree not to use the website in any way that is unlawful, harmful, fraudulent, deceptive or that infringes any third-party rights.",
          "Website content is provided for general information and marketing purposes. We do not represent or warrant that any content is complete, accurate or up to date. Nothing on this website constitutes financial, legal, tax or professional advice.",
        ],
      },
      {
        id: "intellectual-property",
        heading: "Intellectual Property",
        paragraphs: [
          "All content on this website, including text, graphics, logos, designs, educational guides, marketing materials and software, is the intellectual property of Equity IB or its licensors and is protected by copyright and other applicable laws.",
          "You may download and use marketing materials provided through our Marketing Hub solely for the purpose of promoting your IB business in accordance with our programme guidelines. All other reproduction, distribution or commercial use requires our prior written consent.",
        ],
      },
      {
        id: "prohibited-activities",
        heading: "Prohibited Activities",
        paragraphs: [
          "By using this website you agree not to engage in any of the following:",
        ],
        bullets: [
          "Distributing spam, unsolicited communications or harmful content",
          "Attempting to gain unauthorised access to our systems or data",
          "Using automated tools to scrape or harvest data from this website",
          "Misrepresenting your identity, credentials or affiliation in any application",
          "Using our brand, logos or materials without authorisation",
          "Making false or misleading claims to traders about our programme or earnings",
          "Engaging in fraud, market manipulation or deceptive practices",
          "Violating any applicable law or regulation in connection with our services",
        ],
      },
      {
        id: "third-party-links",
        heading: "Third-Party Links and Services",
        paragraphs: [
          "This website may contain links to third-party websites including broker partner platforms. These links are provided for convenience only. Equity IB does not control those websites and is not responsible for their content, accuracy, security or privacy practices. Clicking external links is at your own risk, and your use of those websites is governed by their own terms.",
        ],
      },
      {
        id: "disclaimers",
        heading: "Disclaimers",
        paragraphs: [
          "This website and all content are provided on an 'as is' basis without any representation or warranty, express or implied. We disclaim all implied warranties, including merchantability and fitness for a particular purpose. We do not warrant that the website will be uninterrupted, error-free or free of viruses.",
          "All rebate figures, earnings examples and tier calculations shown on this website are illustrative only. They are not a guarantee of income. Actual rebates depend on individual agreements, trading volumes, instruments traded and applicable commercial arrangements.",
        ],
        callout: {
          type: "warning",
          title: "No Earnings Guarantee",
          text: "Earnings figures and rebate estimates shown throughout this website are illustrative only and are not a promise or guarantee of income. Actual results will vary.",
        },
      },
      {
        id: "limitation-of-liability",
        heading: "Limitation of Liability",
        paragraphs: [
          "To the maximum extent permitted by law, Equity IB and its officers, employees and partners shall not be liable for any indirect, incidental, consequential or special damages arising from your use of this website or our services. This includes but is not limited to lost profits, trading losses, data loss or business interruption.",
          "Our total liability for any claim in connection with these Terms shall not exceed the amount you have paid to us, if any, in the twelve months before the event giving rise to the claim.",
        ],
      },
      {
        id: "indemnification",
        heading: "Indemnification",
        paragraphs: [
          "You agree to indemnify and hold harmless Equity IB and its directors, employees and partners from any claims, losses, costs and expenses arising from your use of this website, breach of these Terms or violation of any applicable law or third-party rights.",
        ],
      },
      {
        id: "availability",
        heading: "Service Availability",
        paragraphs: [
          "We aim to keep this website available at all times but do not guarantee uninterrupted access. Planned or unplanned maintenance may cause temporary unavailability. We will not be liable for any inconvenience or loss arising from website downtime.",
        ],
      },
      {
        id: "governing-law",
        heading: "Governing Law and Disputes",
        paragraphs: [
          "These Terms are governed by and construed in accordance with applicable law. Any dispute arising from your use of this website or these Terms shall be subject to the exclusive jurisdiction of the relevant courts.",
        ],
        callout: {
          type: "review",
          title: "Review Before Publishing",
          text: "Specify the governing law jurisdiction (e.g. England and Wales, Singapore, etc.) and the courts with exclusive jurisdiction before publishing. This is a legally significant provision.",
        },
      },
      {
        id: "severability",
        heading: "Severability and Entire Agreement",
        paragraphs: [
          "If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force. These Terms, together with our Privacy Policy and any programme-specific terms, constitute the entire agreement between you and Equity IB in relation to your use of this website.",
        ],
      },
      {
        id: "contact",
        heading: "Contact Us",
        paragraphs: [
          "For questions about these Terms, please contact us through our Contact page. For legal or compliance matters, please indicate the nature of your enquiry.",
        ],
      },
    ],
    relatedSlugs: ["disclaimer", "risk-disclosure", "ib-terms"],
  },

  // ─── 3. Risk Disclosure ───────────────────────────────────────────────────────
  {
    slug: "risk-disclosure",
    title: "Risk Disclosure",
    subtitle: "Important information about the risks associated with trading CFDs and forex",
    iconName: "AlertTriangle",
    category: "Risk & Trading",
    lastUpdated: "June 2025",
    readingTime: "7 min read",
    description:
      "An essential read before engaging with any trading-related content on Equity IB. Trading leveraged products involves significant risk and is not suitable for all individuals.",
    intro:
      "This Risk Disclosure Statement provides important information about the risks involved in trading Contracts for Difference (CFDs), foreign exchange (forex) and other leveraged financial products. All content on the Equity IB website that references trading, rebates or broker partners should be read in conjunction with this statement.",
    sections: [
      {
        id: "important-notice",
        heading: "Important Notice",
        paragraphs: [
          "Trading CFDs and forex involves a high level of risk to your capital. These products are complex financial instruments and may not be suitable for all investors. You could lose more than your initial investment. You should not trade with money you cannot afford to lose.",
        ],
        callout: {
          type: "warning",
          title: "High Risk Investment Warning",
          text: "CFDs and forex are complex instruments with a high risk of losing money rapidly due to leverage. A significant percentage of retail investor accounts lose money when trading CFDs. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.",
        },
      },
      {
        id: "cfd-forex-risk",
        heading: "CFD and Forex Trading Risk",
        paragraphs: [
          "Contracts for Difference (CFDs) are derivative instruments that allow traders to speculate on the price movements of underlying assets including currencies, commodities, indices and equities without owning the underlying asset. The value of CFDs can fall as well as rise, and you may receive back less than you invested.",
          "Foreign exchange markets are the world's most liquid financial markets but are also subject to significant volatility, particularly around major economic announcements, geopolitical events and liquidity gaps. Currency values can change rapidly and substantially.",
        ],
      },
      {
        id: "leverage-risk",
        heading: "Leverage Risk",
        paragraphs: [
          "Leveraged trading allows you to control a larger position with a smaller initial deposit (margin). While leverage can amplify profits, it equally amplifies losses. A small adverse movement in the market can result in a loss exceeding your entire deposit. You should fully understand the effect of leverage on your trading before opening any position.",
          "Different instruments and brokers offer different leverage ratios. Higher leverage carries higher risk. Always consider the impact of leverage on potential losses as well as gains.",
        ],
      },
      {
        id: "market-volatility",
        heading: "Market Volatility",
        paragraphs: [
          "Financial markets can experience periods of extreme volatility, particularly during economic data releases, central bank announcements, geopolitical events or sudden market disruptions. During volatile periods, prices can gap significantly, orders may not be filled at the requested price (slippage), and stop-loss orders may not function as expected.",
        ],
      },
      {
        id: "liquidity-risk",
        heading: "Liquidity Risk",
        paragraphs: [
          "All financial markets carry liquidity risk — the risk that a position cannot be entered or exited at the desired price due to insufficient market depth. Liquidity can deteriorate rapidly during periods of market stress, early trading sessions or when trading less commonly traded instruments. Reduced liquidity can lead to wider spreads and unfavourable execution.",
        ],
      },
      {
        id: "technology-risk",
        heading: "Technology and Platform Risk",
        paragraphs: [
          "Trading platforms, internet connections and electronic trading systems may experience interruptions, delays or failures that prevent orders from being placed, modified or executed. Technical failures can result in losses if positions cannot be managed during periods of market movement. Traders should have contingency plans in place for technology disruptions.",
        ],
      },
      {
        id: "counterparty-risk",
        heading: "Counterparty Risk",
        paragraphs: [
          "When trading through a broker, you assume counterparty risk — the risk that the broker may default on its obligations. It is important to trade only with regulated, financially stable brokers. All broker partners introduced through Equity IB are independently selected based on regulatory standing and commercial reputation, but Equity IB does not guarantee the financial stability or conduct of any broker.",
        ],
      },
      {
        id: "no-investment-advice",
        heading: "No Investment Advice",
        paragraphs: [
          "Nothing on the Equity IB website constitutes investment advice, a personal recommendation or an inducement to trade. Equity IB does not provide financial advice and is not authorised to do so. All information provided on this website is for educational and informational purposes only.",
          "The decision to trade is yours alone and should be based on your own assessment of your financial circumstances, risk appetite and investment objectives.",
        ],
      },
      {
        id: "past-performance",
        heading: "Past Performance",
        paragraphs: [
          "Past performance of any financial instrument, strategy or trading result is not indicative of and does not guarantee future performance. Historical data shown on this website or in any marketing materials is provided for illustrative purposes only and should not be relied upon as a prediction of future results.",
        ],
      },
      {
        id: "seek-advice",
        heading: "Seek Independent Advice",
        paragraphs: [
          "Before trading leveraged financial products, we strongly encourage you to seek independent financial, legal and tax advice appropriate to your personal circumstances and jurisdiction. If you are in any doubt about the suitability of a particular investment or trading strategy, please consult a qualified professional.",
        ],
        callout: {
          type: "tip",
          title: "Professional Advice Recommended",
          text: "Trading in leveraged products is not suitable for all investors. Before trading, consider seeking independent advice from a regulated financial adviser who understands your personal circumstances.",
        },
      },
      {
        id: "acknowledgement",
        heading: "Acknowledgement",
        paragraphs: [
          "By using the Equity IB website and accessing our resources, you acknowledge that you have read and understood this Risk Disclosure Statement. You accept that trading leveraged financial products involves significant risks, that past performance is not indicative of future results, and that nothing on this website constitutes investment advice.",
        ],
      },
    ],
    relatedSlugs: ["disclaimer", "terms", "ib-terms"],
  },

  // ─── 4. IB Programme Terms ────────────────────────────────────────────────────
  {
    slug: "ib-terms",
    title: "IB Programme Terms",
    subtitle: "Terms and conditions for the Equity IB Introducing Broker partner programme",
    iconName: "Users",
    category: "IB Partnership",
    lastUpdated: "June 2025",
    readingTime: "12 min read",
    description:
      "The full terms governing participation in the Equity IB partner programme, covering eligibility, rebates, payments, marketing standards and relationship management.",
    intro:
      "These IB Programme Terms govern your participation in the Equity IB Introducing Broker programme. By submitting an application and, where approved, by accepting an IB partnership, you agree to be bound by these terms together with our main Terms and Conditions and Privacy Policy. These terms supplement and should be read alongside our general Terms and Conditions.",
    sections: [
      {
        id: "programme-overview",
        heading: "Programme Overview",
        paragraphs: [
          "The Equity IB Introducing Broker Programme enables eligible individuals and entities to introduce traders to our broker partners and earn rebates based on the trading volume generated by those referred clients. Equity IB acts as a commercial intermediary, facilitating the relationship between IBs and broker partners and managing rebate administration on behalf of those partners.",
          "Participation in the programme is subject to approval by Equity IB and is governed by these terms, our general Terms and Conditions, and any supplementary terms provided in writing during your onboarding.",
        ],
      },
      {
        id: "eligibility",
        heading: "Eligibility",
        paragraphs: [
          "To be eligible for the Equity IB IB Programme, you must be at least 18 years of age (or the age of majority in your jurisdiction), have the legal capacity to enter into commercial agreements, not be located in a restricted jurisdiction where such programmes are prohibited or regulated in a way that prevents participation, and not be subject to any regulatory sanction or prohibition that would prevent you from acting as an Introducing Broker.",
          "Equity IB reserves the right to impose additional eligibility criteria at its discretion and to exclude any applicant or existing partner from the programme at any time.",
        ],
      },
      {
        id: "application-approval",
        heading: "Application and Approval",
        paragraphs: [
          "To apply for the programme, you must complete our online application form with accurate and truthful information about yourself, your trading experience, your current IB activity and your client base. Incomplete or misleading applications may result in rejection or subsequent termination of your partnership.",
          "Equity IB reviews all applications and will notify you of the outcome, typically within 24–48 hours. Approval is at Equity IB's sole discretion. We are under no obligation to provide reasons for declining an application.",
        ],
      },
      {
        id: "ib-dashboard",
        heading: "IB Dashboard and Tracking",
        paragraphs: [
          "Upon approval, you will be provided with access to an IB dashboard through which you can access your unique referral links, track referred client activity, view your rebate accrual in real time, and request withdrawals. Your referral links are unique to your account and must be used for all client referrals.",
          "Equity IB uses tracking technology to attribute referred clients to your account. We cannot credit referrals that are not made through your unique tracking links. It is your responsibility to use your referral links correctly and to notify us promptly if you believe a referral has not been correctly attributed.",
        ],
      },
      {
        id: "rebate-structure",
        heading: "Rebate Structure and Tiers",
        paragraphs: [
          "Rebates are calculated based on the total qualifying trading volume generated by your referred clients in each calendar month, measured in standard lots. The applicable rebate rate is determined by your tier, which is assessed monthly based on your verified total volume. Higher volume unlocks higher tiers and higher rebate rates per lot.",
          "The current tier structure and rebate rates are published on our website and may be updated from time to time. Updated rates will apply from the start of the following calendar month. Equity IB does not guarantee that current rates will remain fixed and may adjust the tier structure with reasonable notice.",
        ],
        table: {
          headers: ["Tier", "Monthly Volume (Lots)", "Rebate per Lot"],
          rows: [
            ["Starter", "0 – 99", "Up to $10"],
            ["Bronze", "100 – 249", "Up to $12"],
            ["Silver", "250 – 499", "Up to $15"],
            ["Gold", "500 – 999", "Up to $20"],
            ["Platinum", "1,000 – 2,499", "Up to $25"],
            ["Diamond", "2,500+", "Up to $30"],
          ],
        },
        callout: {
          type: "info",
          title: "Illustrative Rates",
          text: "Rebate rates shown are indicative only. Actual rates are confirmed in writing during your onboarding and are subject to the terms of your individual IB agreement. Rates may vary by broker partner, instrument and account type.",
        },
      },
      {
        id: "rebate-calculations",
        heading: "Rebate Calculations",
        paragraphs: [
          "Rebates are calculated by multiplying the total qualifying lots traded by your referred clients in the applicable period by the rebate rate corresponding to your tier for that period. Only lots traded in eligible instruments through eligible account types on approved broker platforms will count towards your volume total.",
          "Equity IB will provide transparent reporting of your volume and rebate calculations through your IB dashboard. If you believe a discrepancy exists in your rebate calculation, you must notify us in writing within 30 days of the relevant calculation date.",
        ],
      },
      {
        id: "payment-settlement",
        heading: "Payment and Settlement",
        paragraphs: [
          "Rebates are calculated daily and credited to your IB account balance. You may request a withdrawal of your available balance at any time through your IB portal. Withdrawals are processed by Equity IB or the applicable broker partner and settled to your chosen payment method.",
          "Payment processing times vary by method and may be subject to verification requirements. Equity IB does not guarantee any specific settlement timeframe but aims to process requests promptly. We are not responsible for delays caused by third-party payment processors, banking systems or technical issues.",
        ],
      },
      {
        id: "payment-methods",
        heading: "Payment Methods",
        paragraphs: [
          "Available payment methods may include international bank transfer (SWIFT), local bank transfer (where available), and cryptocurrency transfers including USDT (TRC20), USDT (ERC20), Bitcoin (BTC) and Ethereum (ETH). Available methods are subject to change and may vary based on your country of residence and the applicable broker partner.",
          "All payment details and verification requirements are confirmed during your onboarding. It is your responsibility to maintain accurate and current payment information in your IB account. Equity IB is not liable for payments sent to incorrect or outdated payment details you have provided.",
        ],
      },
      {
        id: "verification-kyc",
        heading: "Account Verification and KYC",
        paragraphs: [
          "Before receiving any payment, you will be required to complete identity verification (KYC) in accordance with our Anti-Money Laundering Policy and the requirements of the applicable broker partner. Required documents may include government-issued identification, proof of address, company documents (for corporate applicants) and any other verification information requested.",
          "Failure to complete or maintain satisfactory verification may result in payment being withheld, access to the programme being suspended, or termination of your partnership. We are under no obligation to make payments to unverified accounts.",
        ],
      },
      {
        id: "marketing-standards",
        heading: "Marketing Standards",
        paragraphs: [
          "As an IB partner, you agree to conduct all marketing and promotional activities in a manner that is truthful, accurate, fair and compliant with applicable laws and regulations in your jurisdiction. You must not make false or misleading statements about the Equity IB programme, any broker partner, trading risks, or expected earnings.",
          "All marketing materials must include appropriate risk warnings as required by applicable regulations and as specified in our marketing guidelines. You are responsible for ensuring that all content you produce or distribute in connection with the programme is compliant with local advertising and financial promotion rules.",
        ],
        callout: {
          type: "warning",
          title: "Compliance Responsibility",
          text: "You are solely responsible for ensuring your marketing activities comply with the laws and regulations applicable in your jurisdiction. Equity IB accepts no liability for regulatory breaches or complaints arising from your marketing activities.",
        },
      },
      {
        id: "prohibited-marketing",
        heading: "Prohibited Marketing Activities",
        paragraphs: [
          "The following marketing activities are strictly prohibited and will result in immediate termination of your IB partnership:",
        ],
        bullets: [
          "Guaranteeing or promising specific financial returns or rebate earnings to prospective traders",
          "Using the Equity IB name, logo or trademarks without written authorisation",
          "Making any statement that could be construed as investment advice",
          "Targeting individuals under 18 years of age",
          "Using paid advertising that violates platform policies (e.g. restricted categories on Google or Meta)",
          "Engaging in unsolicited mass communications (spam)",
          "Making false or misleading comparisons with competitors",
          "Incentivising artificial trading volume to manipulate rebate calculations",
        ],
      },
      {
        id: "confidentiality",
        heading: "Confidentiality",
        paragraphs: [
          "By participating in the programme, you may receive confidential information about Equity IB's operations, commercial arrangements, broker relationships, rebate structures and technology. You agree to keep all such information strictly confidential and not to disclose it to any third party without our prior written consent.",
          "Confidentiality obligations survive termination of your IB partnership indefinitely.",
        ],
      },
      {
        id: "relationship",
        heading: "Nature of the Relationship",
        paragraphs: [
          "You are an independent contractor and not an employee, agent or legal representative of Equity IB. You do not have the authority to bind Equity IB contractually or to make any representations on our behalf. You are solely responsible for your own tax obligations, business registrations and regulatory compliance.",
        ],
      },
      {
        id: "termination",
        heading: "Termination",
        paragraphs: [
          "Either party may terminate the IB partnership at any time by providing written notice. Equity IB may terminate your partnership immediately, without notice, in the event of a material breach of these terms, fraudulent activity, regulatory breach, reputational risk, or at our sole discretion.",
          "Upon termination, all accrued and unpaid rebates will be calculated and settled in accordance with these terms, subject to any withholdings for outstanding disputes or verification requirements. Access to your IB dashboard and referral links will be removed.",
        ],
      },
      {
        id: "broker-discretion",
        heading: "Broker Discretion",
        paragraphs: [
          "Rebate programmes are ultimately operated in partnership with independent, regulated brokers. Broker partners retain the right to adjust, suspend or terminate rebate arrangements in accordance with their own regulatory obligations, business decisions and commercial terms. Equity IB will endeavour to notify you of material changes as soon as reasonably practicable.",
        ],
      },
      {
        id: "amendments",
        heading: "Amendments",
        paragraphs: [
          "Equity IB may amend these Programme Terms at any time by providing written notice or by posting updated terms on this page. Continued participation in the programme after the effective date of any amendment constitutes acceptance of the updated terms. If you do not agree to any amendment, you may terminate your partnership by providing written notice.",
        ],
      },
    ],
    relatedSlugs: ["terms", "risk-disclosure", "aml-policy"],
  },

  // ─── 5. Cookie Policy ──────────────────────────────────────────────────────────
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    subtitle: "How we use cookies and similar technologies on our website",
    iconName: "Cookie",
    category: "Privacy & Data",
    lastUpdated: "June 2025",
    readingTime: "5 min read",
    description:
      "Explains what cookies we use on the Equity IB website, why we use them, and how you can manage your cookie preferences.",
    intro:
      "This Cookie Policy explains how Equity IB uses cookies and similar tracking technologies when you visit our website. It explains what these technologies are, why we use them, and your rights to control their use.",
    sections: [
      {
        id: "what-are-cookies",
        heading: "What Are Cookies?",
        paragraphs: [
          "Cookies are small text files that are placed on your device (computer, tablet or mobile) when you visit a website. They are widely used to make websites work more efficiently, to provide functionality and to collect information about how visitors use a site.",
          "Similar technologies include web beacons, pixel tags and local storage. This policy covers all such technologies collectively referred to as 'cookies'.",
        ],
      },
      {
        id: "cookies-we-use",
        heading: "Types of Cookies We Use",
        paragraphs: [
          "We use the following categories of cookies on our website. You can manage non-essential cookies through your preferences or browser settings.",
        ],
        table: {
          headers: ["Cookie Type", "Purpose", "Duration", "Required?"],
          rows: [
            ["Strictly Necessary", "Essential website functionality, security, form submissions", "Session / Persistent", "Yes"],
            ["Analytics", "Understanding how visitors use our website (anonymised)", "Up to 2 years", "No"],
            ["Preference", "Remembering your settings and choices (e.g. language, cookie consent)", "Up to 1 year", "No"],
            ["Marketing", "Tracking visits from advertisements and measuring campaign effectiveness", "Up to 90 days", "No"],
          ],
        },
      },
      {
        id: "strictly-necessary",
        heading: "Strictly Necessary Cookies",
        paragraphs: [
          "These cookies are essential for the website to function. They enable core features such as page navigation, form submissions, and security features. The website cannot function properly without these cookies. Because they are essential, they do not require your consent.",
        ],
      },
      {
        id: "analytics-cookies",
        heading: "Analytics Cookies",
        paragraphs: [
          "We use analytics cookies to understand how visitors interact with our website. This includes which pages are visited, how long visitors stay and how they navigate between pages. This data is collected in an anonymised or pseudonymised form and is used solely to improve our website. Analytics cookies require your consent.",
        ],
      },
      {
        id: "preference-cookies",
        heading: "Preference Cookies",
        paragraphs: [
          "Preference cookies allow our website to remember choices you have made, such as your cookie consent status, language preference or any display settings you have adjusted. These cookies improve your experience by ensuring you do not need to repeat your preferences on each visit.",
        ],
      },
      {
        id: "marketing-cookies",
        heading: "Marketing Cookies",
        paragraphs: [
          "Marketing cookies may be used to track visits from our advertising campaigns and to measure their effectiveness. These cookies may be set by third-party advertising platforms. We use this information only to understand the performance of our marketing and not to profile individual users for advertising purposes.",
        ],
      },
      {
        id: "third-party-cookies",
        heading: "Third-Party Cookies",
        paragraphs: [
          "Some cookies on our website are set by third-party services we use, such as analytics platforms and social media sharing tools. These third parties have their own privacy policies and cookie practices. We do not control third-party cookies and encourage you to review the relevant third-party policies.",
        ],
      },
      {
        id: "managing-cookies",
        heading: "Managing Your Cookie Preferences",
        paragraphs: [
          "When you first visit our website, you will be presented with our cookie consent banner. You can accept all cookies or manage your preferences by category. You can update your preferences at any time through the cookie settings link in our footer.",
          "You can also control cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies or receive a warning before a cookie is placed. Note that disabling certain cookies may affect the functionality of our website.",
        ],
      },
      {
        id: "browser-settings",
        heading: "Browser Settings",
        paragraphs: [
          "To manage cookies via your browser, please consult your browser's help function or visit the browser developer's website. Instructions for the most common browsers can be found at your browser provider's official support pages.",
        ],
        bullets: [
          "Google Chrome: Settings > Privacy and Security > Cookies and other site data",
          "Mozilla Firefox: Options > Privacy & Security > Cookies and Site Data",
          "Apple Safari: Preferences > Privacy > Cookies and website data",
          "Microsoft Edge: Settings > Cookies and site permissions",
        ],
      },
      {
        id: "consent",
        heading: "Consent",
        paragraphs: [
          "We will not set non-essential cookies without your consent. Where you have provided consent, you may withdraw it at any time by updating your cookie preferences or clearing your browser cookies. Withdrawal of consent does not affect the lawfulness of any processing carried out prior to withdrawal.",
        ],
      },
      {
        id: "updates",
        heading: "Updates to This Policy",
        paragraphs: [
          "We may update this Cookie Policy from time to time to reflect changes in the cookies we use or applicable regulations. Any changes will be posted on this page with an updated date.",
        ],
      },
      {
        id: "contact",
        heading: "Contact Us",
        paragraphs: [
          "If you have questions about our use of cookies, please contact us through our Contact page.",
        ],
      },
    ],
    relatedSlugs: ["privacy-policy", "terms", "complaints"],
  },

  // ─── 6. AML Policy ───────────────────────────────────────────────────────────
  {
    slug: "aml-policy",
    title: "AML Policy",
    subtitle: "Our Anti-Money Laundering and Know Your Customer framework",
    iconName: "Search",
    category: "Terms & Compliance",
    lastUpdated: "June 2025",
    readingTime: "6 min read",
    description:
      "Outlines Equity IB's approach to Anti-Money Laundering (AML) compliance, Know Your Customer (KYC) requirements and identity verification for IB partners.",
    intro:
      "Equity IB is committed to maintaining the highest standards of integrity in its operations. This Anti-Money Laundering Policy outlines the measures we take to prevent money laundering and financial crime in connection with our Introducing Broker programme.",
    sections: [
      {
        id: "our-commitment",
        heading: "Our Commitment",
        paragraphs: [
          "Equity IB takes a zero-tolerance approach to money laundering, financial crime and terrorist financing. We are committed to ensuring that our platform and partner relationships are not used, directly or indirectly, to facilitate financial crime. All IB partners, employees and representatives are expected to comply fully with this policy.",
          "This AML Policy applies to all aspects of our IB partner programme, including applications, payment processing and ongoing account management.",
        ],
      },
      {
        id: "scope",
        heading: "Scope",
        paragraphs: [
          "This policy applies to all individuals and entities who apply for or participate in the Equity IB Introducing Broker programme. It applies to all transactions, withdrawals and commercial arrangements managed through our platform.",
        ],
      },
      {
        id: "kyc",
        heading: "Know Your Customer (KYC)",
        paragraphs: [
          "Before any payment is made to an IB partner, and as a condition of programme participation, we require all partners to complete a Know Your Customer verification process. KYC is a standard industry requirement to verify the identity of the individuals and entities we do business with.",
          "KYC verification must be completed to our satisfaction before any payment is processed. We reserve the right to request updated or additional verification documents at any time during the partnership.",
        ],
      },
      {
        id: "verification-requirements",
        heading: "Identity Verification Requirements",
        paragraphs: [
          "For individual IB partners, required documents typically include a valid, unexpired government-issued photo identification (passport or national identity card) and proof of residential address (utility bill, bank statement or official document dated within the past three months).",
          "For corporate IB partners, requirements typically include company registration documents, certificates of incorporation, information about directors and beneficial owners, and proof of business address.",
        ],
        bullets: [
          "Government-issued photo ID (passport, national ID or driving licence)",
          "Proof of current residential or business address (dated within 3 months)",
          "For companies: certificate of incorporation and company structure",
          "For companies: identification of directors and ultimate beneficial owners (UBOs)",
          "Any additional documents as may be required by our broker partners or applicable regulation",
        ],
        callout: {
          type: "info",
          title: "Secure Submission",
          text: "All identity documents are submitted and stored securely. We use industry-standard encryption to protect your personal information during the verification process.",
        },
      },
      {
        id: "enhanced-due-diligence",
        heading: "Enhanced Due Diligence",
        paragraphs: [
          "In certain circumstances, enhanced due diligence (EDD) may be required. This applies to partners who are Politically Exposed Persons (PEPs), who operate in higher-risk jurisdictions, who conduct high-volume transactions, or where we identify indicators that warrant additional scrutiny.",
          "Enhanced due diligence may include more detailed identity verification, source of funds documentation, and additional background checks. We will notify you if EDD is required.",
        ],
      },
      {
        id: "monitoring",
        heading: "Ongoing Monitoring",
        paragraphs: [
          "We conduct ongoing monitoring of IB partner activity to identify unusual patterns or transactions that may indicate money laundering or other financial crime. This includes monitoring payment volumes, frequencies, destinations and any deviations from expected patterns.",
          "Our monitoring programme is risk-based and proportionate. Partners whose activity triggers monitoring reviews may be asked to provide additional information or documentation.",
        ],
      },
      {
        id: "suspicious-activity",
        heading: "Suspicious Activity",
        paragraphs: [
          "If we identify or suspect that an IB partner's account or transactions are connected to money laundering, financial crime or other illegal activity, we will take immediate action. This may include suspending account access, withholding payments, terminating the partnership and, where legally required, making a report to the appropriate authorities.",
          "We will not notify individuals who are the subject of a suspicious activity report, as doing so may constitute a criminal offence ('tipping off').",
        ],
        callout: {
          type: "warning",
          title: "Legal Reporting Obligations",
          text: "Equity IB may be legally required to report suspicious activity to relevant authorities without notifying the individual concerned. Attempting to obscure the origin of funds or evade verification requirements may itself constitute a criminal offence.",
        },
      },
      {
        id: "record-keeping",
        heading: "Record Keeping",
        paragraphs: [
          "We retain verification documents and transaction records for a minimum period as required by applicable law, typically five years from the end of the business relationship or from the date of a transaction. Records are stored securely and in line with our Privacy Policy.",
        ],
      },
      {
        id: "compliance-training",
        heading: "Compliance and Training",
        paragraphs: [
          "Our team members involved in partner onboarding, payment processing and account management receive regular training on AML obligations and how to identify potential indicators of financial crime. We review and update our AML procedures periodically to reflect changes in regulation and best practice.",
        ],
      },
      {
        id: "contact",
        heading: "Compliance Contact",
        paragraphs: [
          "If you have a compliance-related query or wish to submit a query about our AML procedures, please contact us through our Contact page. Please mark your enquiry as 'Compliance Enquiry'.",
        ],
      },
    ],
    relatedSlugs: ["ib-terms", "privacy-policy", "complaints"],
  },

  // ─── 7. Disclaimer ────────────────────────────────────────────────────────────
  {
    slug: "disclaimer",
    title: "Disclaimer",
    subtitle: "Important disclaimers regarding the information on this website",
    iconName: "Info",
    category: "Risk & Trading",
    lastUpdated: "June 2025",
    readingTime: "4 min read",
    description:
      "General disclaimer covering the limitations of information provided on the Equity IB website, including no investment advice, no earnings guarantees and limitations of liability.",
    intro:
      "This Disclaimer sets out important limitations on the information provided on the Equity IB website. Please read this section carefully before relying on any information found on our website or in any materials we provide.",
    sections: [
      {
        id: "general-disclaimer",
        heading: "General Disclaimer",
        paragraphs: [
          "The information provided on the Equity IB website is intended for general informational and educational purposes only. While we make reasonable efforts to keep content accurate and up to date, we make no representations or warranties, express or implied, about the completeness, accuracy, reliability, suitability or availability of any information on this website.",
          "Nothing on this website should be taken as a solicitation, inducement or recommendation to engage in any particular form of trading, investment or business activity.",
        ],
      },
      {
        id: "no-investment-advice",
        heading: "No Investment Advice",
        paragraphs: [
          "Equity IB does not provide investment advice, financial advice, tax advice or legal advice. Nothing on this website constitutes a personal recommendation or should be relied upon as the basis for any investment or trading decision.",
          "All investment and trading decisions carry risk and should be made based on your own independent assessment of your personal financial circumstances, objectives and risk tolerance, ideally with the guidance of a qualified financial adviser.",
        ],
        callout: {
          type: "warning",
          title: "Not Investment Advice",
          text: "Nothing on this website should be construed as investment advice or a personal recommendation. Equity IB is not authorised to provide regulated financial advice.",
        },
      },
      {
        id: "educational-only",
        heading: "Educational Information Only",
        paragraphs: [
          "All articles, guides, tutorials, market commentary, signals and analysis provided through our website and Marketing Hub are intended for educational purposes only. They represent opinions and are not guaranteed to be accurate, complete or timely. We do not warrant that educational content reflects current market conditions.",
        ],
      },
      {
        id: "no-earnings-guarantee",
        heading: "No Earnings Guarantee",
        paragraphs: [
          "No guarantee, promise or warranty of income or earnings is made by Equity IB. The income potential of any IB partner depends on many factors including the volume of clients introduced, the trading activity of those clients, the applicable rebate tier, instrument choices, market conditions and the applicable broker partner commercial arrangement.",
          "Any earnings figures quoted on this website are for illustrative purposes only. They are not historical data, forecasts or promises of future performance.",
        ],
      },
      {
        id: "illustrative-figures",
        heading: "Illustrative Figures and Examples",
        paragraphs: [
          "All calculator outputs, rebate estimates, earnings projections and tier examples shown on this website use hypothetical figures for demonstration purposes only. These examples are constructed to illustrate how the rebate structure works and should not be taken as representative of typical or guaranteed outcomes.",
        ],
      },
      {
        id: "website-accuracy",
        heading: "Website Content Accuracy",
        paragraphs: [
          "We aim to keep all content on this website accurate and current, but we cannot guarantee that all information is correct at all times. Rebate rates, tier structures, payment methods and programme features may change and may not be immediately reflected on the website. Always verify current rates and terms with your account manager.",
        ],
      },
      {
        id: "third-party-content",
        heading: "Third-Party Content and Links",
        paragraphs: [
          "This website may contain links to or information from third-party websites. Equity IB does not endorse, control or take responsibility for any third-party website or content. Any reliance on third-party content is at your own risk.",
        ],
      },
      {
        id: "liability",
        heading: "Limitation of Liability",
        paragraphs: [
          "To the fullest extent permitted by applicable law, Equity IB disclaims all liability for any loss or damage, whether direct, indirect, consequential or otherwise, arising from your use of or reliance on any information on this website. This includes losses arising from trading decisions made in reliance on information found here.",
        ],
      },
      {
        id: "contact",
        heading: "Questions",
        paragraphs: [
          "If you have any questions about this disclaimer or the information on our website, please contact us through our Contact page.",
        ],
      },
    ],
    relatedSlugs: ["risk-disclosure", "terms", "marketing-disclaimer"],
  },

  // ─── 8. Marketing Disclaimer ──────────────────────────────────────────────────
  {
    slug: "marketing-disclaimer",
    title: "Marketing Disclaimer",
    subtitle: "Limitations applying to marketing resources, examples and promotional content",
    iconName: "Megaphone",
    category: "Risk & Trading",
    lastUpdated: "June 2025",
    readingTime: "4 min read",
    description:
      "Specific disclaimers relating to marketing materials, signal content, earnings examples and promotional resources available through the Equity IB Marketing Hub.",
    intro:
      "This Marketing Disclaimer applies to all marketing resources, guides, templates, signal content and promotional materials made available through the Equity IB website and Marketing Hub. Please read this disclaimer before using or distributing any marketing resource.",
    sections: [
      {
        id: "educational-purpose",
        heading: "Educational Purpose of Marketing Resources",
        paragraphs: [
          "All marketing guides, templates, educational articles, video content and downloadable resources provided through the Equity IB Marketing Hub are intended to help Introducing Broker partners develop their marketing skills and grow their referral networks. These resources are provided for educational purposes only.",
          "The strategies, approaches and examples described in our marketing resources reflect general best practice guidance and should be adapted to suit your specific audience, jurisdiction, regulatory environment and business model.",
        ],
      },
      {
        id: "signal-content",
        heading: "Signal Content and Market Commentary",
        paragraphs: [
          "Any market signals, analysis, commentary or trade ideas provided through our resources or partner channels represent the subjective opinions of the content creator at the time of publication. They are not verified predictions, guarantees or advice.",
          "Signal content and market analysis are intended to serve as educational examples of how to read market conditions and should not be treated as instructions to trade. All trading decisions must be made independently based on your own analysis and risk assessment.",
        ],
        callout: {
          type: "warning",
          title: "Signal Disclaimer",
          text: "Market signals and analysis are provided for educational purposes only. They do not constitute investment advice, a personal recommendation or a promise of performance. Always conduct your own due diligence.",
        },
      },
      {
        id: "no-trading-advice",
        heading: "No Trading or Financial Advice",
        paragraphs: [
          "Marketing materials produced by Equity IB do not constitute financial advice, investment recommendations or trading instructions. You must not represent any material from our Marketing Hub as constituting investment advice when distributing it to third parties.",
          "When using our marketing templates and resources to engage your own audience, you remain responsible for ensuring that your communications are compliant with all applicable financial promotion rules and regulations in your jurisdiction.",
        ],
      },
      {
        id: "no-profit-guarantee",
        heading: "No Guarantee of Profits",
        paragraphs: [
          "No marketing resource, guide, template or signal provided by Equity IB guarantees or promises trading profits or earnings for referred clients or for IB partners. Profits, if any, depend on many variables including market conditions, trading strategy, risk management and individual trader behaviour.",
        ],
      },
      {
        id: "past-performance",
        heading: "Past Performance",
        paragraphs: [
          "Any historical performance data, trade results or case study outcomes shown in our marketing materials are provided for illustrative purposes only. Past performance is not indicative of future results. Any reference to a trading result, market move or successful strategy in the past does not imply that the same result will occur in the future.",
        ],
      },
      {
        id: "rebate-illustrations",
        heading: "Rebate and Earnings Illustrations",
        paragraphs: [
          "Rebate calculations and earnings projections shown in our marketing resources use hypothetical volume and tier assumptions for illustrative purposes only. These illustrations do not reflect any specific IB's historical earnings or guaranteed future income. Actual results depend on your individual agreement, client trading volumes and applicable commercial terms.",
        ],
      },
      {
        id: "marketing-materials-usage",
        heading: "Authorised Use of Marketing Materials",
        paragraphs: [
          "Marketing resources provided through the Equity IB Marketing Hub are licensed for use by approved IB partners for the purpose of promoting their IB business in connection with the Equity IB programme. They may not be modified to remove risk warnings, disclaimer text or attribution without authorisation. They may not be used by individuals who are not approved IB partners.",
        ],
      },
      {
        id: "user-responsibility",
        heading: "Your Responsibility",
        paragraphs: [
          "As an IB partner distributing marketing content, you are personally responsible for ensuring that your marketing activities comply with all applicable advertising, financial promotion and data protection laws in your jurisdiction. You should seek local legal advice if you are unsure about the regulatory requirements that apply to your marketing activities.",
        ],
      },
      {
        id: "compliance",
        heading: "Regulatory Compliance",
        paragraphs: [
          "Financial promotion regulations vary by country. Some jurisdictions require marketing communications related to financial products or services to be approved by or registered with a local regulator. It is your responsibility to understand and comply with these requirements. Equity IB accepts no liability for regulatory action arising from your marketing activities.",
        ],
      },
      {
        id: "contact",
        heading: "Questions",
        paragraphs: [
          "If you have questions about the appropriate use of any marketing resource or the compliance requirements that apply to your activities, please contact us through our Contact page.",
        ],
      },
    ],
    relatedSlugs: ["disclaimer", "risk-disclosure", "ib-terms"],
  },

  // ─── 9. Copyright Notice ─────────────────────────────────────────────────────
  {
    slug: "copyright",
    title: "Copyright Notice",
    subtitle: "Ownership, permitted use and restrictions on our intellectual property",
    iconName: "Copyright",
    category: "Terms & Compliance",
    lastUpdated: "June 2025",
    readingTime: "4 min read",
    description:
      "Sets out the ownership and permitted uses of the Equity IB website, branding, educational content, marketing materials, graphics and other intellectual property.",
    intro:
      "This Copyright Notice sets out the intellectual property rights of Equity IB and the terms under which our content may or may not be used. All content on this website is protected by copyright and other intellectual property laws.",
    sections: [
      {
        id: "ownership",
        heading: "Intellectual Property Ownership",
        paragraphs: [
          "All content on the Equity IB website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, software and code, is either owned by Equity IB or used under licence. All such content is protected by applicable copyright, trademark and other intellectual property laws.",
          "The Equity IB name, logo and all related brand elements are the sole property of Equity IB. Unauthorised use of our brand is strictly prohibited and may result in legal action.",
        ],
      },
      {
        id: "website-content",
        heading: "Website Content",
        paragraphs: [
          "All written content, designs, layouts and user interfaces on this website are the exclusive intellectual property of Equity IB. No content may be reproduced, adapted, distributed, transmitted, broadcast or otherwise exploited in any form without our prior written consent, except as expressly permitted under these terms.",
        ],
      },
      {
        id: "branding",
        heading: "Logos and Branding",
        paragraphs: [
          "The Equity IB logo, wordmark, colour scheme and associated brand assets may only be used by approved IB partners in accordance with our IB Programme Terms and any brand guidelines provided during onboarding. Any use of our brand outside these authorised parameters requires written permission.",
          "You may not create derivative works, adaptations or parodies of our brand without explicit authorisation. You may not use our brand in a manner that suggests endorsement, affiliation or partnership beyond your IB relationship.",
        ],
      },
      {
        id: "educational-resources",
        heading: "Educational Resources",
        paragraphs: [
          "The educational guides, articles, learning modules and knowledge base content available on this website and through the Marketing Hub are original works created by or for Equity IB. They may be downloaded and used by approved IB partners for personal professional development or for the promotion of their IB business in line with our IB Programme Terms.",
          "Educational resources may not be resold, republished, distributed to non-partners or used in any way that implies they were created by you or another entity.",
        ],
      },
      {
        id: "marketing-materials",
        heading: "Marketing Materials and Downloads",
        paragraphs: [
          "Marketing templates, email sequences, social media content, banner graphics, landing page copy and other promotional materials provided through the Marketing Hub are licensed to approved IB partners for use in promoting the Equity IB programme. They may not be modified to remove attribution, risk warnings or legal notices without permission.",
          "Marketing materials remain the property of Equity IB and licences to use them terminate upon the end of your IB partnership.",
        ],
      },
      {
        id: "graphics-visuals",
        heading: "Graphics and Visuals",
        paragraphs: [
          "All graphics, illustrations, icons, infographics and visual design elements on this website are protected by copyright. Approved IB partners may download and use branded graphics provided in the Marketing Hub for authorised promotional purposes only.",
        ],
      },
      {
        id: "guides-content",
        heading: "Guides and Written Content",
        paragraphs: [
          "Written guides, strategy documents, market analysis and educational articles created by Equity IB may be shared with your audience in their original, unmodified form with clear attribution to Equity IB as the source. You may excerpt short quotations with proper attribution but may not reproduce guides in full for redistribution on other platforms without permission.",
        ],
      },
      {
        id: "video-content",
        heading: "Video and Audio Content",
        paragraphs: [
          "Any video or audio content produced by Equity IB is protected by copyright. It may be shared through approved channels using standard platform sharing features (e.g. embedding a YouTube video). Downloading, re-uploading, editing or distributing video content outside these parameters requires written authorisation.",
        ],
      },
      {
        id: "permitted-use",
        heading: "Permitted Use",
        paragraphs: [
          "Approved IB partners may use Equity IB materials for the purpose of promoting their IB business and introducing traders to our broker partners. This includes sharing provided marketing assets in your own marketing channels, linking to Equity IB content, and using provided templates to create your own compliant promotional materials.",
        ],
        bullets: [
          "Downloading marketing materials from the Marketing Hub for authorised promotional use",
          "Sharing provided social media content on your own social platforms",
          "Linking to Equity IB website pages from your own website or content",
          "Using provided email templates for approved IB marketing communications",
          "Sharing educational guides with your audience with proper attribution",
        ],
      },
      {
        id: "prohibited-use",
        heading: "Prohibited Use",
        paragraphs: [
          "The following uses of Equity IB intellectual property are strictly prohibited without prior written consent:",
        ],
        bullets: [
          "Reproducing or republishing any website content for commercial purposes",
          "Removing or modifying copyright notices, attribution text or disclaimers",
          "Creating derivative works or adaptations of our branded content",
          "Using the Equity IB brand to imply an endorsement or partnership beyond your approved IB status",
          "Selling, sublicensing or distributing our content to third parties",
          "Using our content in any way that could damage the Equity IB reputation or brand",
        ],
      },
      {
        id: "infringement",
        heading: "Reporting Infringement",
        paragraphs: [
          "If you believe that any content on this website infringes your intellectual property rights, or if you become aware of any third-party infringement of Equity IB intellectual property, please contact us through our Contact page with details of the alleged infringement.",
        ],
      },
    ],
    relatedSlugs: ["terms", "ib-terms", "marketing-disclaimer"],
  },

  // ─── 10. Contact & Complaints ─────────────────────────────────────────────────
  {
    slug: "complaints",
    title: "Contact & Complaints",
    subtitle: "How to get in touch with us and our formal complaints procedure",
    iconName: "MessageSquare",
    category: "Policy",
    lastUpdated: "June 2025",
    readingTime: "5 min read",
    description:
      "Our contact information, support channels and step-by-step complaints procedure for IB partners and website visitors.",
    intro:
      "We are committed to providing a high quality service and to resolving any issues you may have promptly and fairly. This page explains how to contact us, what support is available, and how to make a formal complaint if you are not satisfied with our service.",
    sections: [
      {
        id: "how-to-contact",
        heading: "How to Contact Us",
        paragraphs: [
          "The primary way to reach our team is through the contact form on our Contact page. You can also reach us by email using the address published on our website. We aim to acknowledge all enquiries within one business day and to provide a full response within the timeframes set out below.",
        ],
      },
      {
        id: "general-enquiries",
        heading: "General Enquiries",
        paragraphs: [
          "For general questions about the Equity IB programme, our rebate structure, tier system, available resources or any aspect of the website, please use our Contact page and select 'General Enquiry' as the subject. Our team will respond with full information within 1–2 business days.",
        ],
      },
      {
        id: "ib-partnership",
        heading: "IB Partnership Enquiries",
        paragraphs: [
          "For specific questions about your IB application, account setup, rebate calculations, payment status or partnership terms, please contact your dedicated account manager where one has been assigned, or use our Contact page and select 'IB Partnership Enquiry'.",
          "If you are a new applicant without a dedicated manager, our IB team will be assigned to assist you following the submission of your application.",
        ],
      },
      {
        id: "technical-support",
        heading: "Technical Support",
        paragraphs: [
          "For technical issues related to the website, your IB dashboard, tracking links or any digital tool, please contact us through the Contact page and select 'Technical Support'. Please describe the issue, including any error messages, your device type and browser, to help us resolve it as quickly as possible.",
        ],
      },
      {
        id: "privacy-requests",
        heading: "Privacy and Data Requests",
        paragraphs: [
          "For requests to access, correct, delete or port your personal data, or to exercise any other data protection rights, please contact us through the Contact page and select 'Privacy / Data Request'. Please allow up to 30 days for us to process your request, as required by applicable data protection law.",
        ],
      },
      {
        id: "complaints-overview",
        heading: "Our Complaints Procedure",
        paragraphs: [
          "We take complaints seriously and are committed to resolving them fairly and efficiently. If you are not satisfied with any aspect of our service — including our marketing resources, rebate administration, payment processing, customer communications or the conduct of our team — you have the right to make a formal complaint.",
        ],
      },
      {
        id: "how-to-complain",
        heading: "How to Make a Complaint",
        paragraphs: [
          "To make a formal complaint, please contact us through the Contact page and select 'Formal Complaint' as the subject. In your complaint, please include your full name and account details (if applicable), a clear description of the issue or concern, the date the issue occurred and any supporting documentation.",
          "You may also submit a complaint by email to the address published on our Contact page, clearly marking your correspondence as 'Formal Complaint'.",
        ],
        callout: {
          type: "info",
          title: "What to Include",
          text: "To help us investigate your complaint promptly, please include: your name and contact details, a clear description of the issue, the date the issue arose, and any relevant documentation or screenshots.",
        },
      },
      {
        id: "acknowledgement",
        heading: "Acknowledgement",
        paragraphs: [
          "We will acknowledge receipt of your formal complaint within 2 business days. Our acknowledgement will confirm your complaint reference number and the name of the team member responsible for managing your case.",
        ],
      },
      {
        id: "investigation",
        heading: "Investigation",
        paragraphs: [
          "Following acknowledgement, we will conduct a thorough investigation of your complaint. This may involve reviewing account records, communications history, rebate calculations and any other relevant information. We may contact you during the investigation to request additional information or clarification.",
        ],
      },
      {
        id: "resolution",
        heading: "Response and Resolution",
        paragraphs: [
          "We aim to provide a full written response to all formal complaints within 10 business days of acknowledgement. Our response will set out our findings, any actions taken and any remedy offered. If the investigation is taking longer than anticipated, we will contact you to explain the reason for the delay and provide an updated timeline.",
        ],
      },
      {
        id: "escalation",
        heading: "Escalation",
        paragraphs: [
          "If you are not satisfied with our response to your complaint, you may escalate the matter by requesting a senior review. To escalate, please reply to our complaint response email marking your message 'Escalation Request'. A senior member of our team will review your case and provide a final response within 10 business days.",
          "If you remain dissatisfied after our internal escalation process, you may wish to seek independent advice or consider any external dispute resolution mechanisms that may be available in your jurisdiction.",
        ],
      },
      {
        id: "response-times",
        heading: "Response Time Summary",
        paragraphs: [
          "For your reference, the following response timeframes apply to our support and complaints process.",
        ],
        table: {
          headers: ["Enquiry Type", "Acknowledgement", "Full Response"],
          rows: [
            ["General enquiry", "Same business day", "1–2 business days"],
            ["IB partnership enquiry", "Same business day", "1–2 business days"],
            ["Technical support", "Same business day", "1–3 business days"],
            ["Privacy / data request", "2 business days", "Up to 30 days"],
            ["Formal complaint", "2 business days", "10 business days"],
            ["Escalated complaint", "Immediate", "10 business days"],
          ],
        },
      },
      {
        id: "contact-information",
        heading: "Contact Information",
        paragraphs: [
          "All contact, including formal complaints, should be directed through our Contact page or via the email address published there. We do not accept formal complaints through social media channels.",
        ],
        callout: {
          type: "review",
          title: "Review Before Publishing",
          text: "Insert your business email address, postal address and any other relevant contact details here. If your business is subject to regulatory oversight, include the regulator's name and contact address for complaint escalation.",
        },
      },
    ],
    relatedSlugs: ["privacy-policy", "terms", "aml-policy"],
  },
];

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return LEGAL_DOCS.find((d) => d.slug === slug);
}

export const LEGAL_CATEGORIES = [
  "All",
  "Privacy & Data",
  "Terms & Compliance",
  "Risk & Trading",
  "IB Partnership",
  "Policy",
] as const;
