import Image from "next/image";

export default function CTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-24 px-4"
    >
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(255,200,1,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative rounded-3xl border border-[rgba(255,200,1,0.2)] bg-[rgba(17,76,90,0.3)] p-12 sm:p-16">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#FFC801] flex items-center justify-center">
              <Image
                src="/svgs/cube-16-solid.svg" width={28} height={28} alt="" aria-hidden="true"
                style={{ filter: "invert(0) brightness(0)" }}
              />
            </div>
          </div>

          <h2
            id="cta-heading"
            className="font-mono font-bold text-[#F1F6F4] mb-4"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
          >
            Ready to automate your data?
          </h2>
          <p className="text-[#D9E8E2] text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Join 10,000+ teams shipping data pipelines 10× faster. Start your 14-day free trial today — no credit card, no hidden limits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="btn-primary px-8 py-3.5 rounded-xl bg-[#FFC801] text-[#172B36] font-semibold text-base inline-flex items-center justify-center gap-2"
            >
              Start Free Trial
              <Image src="/svgs/arrow-trending-up.svg" width={18} height={18} alt="" aria-hidden="true"
                style={{ filter: "invert(0) brightness(0)" }} />
            </a>
            <a
              href="#"
              className="px-8 py-3.5 rounded-xl border border-[rgba(217,232,226,0.25)] text-[#D9E8E2] font-medium text-base micro hover:border-[rgba(255,200,1,0.4)] hover:text-[#FFC801] inline-flex items-center justify-center gap-2"
            >
              <Image src="/svgs/link.svg" width={16} height={16} alt="" aria-hidden="true"
                style={{ filter: "invert(1) brightness(2)" }} />
              Book a demo
            </a>
          </div>

          <p className="mt-6 text-xs text-[rgba(217,232,226,0.4)] font-mono">
            14-day free trial · No credit card required · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
