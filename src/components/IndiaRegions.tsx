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
    <section className="bg-[#F5EEE4] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs text-[#5C3A00] tracking-widest uppercase mb-3">
            Our Inspiration
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#3D1C0D] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            A Journey Across India
          </h2>
          <p className="text-[#5C3A20] max-w-lg mx-auto text-sm leading-relaxed">
            Every dish we serve carries the soul of a region. Hover to explore
            the culinary traditions that inspire our kitchen daily.
          </p>
          <div className="mt-6" style={{ width: 60, height: 3, background: "#5C3A00", margin: "12px auto 0" }} />
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
                    ? region.color
                    : "rgba(61,28,13,0.25)",
                background:
                  active === region.id
                    ? `${region.color}45`
                    : "rgba(255,255,255,0.15)",
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
                className="text-[#3D1C0D] font-bold text-base mb-1 relative"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {region.name}
              </h3>
              <p className="text-xs text-[#5C3A20] italic relative">
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
              ? `${activeRegion.color}90`
              : "rgba(61,28,13,0.20)",
            background: activeRegion
              ? `${activeRegion.color}30`
              : "rgba(255,255,255,0.10)",
          }}
        >
          {activeRegion ? (
            <div className="text-center w-full">
              <p
                className="text-xs tracking-widest uppercase mb-5 font-semibold"
                style={{ color: "#3D1C0D" }}
              >
                {activeRegion.name} · Signatures on Our Menu
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {activeRegion.dishes.map((dish, i) => (
                  <span
                    key={dish}
                    className="px-4 py-1.5 rounded-full text-sm text-[#3D1C0D] border"
                    style={{
                      borderColor: `${activeRegion.color}90`,
                      background: `${activeRegion.color}35`,
                      animationDelay: `${i * 60}ms`,
                    }}
                  >
                    {dish}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-[#5C3A20] text-sm italic">
              Hover a region above to explore its dishes ↑
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
