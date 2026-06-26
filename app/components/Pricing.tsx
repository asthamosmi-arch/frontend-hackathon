"use client";
import { useState, useCallback, memo, useMemo } from "react";
import Image from "next/image";
import { formatPrice, annualTotal, TIER_DETAILS, type Currency, type Billing, type Tier } from "@/lib/pricing";

const CURRENCIES: Currency[] = ["INR", "USD", "EUR"];
const CURRENCY_LABELS: Record<Currency, string> = { INR: "₹ INR", USD: "$ USD", EUR: "€ EUR" };
const TIERS: Tier[] = ["starter", "pro", "enterprise"];

// ── Isolated price display — only this re-renders on currency/billing change ──
const PriceDisplay = memo(function PriceDisplay({
  tier, currency, billing,
}: { tier: Tier; currency: Currency; billing: Billing }) {
  const price    = useMemo(() => formatPrice(tier, currency, billing), [tier, currency, billing]);
  const total    = useMemo(() => annualTotal(tier, currency), [tier, currency]);

  return (
    <div className="py-4">
      <div className="flex items-end gap-1">
        <span className="font-mono font-bold text-4xl text-[#F1F6F4] price-value">{price}</span>
        <span className="text-sm text-[#D9E8E2] mb-1.5">/mo</span>
      </div>
      {billing === "annual" && (
        <p className="text-xs text-[#FFC801] font-mono mt-1">
          {total} billed annually (save 20%)
        </p>
      )}
    </div>
  );
});

// ── Currency switcher — state isolated ──
const CurrencySwitcher = memo(function CurrencySwitcher({
  currency, onChange,
}: { currency: Currency; onChange: (c: Currency) => void }) {
  return (
    <div className="inline-flex items-center rounded-xl bg-[rgba(17,76,90,0.5)] border border-[rgba(217,232,226,0.1)] p-1 gap-0.5">
      {CURRENCIES.map(c => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold micro ${
            currency === c
              ? "bg-[#FFC801] text-[#172B36]"
              : "text-[#D9E8E2] hover:text-[#FFC801]"
          }`}
        >
          {CURRENCY_LABELS[c]}
        </button>
      ))}
    </div>
  );
});

// ── Billing toggle — state isolated ──
const BillingToggle = memo(function BillingToggle({
  billing, onChange,
}: { billing: Billing; onChange: (b: Billing) => void }) {
  const isAnnual = billing === "annual";
  return (
    <div className="inline-flex items-center gap-3">
      <span className={`text-sm font-medium micro ${!isAnnual ? "text-[#F1F6F4]" : "text-[#D9E8E2]"}`}>Monthly</span>
      <button
        role="switch"
        aria-checked={isAnnual}
        aria-label="Toggle annual billing"
        onClick={() => onChange(isAnnual ? "monthly" : "annual")}
        className={`relative w-12 h-6 rounded-full micro focus:outline-none focus:ring-2 focus:ring-[#FFC801] focus:ring-offset-2 focus:ring-offset-[#172B36] ${
          isAnnual ? "bg-[#FFC801]" : "bg-[rgba(217,232,226,0.2)]"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow toggle-pill ${
            isAnnual ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
      <span className={`text-sm font-medium micro ${isAnnual ? "text-[#FFC801]" : "text-[#D9E8E2]"}`}>
        Annual
        <span className="ml-1.5 text-xs px-1.5 py-0.5 rounded-full bg-[rgba(255,200,1,0.15)] text-[#FFC801] font-mono">
          −20%
        </span>
      </span>
    </div>
  );
});

// ── Main Pricing section — minimal parent re-renders ──
export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [billing,  setBilling]  = useState<Billing>("monthly");

  const handleCurrency = useCallback((c: Currency) => setCurrency(c), []);
  const handleBilling  = useCallback((b: Billing)  => setBilling(b),  []);

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="py-24 px-4 bg-[rgba(17,76,90,0.15)]"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-[#FFC801] mb-3">Pricing</p>
          <h2
            id="pricing-heading"
            className="font-mono font-bold text-[#F1F6F4]"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-[#D9E8E2] text-base">
            No hidden fees. Cancel anytime. Start free.
          </p>
        </header>

        {/* Controls — only local state, no parent reflow */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <CurrencySwitcher currency={currency} onChange={handleCurrency} />
          <BillingToggle    billing={billing}   onChange={handleBilling}  />
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map(tier => {
            const details = TIER_DETAILS[tier];
            return (
              <article
                key={tier}
                className={`relative rounded-2xl border p-8 flex flex-col micro ${
                  details.highlighted
                    ? "border-[#FFC801] bg-[rgba(255,200,1,0.06)] shadow-[0_0_60px_rgba(255,200,1,0.12)]"
                    : "border-[rgba(217,232,226,0.1)] bg-[rgba(17,76,90,0.2)] hover:border-[rgba(217,232,226,0.25)]"
                }`}
              >
                {details.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-[#FFC801] text-[#172B36] text-xs font-mono font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="font-mono font-bold text-xl text-[#F1F6F4]">{details.name}</h3>
                  <p className="text-sm text-[#D9E8E2] mt-1">{details.tagline}</p>

                  {/* ── Isolated price re-render target ── */}
                  <PriceDisplay tier={tier} currency={currency} billing={billing} />
                </div>

                <a
                  href="#"
                  className={`mt-4 mb-6 w-full block text-center py-3 rounded-xl font-semibold text-sm btn-primary ${
                    details.highlighted
                      ? "bg-[#FFC801] text-[#172B36]"
                      : "border border-[rgba(217,232,226,0.2)] text-[#F1F6F4] hover:border-[rgba(255,200,1,0.5)]"
                  }`}
                >
                  {tier === "enterprise" ? "Contact Sales" : "Get Started"}
                </a>

                <ul role="list" className="flex flex-col gap-3 mt-auto">
                  {details.features.map(feat => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-[#D9E8E2]">
                      <Image
                        src="/svgs/link-solid.svg" width={14} height={14} alt="" aria-hidden="true"
                        className="mt-0.5 flex-shrink-0"
                        style={{ filter: "invert(80%) sepia(60%) saturate(300%) hue-rotate(5deg)" }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <p className="text-center text-xs text-[rgba(217,232,226,0.4)] mt-8 font-mono">
          All prices exclude applicable taxes. Enterprise pricing available on request.
        </p>
      </div>
    </section>
  );
}
