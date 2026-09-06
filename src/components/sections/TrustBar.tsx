interface TrustBadge {
  stat?: string
  label: string
}

interface TrustBarProps {
  badges: TrustBadge[]
}

export function TrustBar({ badges }: TrustBarProps) {
  return (
    <section className="bg-subtle-bg py-xl sm:py-2xl">
      <div className="mx-auto max-w-[var(--max-width)] px-lg sm:px-[40px] lg:px-0">
        <div className="flex flex-wrap justify-center items-center gap-y-lg">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center text-center px-lg sm:px-xl">
                {badge.stat ? (
                  <>
                    <span className="font-heading text-[2rem] sm:text-[2.25rem] font-bold leading-[1.2] text-primary">
                      {badge.stat}
                    </span>
                    <span className="font-body text-sm text-text-secondary mt-xs">
                      {badge.label}
                    </span>
                  </>
                ) : (
                  <span className="font-body text-base font-medium text-primary leading-[1.5]">
                    {badge.label}
                  </span>
                )}
              </div>
              {index < badges.length - 1 && (
                <div className="hidden sm:block w-px h-[48px] bg-[#40798C]/20 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
