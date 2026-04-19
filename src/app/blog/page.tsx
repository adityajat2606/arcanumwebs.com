import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'
import { ArrowRight, Mic2, Sparkles, Telescope } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/blog',
    title: `Editorial blog | ${SITE_CONFIG.name}`,
    description: 'Notes from the newsroom—how we report, what we are watching, and practical guides for reading markets coverage critically.',
    openGraphTitle: `Editorial blog | ${SITE_CONFIG.name}`,
    openGraphDescription: 'Behind-the-scenes notes, reading lists, and methodology from our finance and technology desk.',
  })
}

const columns = [
  {
    title: 'From the editor',
    icon: Mic2,
    body: 'Short essays on framing, ethics, and the tradeoffs we make when a story competes with the news cycle.',
    href: '/articles',
  },
  {
    title: 'Field notes',
    icon: Telescope,
    body: 'What changed our mind on a beat, new datasets we are testing, and collaborations with researchers.',
    href: '/articles',
  },
  {
    title: 'How we work',
    icon: Sparkles,
    body: 'Fact-checking cadence, corrections policy, and tips for getting a timely response from the desk.',
    href: '/help',
  },
]

export default function BlogPage() {
  return (
    <PageShell
      eyebrow="Company"
      title="Editorial blog"
      description="A slower lane for transparency: how we cover finance and technology, what we are learning, and how to get the most from our reporting."
      actions={
        <Button className="rounded-full bg-[#2d5bff] px-6 text-white hover:bg-[#2448d9]" asChild>
          <Link href="/articles">Browse latest articles</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {columns.map((col) => (
          <div
            key={col.title}
            className="rounded-[1.75rem] border border-black/[0.06] bg-white p-6 shadow-[0_16px_48px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(45,91,255,0.12)]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2d5bff]/10 text-[#2d5bff]">
              <col.icon className="h-5 w-5" />
            </div>
            <h2 className="mt-5 text-lg font-semibold text-[#0b0b0b]">{col.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#5c6370]">{col.body}</p>
            <Link href={col.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2d5bff] hover:underline">
              Continue
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-[1.75rem] border border-black/[0.06] bg-[#f8faff] p-8 sm:p-10">
        <h2 className="text-xl font-semibold text-[#0b0b0b]">Reading list · April</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#5c6370]">
          Each month we highlight a handful of external papers and primary sources that informed our coverage—no paywalls on public data,
          just direct links you can verify yourself.
        </p>
        <ul className="mt-6 space-y-3 text-sm text-[#0b0b0b]">
          <li className="flex gap-3 rounded-xl border border-black/[0.06] bg-white px-4 py-3">
            <span className="font-mono text-[#2d5bff]">01</span>
            <span>Central bank communications tracker (public speeches corpus)</span>
          </li>
          <li className="flex gap-3 rounded-xl border border-black/[0.06] bg-white px-4 py-3">
            <span className="font-mono text-[#2d5bff]">02</span>
            <span>Semiconductor capacity reports from industry associations</span>
          </li>
          <li className="flex gap-3 rounded-xl border border-black/[0.06] bg-white px-4 py-3">
            <span className="font-mono text-[#2d5bff]">03</span>
            <span>Climate risk disclosures from major issuers (EDGAR / registry mirrors)</span>
          </li>
        </ul>
      </div>
    </PageShell>
  )
}
