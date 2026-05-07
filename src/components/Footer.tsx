import Link from "next/link";

const ORDER_URL =
  "https://order.spoton.com/so-balaji-mess-22212/santa-clara-ca/689e33ea11d9483dbf574212";

export default function Footer() {
  return (
    <footer className="bg-[#3A3028] text-gray-300">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="block text-[#C8A84B] font-bold text-2xl tracking-wide">
                HAMAARA
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
                href="mailto:hamaaraindiankitchensc@gmail.com"
                className="block hover:text-[#C8A84B] transition-colors"
              >
                hamaaraindiankitchensc@gmail.com
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
            <div className="text-sm space-y-1.5">
              {[
                { day: "Monday", hours: null },
                { day: "Tuesday", hours: "8 AM – 10 PM" },
                { day: "Wednesday", hours: "8 AM – 10 PM" },
                { day: "Thursday", hours: "8 AM – 10 PM" },
                { day: "Friday", hours: "8 AM – 10 PM" },
                { day: "Saturday", hours: "8 AM – 10 PM" },
                { day: "Sunday", hours: "8 AM – 10 PM" },
              ].map(({ day, hours }) => (
                <div key={day} className="flex items-baseline justify-between">
                  <span className="text-gray-400">{day}</span>
                  {hours
                    ? <span className="text-[#C8A84B] font-medium tracking-wide">{hours}</span>
                    : <span className="text-gray-600 italic text-xs">Closed</span>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Follow + Order */}
          <div>
            <h3 className="text-[#C8A84B] font-semibold text-sm tracking-widest uppercase mb-5">
              Follow Us
            </h3>
            <div className="space-y-2.5 text-sm mb-6">
              <a
                href="https://www.instagram.com/hamaara.indian.kitchen_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#C8A84B] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @hamaara.indian.kitchen_
              </a>
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
          <p>© {new Date().getFullYear()} HAMAARA Indian Kitchen. All rights reserved.</p>
          <p>Santa Clara, CA</p>
        </div>
      </div>
    </footer>
  );
}
