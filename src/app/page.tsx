import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const ORDER_URL =
  "https://order.spoton.com/so-balaji-mess-22212/santa-clara-ca/689e33ea11d9483dbf574212";

const menuCuisineImages = [
  { label: "South", src: "/images/home/offerings/menu/south.jpg" },
  { label: "North", src: "/images/home/offerings/menu/north.jpg" },
  { label: "East", src: "/images/home/offerings/menu/east.jpg" },
  { label: "West", src: "/images/home/offerings/menu/west.jpg" },
];

const menuCoverImage: string | null = "/images/home/offerings/menu/cover.png";
const happyHourCoverImage: string | null = "/images/home/offerings/happy-hour/cover.png";
const cateringCoverImage: string | null = "/images/home/offerings/catering/cover.jpg";

const offerings = [
  {
    title: "Full Menu",
    description:
      "Explore South, North, East and West Indian flavors in one place with homestyle cooking and authentic ingredients.",
    href: "/menu",
    cta: "Explore Menu",
    imageSrc: menuCoverImage,
    imageAlt: "Pan-Indian dishes from different regions",
    placeholderLabel: "Menu photo",
    cuisines: ["South", "North", "East", "West"],
  },
  {
    title: "Happy Hour",
    description:
      "Evening bites and beverage specials crafted for a relaxed, social dining experience.",
    href: "/happy-hour",
    cta: "See Happy Hour",
    imageSrc: happyHourCoverImage,
    imageAlt: "Happy Hour drinks and snacks",
    placeholderLabel: "Add happy-hour cover image",
    cuisines: [],
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
  },
];

export default function Home() {
  return (
    <>
      <section
        className="relative px-6 pt-16 pb-12 lg:pt-20 lg:pb-16"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #FDF9F4 0%, #FAF6F0 60%, #F5EEE4 100%)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#C8A84B]/5 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#C8A84B]/5 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="/logo.png"
              alt="HAMAARA Indian Kitchen"
              width={140}
              height={140}
              className="drop-shadow-xl"
              priority
            />
          </div>

          <p className="text-xs tracking-[0.2em] uppercase text-[#C84800] mb-3">
            HAMAARA Kitchen
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3D1C0D] mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Discover Everything We Offer
          </h1>
          <p className="text-[#5C3A20] text-lg max-w-2xl mx-auto">
            From a Pan-Indian menu to Happy Hour and event catering, explore
            the complete HAMAARA experience in one place.
          </p>
        </div>
      </section>

      <section className="bg-[#C8A84B] py-4 overflow-hidden">
        <div className="marquee-track select-none" aria-hidden>
          {[...Array(2)].map((_, pass) => (
            <span key={pass} className="flex items-center gap-0">
              {[
                "Pan-Indian Menu",
                "South",
                "North",
                "East",
                "West",
                "Happy Hour",
                "Catering",
                "Santa Clara, CA",
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

      <section id="offerings" className="py-16 px-6" style={{ background: "#F2EDE4" }}>
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
                        className="object-cover"
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

                    {offering.cuisines.length > 0 && (
                      <div className="mt-4 grid grid-cols-4 gap-2">
                        {menuCuisineImages.map((item) => (
                          <div
                            key={item.label}
                            className="relative aspect-square rounded-md overflow-hidden bg-[#E5DACA]"
                          >
                            <Image
                              src={item.src}
                              alt={`${item.label} Indian cuisine`}
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          </div>
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
            HAMAARA Kitchen • Santa Clara
          </p>
        </ScrollReveal>
      </section>

      <section className="py-20 px-6 text-center" style={{ background: "#F2EDE4" }}>
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
