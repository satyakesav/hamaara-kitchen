"use client";

import { useState, useMemo } from "react";
import { menuCategories, MenuItem, MenuSubSection } from "@/data/menu";

const ORDER_URL =
  "https://order.spoton.com/so-balaji-mess-22212/santa-clara-ca/689e33ea11d9483dbf574212";

function ItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-gray-100 last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="font-medium text-[#1E1829] text-sm leading-snug">{item.name}</span>
          {item.isSignature && (
            <span className="badge-signature">Signature</span>
          )}
          {item.isBoneIn && (
            <span className="text-[0.6rem] font-semibold bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded-full">
              Bone-in
            </span>
          )}
        </div>
        {item.description && (
          <p className="text-gray-500 text-xs leading-relaxed mt-1">{item.description}</p>
        )}
      </div>
      <span className="font-bold text-[#C8A84B] text-sm shrink-0 pt-0.5">{item.price}</span>
    </div>
  );
}

function SubSection({ sub }: { sub: MenuSubSection }) {
  return (
    <div className="mb-6">
      <h4 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2 pb-1 border-b border-gray-100">
        {sub.title}
      </h4>
      <div>
        {sub.items.map((item) => (
          <ItemCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

// Flatten all items across every category for search
type FlatItem = MenuItem & { categoryName: string };
function getAllItems(): FlatItem[] {
  const out: FlatItem[] = [];
  for (const cat of menuCategories) {
    if (cat.items) {
      cat.items.forEach((item) => out.push({ ...item, categoryName: cat.name }));
    }
    if (cat.subSections) {
      for (const sub of cat.subSections) {
        sub.items.forEach((item) => out.push({ ...item, categoryName: cat.name }));
      }
    }
  }
  return out;
}

const allItems = getAllItems();

function SearchResultCard({ item }: { item: FlatItem }) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-gray-100 last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-0.5">
          <span className="font-medium text-[#1E1829] text-sm leading-snug">{item.name}</span>
          {item.isSignature && <span className="badge-signature">Signature</span>}
          {item.isBoneIn && (
            <span className="text-[0.6rem] font-semibold bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded-full">
              Bone-in
            </span>
          )}
        </div>
        <p className="text-[0.65rem] text-[#C8A84B] font-semibold tracking-wider uppercase mb-1">
          {item.categoryName}
        </p>
        {item.description && (
          <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
        )}
      </div>
      <span className="font-bold text-[#C8A84B] text-sm shrink-0 pt-0.5">{item.price}</span>
    </div>
  );
}

export default function MenuPage() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const [query, setQuery] = useState("");

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

  const activeCategory = menuCategories.find((c) => c.id === activeId)!;

  return (
    <>
      {/* ── Page Header ── */}
      <section
        className="py-20 px-6 text-center"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #2A2040 0%, #1E1829 70%, #141220 100%)",
        }}
      >
        <p className="text-xs text-[#C8A84B] tracking-widest uppercase mb-3">
          190+ Dishes
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Our Menu
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          From morning tiffin to biryani feasts — explore our full menu below, or order
          directly online.
        </p>
        <div className="mt-8">
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 bg-[#C8A84B] hover:bg-[#E5C96B] text-[#1E1829] font-bold text-sm tracking-widest uppercase rounded transition-colors"
          >
            Order Online →
          </a>
        </div>
      </section>

      {/* ── Legend ── */}
      <div className="bg-[#F8F5EE] border-b border-gray-200 px-4 py-2.5 text-center flex items-center justify-center gap-6 text-xs text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="badge-signature">Signature</span> = Chef&apos;s specialty
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-[0.6rem] font-semibold bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded-full">Bone-in</span> = Bone-in preparation
        </span>
      </div>

      {/* ── Search Bar ── */}
      <div className="bg-[#F8F5EE] border-b border-gray-200 px-4 sm:px-8 py-4">
        <div className="max-w-3xl mx-auto relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 190+ dishes — try 'biryani', 'dosa', 'goat'…"
            className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 bg-white text-sm text-[#1E1829] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C8A84B]/40 focus:border-[#C8A84B] transition-all shadow-sm"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* ── Menu Body ── */}
      <div className="bg-[#F8F5EE] flex flex-col lg:flex-row min-h-screen">

        {/* Sidebar — desktop */}
        <aside className="hidden lg:block w-64 shrink-0 sticky top-20 self-start bg-white border-r border-gray-200 shadow-sm">
          <div className="py-6">
            <p className="px-5 text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">
              Categories
            </p>
            <nav>
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors border-l-4 ${
                    activeId === cat.id
                      ? "border-[#C8A84B] text-[#C8A84B] bg-[#C8A84B]/5"
                      : "border-transparent text-gray-600 hover:text-[#1E1829] hover:bg-gray-50"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Mobile Tabs */}
        <div className="lg:hidden overflow-x-auto bg-white border-b border-gray-200 sticky top-20 z-10">
          <div className="flex gap-1 px-4 py-3 min-w-max">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeId === cat.id
                    ? "bg-[#C8A84B] text-[#1E1829]"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 lg:p-10 max-w-3xl">
          {searchResults !== null ? (
            /* ── Search Results View ── */
            <div>
              <div className="mb-6">
                <h2
                  className="text-2xl font-bold text-[#1E1829] mb-1"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {searchResults.length > 0
                    ? `${searchResults.length} result${searchResults.length !== 1 ? "s" : ""} for "${query}"`
                    : `No results for "${query}"`}
                </h2>
                {searchResults.length === 0 && (
                  <p className="text-gray-500 text-sm mt-2">
                    Try a different keyword — e.g. a dish name, ingredient, or cuisine type.
                  </p>
                )}
              </div>
              {searchResults.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  {searchResults.map((item, i) => (
                    <SearchResultCard key={`${item.name}-${i}`} item={item} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* ── Normal Category View ── */
            <div>
              <div className="mb-6">
                <h2
                  className="text-2xl sm:text-3xl font-bold text-[#1E1829] mb-1"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {activeCategory.name}
                </h2>
                {activeCategory.note && (
                  <p className="text-xs text-[#C8A84B] font-medium">{activeCategory.note}</p>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                {activeCategory.subSections ? (
                  activeCategory.subSections.map((sub) => (
                    <SubSection key={sub.title} sub={sub} />
                  ))
                ) : (
                  <div>
                    {activeCategory.items?.map((item) => (
                      <ItemCard key={item.name} item={item} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Order CTA at bottom */}
          <div className="mt-8 p-6 bg-[#1E1829] rounded-2xl text-center">
            <p
              className="text-white font-semibold mb-3 text-lg"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Ready to order?
            </p>
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#C8A84B] hover:bg-[#E5C96B] text-[#1E1829] font-bold text-sm tracking-widest uppercase rounded transition-colors"
            >
              Order Online →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
