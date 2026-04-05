import Link from "next/link";
import Image from "next/image";

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
  { label: "Menu Items", value: "190+" },
  { label: "Cuisines Represented", value: "4+" },
  { label: "Catering Options", value: "∞" },
  { label: "Years of Tradition", value: "100s" },
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
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#C8A84B]/5 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#C8A84B]/5 blur-3xl" />
        </div>

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
            Authentic South Indian cuisine in Santa Clara, CA
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#C8A84B]/50">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Pattern Border ── */}
      <div className="pattern-border" />

      {/* ── Tagline Banner ── */}
      <section className="bg-[#C8A84B] py-5 px-4 text-center">
        <p className="text-[#1E1829] font-semibold text-sm sm:text-base tracking-[0.2em] uppercase">
          Authentic · Homestyle · Soulful · South Indian Cuisine
        </p>
      </section>

      {/* ── Stats ── */}
      <section className="bg-[#1E1829] py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {highlights.map((h) => (
            <div key={h.label}>
              <p
                className="text-4xl font-bold text-[#C8A84B] mb-1"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {h.value}
              </p>
              <p className="text-xs text-gray-400 tracking-widest uppercase">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="bg-[#2A2040] py-20 px-6 text-center">
        <blockquote
          className="text-2xl sm:text-3xl lg:text-4xl text-white font-medium max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          &ldquo;People who love to eat are always the best people&rdquo;
        </blockquote>
        <p className="mt-5 text-[#C8A84B] text-sm tracking-widest uppercase">— Julia Child</p>
      </section>

      {/* ── Features ── */}
      <section className="bg-[#F8F5EE] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-[#C8A84B] tracking-widest uppercase mb-2">The Experience</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1E1829]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Why Hamaara Kitchen?
            </h2>
            <div className="gold-divider mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#C8A84B]/30 transition-all duration-200 text-center"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3
                  className="text-xl font-bold text-[#1E1829] mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="bg-[#1E1829] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-[#C8A84B] tracking-widest uppercase mb-2">Our Promise</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Real Food. Real Ingredients.
            </h2>
            <div className="gold-divider mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyPoints.map((p) => (
              <div
                key={p.label}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-[#2A2040] border border-[#C8A84B]/20 hover:border-[#C8A84B]/50 transition-colors"
              >
                <span className="text-3xl mb-3">{p.icon}</span>
                <span className="text-white text-sm font-medium leading-snug">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F8F5EE] py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1E1829] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Ready to experience the taste of India?
          </h2>
          <p className="text-gray-600 mb-8">
            Order online for pickup or dine with us at 4300 Great America Pkwy, Suite 156,
            Santa Clara.
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
      </section>
    </>
  );
}
