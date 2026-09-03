interface TrustBadge {
  /** Number or stat (e.g. "30+"). Omit for text-only badges. */
  stat?: string
  /** Label below the stat, or the full text for text-only badges */
  label: string
}

interface TrustBarProps {
  badges: TrustBadge[]
}

export function TrustBar({ badges }: TrustBarProps) {
  return (
    <section className="bg-bg py-xl sm:py-2xl">
      <div className="mx-auto max-w-[var(--max-width)] px-lg sm:px-[40px] lg:px-0">
        <div className="flex flex-wrap justify-center items-center gap-y-lg">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center">
              {/* Separator — hidden before first badge and on mobile wrap */}
              {index > 0 && (
                <div
                  className="hidden sm:block w-px h-[40px] bg-subtle mx-xl"
                  aria-hidden="true"
                />
              )}

              <div className="flex flex-col items-center text-center px-md sm:px-0 w-[calc(50%-1rem)] sm:w-auto">
                {badge.stat ? (
                  <>
                    <span className="font-heading text-[2.25rem] font-bold leading-[1.2] text-primary">
                      {badge.stat}
                    </span>
                    <span className="font-body text-sm text-text-secondary mt-xs">
                      {badge.label}
                    </span>
                  </>
                ) : (
                  <span className="font-body text-base font-medium text-text leading-[1.5]">
                    {badge.label}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
