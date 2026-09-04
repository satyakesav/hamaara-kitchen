import type { Metadata } from "next";
import HappyHourCountdown from "@/components/HappyHourCountdown";

export const metadata: Metadata = {
  title: "Happy Hour | Amrutham",
  description:
    "Amrutham Vegetarian Happy Hour — 3:00 PM to 5:30 PM every day. Weekday combos at $6.99, Irani Chai $2.99, Indian Coffee $3.49. Dine-in only.",
};

const ORDER_URL =
  "https://order.spoton.com/so-hamaara-indian-kitchen/santa-clara-ca/6a187d9da86c99bc56e807fe";

const WEEKDAY_COMBOS = [
  {
    day: "Monday",
    items: "Crispy Onion Samosa (2 pcs) + Golden Punugulu (6 pcs)",
    sides: "Ginger & Coconut Chutneys",
    price: "$6.99",
  },
  {
    day: "Tuesday",
    items: "Crunchy Masala Vada (2 pcs) + Fluffy Mysore Bonda (3 pcs)",
    sides: "Tomato & Mint Relish",
    price: "$6.99",
  },
  {
    day: "Wednesday",
    items: "Potato Samosa (2 pcs) + Mirchi Bajji",
    sides: "Tamarind & Green Dips",
    price: "$6.99",
  },
  {
    day: "Thursday",
    items: "Plantain Bajji (3 pcs)",
    sides: "Peanut-Garlic Dip",
    price: "$6.99",
  },
  {
    day: "Friday",
    items: "Hot Crisp Punugulu (6 pcs) + Roasted Spicy Masala Peanuts",
    sides: "Coconut Chutney",
    price: "$6.99",
  },
];

const BEVERAGES = [
  { name: "Irani Chai", price: "$2.99", emoji: "🍵" },
  { name: "Indian Coffee", price: "$3.49", emoji: "☕" },
];

export default function HappyHourPage() {
  return (
    <div style={{ background: "#1a1008", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #1a0a00 0%, #2d1200 50%, #1a0a00 100%)",
          borderBottom: "1px solid rgba(200,168,75,0.2)",
        }}
      >
        {/* Decorative glow circles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse, #C8A84B, transparent)" }} />

        <div className="relative max-w-3xl mx-auto px-6 py-16 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
            style={{ background: "rgba(200,168,75,0.15)", borderColor: "rgba(200,168,75,0.4)", color: "#C8A84B" }}>
            ✨ Every Day · Dine-In Only
          </span>
          <h1
            className="text-5xl sm:text-6xl font-black text-white mb-2 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Happy Hour
          </h1>
          <p style={{ color: "#C8A84B" }} className="text-xl font-semibold mb-1">
            Amrutham Vegetarian Happy Hour
          </p>
          <p className="text-amber-200/60 text-base mb-10">
            3:00 PM – 5:30 PM · Dine-In Only
          </p>

          {/* Countdown */}
          <div
            className="inline-block px-8 py-6 rounded-2xl border"
            style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(12px)", borderColor: "rgba(200,168,75,0.25)" }}
          >
            <HappyHourCountdown />
          </div>
        </div>
      </section>

      {/* ── Beverages ── */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "#C8A84B" }}>
            Always Available
          </p>
          <h2
            className="text-3xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Beverages
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {BEVERAGES.map((bev) => (
            <div
              key={bev.name}
              className="flex flex-col items-center gap-3 px-10 py-8 rounded-2xl border"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(200,168,75,0.25)" }}
            >
              <span className="text-5xl">{bev.emoji}</span>
              <span className="text-white font-semibold text-lg">{bev.name}</span>
              <span
                className="text-2xl font-black"
                style={{ color: "#C8A84B" }}
              >
                {bev.price}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(200,168,75,0.4), transparent)" }} />
      </div>

      {/* ── Weekday Combos ── */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "#C8A84B" }}>
            Mon – Fri · $6.99 each
          </p>
          <h2
            className="text-3xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Weekday Combos
          </h2>
          <p className="text-amber-200/50 text-sm mt-2">A different special every weekday</p>
        </div>

        <div className="flex flex-col gap-4">
          {WEEKDAY_COMBOS.map((combo) => (
            <div
              key={combo.day}
              className="flex items-start gap-5 px-6 py-5 rounded-2xl border transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(200,168,75,0.2)" }}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3
                    className="font-bold text-lg uppercase tracking-wider"
                    style={{ color: "#C8A84B" }}
                  >
                    {combo.day}
                  </h3>
                  <span className="font-black text-white text-lg flex-shrink-0">{combo.price}</span>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">{combo.items}</p>
                <p className="text-amber-200/50 text-xs mt-1">{combo.sides}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-amber-200/40 text-xs uppercase tracking-widest mt-8">
          Every Day · 3:00 PM – 5:30 PM · Dine-In Only
        </p>
      </section>

      {/* ── Footer CTA ── */}
      <section
        className="py-10 text-center border-t"
        style={{ borderColor: "rgba(200,168,75,0.2)" }}
      >
        <p className="text-amber-200/60 text-sm mb-4 uppercase tracking-widest font-semibold">
          Want to order ahead?
        </p>
        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-colors duration-200"
          style={{ background: "#C8A84B", color: "#1a0a00" }}
        >
          Order Online →
        </a>
      </section>
    </div>
  );
}
