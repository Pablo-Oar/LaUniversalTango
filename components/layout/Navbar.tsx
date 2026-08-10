"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/bio", label: "Bio" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "rgba(5, 10, 46, 0.95)", backdropFilter: "blur(8px)" }}
    >
      <nav className="site-container flex items-center justify-between h-[70px]">
        <Link href="/" className="leading-none" style={{ fontFamily: "var(--font-display)" }}>
          <span className="block text-sm tracking-[0.15em] text-white">LA UNIVERSAL</span>
          <span className="block text-lg font-semibold tracking-[0.1em]" style={{ color: "#B8B0F8" }}>TANGO</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-stretch h-full">
          {LINKS.map((link) => {
            const active = isActive(link.href)
            return (
              <li key={link.href} className="flex items-stretch">
                <Link
                  href={link.href}
                  className="flex items-center h-full px-5 text-sm tracking-wide transition-colors duration-200"
                  style={{
                    color: active ? "#FFFFFF" : "#D5D9F0",
                    backgroundColor: active ? "#6B5BE8" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.backgroundColor = "rgba(107, 91, 232, 0.25)"
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.backgroundColor = "transparent"
                  }}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul
          className="md:hidden flex flex-col gap-1 px-6 pb-6"
          style={{ backgroundColor: "rgba(5, 10, 46, 0.98)" }}
        >
          {LINKS.map((link) => {
            const active = isActive(link.href)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-3 py-3 text-sm tracking-wide transition-colors hover:text-white"
                  style={{ color: active ? "#FFFFFF" : "#D5D9F0" }}
                  onClick={() => setOpen(false)}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full transition-opacity"
                    style={{ backgroundColor: "#6B5BE8", opacity: active ? 1 : 0 }}
                  />
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </header>
  )
}
