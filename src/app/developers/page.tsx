import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'
import { Book, Braces, Webhook } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/developers',
    title: `Developers | ${SITE_CONFIG.name}`,
    description: 'Technical overview for partners integrating with our reading experience, feeds, and status APIs.',
    openGraphTitle: `Developers | ${SITE_CONFIG.name}`,
    openGraphDescription: 'Architecture notes, integration patterns, and where to monitor availability.',
  })
}

const surfaces = [
  {
    title: 'Public site & routes',
    body: 'Stable URLs for articles, search, and marketing pages. We optimize for edge caching and HTML-first delivery where possible.',
    icon: Book,
  },
  {
    title: 'Structured content',
    body: 'Articles expose consistent metadata—title, summary, hero media, and authorship—so partners can render cards without scraping fragile DOM.',
    icon: Braces,
  },
  {
    title: 'Webhooks (roadmap)',
    body: 'Enterprise syndication partners can request early access to publish notifications and correction events—contact us with your use case.',
    icon: Webhook,
  },
]

export default function DevelopersPage() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Developers"
      description="Build alongside our editorial platform—whether you are embedding article cards, monitoring uptime, or planning a research integration."
      actions={
        <Button variant="outline" className="rounded-full border-black/10 bg-white" asChild>
          <Link href="/status">View status</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {surfaces.map((s) => (
          <div key={s.title} className="rounded-[1.75rem] border border-black/[0.06] bg-white p-6 shadow-[0_16px_48px_rgba(15,23,42,0.05)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2d5bff]/10 text-[#2d5bff]">
              <s.icon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-[#0b0b0b]">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#5c6370]">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[1.75rem] border border-black/[0.06] bg-[#f8faff] p-8">
          <h2 className="text-lg font-semibold text-[#0b0b0b]">Performance budgets</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#5c6370]">
            We target fast LCP on article pages, respect prefers-reduced-motion, and keep third-party scripts to a minimum. If your embed
            adds layout shift, we may delay loading it until reader interaction.
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-black/[0.06] bg-[#0b0b0b] p-8 text-white">
          <h2 className="text-lg font-semibold">Need a partner engineer?</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            For scoped integrations—custom newsletters, data feeds, or compliance reviews—contact partnerships with a short technical
            brief and timeline.
          </p>
          <Button className="mt-6 rounded-full bg-[#2d5bff] text-white hover:bg-[#2448d9]" asChild>
            <Link href="/contact">Contact integrations</Link>
          </Button>
        </div>
      </div>
    </PageShell>
  )
}
