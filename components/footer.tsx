import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border w-full">
      {/* Top gold rule */}
      <div className="w-full h-[3px] bg-primary" />

      <div className="max-w-[1000px] mx-auto px-4 pt-8 pb-6">

        {/* Logo + nav row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pb-6 border-b border-border">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-3" aria-label="UK Gold Betting Sites — Home">
              <div className="w-8 h-8 bg-primary flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M10 2L12.4 7.3L18 8.1L14 12L15 17.6L10 15L5 17.6L6 12L2 8.1L7.6 7.3L10 2Z" fill="#0f0f0f" />
                </svg>
              </div>
              <div className="flex items-baseline gap-0 leading-none">
                <span className="font-heading font-800 text-lg tracking-tight text-foreground uppercase">UK</span>
                <span className="font-heading font-800 text-lg tracking-tight text-primary uppercase mx-1">Gold</span>
                <span className="font-heading font-800 text-lg tracking-tight text-foreground uppercase">Betting</span>
                <span className="font-heading font-800 text-lg tracking-tight text-muted-foreground uppercase ml-1">Sites</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-xs max-w-xs leading-relaxed font-sans">
              Independent comparison of UKGC-licensed bookmakers. We do not operate a bookmaker.
            </p>
            <p className="text-muted-foreground/50 text-[10px] mt-1 font-mono uppercase tracking-widest">
              ukgoldbettingsites.com
            </p>
          </div>

          <nav className="flex flex-col gap-2" aria-label="Footer navigation">
            <span className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest mb-1">Navigation</span>
            <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide font-mono">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide font-mono">
              Cookie Policy
            </Link>
            <Link href="/about" className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide font-mono">
              About Us
            </Link>
            <Link href="/responsible-gambling" className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide font-mono">
              Responsible Gambling
            </Link>
          </nav>
        </div>

        {/* Regulatory bodies */}
        <div className="py-6 border-b border-border">
          <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest mb-4">
            Regulatory Bodies &amp; Safer Gambling
          </p>
          <div className="flex flex-wrap items-center gap-6">
            {[
              { href: "https://www.gamstop.co.uk/", src: "/gamstop.svg", alt: "GamStop" },
              { href: "https://www.gamblingcommission.gov.uk/", src: "/commission.png", alt: "UK Gambling Commission" },
              { href: "https://www.begambleaware.org/", src: "/gamble.webp", alt: "BeGambleAware" },
              { href: "https://gordonmoody.org.uk/", src: "/gordon.png", alt: "Gordon Moody" },
              { href: "https://www.gamcare.org.uk/", src: "/gamecare.svg", alt: "GamCare" },
            ].map(({ href, src, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={alt}
                className="transition-opacity bg-white p-2 rounded-xl"
              >
                <img src={src} alt={alt} className="h-7 w-auto object-contain" />
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-5 pb-4">
          <p className="text-muted-foreground/40 text-[11px] leading-relaxed font-sans">
            ukgoldbettingsites.com is an independent comparison website. We receive commission when users visit operators through our links. This does not influence our editorial ratings. All operators listed hold a valid UKGC licence. Gambling involves risk - please gamble responsibly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[10px] text-muted-foreground/25 font-mono uppercase tracking-widest pt-3 border-t border-border">
          <span>&copy; 2026 ukgoldbettingsites.com</span>
          <span>Independent UK Betting Sites Comparison</span>
        </div>
      </div>
    </footer>
  )
}
