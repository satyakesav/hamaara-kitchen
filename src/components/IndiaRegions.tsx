"use client";
import { useState } from "react";

const regions = [
  {
    id: "north",
    name: "North India",
    emoji: "🏔️",
    color: "#E8936A",
    dishes: ["Biryani", "Butter Chicken", "Dal Makhani", "Naan", "Kebabs", "Lassi"],
    description: "Mughal-inspired richness",
  },
  {
    id: "south",
    name: "South India",
    emoji: "🌴",
    color: "#6BAA75",
    dishes: ["Masala Dosa", "Idli Sambar", "Rasam", "Chettinad Curry", "Upma", "Vada"],
    description: "Coastal flavors & spice",
  },
  {
    id: "west",
    name: "West India",
    emoji: "🏜️",
    color: "#C8A84B",
    dishes: ["Pav Bhaji", "Dhokla", "Thepla", "Kadhi", "Poha"],
    description: "Street food royalty",
  },
  {
    id: "east",
    name: "East India",
    emoji: "🎋",
    color: "#6AAAE8",
    dishes: ["Fish Curry", "Cholar Dal", "Aloo Posto", "Mishti Doi"],
    description: "Subtle, delicate spicing",
  },
];

export default function IndiaRegions() {
  const [active, setActive] = useState<string | null>(null);
  const activeRegion = regions.find((r) => r.id === active);

  return (
    <section className="bg-[#141220] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs text-[#C8A84B] tracking-widest uppercase mb-3">
            Our Inspiration
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            A Journey Across India
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
            Every dish we serve carries the soul of a region. Hover to explore
            the culinary traditions that inspire our kitchen daily.
          </p>
          <div className="gold-divider mt-6" />
        </div>

        {/* Region cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {regions.map((region) => (
            <button
              key={region.id}
              onMouseEnter={() => setActive(region.id)}
              onMouseLeave={() => setActive(null)}
              className="group relative rounded-2xl p-5 border text-left overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                borderColor:
                  active === region.id
                    ? `${region.color}60`
                    : "rgba(255,255,255,0.08)",
                background:
                  active === region.id
                    ? `${region.color}12`
                    : "rgba(255,255,255,0.02)",
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${region.color}18 0%, transparent 70%)`,
                }}
              />
              <span className="text-3xl block mb-3 relative">{region.emoji}</span>
              <h3
                className="text-white font-bold text-base mb-1 relative"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {region.name}
              </h3>
              <p className="text-xs text-gray-500 italic relative">
                {region.description}
              </p>
              {/* Bottom accent bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300"
                style={{
                  background: region.color,
                  opacity: active === region.id ? 1 : 0,
                  transform: active === region.id ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </button>
          ))}
        </div>

        {/* Dish reveal panel */}
        <div
          className="rounded-2xl border p-8 min-h-[120px] flex items-center justify-center transition-all duration-500"
          style={{
            borderColor: activeRegion
              ? `${activeRegion.color}35`
              : "rgba(255,255,255,0.06)",
            background: activeRegion
              ? `${activeRegion.color}08`
              : "rgba(255,255,255,0.02)",
          }}
        >
          {activeRegion ? (
            <div className="text-center w-full">
              <p
                className="text-xs tracking-widest uppercase mb-5 font-semibold"
                style={{ color: activeRegion.color }}
              >
                {activeRegion.name} · Signatures on Our Menu
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {activeRegion.dishes.map((dish, i) => (
                  <span
                    key={dish}
                    className="px-4 py-1.5 rounded-full text-sm text-white border"
                    style={{
                      borderColor: `${activeRegion.color}40`,
                      background: `${activeRegion.color}18`,
                      animationDelay: `${i * 60}ms`,
                    }}
                  >
                    {dish}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-600 text-sm italic">
              Hover a region above to explore its dishes ↑
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
