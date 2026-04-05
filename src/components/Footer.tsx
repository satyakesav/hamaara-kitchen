import Link from "next/link";

const ORDER_URL =
  "https://order.spoton.com/so-balaji-mess-22212/santa-clara-ca/689e33ea11d9483dbf574212";

export default function Footer() {
  return (
    <footer className="bg-[#141220] text-gray-300">
      {/* Gold pattern border */}
      <div className="pattern-border" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="block text-[#C8A84B] font-bold text-2xl tracking-wide">
                Hamaara
              </span>
              <span className="block text-xs text-gray-400 tracking-widest uppercase">
                Indian Kitchen
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed italic">
              &ldquo;One India, Many Cultures, One Table&rdquo;
            </p>
            <div className="space-y-1.5 text-sm text-gray-400">
              <p>4300 Great America Pkwy, Ste 156</p>
              <p>Santa Clara, CA 95054</p>
              <a
                href="tel:+14085644083"
                className="block hover:text-[#C8A84B] transition-colors"
              >
                +1 (408) 564-4083
              </a>
              <a
                href="mailto:Balajimesssc@gmail.com"
                className="block hover:text-[#C8A84B] transition-colors"
              >
                Balajimesssc@gmail.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[#C8A84B] font-semibold text-sm tracking-widest uppercase mb-5">
              Navigate
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/catering", label: "Catering" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#C8A84B] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-[#C8A84B] font-semibold text-sm tracking-widest uppercase mb-5">
              Opening Hours
            </h3>
            <div className="text-sm text-gray-400 space-y-1.5">
              {/* TODO: Update opening hours */}
              <p className="text-gray-500 italic">Hours coming soon</p>
              <p className="text-xs text-gray-600">
                (See PENDING.md to add hours)
              </p>
            </div>
          </div>

          {/* Follow + Order */}
          <div>
            <h3 className="text-[#C8A84B] font-semibold text-sm tracking-widest uppercase mb-5">
              Follow Us
            </h3>
            <div className="space-y-2.5 text-sm mb-6">
              {/* TODO: Add social media links */}
              <p className="text-gray-500 italic text-sm">Social links coming soon</p>
            </div>

            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-[#C8A84B] hover:bg-[#E5C96B] text-[#1E1829] text-sm font-bold tracking-wider uppercase rounded transition-colors duration-200"
            >
              Order Online →
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Hamaara Indian Kitchen. All rights reserved.</p>
          <p>Santa Clara, CA</p>
        </div>
      </div>
    </footer>
  );
}
