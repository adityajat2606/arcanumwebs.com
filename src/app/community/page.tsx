import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { buildPageMetadata } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/site-config'
import { Handshake, MessageCircle, ShieldAlert } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/community',
    title: `Community | ${SITE_CONFIG.name}`,
    description: 'Guidelines, office hours, and ways to participate thoughtfully in our reader community.',
    openGraphTitle: `Community | ${SITE_CONFIG.name}`,
    openGraphDescription: 'How we host discussion, handle feedback, and keep the comment space useful.',
  })
}

const norms = [
  {
    title: 'Good-faith debate',
    body: 'Challenge conclusions with sources, not volume. We delete bad-faith pile-ons and coordinated harassment.',
    icon: MessageCircle,
  },
  {
    title: 'Protect vulnerable people',
    body: 'No doxxing, medical diagnoses for strangers, or speculation about private individuals’ finances.',
    icon: ShieldAlert,
  },
  {
    title: 'Share expertise generously',
    body: 'Practitioners are welcome to add context—disclose relevant affiliations so readers can weight your perspective.',
    icon: Handshake,
  },
]

export default function CommunityPage() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Community"
      description={`${SITE_CONFIG.name} is built for readers who take markets and technology seriously. These guidelines keep conversations sharp, kind, and worth everyone’s time.`}
      actions={
        <Button className="rounded-full bg-[#2d5bff] px-6 text-white hover:bg-[#2448d9]" asChild>
          <Link href="/contact">Report an issue</Link>
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {norms.map((n) => (
          <div key={n.title} className="rounded-[1.75rem] border border-black/[0.06] bg-[#f8faff] p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#2d5bff] shadow-sm">
              <n.icon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-[#0b0b0b]">{n.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#5c6370]">{n.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[1.75rem] border border-black/[0.06] bg-white p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-[#0b0b0b]">Monthly office hours</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#5c6370]">
            On the second Thursday of each month, editors host an open thread for questions about methodology, data choices, and what we
            got wrong. Times rotate to serve different time zones.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-[#0b0b0b]">
            <li className="flex justify-between rounded-xl border border-black/[0.06] px-4 py-3">
              <span>Americas / Europe</span>
              <span className="font-medium text-[#2d5bff]">09:00 PT</span>
            </li>
            <li className="flex justify-between rounded-xl border border-black/[0.06] px-4 py-3">
              <span>Asia / Pacific</span>
              <span className="font-medium text-[#2d5bff]">19:00 SGT</span>
            </li>
          </ul>
        </div>
        <div className="rounded-[1.75rem] border border-black/[0.06] bg-white p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-[#0b0b0b]">Reader letters</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#5c6370]">
            Send a concise note—what we should investigate, which expert we should hear from, or which chart confused you. We read every
            letter even if we cannot reply individually.
          </p>
          <Button variant="outline" className="mt-6 rounded-full border-black/10" asChild>
            <Link href="/contact">Submit a letter</Link>
          </Button>
        </div>
      </div>
    </PageShell>
  )
}
