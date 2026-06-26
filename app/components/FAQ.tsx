"use client";
import { useState, useCallback } from "react";
import Image from "next/image";

const FAQS = [
  {
    q: "How does NexusAI's pricing matrix work?",
    a: "Our pricing is computed from a multi-dimensional configuration matrix that factors your chosen tier's base rate, your regional tariff variable, and your billing cycle. Annual billing applies a flat 20% discount (monthly × 12 × 0.8). No hardcoded values — everything is dynamically derived.",
  },
  {
    q: "Can I switch between currencies mid-subscription?",
    a: "Yes. You can update your billing currency at renewal. The new rate will be computed from our matrix using the current tariff for your region. Your pro-rated credit will be converted accordingly.",
  },
  {
    q: "What counts as an API call?",
    a: "Each discrete read, write, or transformation operation on your pipeline counts as one API call. Batch operations count as one call per batch regardless of record count. We provide real-time visibility into your usage in the observability dashboard.",
  },
  {
    q: "Is there a free trial?",
    a: "All plans include a 14-day free trial with no credit card required. You get full access to Pro tier features during the trial period so you can evaluate the platform with your real workloads.",
  },
  {
    q: "How does auto-healing work?",
    a: "NexusAI continuously monitors schema versions, connector health, and upstream data quality. When drift or failure is detected, the system automatically applies remediation logic — re-mapping fields, switching to fallback connectors, or pausing ingestion to queue retries. You're alerted in real-time and can review every auto-heal action in the audit log.",
  },
  {
    q: "Do you offer on-premise deployment?",
    a: "On-premise and VPC deployment is available on Enterprise plans. We support Kubernetes-based self-hosted deployments with the same feature parity as the cloud version. Contact our sales team for architecture review and pricing.",
  },
  {
    q: "What SLA guarantees do you offer?",
    a: "Starter plans include 99.5% uptime SLA, Pro includes 99.9%, and Enterprise includes 99.99% with dedicated infrastructure. SLA violations trigger automatic service credits. Historical uptime data is publicly available on our status page.",
  },
  {
    q: "How do I migrate from my existing ETL tool?",
    a: "We provide a guided migration toolkit, pre-built connector templates, and a dedicated migration engineer for Pro and Enterprise customers. Most teams complete migration in under 48 hours. We support Airflow, dbt, Fivetran, Stitch, and most other common ETL stack exports.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const toggle = useCallback((i: number) => {
    setOpenIndex(prev => (prev === i ? -1 : i));
  }, []);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-24 px-4 bg-[rgba(17,76,90,0.1)]"
    >
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-[#FFC801] mb-3">FAQ</p>
          <h2
            id="faq-heading"
            className="font-mono font-bold text-[#F1F6F4]"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Frequently asked questions
          </h2>
        </header>

        <dl>
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`faq-item border rounded-xl mb-3 overflow-hidden ${
                  isOpen
                    ? "border-[rgba(255,200,1,0.4)] bg-[rgba(17,76,90,0.3)]"
                    : "border-[rgba(217,232,226,0.1)] bg-[rgba(17,76,90,0.15)]"
                }`}
              >
                <dt>
                  <button
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                  >
                    <span className={`font-semibold text-sm leading-snug micro ${isOpen ? "text-[#FFC801]" : "text-[#F1F6F4]"}`}>
                      {item.q}
                    </span>
                    <Image
                      src={isOpen ? "/svgs/chevron-up.svg" : "/svgs/chevron-down.svg"}
                      width={18} height={18} alt="" aria-hidden="true"
                      style={{
                        filter: isOpen
                          ? "invert(80%) sepia(80%) saturate(400%) hue-rotate(5deg)"
                          : "invert(1) brightness(1.5)",
                        flexShrink: 0,
                      }}
                    />
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  aria-labelledby={`faq-question-${i}`}
                  className={`accordion-panel ${isOpen ? "open" : ""}`}
                >
                  <div className="accordion-inner px-6 pb-5">
                    <p className="text-sm text-[#D9E8E2] leading-relaxed">{item.a}</p>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
