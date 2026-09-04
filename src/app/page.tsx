import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const ORDER_URL =
  "https://order.spoton.com/so-hamaara-indian-kitchen/santa-clara-ca/6a187d9da86c99bc56e807fe";

const menuCoverImage: string | null = "/images/home/offerings/menu/amrutham-banner-2.jpeg";
const happyHourCoverImage: string | null = "/images/home/offerings/happy-hour/amrutham-happy-hour.jpeg";
const cateringCoverImage: string | null = "/images/home/offerings/catering/catering-thali.jpg";

const offerings = [
  {
    title: "Full Menu",
    description:
      "100% Pure Vegetarian South Indian cuisine — tiffins, dosas, biryanis, curries, and more. Fresh ingredients, authentic taste, made with love.",
    href: "/menu",
    cta: "Explore Menu",
    imageSrc: menuCoverImage,
    imageAlt: "Amrutham South Indian cuisine spread",
    placeholderLabel: "Menu photo",
    cuisines: [],
  },
  {
    title: "Happy Hour",
    description:
      "Vegetarian Happy Hour every day, 3:00 PM – 5:30 PM. Weekday combos at $6.99, Irani Chai $2.99, Indian Coffee $3.49. Dine-in only.",
    href: "/happy-hour",
    cta: "See Happy Hour",
    imageSrc: happyHourCoverImage,
    imageAlt: "Amrutham Vegetarian Happy Hour",
    placeholderLabel: "Happy Hour cover image",
    cuisines: [],
    imageContain: true,
  },
  {
    title: "Catering",
    description:
      "Thoughtful catering for friends, family, and corporate events with flexible menus and portion planning.",
    href: "/catering",
    cta: "Book Catering",
    imageSrc: cateringCoverImage,
    imageAlt: "Catering setup for events",
    placeholderLabel: "Add catering cover image",
    cuisines: [],
    imageContain: true,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative max-w-[1200px] mx-auto aspect-[3/1] overflow-hidden">
        <Image
          src="/images/home/amrutham-banner.jpeg"
          alt="Amrutham South Indian Cuisine banner"
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover object-top"
          priority
        />
      </section>

      {/* Hero Text */}
      <section
        className="py-12 px-6 text-center"
        style={{ background: "linear-gradient(180deg, #FAF6F0 0%, #F5EEE4 100%)" }}
      >
        <p className="text-xs tracking-[0.25em] uppercase mb-3" style={{ color: "#C8A84B" }}>
          100% Pure Vegetarian • Santa Clara, CA
        </p>
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3D1C0D] mb-4 leading-tight"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Authentic South Indian Flavors
        </h1>
        <p className="text-[#5C3A20] text-lg max-w-2xl mx-auto mb-8">
          Fresh ingredients, traditional recipes. Catering available for weddings, festivals & all occasions — Live Dosa Station available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 font-bold text-sm tracking-widest uppercase rounded transition-colors duration-200 shadow"
            style={{ background: "#C8A84B", color: "#1E1829" }}
          >
            Order Online
          </a>
          <Link
            href="/menu"
            className="px-8 py-4 border-2 font-bold text-sm tracking-widest uppercase rounded transition-colors duration-200"
            style={{ borderColor: "#3D1C0D", color: "#3D1C0D" }}
          >
            Explore Menu
          </Link>
        </div>
      </section>

      <section className="bg-[#C8A84B] py-4 overflow-hidden">
        <div className="marquee-track select-none" aria-hidden>
          {[...Array(2)].map((_, pass) => (
            <span key={pass} className="flex items-center gap-0">
              {[
                "Pure Vegetarian",
                "South Indian Cuisine",
                "Live Dosa Station",
                "Catering Available",
                "Santa Clara, CA",
                "Fresh Ingredients",
                "Made With Love",
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

      <section id="offerings" className="py-16 px-6" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-xs tracking-[0.2em] uppercase text-[#C84800] mb-2">
                What We Offer
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#3A2A1A]"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Three Experiences, Equal Spotlight
              </h2>
              <p className="mt-3 text-[#5C3A20]">
                Choose what you need today: full menu, happy hour, or catering.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
            {offerings.map((offering, idx) => (
              <ScrollReveal key={offering.title} delay={idx * 110}>
                <article className="h-full rounded-2xl border border-[#C8A84B]/30 bg-[#F8F4ED] shadow-sm overflow-hidden flex flex-col">
                  <div className="relative w-full aspect-[16/10] bg-[#EDE5D8]">
                    {offering.imageSrc ? (
                      <Image
                        src={offering.imageSrc}
                        alt={offering.imageAlt}
                        fill
                        className={(offering as {imageContain?: boolean}).imageContain ? "object-contain" : "object-cover"}
                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                        priority={idx === 0}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-sm uppercase tracking-[0.18em] text-[#8A6A4A]">
                        {offering.placeholderLabel}
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col h-full">
                    <h3
                      className="text-2xl font-bold text-[#3A2A1A] mb-3"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {offering.title}
                    </h3>
                    <p className="text-[#5C3A20] leading-relaxed">
                      {offering.description}
                    </p>

                    {offering.cuisines.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {offering.cuisines.map((cuisine) => (
                          <span
                            key={cuisine}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs uppercase tracking-[0.16em] bg-[#EDE5D8] text-[#6B4728]"
                          >
                            {cuisine}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-6 pt-2">
                      <Link
                        href={offering.href}
                        className="inline-flex px-5 py-3 rounded-md border border-[#3D1C0D]/30 text-[#3D1C0D] hover:bg-[#3D1C0D]/10 font-semibold text-xs tracking-[0.16em] uppercase transition-colors duration-200"
                      >
                        {offering.cta}
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center" style={{ background: "#E8DFD0" }}>
        <ScrollReveal>
          <blockquote
            className="text-2xl sm:text-3xl lg:text-4xl font-medium max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#3A2A1A" }}
          >
            &ldquo;One kitchen for everyday dining, happy-hour evenings, and
            celebrations of every size.&rdquo;
          </blockquote>
          <p className="mt-5 text-sm tracking-widest uppercase" style={{ color: "#C84800" }}>
            Amrutham • Santa Clara
          </p>
        </ScrollReveal>
      </section>

      <section className="py-20 px-6 text-center" style={{ background: "#FFFFFF" }}>
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1E1829] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Ready to explore all offerings?
            </h2>
            <p className="text-gray-600 mb-8">
              Start with menu favorites, discover happy-hour specials, or plan
              your next event with our catering team.
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
                href="#offerings"
                className="px-8 py-4 border-2 border-[#1E1829] hover:bg-[#1E1829] hover:text-white text-[#1E1829] font-bold text-sm tracking-widest uppercase rounded transition-colors duration-200"
              >
                Explore All Offerings
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
