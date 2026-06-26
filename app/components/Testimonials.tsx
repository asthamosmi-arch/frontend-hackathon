import Image from "next/image";

const TESTIMONIALS = [
  {
    quote:
      "NexusAI cut our data pipeline engineering time by 70%. What used to take our team a week now ships in an afternoon. The auto-healing feature alone saved us 3 outages last quarter.",
    name: "Priya Sharma",
    role: "VP of Data Engineering",
    company: "FinStack",
    initials: "PS",
    accent: "#FFC801",
  },
  {
    quote:
      "We evaluated six platforms and NexusAI was the only one that could handle our 500M daily events without choking. The semantic search layer is genuinely game-changing for our analysts.",
    name: "Marcus Chen",
    role: "CTO",
    company: "ScaleOps",
    initials: "MC",
    accent: "#FF9932",
  },
  {
    quote:
      "The multi-currency pricing was a huge factor — we're a global team and paying in INR with annual billing saved us nearly 25% vs the competition. Support is exceptional.",
    name: "Ananya Patel",
    role: "Head of Platform",
    company: "Growthly",
    initials: "AP",
    accent: "#114C5A",
  },
  {
    quote:
      "We migrated from a legacy ETL stack in 2 days. The universal connectors made it seamless and the observability dashboard gave us confidence on day one.",
    name: "David Kim",
    role: "Senior Data Architect",
    company: "Synthex",
    initials: "DK",
    accent: "#FFC801",
  },
  {
    quote:
      "Real-time transformation at this scale is unheard of. We're processing IoT streams from 80k devices and latency has never dipped below our SLA. Remarkable engineering.",
    name: "Sofia Rossi",
    role: "Principal Engineer",
    company: "IotFlow",
    initials: "SR",
    accent: "#FF9932",
  },
  {
    quote:
      "The Bento dashboard for monitoring our pipelines is genuinely beautiful. Every tool we tried before felt like a spreadsheet. NexusAI feels like a product from 2030.",
    name: "Rohan Mehta",
    role: "Founding Engineer",
    company: "DataPulse",
    initials: "RM",
    accent: "#FFC801",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-24 px-4 max-w-7xl mx-auto"
    >
      <header className="text-center mb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-[#FFC801] mb-3">
          Social Proof
        </p>
        <h2
          id="testimonials-heading"
          className="font-mono font-bold text-[#F1F6F4]"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          Loved by data teams worldwide
        </h2>
      </header>

      <ul role="list" className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {TESTIMONIALS.map(t => (
          <li key={t.name} className="break-inside-avoid">
            <article className="testimonial-card rounded-2xl border border-[rgba(217,232,226,0.1)] bg-[rgba(17,76,90,0.25)] p-6">
              {/* Stars */}
              <div aria-label="5 stars" className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} aria-hidden="true" className="text-[#FFC801] text-sm">★</span>
                ))}
              </div>

              <blockquote>
                <p className="text-sm text-[#D9E8E2] leading-relaxed mb-5">{t.quote}</p>
              </blockquote>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-mono font-bold text-xs text-[#172B36] flex-shrink-0"
                  style={{ backgroundColor: t.accent }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-sm text-[#F1F6F4] font-mono">
                    {t.name}
                  </cite>
                  <p className="text-xs text-[#D9E8E2]">{t.role} · {t.company}</p>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
