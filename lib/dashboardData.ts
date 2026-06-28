export const MOCK_OVERVIEW = {
  todayRebates: 1240,
  yesterdayRebates: 980,
  thisMonth: 21600,
  lastMonth: 18500,
  lifetime: 218400,
  currentTier: "Gold",
  tierColor: "#FFD700",
  nextTier: "Platinum",
  nextTierColor: "#6366F1",
  currentLots: 720,
  lotsForNextTier: 1000,
  lotsNeeded: 280,
  activeClients: 52,
  pendingRebates: 3840,
  availableBalance: 7240,
  performanceScore: 87,
};

export const MONTHLY_REBATES = [
  { month: "Jan", rebates: 11200, lots: 560 },
  { month: "Feb", rebates: 13400, lots: 670 },
  { month: "Mar", rebates: 12800, lots: 640 },
  { month: "Apr", rebates: 15600, lots: 780 },
  { month: "May", rebates: 14200, lots: 710 },
  { month: "Jun", rebates: 17800, lots: 890 },
  { month: "Jul", rebates: 16400, lots: 820 },
  { month: "Aug", rebates: 19200, lots: 960 },
  { month: "Sep", rebates: 18500, lots: 925 },
  { month: "Oct", rebates: 20800, lots: 1040 },
  { month: "Nov", rebates: 19400, lots: 970 },
  { month: "Dec", rebates: 21600, lots: 1080 },
];

export const DAILY_REBATES = [
  { day: "Dec 1", rebates: 680 },
  { day: "Dec 2", rebates: 920 },
  { day: "Dec 3", rebates: 840 },
  { day: "Dec 4", rebates: 1120 },
  { day: "Dec 5", rebates: 980 },
  { day: "Dec 8", rebates: 760 },
  { day: "Dec 9", rebates: 1040 },
  { day: "Dec 10", rebates: 890 },
  { day: "Dec 11", rebates: 1200 },
  { day: "Dec 12", rebates: 1080 },
  { day: "Dec 15", rebates: 940 },
  { day: "Dec 16", rebates: 1160 },
  { day: "Dec 17", rebates: 1020 },
  { day: "Dec 18", rebates: 980 },
  { day: "Dec 19", rebates: 1240 },
];

export const MOCK_CLIENTS = [
  { id: 1, name: "James W.", country: "🇬🇧 UK", lots: 124, rebates: 2480, status: "Active", tier: "VIP", joined: "Mar 2024", platform: "MT5" },
  { id: 2, name: "Ahmed K.", country: "🇦🇪 UAE", lots: 98, rebates: 1960, status: "Active", tier: "Premium", joined: "Jan 2024", platform: "MT4" },
  { id: 3, name: "Priya S.", country: "🇮🇳 India", lots: 76, rebates: 1520, status: "Active", tier: "Standard", joined: "Apr 2024", platform: "MT5" },
  { id: 4, name: "Marco D.", country: "🇪🇸 Spain", lots: 65, rebates: 1300, status: "Active", tier: "Standard", joined: "Feb 2024", platform: "MT4" },
  { id: 5, name: "Lin C.", country: "🇸🇬 Singapore", lots: 54, rebates: 1080, status: "Active", tier: "Standard", joined: "May 2024", platform: "MT5" },
  { id: 6, name: "Fatima A.", country: "🇦🇪 UAE", lots: 48, rebates: 960, status: "Active", tier: "Standard", joined: "Jun 2024", platform: "MT4" },
  { id: 7, name: "Carlos M.", country: "🇧🇷 Brazil", lots: 42, rebates: 840, status: "Active", tier: "Standard", joined: "Jul 2024", platform: "MT5" },
  { id: 8, name: "Yuki T.", country: "🇯🇵 Japan", lots: 38, rebates: 760, status: "Inactive", tier: "Standard", joined: "Aug 2024", platform: "MT4" },
  { id: 9, name: "David O.", country: "🇳🇬 Nigeria", lots: 35, rebates: 700, status: "Active", tier: "Standard", joined: "Sep 2024", platform: "MT5" },
  { id: 10, name: "Siti R.", country: "🇮🇩 Indonesia", lots: 29, rebates: 580, status: "Active", tier: "Standard", joined: "Oct 2024", platform: "MT4" },
];

export const RECENT_TRANSACTIONS = [
  { date: "Dec 19", amount: 1240, method: "USDT (TRC20)", status: "Paid", ref: "TX-8847291" },
  { date: "Dec 18", amount: 980, method: "USDT (TRC20)", status: "Paid", ref: "TX-8847108" },
  { date: "Dec 17", amount: 1020, method: "USDT (TRC20)", status: "Paid", ref: "TX-8846892" },
  { date: "Dec 16", amount: 1160, method: "USDT (TRC20)", status: "Paid", ref: "TX-8846643" },
  { date: "Dec 15", amount: 940, method: "USDT (TRC20)", status: "Paid", ref: "TX-8846392" },
  { date: "Dec 12", amount: 1080, method: "Bank Transfer", status: "Paid", ref: "TX-8845941" },
  { date: "Dec 11", amount: 1200, method: "Bank Transfer", status: "Paid", ref: "TX-8845712" },
];

export const TIER_DISTRIBUTION = [
  { name: "VIP", value: 4, color: "#FFD700" },
  { name: "Premium", value: 12, color: "#6366F1" },
  { name: "Standard", value: 36, color: "#A78BFA" },
];

export const CLIENT_GROWTH = [
  { month: "Jul", clients: 34 },
  { month: "Aug", clients: 38 },
  { month: "Sep", clients: 41 },
  { month: "Oct", clients: 45 },
  { month: "Nov", clients: 49 },
  { month: "Dec", clients: 52 },
];

export const REFERRAL_LINK = "https://equityib.com/ref/IBPARTNER123";
