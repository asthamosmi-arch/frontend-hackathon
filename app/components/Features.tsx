"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const FEATURES = [
  {
    id: 0,
    icon: "/svgs/arrow-trending-up.svg",
    title: "Intelligent Extraction",
    description:
      "Our AI models parse structured and unstructured data from 200+ sources — APIs, PDFs, databases, and web streams — with 99.7% accuracy out of the box.",
    tag: "AI-Powered",
    size: "large",
  },
  {
    id: 1,
    icon: "/svgs/arrow-path.svg",
    title: "Real-Time Transformation",
    description:
      "Apply complex business rules, normalization, and enrichment logic at ingestion time. NexusAI transforms millions of records per second without batching delays.",
    tag: "Performance",
    size: "medium",
  },
  {
    id: 2,
    icon: "/svgs/link-solid.svg",
    title: "Universal Connectors",
    description:
      "Pre-built integrations for every modern data stack. Ship data anywhere in minutes.",
    tag: "Integrations",
    size: "small",
  },
  {
    id: 3,
    icon: "/svgs/chart-pie.svg",
    title: "Observability Dashboard",
    description:
      "Full pipeline visibility with live metrics, anomaly detection, and automated alerting.",
    tag: "Monitoring",
    size: "small",
  },
  {
    id: 4,
    icon: "/svgs/cog-8-tooth.svg",
    title: "Auto-Healing Pipelines",
    description:
      "NexusAI detects schema drift, failed connectors, and upstream changes — then self-heals or routes to fallback logic automatically. Zero manual intervention required.",
    tag: "Reliability",
    size: "medium",
  },
  {
    id: 5,
    icon: "/svgs/search.svg",
    title: "Semantic Search Layer",
    description:
      "Query your entire data estate with natural language. Powered by vector embeddings across all connected sources.",
    tag: "Discovery",
    size: "medium",
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile]       = useState<boolean>(false);
  const lastDesktopActive             = useRef<number>(0);

  // Detect breakpoint & transfer active state on resize
  const checkBreakpoint = useCallback(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(prev => {
      if (prev !== mobile) {
        // On transition desktop→mobile: carry over last desktop active index
        if (mobile) setActiveIndex(lastDesktopActive.current);
      }
      return mobile;
    });
  }, []);

  useEffect(() => {
    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, [checkBreakpoint]);

  const handleDesktopHover = useCallback((id: number) => {
    lastDesktopActive.current = id;
    setActiveIndex(id);
  }, []);

  const handleAccordionToggle = useCallback((id: number) => {
    setActiveIndex(prev => (prev === id ? -1 : id));
  }, []);

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="py-24 px-4 max-w-7xl mx-auto"
    >
      <header className="text-center mb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-[#FFC801] mb-3">
          Platform Features
        </p>
        <h2
          id="features-heading"
          className="font-mono font-bold text-[#F1F6F4] leading-tight"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          Everything your data team needs
        </h2>
        <p className="mt-4 text-[#D9E8E2] text-base max-w-xl mx-auto">
          A complete platform engineered for reliability, speed, and intelligence at every layer of your data stack.
        </p>
      </header>

      {/* ── DESKTOP: Bento Grid ── */}
      {!isMobile && (
        <div
          role="list"
          className="grid grid-cols-3 grid-rows-2 gap-4"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          {/* Large card spans 2 cols */}
          <article
            role="listitem"
            className={`bento-card col-span-2 row-span-1 rounded-2xl border border-[rgba(217,232,226,0.1)] bg-[rgba(17,76,90,0.25)] p-8 cursor-pointer ${activeIndex === 0 ? "active" : ""}`}
            onMouseEnter={() => handleDesktopHover(0)}
          >
            <BentoContent feature={FEATURES[0]} active={activeIndex === 0} />
          </article>

          {/* Right column top */}
          <article
            role="listitem"
            className={`bento-card rounded-2xl border border-[rgba(217,232,226,0.1)] bg-[rgba(17,76,90,0.25)] p-6 cursor-pointer ${activeIndex === 2 ? "active" : ""}`}
            onMouseEnter={() => handleDesktopHover(2)}
          >
            <BentoContent feature={FEATURES[2]} active={activeIndex === 2} />
          </article>

          {/* Bottom left */}
          <article
            role="listitem"
            className={`bento-card rounded-2xl border border-[rgba(217,232,226,0.1)] bg-[rgba(17,76,90,0.25)] p-6 cursor-pointer ${activeIndex === 1 ? "active" : ""}`}
            onMouseEnter={() => handleDesktopHover(1)}
          >
            <BentoContent feature={FEATURES[1]} active={activeIndex === 1} />
          </article>

          {/* Bottom mid */}
          <article
            role="listitem"
            className={`bento-card rounded-2xl border border-[rgba(217,232,226,0.1)] bg-[rgba(17,76,90,0.25)] p-6 cursor-pointer ${activeIndex === 3 ? "active" : ""}`}
            onMouseEnter={() => handleDesktopHover(3)}
          >
            <BentoContent feature={FEATURES[3]} active={activeIndex === 3} />
          </article>

          {/* Bottom right spans vertically from row 1 */}
          <article
            role="listitem"
            className={`bento-card rounded-2xl border border-[rgba(217,232,226,0.1)] bg-[rgba(17,76,90,0.25)] p-6 cursor-pointer ${activeIndex === 4 ? "active" : ""}`}
            onMouseEnter={() => handleDesktopHover(4)}
          >
            <BentoContent feature={FEATURES[4]} active={activeIndex === 4} />
          </article>

          {/* Extra row */}
          <article
            role="listitem"
            className={`bento-card col-span-3 rounded-2xl border border-[rgba(217,232,226,0.1)] bg-[rgba(17,76,90,0.25)] p-6 cursor-pointer ${activeIndex === 5 ? "active" : ""}`}
            onMouseEnter={() => handleDesktopHover(5)}
          >
            <BentoContent feature={FEATURES[5]} active={activeIndex === 5} horizontal />
          </article>
        </div>
      )}

      {/* ── MOBILE: Accordion ── */}
      {isMobile && (
        <div role="list" className="flex flex-col gap-3">
          {FEATURES.map((feature) => {
            const isOpen = activeIndex === feature.id;
            return (
              <article key={feature.id} role="listitem">
                <div
                  className={`rounded-2xl border overflow-hidden reflow ${
                    isOpen
                      ? "border-[rgba(255,200,1,0.5)] bg-[rgba(17,76,90,0.4)]"
                      : "border-[rgba(217,232,226,0.1)] bg-[rgba(17,76,90,0.2)]"
                  }`}
                >
                  <button
                    aria-expanded={isOpen}
                    aria-controls={`feature-panel-${feature.id}`}
                    onClick={() => handleAccordionToggle(feature.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center micro ${isOpen ? "bg-[#FFC801]" : "bg-[rgba(255,200,1,0.15)]"}`}>
                        <Image
                          src={feature.icon} width={18} height={18} alt=""
                          style={{ filter: isOpen ? "invert(0) brightness(0)" : "invert(1) brightness(2)" }}
                        />
                      </div>
                      <span className={`font-semibold text-sm micro ${isOpen ? "text-[#FFC801]" : "text-[#F1F6F4]"}`}>
                        {feature.title}
                      </span>
                    </div>
                    <Image
                      src={isOpen ? "/svgs/chevron-up.svg" : "/svgs/chevron-down.svg"}
                      width={18} height={18} alt="" aria-hidden="true"
                      style={{ filter: isOpen ? "invert(80%) sepia(80%) saturate(400%) hue-rotate(5deg)" : "invert(1) brightness(1.5)", flexShrink: 0 }}
                    />
                  </button>

                  <div
                    id={`feature-panel-${feature.id}`}
                    className={`accordion-panel ${isOpen ? "open" : ""}`}
                  >
                    <div className="accordion-inner px-5 pb-5">
                      <span className="inline-block px-2 py-0.5 text-xs font-mono font-medium rounded-full bg-[rgba(255,200,1,0.15)] text-[#FFC801] mb-3">
                        {feature.tag}
                      </span>
                      <p className="text-sm text-[#D9E8E2] leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

function BentoContent({
  feature,
  active,
  horizontal = false,
}: {
  feature: (typeof FEATURES)[0];
  active: boolean;
  horizontal?: boolean;
}) {
  return (
    <div className={horizontal ? "flex items-center gap-8" : "flex flex-col h-full"}>
      <div className={`flex items-start gap-3 ${horizontal ? "flex-shrink-0" : "mb-4"}`}>
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center micro ${
            active ? "bg-[#FFC801]" : "bg-[rgba(255,200,1,0.15)]"
          }`}
        >
          <Image
            src={feature.icon} width={20} height={20} alt="" aria-hidden="true"
            style={{ filter: active ? "invert(0) brightness(0)" : "invert(1) brightness(2)" }}
          />
        </div>
        <span className="inline-block mt-1.5 px-2 py-0.5 text-xs font-mono rounded-full bg-[rgba(255,200,1,0.12)] text-[#FFC801]">
          {feature.tag}
        </span>
      </div>
      <div className={horizontal ? "flex-1" : ""}>
        <h3 className="font-mono font-semibold text-[#F1F6F4] text-lg mb-2">{feature.title}</h3>
        <p className="text-sm text-[#D9E8E2] leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
}
