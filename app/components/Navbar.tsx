"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Features",    href: "#features"     },
  { label: "Pricing",     href: "#pricing"      },
  { label: "Testimonials",href: "#testimonials" },
  { label: "FAQ",         href: "#faq"          },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 navbar-blur transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(23,43,54,0.92)] border-b border-[rgba(255,200,1,0.12)] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
      >
        {/* Logo */}
        <a href="#" aria-label="NexusAI home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-[#FFC801] flex items-center justify-center micro group-hover:scale-110">
            <Image src="/svgs/cube-16-solid.svg" width={18} height={18} alt="" aria-hidden="true"
              style={{ filter: "invert(1) brightness(0)" }} />
          </div>
          <span className="font-mono font-bold text-lg text-[#F1F6F4] tracking-tight">
            Nexus<span className="text-[#FFC801]">AI</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul role="list" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-medium text-[#D9E8E2] hover:text-[#FFC801] micro relative group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#FFC801] group-hover:w-full micro" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="text-sm font-medium text-[#D9E8E2] hover:text-[#FFC801] micro">
            Sign in
          </a>
          <a
            href="#pricing"
            className="btn-primary px-4 py-2 rounded-lg bg-[#FFC801] text-[#172B36] text-sm font-semibold"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="md:hidden p-2 rounded-lg hover:bg-[rgba(255,200,1,0.1)] micro"
          onClick={() => setMenuOpen(o => !o)}
        >
          <Image
            src={menuOpen ? "/svgs/x-mark.svg" : "/svgs/cog-8-tooth.svg"}
            width={22} height={22} alt=""
            style={{ filter: "invert(1) brightness(2)" }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden reflow overflow-hidden ${menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[rgba(23,43,54,0.96)] border-b border-[rgba(255,200,1,0.12)] px-4 pb-4 pt-2">
          <ul role="list" className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-[#D9E8E2] hover:text-[#FFC801] hover:bg-[rgba(255,200,1,0.08)] micro"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#pricing"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-4 py-2 rounded-lg bg-[#FFC801] text-[#172B36] text-sm font-semibold btn-primary"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
