import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | HAMAARA Indian Kitchen",
  description:
    "Learn about HAMAARA Indian Kitchen — our philosophy, our food, and why we believe real food needs no shortcuts.",
};

const philosophyPoints = [
  {
    title: "Homestyle Meals",
    description:
      "Every dish is prepared the way it would be in an Indian home — with patience, care, and the right proportions of spice and love.",
    icon: "🏠",
  },
  {
    title: "No Industrial Seed Oils",
    description:
      "We cook with coconut oil, avocado oil, butter, and ghee — never industrial seed oils. Your body will taste the difference.",
    icon: "🫒",
  },
  {
    title: "No MSG",
    description:
      "Our food gets its depth of flavor from real spices, slow cooking, and traditional techniques — not artificial enhancers.",
    icon: "🚫",
  },
  {
    title: "No Food Colors or Preservatives",
    description:
      "What you see on your plate is the natural color of the ingredients. No shortcuts, no artificial additions.",
    icon: "🌱",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section
        className="py-24 px-6 text-center"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #EDD48A 0%, #E8C87A 70%, #DEB860 100%)",
        }}
      >
        <p className="text-xs text-[#5C3A00] tracking-widest uppercase mb-3">Our Story</p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#3D1C0D] mb-4"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          About HAMAARA Kitchen
        </h1>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-12 bg-[#C8A84B]/50" />
          <div className="w-2 h-2 rounded-full bg-[#C8A84B]" />
          <div className="h-px w-12 bg-[#C8A84B]/50" />
        </div>
      </section>

      {/* ── Philosophy Intro ── */}
      <section className="bg-[#F8F5EE] py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs text-[#C8A84B] tracking-widest uppercase mb-3">
              Our Philosophy
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1E1829] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              One India, Many Cultures, One Table
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              At HAMAARA Indian Kitchen, we believe that good food is real food. India is a
              land of incredible diversity — dozens of languages, hundreds of cultures, and
              thousands of culinary traditions. Our name, <em>HAMAARA</em> (meaning
              &ldquo;ours&rdquo; in Hindi), reflects our mission: to bring all of that to
              one table.
            </p>
            <p className="text-gray-600 leading-relaxed mb-5">
              We take pride in using fresh, honest ingredients that make food taste
              infinitely better. What we eat must provide nourishment and joy while creating
              happy memories — and that starts with not cutting corners.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We strongly believe that using fresh, honest ingredients makes food taste
              infinitely better. We hope you can appreciate our efforts and taste the
              difference!
            </p>
          </div>

          {/* Decorative block */}
          <div className="relative">
            <div className="bg-[#FAF6F0] rounded-2xl p-10 text-center border border-[#3D1C0D]/20">
              <div className="text-6xl mb-6">🍱</div>
              <h3
                className="text-2xl font-bold text-[#3D1C0D] mb-4"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Our Commitment
              </h3>
              <ul className="text-[#5C3A20] text-sm space-y-3 text-left">
                {[
                  "Homestyle meals made with care",
                  "No industrial seed oils ever",
                  "No MSG or artificial enhancers",
                  "No food colors or preservatives",
                  "Fresh, locally sourced produce",
                  "Recipes passed down through generations",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#C8A84B] mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy Grid ── */}
      <section className="bg-[#FAF6F0] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-[#8B4A00] tracking-widest uppercase mb-2">
              The HAMAARA Way
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#3D1C0D]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Real Food. No Shortcuts.
            </h2>
            <div className="gold-divider mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {philosophyPoints.map((p) => (
              <div
                key={p.title}
                className="bg-[#FDF9F4] rounded-xl p-8 border border-[#3D1C0D]/20 hover:border-[#3D1C0D]/40 transition-colors"
              >
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3
                  className="text-xl font-bold text-[#3D1C0D] mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-[#5C3A20] text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / Visit ── */}
      <section className="bg-[#F8F5EE] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-[#C8A84B] tracking-widest uppercase mb-3">Come Find Us</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1E1829] mb-10"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Visit Us in Santa Clara
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-bold text-[#1E1829] mb-2">Address</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                4300 Great America Pkwy<br />
                Suite 156<br />
                Santa Clara, CA 95054
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold text-[#1E1829] mb-2">Phone</h3>
              <a
                href="tel:+14084725923"
                className="text-[#C8A84B] hover:text-[#1E1829] transition-colors text-sm font-medium"
              >
                +1 (408) 472-5923
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="font-bold text-[#1E1829] mb-2">Email</h3>
              <a
                href="mailto:hamaaraindiankitchensc@gmail.com"
                className="text-[#C8A84B] hover:text-[#1E1829] transition-colors text-sm font-medium break-all"
              >
                hamaaraindiankitchensc@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="text-3xl mb-3">📸</div>
              <h3 className="font-bold text-[#1E1829] mb-2">Instagram</h3>
              <a
                href="https://www.instagram.com/hamaara.indian.kitchen__"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8A84B] hover:text-[#1E1829] transition-colors text-sm font-medium break-all"
              >
                @hamaara.indian.kitchen__
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catering"
              className="px-8 py-4 bg-[#C8A84B] hover:bg-[#E5C96B] text-[#1E1829] font-bold text-sm tracking-widest uppercase rounded transition-colors"
            >
              Catering Inquiry
            </Link>
            <Link
              href="/menu"
              className="px-8 py-4 border-2 border-[#1E1829] hover:bg-[#FAF6F0] hover:text-white text-[#1E1829] font-bold text-sm tracking-widest uppercase rounded transition-colors"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
