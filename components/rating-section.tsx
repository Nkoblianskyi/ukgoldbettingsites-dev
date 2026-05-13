import { BettingSiteCard } from "./betting-site-card"
import { bettingSites } from "@/lib/mock-data"

export function RatingSection() {
  return (
    <section className="w-full bg-background py-10 px-4">
      <div className="mx-auto max-w-[1000px]">

        {/* Cards list */}
        <div className="space-y-2">
          {bettingSites.map((site, index) => (
            <BettingSiteCard key={site.id} site={site} rank={index + 1} />
          ))}
        </div>

        {/* Note */}
        <div className="mt-4 border-t border-border pt-3">
          <p className="font-mono text-[9px] text-muted-foreground/50 uppercase tracking-widest leading-relaxed">
            Rankings based on independent editorial assessment. Affiliate links used. Gambling involves risk. 18+ only. BeGambleAware.org
          </p>
        </div>
      </div>
    </section>
  )
}
