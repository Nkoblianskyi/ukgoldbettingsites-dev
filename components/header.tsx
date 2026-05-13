import Link from "next/link"

export function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 w-full">
      {/* Top thin rule bar */}
      <div className="w-full h-[3px] bg-primary" />

      <div className="px-4 py-3">
        <div className="flex items-center justify-between max-w-[1000px] mx-auto">
          {/* Wordmark Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="UK Gold Betting Sites — Home">
            {/* Icon mark */}
            <div
              className="w-9 h-9 bg-primary flex items-center justify-center flex-shrink-0"
              aria-hidden="true"
            >
              {/* Sport icon — trophy/shield SVG */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  d="M10 2L12.4 7.3L18 8.1L14 12L15 17.6L10 15L5 17.6L6 12L2 8.1L7.6 7.3L10 2Z"
                  fill="#0f0f0f"
                  stroke="#0f0f0f"
                  strokeWidth="0.5"
                />
              </svg>
            </div>

            {/* Wordmark — single line */}
            <div className="flex items-baseline gap-0 leading-none">
              <span className="font-heading font-800 text-xl tracking-tight text-foreground uppercase">
                UK
              </span>
              <span className="font-heading font-800 text-xl tracking-tight text-primary uppercase mx-1">
                Gold
              </span>
              <span className="font-heading font-800 text-xl tracking-tight text-foreground uppercase">
                Betting
              </span>
              <span className="font-heading font-800 text-xl tracking-tight text-muted-foreground uppercase ml-1">
                Sites
              </span>
            </div>
          </Link>

          {/* Right badges */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-700 text-destructive border border-destructive px-2.5 py-1 uppercase tracking-widest">
              18+
            </span>
          </div>
        </div>
      </div>

      {/* Bottom double rule */}
      <div className="w-full border-b border-border" />
    </header>
  )
}
