import Link from "next/link"
import { SITE, FOOTER } from "@/lib/content"

export function Footer() {
  return (
    <footer className="relative bg-dark text-white/90 overflow-hidden">
      <div className="mx-auto max-w-[var(--max-width)] px-lg py-3xl relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-xl">
          {/* Column 1: Name + credentials */}
          <div>
            <span className="font-heading text-2xl font-bold text-white block">
              ברוך קאירי
            </span>
            <p className="font-body text-sm text-white/60 mt-xs">
              פסיכולוג תעסוקתי מומחה-מדריך
            </p>
          </div>

          {/* Column 2: Contact info */}
          <div>
            <h3 className="font-body text-sm font-medium text-white mb-md">
              {FOOTER.contactHeading}
            </h3>
            <div className="flex flex-col gap-sm">
              <a
                href={`tel:${SITE.phoneIntl}`}
                className="font-body text-sm text-white/60 hover:text-[#70A9A1] transition-colors duration-150"
              >
                <span className="ltr inline-block" dir="ltr">{SITE.phone}</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="font-body text-sm text-white/60 hover:text-[#70A9A1] transition-colors duration-150"
              >
                <span className="ltr inline-block" dir="ltr">{SITE.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-xl pt-lg border-t border-white/10">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} {FOOTER.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
