"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { BettingSite } from "@/lib/mock-data"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
}

export function BettingSiteCard({ site, rank }: BettingSiteCardProps) {
  const getPrimaryBadge = () => {
    if (site.isTopRating) return { text: "Gold Pick", color: "bg-primary text-primary-foreground" }
    if (site.isTopLine) return { text: "Best Choice", color: "bg-primary/20 text-primary border border-primary/40" }
    if (site.isPopular) return { text: "Popular", color: "bg-muted text-muted-foreground border border-border" }
    if (site.isTrending) return { text: "Trending", color: "bg-muted text-muted-foreground border border-border" }
    return null
  }

  const renderStars = (count: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < Math.floor(count) ? "fill-primary text-primary" : "fill-muted text-muted"}`}
        aria-hidden="true"
      />
    ))

  const primaryBadge = getPrimaryBadge()
  const isFirst = rank === 1

  return (
    <div
      className={`relative transition-all ${
        isFirst
          ? "border-l-[3px] border-l-primary border border-primary/40 bg-card"
          : "border border-border bg-card"
      }`}
    >
      {primaryBadge && (
        <div className="absolute -top-px left-0 right-0 flex">
          <span className={`${primaryBadge.color} px-3 py-[3px] text-[9px] font-mono uppercase tracking-[0.2em]`}>
            {primaryBadge.text}
          </span>
        </div>
      )}

      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-[44px_180px_1fr_110px_155px] md:items-center md:gap-0 px-4 py-6 pt-7">

        {/* Rank */}
        <div
          className={`w-9 h-9 flex items-center justify-center font-heading font-bold text-base flex-shrink-0 ${
            isFirst ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
          }`}
          aria-label={`Rank ${rank}`}
        >
          {rank}
        </div>

        {/* Logo */}
        <div className="flex-shrink-0 h-16 flex items-center justify-center px-3 overflow-hidden">
          <img
            src={site.logo || "/placeholder.svg"}
            alt={`${site.name} logo`}
            className="max-h-12 max-w-[150px] object-contain"
          />
        </div>

        {/* Bonus */}
        <div className="flex flex-col items-center justify-center text-center px-4">
          <p className="font-heading font-bold text-2xl md:text-3xl text-primary leading-tight">
            {site.bonus}
          </p>
          <div className="flex gap-2 mt-2 flex-wrap justify-center">
            {site.features.slice(0, 2).map((f, i) => (
              <span key={i} className="font-mono text-[9px] text-muted-foreground uppercase tracking-wide">
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="text-center flex-shrink-0">
          <div className="font-heading font-bold text-3xl text-primary leading-none">
            {site.rating.toFixed(1)}
          </div>
          <div className="font-mono text-[9px] text-muted-foreground">/ 10</div>
          <div className="flex items-center justify-center gap-0.5 mt-1.5" aria-label={`${site.stars} out of 5 stars`}>
            {renderStars(site.stars)}
          </div>
        </div>

        {/* CTA — direct link */}
        <div className="flex-shrink-0 text-center pl-4">
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            aria-label={`Claim offer at ${site.name}`}
          >
            <Button className="bg-primary hover:bg-primary/85 text-primary-foreground font-mono uppercase tracking-widest text-[10px] px-4 py-2.5 h-auto w-full">
              Claim Offer
            </Button>
          </a>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden px-3 py-3 pt-6">
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-7 h-7 flex items-center justify-center font-heading font-bold text-sm flex-shrink-0 ${
              isFirst ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            {rank}
          </div>
          <div className="flex-shrink-0 h-12 flex items-center justify-center px-2">
            <Image
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} logo`}
              width={120}
              height={44}
              className="h-9 w-auto object-contain"
            />
          </div>
          <div className="flex-1 text-right">
            <div className="font-heading font-bold text-2xl text-primary leading-none">{site.rating.toFixed(1)}</div>
            <div className="flex justify-end gap-0.5 mt-0.5" aria-label={`${site.stars} out of 5 stars`}>
              {renderStars(site.stars)}
            </div>
          </div>
        </div>

        <div className="text-center py-3 mb-3">
          <p className="font-heading font-bold text-2xl text-primary leading-tight">{site.bonus}</p>
        </div>

        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          aria-label={`Claim offer at ${site.name}`}
          className="block"
        >
          <Button className="w-full bg-primary hover:bg-primary/85 text-primary-foreground font-mono uppercase tracking-widest text-[10px] h-9">
            Claim Offer
          </Button>
        </a>
      </div>

      {/* Disclaimer */}
      <div className="px-3 md:px-4 pb-2 border-t border-border">
        <p className="text-muted-foreground/60 text-[9px] pt-1.5 font-mono">
          <span className="text-destructive font-semibold">18+</span> | {site.terms}
        </p>
      </div>
    </div>
  )
}
