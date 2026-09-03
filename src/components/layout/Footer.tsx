import Link from "next/link"

const quickLinks = [
  { label: "דף הבית", href: "/" },
  { label: "אודות", href: "/about" },
  { label: "שירותים לפרט", href: "/services" },
  { label: "שירותים לארגונים", href: "/services/organizations" },
  { label: "סדנאות", href: "/workshops" },
  { label: "שאלות נפוצות", href: "/faq" },
  { label: "צור קשר", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-dark text-white/90">
      <div className="mx-auto max-w-[var(--max-width)] px-lg py-3xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
          {/* Column 1: Name + credentials */}
          <div>
            <span className="font-heading text-2xl font-bold text-white block">
              ברוך קאירי
            </span>
            <p className="font-body text-sm text-white/60 mt-xs">
              פסיכולוג תעסוקתי מומחה-מדריך
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h3 className="font-body text-sm font-medium text-white mb-md">
              ניווט מהיר
            </h3>
            <nav aria-label="קישורי כותרת תחתונה">
              <ul className="flex flex-col gap-sm">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-white/60 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact info */}
          <div>
            <h3 className="font-body text-sm font-medium text-white mb-md">
              יצירת קשר
            </h3>
            <div className="flex flex-col gap-sm">
              <a
                href="tel:+972525151351"
                className="font-body text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                <span className="ltr inline-block" dir="ltr">052-515-1351</span>
              </a>
<a
                href="mailto:kairybaruch@gmail.com"
                className="font-body text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                <span className="ltr inline-block" dir="ltr">kairybaruch@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-xl pt-lg border-t border-white/10">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} ברוך קאירי. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  )
}
