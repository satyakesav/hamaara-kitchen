"use client";

import { useState, useMemo, useRef } from "react";

// ── Types ──────────────────────────────────────────────────────────────────────

export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  isVeg: boolean;
};

export type SubSection = {
  title: string;
  isVeg: boolean; // dot color for the section label
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  name: string;
  emoji: string;
  tagline?: string;
  items?: MenuItem[];
  subSections?: SubSection[];
};

// ── Props ──────────────────────────────────────────────────────────────────────

type Props = {
  categories: MenuCategory[];
};

// ── Constants ─────────────────────────────────────────────────────────────────

const ORDER_URL =
  "https://order.spoton.com/so-hamaara-indian-kitchen/santa-clara-ca/6a187d9da86c99bc56e807fe";

const GOLD = "#C8A84B";
const SIDEBAR_BG = "#FFFFFF";
const CREAM = "#FFFFFF";
const CHARCOAL_TEXT = "#2A2520";
const MUTED_TEXT = "#7A6E64";
const RULE_COLOR = "#D6CEC4";

// ── Helpers ───────────────────────────────────────────────────────────────────

type FlatItem = MenuItem & { categoryName: string };

function flattenAll(categories: MenuCategory[]): FlatItem[] {
  const out: FlatItem[] = [];
  for (const cat of categories) {
    if (cat.items) cat.items.forEach((item) => out.push({ ...item, categoryName: cat.name }));
    if (cat.subSections)
      for (const sub of cat.subSections)
        sub.items.forEach((item) => out.push({ ...item, categoryName: cat.name }));
  }
  return out;
}

function highlightText(text: string, query: string): React.ReactNode {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark style={{ background: `${GOLD}44`, color: CHARCOAL_TEXT, borderRadius: "2px" }}>
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function VegDot({ isVeg }: { isVeg: boolean }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 10,
        height: 10,
        borderRadius: 2,
        background: isVeg ? "#22c55e" : "#ef4444",
        flexShrink: 0,
        marginTop: 3,
      }}
      aria-label={isVeg ? "vegetarian" : "non-vegetarian"}
    />
  );
}

function ItemRow({ item, query = "" }: { item: MenuItem; query?: string }) {
  return (
    <div
      className="flex items-start justify-between gap-2 py-3"
      style={{
        borderBottom: `1px dashed ${RULE_COLOR}`,
        fontFamily: "EB Garamond, Georgia, serif",
      }}
    >
      <div className="flex items-start gap-2 flex-1 min-w-0">
        <VegDot isVeg={item.isVeg} />
        <div className="flex-1 min-w-0">
          <span
            style={{
              color: CHARCOAL_TEXT,
              fontSize: "0.9rem",
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            {highlightText(item.name, query)}
          </span>
          {item.description && (
            <>
              <span style={{ color: MUTED_TEXT, margin: "0 4px" }}>—</span>
              <span
                style={{
                  color: MUTED_TEXT,
                  fontSize: "0.82rem",
                  fontStyle: "italic",
                  lineHeight: 1.4,
                }}
              >
                {item.description}
              </span>
            </>
          )}
        </div>
      </div>
      {item.price && (
        <span
          style={{
            color: CHARCOAL_TEXT,
            fontSize: "0.85rem",
            fontWeight: 600,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {item.price}
        </span>
      )}
    </div>
  );
}

function SubSectionBlock({ sub, query }: { sub: SubSection; query?: string }) {
  return (
    <div className="mb-6">
      {/* Subcategory heading row */}
      <div className="flex items-center gap-2 mb-3">
        <VegDot isVeg={sub.isVeg} />
        <span
          style={{
            color: CHARCOAL_TEXT,
            fontFamily: "EB Garamond, Georgia, serif",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {sub.title}
        </span>
        <div style={{ flex: 1, height: 1, background: RULE_COLOR, marginLeft: 4 }} />
      </div>
      {/* Two-column grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          columnGap: "2rem",
        }}
      >
        {sub.items.map((item) => (
          <ItemRow key={item.name} item={item} query={query} />
        ))}
      </div>
    </div>
  );
}

function CategoryPanel({
  category,
  query,
}: {
  category: MenuCategory;
  query: string;
}) {
  return (
    <div>
      {/* Category header */}
      <div className="mb-8">
        <h2
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 700,
            color: CHARCOAL_TEXT,
            lineHeight: 1.15,
            marginBottom: "0.3rem",
          }}
        >
          {category.name}
        </h2>
        {category.tagline && (
          <p
            style={{
              fontFamily: "EB Garamond, Georgia, serif",
              fontSize: "1rem",
              fontStyle: "italic",
              color: MUTED_TEXT,
              marginBottom: "0.6rem",
            }}
          >
            {category.tagline}
          </p>
        )}
        <p
          style={{
            color: GOLD,
            fontSize: "0.9rem",
            letterSpacing: "0.5em",
            marginBottom: "0.4rem",
          }}
        >
          ✦ ✦ ✦
        </p>
        <div style={{ height: 1, background: `${RULE_COLOR}` }} />
      </div>

      {/* Items */}
      {category.subSections ? (
        category.subSections.map((sub) => (
          <SubSectionBlock key={sub.title} sub={sub} query={query} />
        ))
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            columnGap: "2rem",
          }}
        >
          {category.items?.map((item) => (
            <ItemRow key={item.name} item={item} query={query} />
          ))}
        </div>
      )}

      {/* Bottom CTA */}
      <div
        className="mt-14 text-center py-8"
        style={{
          borderTop: `1px solid ${RULE_COLOR}`,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            color: CHARCOAL_TEXT,
            fontSize: "1.1rem",
            marginBottom: "0.4rem",
          }}
        >
          Ready to order?
        </p>
        <p
          style={{
            fontFamily: "EB Garamond, Georgia, serif",
            color: MUTED_TEXT,
            fontSize: "0.9rem",
            marginBottom: "1rem",
            fontStyle: "italic",
          }}
        >
          Order online for pickup or inquire about catering.
        </p>
        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: GOLD,
            color: "#1E1829",
            padding: "0.55rem 1.6rem",
            borderRadius: 6,
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Order Online →
        </a>
      </div>
    </div>
  );
}

function SearchResults({
  results,
  query,
}: {
  results: FlatItem[];
  query: string;
}) {
  // Group by category name preserving order
  const grouped: { categoryName: string; items: FlatItem[] }[] = [];
  const seen = new Map<string, FlatItem[]>();
  for (const item of results) {
    if (!seen.has(item.categoryName)) {
      const arr: FlatItem[] = [];
      seen.set(item.categoryName, arr);
      grouped.push({ categoryName: item.categoryName, items: arr });
    }
    seen.get(item.categoryName)!.push(item);
  }

  return (
    <div>
      <h2
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          fontWeight: 700,
          color: CHARCOAL_TEXT,
          marginBottom: "0.25rem",
        }}
      >
        {results.length > 0
          ? `${results.length} result${results.length !== 1 ? "s" : ""} for "${query}"`
          : `No results for "${query}"`}
      </h2>
      {results.length === 0 ? (
        <p
          style={{
            fontFamily: "EB Garamond, Georgia, serif",
            color: MUTED_TEXT,
            fontStyle: "italic",
            marginTop: "0.5rem",
          }}
        >
          Try a different keyword — a dish name, ingredient, or cuisine.
        </p>
      ) : (
        <div className="mt-6">
          {grouped.map(({ categoryName, items }) => (
            <div key={categoryName} className="mb-8">
              {/* Category badge */}
              <div className="flex items-center gap-3 mb-2">
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#fff",
                    background: CHARCOAL_TEXT,
                    padding: "2px 10px",
                    borderRadius: 3,
                    fontFamily: "EB Garamond, Georgia, serif",
                  }}
                >
                  {categoryName}
                </span>
                <div style={{ flex: 1, height: 1, background: RULE_COLOR }} />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                  columnGap: "2rem",
                }}
              >
                {items.map((item, i) => (
                  <ItemRow key={`${item.name}-${i}`} item={item} query={query} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function MenuClient({ categories }: Props) {
  const [activeId, setActiveId] = useState(categories[0].id);
  const [query, setQuery] = useState("");

  const allItems = useMemo(() => flattenAll(categories), [categories]);

  const pillsRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

  function onPillsMouseDown(e: React.MouseEvent) {
    const el = pillsRef.current;
    if (!el) return;
    dragState.current = { isDown: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
    el.style.cursor = "grabbing";
  }
  function onPillsMouseLeaveOrUp() {
    dragState.current.isDown = false;
    if (pillsRef.current) pillsRef.current.style.cursor = "grab";
  }
  function onPillsMouseMove(e: React.MouseEvent) {
    if (!dragState.current.isDown || !pillsRef.current) return;
    e.preventDefault();
    const x = e.pageX - pillsRef.current.offsetLeft;
    const walk = (x - dragState.current.startX) * 1.5;
    pillsRef.current.scrollLeft = dragState.current.scrollLeft - walk;
  }

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.categoryName.toLowerCase().includes(q) ||
        (item.description ?? "").toLowerCase().includes(q)
    );
  }, [query, allItems]);

  const activeCategory = categories.find((c) => c.id === activeId)!;

  function selectCategory(id: string) {
    setQuery("");
    setActiveId(id);
  }

  return (
    <div style={{ display: "flex", height: "calc(100vh - 80px)", overflow: "hidden" }}>
      {/* ── Sidebar ── */}
      <aside
        className="hidden lg:flex flex-col"
        style={{
          width: 240,
          flexShrink: 0,
          background: SIDEBAR_BG,
          borderRight: "1px solid rgba(0,0,0,0.10)",
          overflowY: "auto",
          scrollbarWidth: "none",
        }}
      >
        {/* Brand */}
        <div
          style={{
            padding: "20px 20px 16px",
            borderBottom: "1px solid rgba(0,0,0,0.10)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: GOLD,
              fontWeight: 700,
              fontSize: "1.05rem",
              lineHeight: 1.2,
            }}
          >
            AMRUTHAM
          </p>
          <p
            style={{
              fontSize: "0.58rem",
              color: "#5C3A20",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginTop: 2,
            }}
          >
            South Indian Cuisine
          </p>
        </div>

        {/* Search */}
        <div
          style={{
            padding: "12px 16px",
            borderBottom: "1px solid rgba(0,0,0,0.10)",
          }}
        >
          <div style={{ position: "relative" }}>
            <svg
              style={{
                position: "absolute",
                left: 10,
                top: "50%",
                transform: "translateY(-50%)",
                width: 12,
                height: 12,
                color: "#5C3A20",
              }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes…"
              className="menu-search-input"
              style={{
                width: "100%",
                paddingLeft: 28,
                paddingRight: query ? 28 : 10,
                paddingTop: 7,
                paddingBottom: 7,
                borderRadius: 8,
                fontSize: "0.75rem",
                color: "#3D1C0D",
                background: "#FFFFFF",
                border: "1px solid rgba(61,28,13,0.35)",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                style={{
                  position: "absolute",
                  right: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#5C3A20",
                  padding: 0,
                  display: "flex",
                }}
              >
                <svg width={12} height={12} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Category nav */}
        <nav style={{ flex: 1, padding: "12px 0" }}>
          <p
            style={{
              padding: "0 20px",
              fontSize: "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#4B4038",
              marginBottom: 6,
            }}
          >
            Categories
          </p>
          {categories.map((cat) => {
            const isActive = activeId === cat.id && !query;
            return (
              <button
                key={cat.id}
                onClick={() => selectCategory(cat.id)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "7px 20px",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: isActive ? GOLD : "#9C8E7E",
                  background: isActive ? "rgba(200,168,75,0.07)" : "transparent",
                  border: "none",
                  borderLeft: `2px solid ${isActive ? GOLD : "transparent"}`,
                  cursor: "pointer",
                  transition: "all 0.15s",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{ fontSize: "0.9rem" }}>{cat.emoji}</span>
                {cat.name}
              </button>
            );
          })}
        </nav>

        {/* Order CTA */}
        <div
          style={{
            padding: 16,
            borderTop: "1px solid rgba(0,0,0,0.10)",
          }}
        >
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              padding: "9px 0",
              borderRadius: 8,
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              background: GOLD,
              color: "#1E1829",
              textDecoration: "none",
            }}
          >
            Order Online →
          </a>
        </div>
      </aside>

      {/* ── Main Panel ── */}
      <main
        style={{
          flex: 1,
          overflowY: "auto",
          background: CREAM,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Mobile: search + category pills */}
        <div
          className="lg:hidden"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            background: SIDEBAR_BG,
            borderBottom: "1px solid rgba(0,0,0,0.10)",
          }}
        >
          <div style={{ padding: "12px 16px 8px" }}>
            <div style={{ position: "relative" }}>
              <svg
                style={{
                  position: "absolute",
                  left: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 14,
                  height: 14,
                  color: "#5C3A20",
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes…"
              className="menu-search-input"
                style={{
                  width: "100%",
                  paddingLeft: 34,
                  paddingRight: query ? 32 : 12,
                  paddingTop: 9,
                  paddingBottom: 9,
                  borderRadius: 10,
                  fontSize: "0.875rem",
                  color: "#F5EDE0",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(200,168,75,0.15)",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#5C3A20",
                    padding: 0,
                    display: "flex",
                  }}
                >
                  <svg width={14} height={14} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
          <div
            ref={pillsRef}
            onMouseDown={onPillsMouseDown}
            onMouseLeave={onPillsMouseLeaveOrUp}
            onMouseUp={onPillsMouseLeaveOrUp}
            onMouseMove={onPillsMouseMove}
            style={{ overflowX: "auto", padding: "0 16px 12px", scrollbarWidth: "none", msOverflowStyle: "none", cursor: "grab", userSelect: "none" }}
            className="[&::-webkit-scrollbar]:hidden"
          >
            <div style={{ display: "flex", gap: 8, minWidth: "max-content" }}>
              {categories.map((cat) => {
                const isActive = activeId === cat.id && !query;
                return (
                  <button
                    key={cat.id}
                    onClick={() => selectCategory(cat.id)}
                    style={{
                      padding: "5px 12px",
                      borderRadius: 9999,
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      background: isActive ? GOLD : "rgba(0,0,0,0.08)",
                      color: isActive ? "#3D1C0D" : "#5C3A20",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {cat.emoji} {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Printed menu content */}
        <div
          style={{
            maxWidth: 900,
            width: "100%",
            margin: "0 auto",
            padding: "2.5rem 2rem 3rem",
          }}
        >
          {searchResults !== null ? (
            <SearchResults results={searchResults} query={query} />
          ) : (
            <CategoryPanel category={activeCategory} query={query} />
          )}
        </div>
      </main>
    </div>
  );
}
