"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "דף הבית", href: "/" },
  { label: "אודות", href: "/about" },
  { label: "שירותים לפרט", href: "/services" },
  { label: "שירותים לארגונים", href: "/services/organizations" },
  { label: "סדנאות", href: "/workshops" },
  { label: "שאלות נפוצות", href: "/faq" },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-150",
        isScrolled
          ? "bg-bg/95 backdrop-blur-md border-b border-subtle"
          : "bg-bg border-b border-transparent"
      )}
    >
      <div className="flex items-center justify-between py-[16px] lg:py-[20px] ps-lg pe-[24px] sm:pe-[40px]">
        {/* Logo - pushed to the far right edge in RTL */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/images/logo6-clean.png"
            alt="ברוך קאירי - פסיכולוג תעסוקתי"
            width={400}
            height={100}
            className="h-[120px] w-auto sm:h-[150px]"
            priority
          />
        </Link>

        {/* Desktop nav - left side in RTL */}
        <nav className="hidden lg:flex items-center gap-[28px] me-auto ms-xl" aria-label="ניווט ראשי">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-body text-[15px] whitespace-nowrap transition-colors duration-150",
                pathname === item.href
                  ? "text-primary font-medium border-b-2 border-accent pb-[2px]"
                  : "text-text-secondary hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary text-white font-body text-[14px] font-medium px-[20px] py-[8px] hover:bg-primary-dark transition-colors duration-150 whitespace-nowrap"
          >
            צור קשר
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden flex flex-col justify-center items-center w-[44px] h-[44px] gap-[5px]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "סגור תפריט" : "פתח תפריט"}
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={cn(
              "block w-6 h-[2px] bg-text transition-transform duration-250",
              isMobileMenuOpen && "translate-y-[7px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block w-6 h-[2px] bg-text transition-opacity duration-250",
              isMobileMenuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block w-6 h-[2px] bg-text transition-transform duration-250",
              isMobileMenuOpen && "-translate-y-[7px] -rotate-45"
            )}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-250 ease-out",
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav
          className="mx-auto max-w-[var(--max-width)] px-lg pb-xl flex flex-col gap-lg"
          aria-label="תפריט נייד"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-body text-lg transition-colors duration-150",
                pathname === item.href
                  ? "text-primary font-medium"
                  : "text-text hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary text-white font-body text-base font-medium px-xl py-md hover:bg-primary-dark transition-colors duration-150 mt-sm"
          >
            צור קשר
          </Link>
        </nav>
      </div>
    </header>
  )
}
