export function InfoSections() {
  return (
    <section className="w-full bg-background py-10 px-4">
      <div className="mx-auto max-w-[1000px] space-y-10">

        {/* ── How We Rate ── */}
        <div>
          <div className="h-[3px] bg-primary mb-0" />
          <div className="border border-border border-t-0 bg-card">
            <div className="border-b border-border px-5 md:px-6 py-4 flex items-baseline justify-between">
              <h2 className="font-heading font-800 text-xl md:text-2xl uppercase tracking-tight text-foreground">
                How We Rate Betting Sites
              </h2>
              <span className="hidden sm:block font-mono text-[9px] text-muted-foreground uppercase tracking-widest">
                Editorial Methodology
              </span>
            </div>

            <div className="px-5 md:px-6 py-5">
              <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-5 max-w-2xl">
                ukgoldbettingsites.com applies a structured, independent methodology to assess every UKGC-licensed bookmaker. Our editorial team conducts hands-on testing over several weeks before any review is published.
              </p>

              {/* Criteria grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-border">
                {[
                  {
                    title: "Licensing & Safety",
                    items: [
                      "Verification of active UKGC licence",
                      "SSL encryption and data protection",
                      "Player fund protection status",
                      "Anti-fraud systems assessment",
                    ],
                  },
                  {
                    title: "Welcome Offers",
                    items: [
                      "Welcome offer value analysis",
                      "Wagering requirement review",
                      "Ongoing promotions quality",
                      "Terms transparency check",
                    ],
                  },
                  {
                    title: "Odds Quality",
                    items: [
                      "Premier League odds comparison",
                      "Operator margin analysis",
                      "Market breadth assessment",
                      "In-play betting coverage",
                    ],
                  },
                  {
                    title: "Usability",
                    items: [
                      "Mobile and desktop testing",
                      "Registration process review",
                      "Navigation and design audit",
                      "Cash out functionality",
                    ],
                  },
                  {
                    title: "Payments",
                    items: [
                      "Deposit and withdrawal options",
                      "Withdrawal speed testing",
                      "Fee transparency check",
                      "Minimum and maximum limits",
                    ],
                  },
                  {
                    title: "Customer Support",
                    items: [
                      "Live chat response time",
                      "Email support quality",
                      "Help centre depth",
                      "Problem resolution ability",
                    ],
                  },
                ].map((cat, i) => (
                  <div
                    key={i}
                    className="p-4 border-r border-b border-border last:border-r-0 [&:nth-child(3n)]:border-r-0 [&:nth-last-child(-n+3)]:border-b-0"
                  >
                    <h3 className="font-heading font-700 text-sm uppercase tracking-wide text-primary mb-2 pb-2 border-b border-border">
                      {cat.title}
                    </h3>
                    <ul className="space-y-1.5" role="list">
                      {cat.items.map((item, j) => (
                        <li key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="w-[5px] h-[5px] bg-primary flex-shrink-0 mt-1.5" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Scoring breakdown */}
              <div className="mt-5 border border-border">
                <div className="border-b border-border px-4 py-2 bg-muted/20">
                  <span className="font-heading font-700 text-xs uppercase tracking-widest text-foreground">
                    Scoring Breakdown
                  </span>
                </div>
                <div className="flex flex-wrap">
                  {[
                    { label: "Licensing", pct: "30%" },
                    { label: "Offers", pct: "25%" },
                    { label: "Odds", pct: "20%" },
                    { label: "Usability", pct: "15%" },
                    { label: "Support", pct: "10%" },
                  ].map((item, i) => (
                    <div key={i} className="flex-1 min-w-[60px] border-r border-border last:border-r-0 text-center px-2 py-3">
                      <div className="font-heading font-900 text-2xl text-primary leading-none">{item.pct}</div>
                      <div className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Responsible Gambling ── */}
        <div>
          <div className="h-[3px] bg-destructive/70 mb-0" />
          <div className="border border-border border-t-0 bg-card">
            <div className="border-b border-border px-5 md:px-6 py-4 flex items-center justify-between">
              <h2 className="font-heading font-800 text-xl md:text-2xl uppercase tracking-tight text-foreground">
                Responsible Gambling
              </h2>
              <span className="text-destructive font-mono text-xs border border-destructive px-2.5 py-1 uppercase tracking-widest">
                18+
              </span>
            </div>

            <div className="px-5 md:px-6 py-5 space-y-4">

              {/* Warning block */}
              <div className="bg-destructive/8 border border-destructive/30 px-4 py-3">
                <p className="font-sans text-sm text-foreground leading-relaxed">
                  <span className="font-semibold text-destructive">Important: </span>
                  Gambling can be addictive. Only bet with money you can afford to lose. If gambling is affecting your life, seek help immediately at{" "}
                  <a href="https://www.begambleaware.org" className="text-primary underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                    BeGambleAware.org
                  </a>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-border p-4">
                  <h3 className="font-heading font-700 text-sm uppercase tracking-wide text-foreground mb-3 pb-2 border-b border-border">
                    Safe Practices
                  </h3>
                  <ul className="space-y-2" role="list">
                    {[
                      "Set a monthly budget and stick to it",
                      "Set time limits for each session",
                      "Never chase losses with bigger bets",
                      "Treat betting as entertainment only",
                      "Use deposit limits and self-exclusion tools",
                    ].map((item, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5" aria-hidden="true">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border border-border p-4">
                  <h3 className="font-heading font-700 text-sm uppercase tracking-wide text-destructive mb-3 pb-2 border-b border-border">
                    Warning Signs
                  </h3>
                  <ul className="space-y-2" role="list">
                    {[
                      "Betting more than you can afford to lose",
                      "Hiding gambling activity from others",
                      "Borrowing money to place bets",
                      "Neglecting work or personal responsibilities",
                      "Feeling anxious when unable to bet",
                    ].map((item, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-destructive font-bold mt-0.5" aria-hidden="true">!</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Support services */}
              <div className="border border-border">
                <div className="border-b border-border px-4 py-2 bg-muted/20">
                  <h3 className="font-heading font-700 text-xs uppercase tracking-widest text-foreground">
                    UK Support Services
                  </h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-0">
                  {[
                    { name: "GambleAware", url: "www.begambleaware.org", desc: "Free, confidential support" },
                    { name: "GamCare", url: "www.gamcare.org.uk", desc: "National gambling helpline" },
                    { name: "Gambling Therapy", url: "www.gamblingtherapy.org", desc: "International online support" },
                    { name: "GAMSTOP", url: "www.gamstop.co.uk", desc: "UK-wide self-exclusion scheme" },
                  ].map((org, i) => (
                    <div key={i} className="border-b border-r border-border last:border-r-0 [&:nth-child(2)]:border-r-0 sm:[&:nth-child(2)]:border-r [&:nth-last-child(-n+2)]:border-b-0 px-4 py-3">
                      <div className="font-heading font-700 text-sm text-foreground">{org.name}</div>
                      <div className="text-primary font-mono text-[10px] mt-0.5">{org.url}</div>
                      <div className="text-muted-foreground text-[10px] mt-0.5">{org.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-secondary border border-border text-center py-3">
                <span className="font-heading font-700 text-sm uppercase tracking-widest text-foreground">
                  Under 18s Must Not Gamble
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
