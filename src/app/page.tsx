import Link from "next/link";
import Image from "next/image";
import SpiceParticles from "@/components/SpiceParticles";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import TiltCard from "@/components/TiltCard";
import IndiaRegions from "@/components/IndiaRegions";

const ORDER_URL =
  "https://order.spoton.com/so-balaji-mess-22212/santa-clara-ca/689e33ea11d9483dbf574212";

const features = [
  {
    title: "A La Carte Menu",
    description:
      "190+ dishes spanning tiffins, dosas, curries, biryanis, and more — each crafted with care and authentic spices.",
    icon: "🍛",
  },
  {
    title: "Everyday Specials",
    description:
      "We bring new dishes every day using seasonal vegetables and locally sourced produce. Every visit is a new experience.",
    icon: "✨",
  },
  {
    title: "No Shortcuts",
    description:
      "No industrial seed oils, no MSG, no artificial preservatives or food dyes. Real food cooked the right way.",
    icon: "🌿",
  },
];

const philosophyPoints = [
  { label: "Homestyle Cooking", icon: "🏠" },
  { label: "No Industrial Seed Oils", icon: "🫒" },
  { label: "No MSG", icon: "🚫" },
  { label: "No Food Colors or Preservatives", icon: "🌱" },
];

const highlights = [
  { label: "Menu Items", target: 190, suffix: "+", value: "190+" },
  { label: "Cuisines Represented", target: 4, suffix: "+", value: "4+" },
  { label: "Catering Options", target: null, value: "∞" },
  { label: "Years of Tradition", target: null, value: "100s" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-6"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #2A2040 0%, #1E1829 60%, #141220 100%)",
        }}
      >
        {/* Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#C8A84B]/5 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#C8A84B]/5 blur-3xl" />
        </div>

        {/* Rotating Mandala — outer ring */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden
        >
          <svg
            viewBox="0 0 400 400"
            className="w-[min(90vw,680px)] h-[min(90vw,680px)] opacity-[0.055]"
            style={{ animation: "mandalaSpin 90s linear infinite" }}
          >
            {/* Outer petal ring */}
            {Array.from({ length: 16 }).map((_, i) => (
              <ellipse
                key={i}
                cx="200"
                cy="200"
                rx="14"
                ry="55"
                fill="none"
                stroke="#C8A84B"
                strokeWidth="1"
                transform={`rotate(${i * 22.5} 200 200) translate(0 -120)`}
              />
            ))}
            {/* Middle ring */}
            {Array.from({ length: 12 }).map((_, i) => (
              <ellipse
                key={i}
                cx="200"
                cy="200"
                rx="10"
                ry="36"
                fill="none"
                stroke="#C8A84B"
                strokeWidth="0.8"
                transform={`rotate(${i * 30} 200 200) translate(0 -78)`}
              />
            ))}
            {/* Inner hex */}
            {Array.from({ length: 6 }).map((_, i) => (
              <line
                key={i}
                x1="200"
                y1="170"
                x2="200"
                y2="230"
                stroke="#C8A84B"
                strokeWidth="0.8"
                transform={`rotate(${i * 60} 200 200)`}
              />
            ))}
            <circle cx="200" cy="200" r="18" fill="none" stroke="#C8A84B" strokeWidth="1" />
            <circle cx="200" cy="200" r="80" fill="none" stroke="#C8A84B" strokeWidth="0.5" strokeDasharray="4 6" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="#C8A84B" strokeWidth="0.5" strokeDasharray="2 8" />
            <circle cx="200" cy="200" r="190" fill="none" stroke="#C8A84B" strokeWidth="0.4" strokeDasharray="1 10" />
          </svg>

          {/* Counter-rotating inner mandala */}
          <svg
            viewBox="0 0 200 200"
            className="absolute w-[min(40vw,320px)] h-[min(40vw,320px)] opacity-[0.04]"
            style={{ animation: "mandalaSpinReverse 60s linear infinite" }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <ellipse
                key={i}
                cx="100"
                cy="100"
                rx="8"
                ry="32"
                fill="none"
                stroke="#E5C96B"
                strokeWidth="1"
                transform={`rotate(${i * 45} 100 100) translate(0 -50)`}
              />
            ))}
            <circle cx="100" cy="100" r="12" fill="none" stroke="#E5C96B" strokeWidth="1.2" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="#E5C96B" strokeWidth="0.6" strokeDasharray="3 5" />
          </svg>
        </div>

        {/* Floating spice particles */}
        <SpiceParticles />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo.png"
              alt="Hamaara Indian Kitchen"
              width={160}
              height={160}
              className="drop-shadow-2xl"
              priority
            />
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#C8A84B] mb-3 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Hamaara
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 tracking-[0.25em] uppercase mb-6">
            Indian Kitchen
          </p>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-[#C8A84B]/50" />
            <div className="w-2 h-2 rounded-full bg-[#C8A84B]" />
            <div className="h-px w-16 bg-[#C8A84B]/50" />
          </div>

          <p
            className="text-2xl sm:text-3xl text-white mb-3"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            One India, Many Cultures, One Table
          </p>
          <p className="text-gray-400 mb-10 text-lg">
            A culinary journey across India, right here in Santa Clara, CA
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#C8A84B] hover:bg-[#E5C96B] text-[#1E1829] font-bold text-sm tracking-widest uppercase rounded transition-colors duration-200 shadow-lg"
            >
              Order Online
            </a>
            <Link
              href="/menu"
              className="px-8 py-4 border border-[#C8A84B]/60 hover:border-[#C8A84B] text-[#C8A84B] hover:bg-[#C8A84B]/10 font-bold text-sm tracking-widest uppercase rounded transition-colors duration-200"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── Tagline Banner (Marquee) ── */}
      <section className="bg-[#C8A84B] py-4 overflow-hidden">
        <div className="marquee-track select-none" aria-hidden>
          {[...Array(2)].map((_, pass) => (
            <span key={pass} className="flex items-center gap-0">
              {[
                "Authentic",
                "Homestyle",
                "Soulful",
                "Indian Cuisine",
                "No Seed Oils",
                "No MSG",
                "190+ Dishes",
                "Four Regional Cuisines",
                "Santa Clara, CA",
              ].map((word) => (
                <span
                  key={word}
                  className="flex items-center text-[#1E1829] font-semibold text-sm tracking-[0.18em] uppercase whitespace-nowrap"
                >
                  {word}
                  <span className="mx-6 text-[#1E1829]/40 text-xs">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#1E1829] py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {highlights.map((h, i) => (
            <ScrollReveal key={h.label} delay={i * 120}>
              <p
                className="text-4xl font-bold text-[#C8A84B] mb-1"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {h.target !== null ? (
                  <AnimatedCounter target={h.target} suffix={h.suffix} />
                ) : (
                  h.value
                )}
              </p>
              <p className="text-xs text-gray-400 tracking-widest uppercase">
                {h.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="bg-[#2A2040] py-20 px-6 text-center">
        <ScrollReveal>
          <blockquote
            className="text-2xl sm:text-3xl lg:text-4xl text-white font-medium max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            &ldquo;People who love to eat are always the best people&rdquo;
          </blockquote>
          <p className="mt-5 text-[#C8A84B] text-sm tracking-widest uppercase">
            — Julia Child
          </p>
        </ScrollReveal>
      </section>

      {/* ── India Regions ── */}
      <IndiaRegions />

      {/* ── Philosophy ── */}
      <section className="bg-[#1E1829] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs text-[#C8A84B] tracking-widest uppercase mb-2">
                Our Promise
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Real Food. Real Ingredients.
              </h2>
              <div className="gold-divider mt-4" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyPoints.map((p, i) => (
              <ScrollReveal key={p.label} delay={i * 100}>
                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-[#2A2040] border border-[#C8A84B]/20 hover:border-[#C8A84B]/50 transition-colors">
                  <span className="text-3xl mb-3">{p.icon}</span>
                  <span className="text-white text-sm font-medium leading-snug">
                    {p.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F8F5EE] py-20 px-6 text-center">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1E1829] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Ready to experience the taste of India?
            </h2>
            <p className="text-gray-600 mb-8">
              Order online for pickup or dine with us at 4300 Great America
              Pkwy, Suite 156, Santa Clara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#C8A84B] hover:bg-[#E5C96B] text-[#1E1829] font-bold text-sm tracking-widest uppercase rounded transition-colors duration-200 shadow"
              >
                Order Online
              </a>
              <Link
                href="/catering"
                className="px-8 py-4 border-2 border-[#1E1829] hover:bg-[#1E1829] hover:text-white text-[#1E1829] font-bold text-sm tracking-widest uppercase rounded transition-colors duration-200"
              >
                Catering Inquiry
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
