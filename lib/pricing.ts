// ── Multi-dimensional pricing configuration matrix ──
// NO hardcoded UI values. All prices derived from this matrix.

export type Currency = "INR" | "USD" | "EUR";
export type Billing  = "monthly" | "annual";
export type Tier     = "starter" | "pro" | "enterprise";

export const CURRENCY_SYMBOLS: Record<Currency, string> = {
  INR: "₹",
  USD: "$",
  EUR: "€",
};

// Base monthly rates in USD
const BASE_RATES_USD: Record<Tier, number> = {
  starter:    29,
  pro:        79,
  enterprise: 199,
};

// Regional tariff multipliers (convert USD base to local pricing)
const REGIONAL_TARIFFS: Record<Currency, number> = {
  USD: 1.0,
  INR: 83.5,   // approximate exchange rate multiplier
  EUR: 0.92,
};

// Annual discount: 20% off (monthly * 12 * 0.8)
const ANNUAL_DISCOUNT = 0.8;

export function computePrice(tier: Tier, currency: Currency, billing: Billing): number {
  const baseUSD = BASE_RATES_USD[tier];
  const tariff  = REGIONAL_TARIFFS[currency];
  const monthly = baseUSD * tariff;

  if (billing === "monthly") return Math.round(monthly);
  // Annual: monthly * 12 * 0.8, shown as per-month
  return Math.round(monthly * ANNUAL_DISCOUNT);
}

export function formatPrice(tier: Tier, currency: Currency, billing: Billing): string {
  const symbol = CURRENCY_SYMBOLS[currency];
  const amount = computePrice(tier, currency, billing);

  if (currency === "INR") {
    // Format Indian number system
    return symbol + amount.toLocaleString("en-IN");
  }
  return symbol + amount.toLocaleString("en-US");
}

export function annualTotal(tier: Tier, currency: Currency): string {
  const symbol  = CURRENCY_SYMBOLS[currency];
  const monthly = computePrice(tier, currency, "annual");
  const total   = monthly * 12;
  if (currency === "INR") return symbol + total.toLocaleString("en-IN");
  return symbol + total.toLocaleString("en-US");
}

export const TIER_DETAILS: Record<Tier, { name: string; tagline: string; features: string[]; highlighted?: boolean }> = {
  starter: {
    name: "Starter",
    tagline: "Perfect for small teams getting started",
    features: [
      "Up to 50k API calls/month",
      "5 data pipeline connectors",
      "Basic AI extraction",
      "Email support",
      "99.5% uptime SLA",
    ],
  },
  pro: {
    name: "Pro",
    tagline: "Built for scaling data operations",
    highlighted: true,
    features: [
      "Up to 500k API calls/month",
      "Unlimited connectors",
      "Advanced AI transformation",
      "Priority 24/7 support",
      "99.9% uptime SLA",
      "Custom webhooks",
      "Team collaboration",
    ],
  },
  enterprise: {
    name: "Enterprise",
    tagline: "For mission-critical enterprise deployments",
    features: [
      "Unlimited API calls",
      "Custom data pipelines",
      "Dedicated AI instances",
      "Dedicated success manager",
      "99.99% uptime SLA",
      "SSO & SAML",
      "Custom contracts & SLAs",
      "On-premise deployment",
    ],
  },
};
