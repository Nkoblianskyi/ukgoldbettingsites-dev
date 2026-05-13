import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PageLayoutProps {
  title: string
  subtitle?: string
  badge?: { text: string; className: string }
  children: React.ReactNode
}

export function PageLayout({ title, subtitle, badge, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Inner page hero bar */}
      <div className="w-full bg-card border-b border-border px-4 py-6">
        <div className="mx-auto max-w-[1000px]">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground hover:text-primary transition-colors mb-4 uppercase tracking-widest"
          >
            <ArrowLeft className="w-3 h-3" aria-hidden="true" />
            Back to Rankings
          </Link>
          <div className="h-[3px] bg-primary mb-4 w-12" />
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="font-heading font-900 text-3xl md:text-4xl uppercase tracking-tight text-foreground leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="font-mono text-[10px] text-muted-foreground mt-1.5 uppercase tracking-widest">
                  {subtitle}
                </p>
              )}
            </div>
            {badge && (
              <span className={`flex-shrink-0 font-mono text-xs border px-3 py-1 uppercase tracking-widest ${badge.className}`}>
                {badge.text}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className="mx-auto max-w-[1000px] px-4 py-8 space-y-4">
        {children}
      </div>
    </div>
  )
}

interface ContentBlockProps {
  title: string
  children: React.ReactNode
  accentColor?: string
}

export function ContentBlock({ title, children, accentColor }: ContentBlockProps) {
  return (
    <div className="border border-border bg-card">
      <div
        className="border-b border-border px-5 py-3"
        style={accentColor ? { borderTopWidth: 2, borderTopColor: accentColor, borderTopStyle: "solid" } : undefined}
      >
        <h2 className="font-heading font-700 text-sm md:text-base uppercase tracking-wide text-foreground">
          {title}
        </h2>
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>
  )
}
