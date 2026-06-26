import Image from "next/image";

const FOOTER_LINKS = {
  Product:  ["Features", "Pricing", "Changelog", "Roadmap", "Status"],
  Company:  ["About", "Blog", "Careers", "Press", "Contact"],
  Legal:    ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
  Resources:["Documentation", "API Reference", "Community", "Support", "Tutorials"],
};

export default function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-[rgba(217,232,226,0.08)] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" aria-label="NexusAI home" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#FFC801] flex items-center justify-center">
                <Image src="/svgs/cube-16-solid.svg" width={14} height={14} alt="" aria-hidden="true"
                  style={{ filter: "invert(0) brightness(0)" }} />
              </div>
              <span className="font-mono font-bold text-[#F1F6F4]">
                Nexus<span className="text-[#FFC801]">AI</span>
              </span>
            </a>
            <p className="text-xs text-[rgba(217,232,226,0.5)] leading-relaxed max-w-[180px]">
              The next-gen AI data automation platform for modern data teams.
            </p>
            {/* Social icons using provided SVGs */}
            <div className="flex gap-3 mt-5">
              {["/svgs/link.svg", "/svgs/arrow-trending-up.svg", "/svgs/search.svg"].map((src, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-8 h-8 rounded-lg border border-[rgba(217,232,226,0.1)] flex items-center justify-center micro hover:border-[rgba(255,200,1,0.4)]"
                >
                  <Image src={src} width={14} height={14} alt="" aria-hidden="true"
                    style={{ filter: "invert(1) brightness(1.5)" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <nav key={heading} aria-label={`${heading} links`}>
              <h3 className="font-mono font-semibold text-xs uppercase tracking-wider text-[#F1F6F4] mb-4">
                {heading}
              </h3>
              <ul role="list" className="flex flex-col gap-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-[rgba(217,232,226,0.5)] hover:text-[#D9E8E2] micro"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="pt-8 border-t border-[rgba(217,232,226,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[rgba(217,232,226,0.3)] font-mono">
            © 2026 NexusAI, Inc. All rights reserved.
          </p>
          <p className="text-xs text-[rgba(217,232,226,0.3)] font-mono">
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
