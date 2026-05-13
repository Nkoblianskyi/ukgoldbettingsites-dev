import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PageLayout, ContentBlock } from "@/components/page-layout"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageLayout
        title="Cookie Policy"
        subtitle="Last updated: 2026 - ukgoldbettingsites.com"
      >

        <ContentBlock title="What Are Cookies?">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            Cookies are small text files stored on your device when you visit a website. They allow the site to recognise your device and remember information about your visit - improving load speed, preferences, and overall experience.
          </p>
        </ContentBlock>

        <ContentBlock title="Types of Cookies We Use">
          <div className="divide-y divide-border -m-px border border-border">
            {[
              {
                title: "Essential Cookies",
                tag: "Required",
                tagClass: "bg-secondary text-secondary-foreground",
                desc: "Necessary for the basic functioning of the website. These cannot be disabled as the site will not work correctly without them.",
              },
              {
                title: "Analytics Cookies",
                tag: "Optional",
                tagClass: "bg-muted text-muted-foreground border border-border",
                desc: "Help us understand how visitors interact with the site so we can improve content, layout, and navigation.",
              },
              {
                title: "Marketing Cookies",
                tag: "Optional",
                tagClass: "bg-muted text-muted-foreground border border-border",
                desc: "Used to deliver relevant content and track the effectiveness of our affiliate partnerships with licensed operators.",
              },
            ].map((item, i) => (
              <div key={i} className="px-4 py-4">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-heading font-700 text-sm uppercase tracking-wide text-foreground">{item.title}</h3>
                  <span className={`${item.tagClass} font-mono text-[9px] px-2 py-0.5 uppercase tracking-widest`}>
                    {item.tag}
                  </span>
                </div>
                <p className="font-sans text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Managing Cookies">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            You can manage cookie preferences via the banner displayed when you first visit the site, or by adjusting your browser settings. Please note that disabling essential cookies may affect site functionality.
          </p>
        </ContentBlock>

        <div className="border border-border bg-muted/30 px-5 py-4">
          <p className="font-sans text-muted-foreground text-xs">
            Questions? Contact us:{" "}
            <span className="text-primary font-semibold">cookies@ukgoldbettingsites.com</span>
          </p>
        </div>

      </PageLayout>
                <Footer />

    </div>
  )
}
