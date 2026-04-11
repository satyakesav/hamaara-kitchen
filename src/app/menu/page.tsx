"use client";

import { useState, useMemo } from "react";
import { menuCategories, MenuItem, MenuSubSection } from "@/data/menu";

const ORDER_URL =
  "https://order.spoton.com/so-balaji-mess-22212/santa-clara-ca/689e33ea11d9483dbf574212";

// ── Flatten all items for search ──
type FlatItem = MenuItem & { categoryName: string };
function getAllItems(): FlatItem[] {
  const out: FlatItem[] = [];
  for (const cat of menuCategories) {
    if (cat.items) cat.items.forEach((item) => out.push({ ...item, categoryName: cat.name }));
    if (cat.subSections)
      for (const sub of cat.subSections)
        sub.items.forEach((item) => out.push({ ...item, categoryName: cat.name }));
  }
  return out;
}
const allItems = getAllItems();

function ItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between gap-6 py-5 border-b border-white/[0.07] last:border-0 group">
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="text-[#F5EDE0] font-semibold text-sm leading-snug group-hover:text-white transition-colors">
            {item.name}
          </span>
          {item.isSignature && (
            <span className="text-[0.6rem] font-bold tracking-wide uppercase bg-[#C8A84B] text-[#1E1829] px-2 py-0.5 rounded-full">
              Signature
            </span>
          )}
          {item.isBoneIn && (
            <span className="text-[0.6rem] font-semibold bg-orange-900/40 text-orange-300 px-2 py-0.5 rounded-full border border-orange-800/30">
              Bone-in
            </span>
          )}
        </div>
        {item.description && (
          <p className="text-[#9C8E7E] text-xs leading-relaxed mt-0.5">{item.description}</p>
        )}
      </div>
      <span
        className="font-bold text-[#C8A84B] text-sm shrink-0 pt-0.5"
        style={{ fontFamily: "var(--font-playfair), serif" }}
      >
        {item.price}
      </span>
    </div>
  );
}

function SubSection({ sub }: { sub: MenuSubSection }) {
  return (
    <div className="mb-2">
      <h4 className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#6B5F52] py-3 border-b border-white/[0.06] mb-0">
        {sub.title}
      </h4>
      {sub.items.map((item) => (
        <ItemRow key={item.name} item={item} />
      ))}
    </div>
  );
}

function SearchResultRow({ item }: { item: FlatItem }) {
  return (
    <div className="flex items-start justify-between gap-6 py-5 border-b border-white/[0.07] last:border-0">
      <div className="flex-1 min-w-0">
        <p className="text-[0.6rem] font-bold tracking-widest uppercase text-[#C8A84B] mb-1">
          {item.categoryName}
        </p>
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="text-[#F5EDE0] font-semibold text-sm">{item.name}</span>
          {item.isSignature && (
            <span className="text-[0.6rem] font-bold uppercase bg-[#C8A84B] text-[#1E1829] px-2 py-0.5 rounded-full">
              Signature
            </span>
          )}
          {item.isBoneIn && (
            <span className="text-[0.6rem] font-semibold bg-orange-900/40 text-orange-300 px-2 py-0.5 rounded-full border border-orange-800/30">
              Bone-in
            </span>
          )}
        </div>
        {item.description && (
          <p className="text-[#9C8E7E] text-xs leading-relaxed">{item.description}</p>
        )}
      </div>
      <span className="font-bold text-[#C8A84B] text-sm shrink-0 pt-0.5">{item.price}</span>
    </div>
  );
}

export default function MenuPage() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const [query, setQuery] = useState("");

  const activeCategory = menuCategories.find((c) => c.id === activeId)!;

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.categoryName.toLowerCase().includes(q) ||
        (item.description ?? "").toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="flex min-h-screen" style={{ background: "#3A3530" }}>

      {/* ── Left Sidebar ── */}
      <aside
        className="hidden lg:flex flex-col w-60 shrink-0 sticky top-20 self-start"
        style={{
          height: "calc(100vh - 80px)",
          background: "#302C28",
          borderRight: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Brand */}
        <div className="px-5 py-5 border-b border-white/[0.06]">
          <p
            className="text-[#C8A84B] font-bold text-base"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Hamaara
          </p>
          <p className="text-[0.6rem] text-[#6B5F52] tracking-[0.15em] uppercase mt-0.5">
            Indian Kitchen
          </p>
        </div>

        {/* Search */}
        <div className="px-4 py-3 border-b border-white/[0.06]">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#6B5F52]"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes…"
              className="w-full pl-8 pr-7 py-2 rounded-lg text-xs text-[#F5EDE0] placeholder-[#6B5F52] outline-none"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(200,168,75,0.15)",
              }}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[#6B5F52] hover:text-[#9C8E7E]"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Category nav */}
        <nav className="flex-1 overflow-y-auto py-3">
          <p className="px-5 text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[#4B4038] mb-2">
            Categories
          </p>
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setQuery(""); setActiveId(cat.id); }}
              className="w-full text-left px-5 py-2.5 text-xs font-medium transition-all border-l-2"
              style={{
                color: activeId === cat.id && !query ? "#C8A84B" : "#9C8E7E",
                borderLeftColor: activeId === cat.id && !query ? "#C8A84B" : "transparent",
                background: activeId === cat.id && !query ? "rgba(200,168,75,0.07)" : "transparent",
              }}
            >
              {cat.name}
            </button>
          ))}
        </nav>

        {/* Order CTA */}
        <div className="p-4 border-t border-white/[0.06]">
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-2.5 rounded-lg text-xs font-bold tracking-widest uppercase transition-colors hover:opacity-90"
            style={{ background: "#C8A84B", color: "#1E1829" }}
          >
            Order Online →
          </a>
        </div>
      </aside>

      {/* ── Content Panel ── */}
      <div className="flex-1 min-w-0 flex flex-col">

        {/* Mobile: search + category pills */}
        <div
          className="lg:hidden sticky top-20 z-10 border-b border-white/[0.06]"
          style={{ background: "#302C28" }}
        >
          <div className="px-4 pt-3 pb-2">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B5F52]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search 190+ dishes…"
                className="w-full pl-9 pr-8 py-2.5 rounded-xl text-sm text-[#F5EDE0] placeholder-[#6B5F52] outline-none"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(200,168,75,0.15)" }}
              />
              {query && (
                <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B5F52]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
          <div className="overflow-x-auto px-4 pb-3">
            <div className="flex gap-2 min-w-max">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setQuery(""); setActiveId(cat.id); }}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors"
                  style={
                    activeId === cat.id && !query
                      ? { background: "#C8A84B", color: "#1E1829" }
                      : { background: "rgba(255,255,255,0.06)", color: "#9C8E7E" }
                  }
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 lg:px-12 py-10 max-w-3xl">
          {searchResults !== null ? (
            /* Search results */
            <div>
              <h2
                className="text-2xl font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {searchResults.length > 0
                  ? `${searchResults.length} result${searchResults.length !== 1 ? "s" : ""} for "${query}"`
                  : `No results for "${query}"`}
              </h2>
              {searchResults.length === 0 && (
                <p className="text-[#9C8E7E] text-sm mt-2">Try a different keyword — e.g. a dish name, ingredient, or cuisine.</p>
              )}
              <div className="mt-6">
                {searchResults.map((item, i) => (
                  <SearchResultRow key={`${item.name}-${i}`} item={item} />
                ))}
              </div>
            </div>
          ) : (
            /* Active category view */
            <div>
              {/* Category header */}
              <div className="mb-8">
                <h2
                  className="text-3xl sm:text-4xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {activeCategory.name}
                </h2>
                <div className="w-10 h-[3px] bg-[#C8A84B] mb-3" />
                {activeCategory.note && (
                  <p className="text-[#9C8E7E] text-sm">{activeCategory.note}</p>
                )}
              </div>

              {/* Items */}
              {activeCategory.subSections ? (
                activeCategory.subSections.map((sub) => (
                  <SubSection key={sub.title} sub={sub} />
                ))
              ) : (
                activeCategory.items?.map((item) => (
                  <ItemRow key={item.name} item={item} />
                ))
              )}

              {/* Bottom CTA */}
              <div
                className="mt-12 p-6 rounded-2xl text-center"
                style={{ background: "#302C28", border: "1px solid rgba(200,168,75,0.12)" }}
              >
                <p
                  className="text-white font-semibold text-lg mb-1"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Ready to order?
                </p>
                <p className="text-[#9C8E7E] text-xs mb-4">Order online for pickup or inquire about catering.</p>
                <a
                  href={ORDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2.5 text-xs font-bold tracking-widest uppercase rounded-lg hover:opacity-90 transition-opacity"
                  style={{ background: "#C8A84B", color: "#1E1829" }}
                >
                  Order Online →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
