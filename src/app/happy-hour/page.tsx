import Image from "next/image";
import HappyHourCountdown from "@/components/HappyHourCountdown";

// ── Types ──────────────────────────────────────────────────────────────────
interface MenuItem {
  name: string;
  subcategory: string;
  image: string | null;
  isVeg: boolean;
}

interface MenuSection {
  category: string;
  subcategories: Record<string, MenuItem[]>;
}

// ── Emoji fallbacks ────────────────────────────────────────────────────────
const EMOJI_MAP: Record<string, string> = {
  "mysore bonda": "🫓",
  "onion pakoda": "🧅",
  "mirchi bajji": "🌶️",
  "pungulu": "🫓",
  "samosas (onion/potato)": "🥟",
  "vazhakkai bajji": "🍌",
  "egg bonda": "🥚",
  "spinach pakora": "🥬",
  "soya pakora": "🫘",
  "challa baji": "🧆",
  "filter coffee": "☕",
  "masala tea": "🍵",
  "ginger tea": "🍵",
  "fruit juices": "🍹",
};

function getEmoji(name: string): string {
  return EMOJI_MAP[name.toLowerCase()] ?? "🍽️";
}

// ── Menu data (update by asking Claude to sync from the sheet) ─────────────
const MENU: MenuSection[] = [
  {
    category: "Appetizers",
    subcategories: {
      Vegetarian: [
        { name: "Mysore Bonda",     subcategory: "Vegetarian", image: null,              isVeg: true  },
        { name: "Veg Momos",        subcategory: "Vegetarian", image: "momos.jpg",        isVeg: true  },
        { name: "Masala vada",      subcategory: "Vegetarian", image: "vada.jpg",         isVeg: true  },
        { name: "Onion Pakoda",     subcategory: "Vegetarian", image: null,              isVeg: true  },
        { name: "Mirchi Bajji",     subcategory: "Vegetarian", image: null,              isVeg: true  },
        { name: "Pungulu",          subcategory: "Vegetarian", image: null,              isVeg: true  },
        { name: "Samosas (Onion/Potato)", subcategory: "Vegetarian", image: null,         isVeg: true  },
        { name: "Vazhakkai Bajji",  subcategory: "Vegetarian", image: null,              isVeg: true  },
        { name: "Egg Bonda",        subcategory: "Vegetarian", image: null,              isVeg: false },
        { name: "Spinach Pakora",   subcategory: "Vegetarian", image: null,              isVeg: true  },
        { name: "Soya Pakora",      subcategory: "Vegetarian", image: null,              isVeg: true  },
        { name: "Challa baji",      subcategory: "Vegetarian", image: null,              isVeg: true  },
      ],
      "Non-Veg": [
        { name: "Egg Puff",         subcategory: "Non-Veg", image: "eggpuff.jpg",        isVeg: false },
        { name: "Chicken Puff",     subcategory: "Non-Veg", image: "chickenpuff.jpg",    isVeg: false },
        { name: "Chicken Pakora",   subcategory: "Non-Veg", image: "chickenpakora.jpg",  isVeg: false },
      ],
    },
  },
  {
    category: "Beverages",
    subcategories: {
      Hot: [
        { name: "South Indian Filter Coffee", subcategory: "Hot", image: "tea.jpg", isVeg: true },
        { name: "Masala Tea",    subcategory: "Hot", image: "tea.jpg",   isVeg: true },
        { name: "Ginger Tea",    subcategory: "Hot", image: "tea.jpg",   isVeg: true },
      ],
      Cold: [
        { name: "Fruit Juices", subcategory: "Cold", image: "juice.jpg",    isVeg: true },
        { name: "Rose Milk",    subcategory: "Cold", image: "rosemilk.jpg", isVeg: true },
        { name: "Mango Lassi",  subcategory: "Cold", image: "lassi.jpg",    isVeg: true },
      ],
    },
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────
function VegDot({ isVeg }: { isVeg: boolean }) {
  return (
    <span
      title={isVeg ? "Vegetarian" : "Non-Vegetarian"}
      className="inline-block w-3 h-3 rounded-sm border-2 flex-shrink-0"
      style={{
        borderColor: isVeg ? "#22c55e" : "#ef4444",
        backgroundColor: isVeg ? "#22c55e" : "#ef4444",
      }}
    />
  );
}

function ItemCard({ item }: { item: MenuItem }) {
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300 group"
      style={{ background: "#fff" }}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        {item.image ? (
          <Image
            src={`/images/menu/${item.image}`}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-5xl"
            style={{ background: "linear-gradient(135deg, #FFF3E0, #FFE0B2)" }}
          >
            {getEmoji(item.name)}
          </div>
        )}
      </div>
      <div className="px-3 py-3 flex items-start gap-2">
        <VegDot isVeg={item.isVeg} />
        <span className="text-sm font-semibold text-gray-800 leading-snug">{item.name}</span>
      </div>
    </div>
  );
}

function BeverageCard({ item }: { item: MenuItem }) {
  return (
    <div
      className="rounded-xl overflow-hidden flex items-center gap-3 p-3 shadow-sm hover:shadow-md transition-shadow duration-200"
      style={{ background: "#fff" }}
    >
      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
        {item.image ? (
          <Image
            src={`/images/menu/${item.image}`}
            alt={item.name}
            fill
            className="object-cover"
            sizes="64px"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-2xl"
            style={{ background: "linear-gradient(135deg, #FFF3E0, #FFE0B2)" }}
          >
            {getEmoji(item.name)}
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        <VegDot isVeg={item.isVeg} />
        <span className="text-sm font-semibold text-gray-800">{item.name}</span>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function HappyHourPage() {
  const appetizers = MENU.find((s) => s.category.toLowerCase().includes("appetizer"));
  const beverages  = MENU.find((s) => s.category.toLowerCase().includes("beverage"));

  return (
    <div style={{ background: "#FFFFFF", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(150deg, #7B1500 0%, #C84800 50%, #E8960A 100%)" }}
      >
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #fff, transparent)" }} />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #fff, transparent)" }} />

        <div className="relative max-w-4xl mx-auto px-6 py-16 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/20 text-white border border-white/30">
            ✨ Daily Special
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-2 leading-tight">
            Happy Hour
          </h1>
          <p className="text-amber-200 text-lg font-medium mb-2">
            3:00 PM – 6:00 PM · Every Day
          </p>
          <p className="text-white/70 text-sm mb-10">
            Fresh bites &amp; cool drinks at our best prices
          </p>
          <div
            className="inline-block px-8 py-6 rounded-2xl"
            style={{ background: "rgba(0,0,0,0.25)", backdropFilter: "blur(12px)" }}
          >
            <HappyHourCountdown />
          </div>
        </div>
      </section>

      {/* ── Appetizers ── */}
      {appetizers && (
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl">🍽️</span>
            <div>
              <h2 className="text-2xl font-black text-gray-900">Appetizers</h2>
              <p className="text-sm text-gray-500">Crispy, fresh &amp; made to order</p>
            </div>
          </div>

          {Object.entries(appetizers.subcategories).map(([subcat, items]) => (
            <div key={subcat} className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{
                    background:
                      subcat.toLowerCase().includes("veg") && !subcat.toLowerCase().includes("non")
                        ? "#22c55e"
                        : "#ef4444",
                  }}
                />
                <h3 className="text-base font-bold uppercase tracking-widest text-gray-600">
                  {subcat}
                </h3>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                  <ItemCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px w-full"
          style={{ background: "linear-gradient(90deg, transparent, #C8A84B55, transparent)" }} />
      </div>

      {/* ── Beverages ── */}
      {beverages && (
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl">🥤</span>
            <div>
              <h2 className="text-2xl font-black text-gray-900">Beverages</h2>
              <p className="text-sm text-gray-500">Hot &amp; cold, brewed with love</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(beverages.subcategories).map(([subcat, items]) => {
              const isHot = subcat.toLowerCase() === "hot";
              return (
                <div key={subcat} className="rounded-2xl overflow-hidden shadow-md" style={{ background: "#fff" }}>
                  <div
                    className="px-5 py-4"
                    style={{
                      background: isHot
                        ? "linear-gradient(135deg, #C84800, #E8960A)"
                        : "linear-gradient(135deg, #1565C0, #42A5F5)",
                    }}
                  >
                    <h3 className="font-bold text-white uppercase tracking-widest text-sm flex items-center gap-2">
                      {isHot ? "🔥" : "❄️"} {subcat}
                    </h3>
                  </div>
                  <div className="p-4 flex flex-col gap-3">
                    {items.map((item) => (
                      <BeverageCard key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ── Footer CTA ── */}
      <section
        className="py-10 text-center"
        style={{ background: "linear-gradient(150deg, #7B1500, #C84800)" }}
      >
        <p className="text-white/80 text-sm mb-2 uppercase tracking-widest font-semibold">
          Can&apos;t make it? Order online
        </p>
        <a
          href="https://order.spoton.com/so-balaji-mess-22212/santa-clara-ca/689e33ea11d9483dbf574212"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-8 py-3 bg-white text-[#C84800] font-black uppercase tracking-widest rounded-full text-sm hover:bg-amber-50 transition-colors"
        >
          Order Now →
        </a>
      </section>
    </div>
  );
}
