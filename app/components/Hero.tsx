"use client";
import Image from "next/image";

const TRUSTED = ["Stripe", "Notion", "Figma", "Linear", "Vercel", "Supabase"];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
    >
      {/* Background orbs */}
      <div
        aria-hidden="true"
        className="hero-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-20 right-20 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(17,76,90,0.4) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-32 left-10 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(255,153,50,0.15) 0%, transparent 70%)" }}
      />

      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(255,200,1,0.3)] bg-[rgba(255,200,1,0.08)]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FFC801] animate-pulse" />
        <span className="text-xs font-mono font-medium text-[#FFC801] tracking-wide">
          NOW IN PUBLIC BETA — JOIN 10,000+ TEAMS
        </span>
      </div>

      {/* Heading */}
      <h1
        id="hero-heading"
        className="font-mono font-bold text-center max-w-4xl leading-tight"
        style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
      >
        <span className="text-[#F1F6F4]">Automate Every</span>
        <br />
        <span className="grad-text">Data Pipeline</span>
        <br />
        <span className="text-[#F1F6F4]">with AI Precision</span>
      </h1>

      <p className="mt-6 text-center max-w-2xl text-[#D9E8E2] text-lg leading-relaxed font-sans">
        NexusAI unifies extraction, transformation, and delivery across your entire data ecosystem.
        Ship 10× faster with intelligent automation that learns, adapts, and scales with your team.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
        <a
          href="#pricing"
          className="btn-primary px-8 py-3.5 rounded-xl bg-[#FFC801] text-[#172B36] font-semibold text-base inline-flex items-center gap-2"
        >
          Start Free Trial
          <Image src="/svgs/chevron-right.svg" width={18} height={18} alt="" aria-hidden="true"
            style={{ filter: "invert(0) brightness(0)" }} />
        </a>
        <a
          href="#features"
          className="px-8 py-3.5 rounded-xl border border-[rgba(217,232,226,0.3)] text-[#D9E8E2] font-medium text-base micro hover:border-[rgba(255,200,1,0.5)] hover:text-[#FFC801] inline-flex items-center gap-2"
        >
          <Image src="/svgs/arrow-trending-up.svg" width={18} height={18} alt="" aria-hidden="true"
            style={{ filter: "invert(1) brightness(2)" }} />
          See how it works
        </a>
      </div>

      {/* Stats row */}
      <div className="mt-16 grid grid-cols-3 gap-8 sm:gap-16 max-w-lg mx-auto">
        {[
          { val: "99.9%",  label: "Uptime SLA"    },
          { val: "10×",    label: "Faster Pipelines" },
          { val: "50ms",   label: "Avg Latency"   },
        ].map(({ val, label }) => (
          <div key={label} className="text-center">
            <div className="font-mono font-bold text-2xl sm:text-3xl text-[#FFC801]">{val}</div>
            <div className="text-xs text-[#D9E8E2] mt-1 font-sans">{label}</div>
          </div>
        ))}
      </div>

      {/* Trusted companies */}
      <div className="mt-20 w-full max-w-4xl mx-auto">
        <p className="text-center text-xs font-mono uppercase tracking-widest text-[rgba(217,232,226,0.5)] mb-6">
          Trusted by teams at
        </p>
        <ul role="list" className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
          {TRUSTED.map(name => (
            <li key={name}>
              <span className="font-mono font-semibold text-sm text-[rgba(217,232,226,0.4)] hover:text-[#D9E8E2] micro cursor-default select-none">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
