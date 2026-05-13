import Image from "next/image"
import { ShieldCheck, Star, Clock } from "lucide-react"

function getUpdatedLabel() {
  const now = new Date()
  return now.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export function Hero() {
  const updatedDate = getUpdatedLabel()
  return (
    <section className="relative w-full h-[250px] md:h-[350px] flex flex-col overflow-hidden">
      {/* Full-width sport background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/stadium-hero.jpg"
          alt="Premier League football stadium packed with supporters"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center px-4">
        <div className="mx-auto w-full max-w-[1000px]">

          {/* Top rule + label */}
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <div className="h-[2px] w-6 bg-primary flex-shrink-0" aria-hidden="true" />
            <span className="font-mono text-[10px] md:text-[11px] text-primary uppercase tracking-[0.2em]">
              Independent Editorial &nbsp;·&nbsp; UKGC Licensed Only
            </span>
          </div>

          {/* Headline */}
          <div className="border-t-[3px] border-primary pt-3 md:pt-4 mb-4 md:mb-5">
            <h1 className="font-heading font-black text-3xl md:text-5xl uppercase leading-none tracking-tight text-balance text-white">
              Best UK Betting Sites
            </h1>
          </div>

          {/* Standfirst */}
          <p className="font-sans text-white/80 text-sm md:text-base leading-relaxed max-w-lg mb-5 md:mb-6">
            Expert-ranked UKGC-licensed bookmakers. Reviewed independently - no paid placements.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
              <span className="font-mono text-[11px] text-white/70 uppercase tracking-wider">UKGC Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
              <span className="font-mono text-[11px] text-white/70 uppercase tracking-wider">Expert Reviewed</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
              <span className="font-mono text-[11px] text-white/70 uppercase tracking-wider">Updated Monthly</span>
            </div>
          </div>

        </div>
      </div>

      {/* Updated date strip */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/40 backdrop-blur-sm py-1.5 px-4">
        <div className="mx-auto w-full max-w-[1000px] flex items-center gap-2">
          <div className="h-[1px] w-4 bg-primary flex-shrink-0" aria-hidden="true" />
          <span className="font-mono text-[10px] text-white/50 uppercase tracking-[0.15em]">
            Rating last updated:&nbsp;
            <time dateTime={new Date().toISOString().slice(0, 10)} className="text-primary/90">
              {updatedDate}
            </time>
          </span>
        </div>
      </div>
    </section>
  )
}
