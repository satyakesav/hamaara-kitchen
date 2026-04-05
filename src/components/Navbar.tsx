"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/about", label: "About" },
];

const ORDER_URL =
  "https://order.spoton.com/so-balaji-mess-22212/santa-clara-ca/689e33ea11d9483dbf574212";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-[#1E1829] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-14 h-14">
              <Image
                src="/logo.png"
                alt="Hamaara Indian Kitchen"
                fill
                className="object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="leading-tight">
              <span className="block text-[#C8A84B] font-bold text-lg tracking-wide">
                Hamaara
              </span>
              <span className="block text-xs text-gray-300 tracking-widest uppercase">
                Indian Kitchen
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wider uppercase transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#C8A84B]"
                    : "text-gray-300 hover:text-[#C8A84B]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Order Online Button + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-[#C8A84B] hover:bg-[#E5C96B] text-[#1E1829] text-sm font-bold tracking-wider uppercase rounded transition-colors duration-200"
            >
              Order Online
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded text-gray-300 hover:text-[#C8A84B]"
              aria-label="Toggle menu"
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#141220] border-t border-[#C8A84B]/20">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 text-sm font-medium tracking-wider uppercase rounded transition-colors ${
                  pathname === link.href
                    ? "text-[#C8A84B] bg-[#C8A84B]/10"
                    : "text-gray-300 hover:text-[#C8A84B] hover:bg-[#C8A84B]/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 px-3 py-2.5 bg-[#C8A84B] text-[#1E1829] text-sm font-bold tracking-wider uppercase rounded text-center"
            >
              Order Online
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
