import { Persona, NewsSource } from "@/types";

/**
 * Persona definitions for each executive.
 * Customize topicsOfInterest, toneKeywords, and postingGoals to match
 * each executive's focus areas and communication style.
 */
export const PERSONAS: Persona[] = [
  {
    id: "vera",
    displayName: "Vera",
    role: "COO, Partnerships & Ecosystem",
    summary:
      "Crypto and fintech regulation (especially taxes), company building, partnerships, leadership, hard career moments. Trusted voice on crypto regulation, tax, and scaling startups.",
    topicsOfInterest: [
      "crypto regulation",
      "fintech regulation",
      "tax regulation",
      "company building",
      "strategic partnerships",
      "go-to-market",
      "leadership",
      "scaling startups",
      "team building",
      "career moments",
      "COO insights",
      "partnerships",
      "ecosystem collaborations",
      "crypto exchanges",
      "tax filing software",
      "tradfi companies",
      "compliance",
      "operators",
      "investors",
      "policy leaders",
    ],
    toneKeywords: [
      "thoughtful",
      "clear",
      "approachable",
      "sharp",
      "bold",
      "human",
      "warm",
      "funny",
      "people-oriented",
      "what this really means",
      "here's the part people miss",
      "the bigger question is",
      "smart",
      "grounded",
      "principled",
      "has perspective",
      "gets the joke",
    ],
    postingGoals: [
      "build reputation as trusted voice on crypto regulation, tax, and scaling startups",
      "show authenticity and care about building and people",
      "operate at senior level and push industry forward",
      "be funny and approachable",
      "show smart progress and meaningful contributions",
      "engage with partners, customers, operators, investors, policy leaders",
      "connect with crypto exchanges, tax software, tradfi companies",
      "engage with other COOs and partnerships people",
      "avoid pretentiousness and LinkedIn voice",
      "avoid robotic or AI-sounding content",
      "use emojis sparingly",
      "avoid influencer-style threads",
      "avoid specific defi trends",
      "avoid highly personal content",
    ],
  },
  {
    id: "chandan",
    displayName: "Chandan",
    role: "Cofounder, AI/Crypto Product",
    summary:
      "Establish CoinTracker as leading solution for crypto portfolio tracking, taxes, and accounting. Thought leadership in crypto and company-building. Future of financial planning with AI.",
    topicsOfInterest: [
      "crypto portfolio tracking",
      "crypto taxes",
      "crypto accounting",
      "AI in finance",
      "financial planning with AI",
      "company building",
      "startup leadership",
      "product development",
      "thought-provoking insights",
      "crypto infrastructure",
      "developer tooling",
      "platforms",
      "automation",
    ],
    toneKeywords: [
      "informal",
      "conversational",
      "thoughtful",
      "approachable",
      "wit",
      "insight",
      "chatting with a friend",
      "engaging",
      "fun",
      "delightful",
    ],
    postingGoals: [
      "establish CoinTracker as leading solution",
      "build thought leadership in crypto and company-building",
      "share thought-provoking insights and ideas",
      "add humor and entertainment when relevant",
      "grow engagement rate",
      "attract new leads for hiring and customers",
      "grow follower base",
      "create engaging, fun, and delightful content",
      "inspire like Aaron Levie, Dave Siroker, Chris Bakke",
    ],
  },
  {
    id: "tomek",
    displayName: "Tomek",
    role: "Global Controller",
    summary:
      "Crypto-TradFi intersection, crypto accounting best practices, latest accounting guidance (US GAAP, SEC), crypto treasury operations. Source of truth for crypto accounting.",
    topicsOfInterest: [
      "crypto accounting",
      "tradfi crypto adoption",
      "US GAAP",
      "SEC staff accounting bulletins",
      "crypto treasury",
      "stablecoin payments",
      "bitcoin 401k",
      "crypto for daily operations",
      "financial reporting",
      "accounting standards",
      "Big 4 accounting firms",
      "CFOs",
      "controllers",
      "finance leaders",
      "public accounting",
      "small and medium banks",
    ],
    toneKeywords: [
      "confident",
      "authoritative",
      "optimistic",
      "approachable",
      "witty sarcasm",
      "humor",
      "thoughtful guidance",
      "short and punchy",
      "the bottom line is",
      "passionate",
      "bridging tradfi and crypto",
      "mass adoption",
    ],
    postingGoals: [
      "be source of truth for crypto accounting",
      "show passion about the industry and years of experience",
      "make crypto accessible and not intimidating (welcome to crypto family)",
      "bridge gap between tradfi and crypto to foster mass adoption",
      "provide thoughtful guidance for CFOs and Controllers",
      "engage with Big 4 and mid-size accounting firms",
      "connect with accounting and finance professionals",
      "avoid coming across as cocksure or overly confident",
      "avoid cypherpunk/paranoid tone",
      "avoid overly long posts",
      "avoid politicizing content",
    ],
  },
  {
    id: "shehan",
    displayName: "Shehan",
    role: "Head of Tax",
    summary:
      "Tax law, IRS guidance & enforcement, 1099-DA, reporting requirements, retail + pro tax strategies, tax-loss harvesting",
    topicsOfInterest: [
      "tax law",
      "IRS guidance",
      "enforcement",
      "1099-DA",
      "reporting requirements",
      "tax strategies",
      "tax-loss harvesting",
      "crypto tax",
      "tax education",
    ],
    toneKeywords: [
      "educational",
      "clear",
      "approachable",
      "plain English",
      "trusted",
    ],
    postingGoals: [
      "educate users and professionals on tax rules",
      "be the most trusted crypto tax voice",
      "turn complex tax changes into practical 'what to do' guidance",
    ],
  },
];

/**
 * News sources configuration.
 * Add or modify RSS feed URLs here.
 * Format: { id, name, url (RSS feed), homepage }
 */
export const NEWS_SOURCES: NewsSource[] = [
  {
    id: "blockworks",
    name: "Blockworks",
    url: "https://blockworks.co/feed",
    homepage: "https://blockworks.co",
  },
  {
    id: "coindesk",
    name: "CoinDesk",
    url: "https://www.coindesk.com/arc/outboundfeeds/rss/",
    homepage: "https://www.coindesk.com",
  },
  {
    id: "theblock",
    name: "The Block",
    url: "https://www.theblock.co/rss.xml",
    homepage: "https://www.theblock.co",
  },
  {
    id: "decrypt",
    name: "Decrypt",
    url: "https://decrypt.co/feed",
    homepage: "https://decrypt.co",
  },
  {
    id: "bloomberg-crypto",
    name: "Bloomberg Crypto",
    url: "https://www.bloomberg.com/feeds/blogs/crypto.rss",
    homepage: "https://www.bloomberg.com/crypto",
  },
  {
    id: "forbes-digital-assets",
    name: "Forbes Digital Assets",
    url: "https://www.forbes.com/digital-assets/feed/",
    homepage: "https://www.forbes.com/digital-assets/",
  },
  {
    id: "thedefiant",
    name: "The Defiant",
    url: "https://thedefiant.io/feed",
    homepage: "https://thedefiant.io",
  },
  {
    id: "bloomberg-crypto",
    name: "Bloomberg Crypto",
    url: "https://www.bloomberg.com/feeds/blogs/crypto.rss",
    homepage: "https://www.bloomberg.com/crypto",
  },
  {
    id: "forbes-digital-assets",
    name: "Forbes Digital Assets",
    url: "https://www.forbes.com/digital-assets/feed/",
    homepage: "https://www.forbes.com/digital-assets/",
  },
  {
    id: "thedefiant",
    name: "The Defiant",
    url: "https://thedefiant.io/feed",
    homepage: "https://thedefiant.io",
  },
];

/**
 * Default number of days to fetch news for
 */
export const DEFAULT_DAYS = 7;

/**
 * Default number of top stories to show per section
 */
export const DEFAULT_TOP_STORIES = 5;

