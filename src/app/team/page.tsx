import type { Metadata } from 'next'
import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { buildPageMetadata } from '@/lib/seo'
import { mockTeamMembers } from '@/data/mock-data'
import { SITE_CONFIG } from '@/lib/site-config'
import { ArrowRight, Linkedin } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/team',
    title: `Team | ${SITE_CONFIG.name}`,
    description: 'Editors, reporters, and operators building a calmer finance and technology publication on the open web.',
    openGraphTitle: `Team | ${SITE_CONFIG.name}`,
    openGraphDescription: 'Meet the people shaping coverage, design, and reader experience.',
  })
}

export default function TeamPage() {
  return (
    <PageShell
      eyebrow="Company"
      title="Team"
      description="A compact, senior group spanning markets, enterprise technology, and reader experience. We bias toward generalists who can go deep when the story demands it."
      actions={
        <Button variant="outline" className="rounded-full border-black/10 bg-white" asChild>
          <Link href="/careers">View open roles</Link>
        </Button>
      }
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockTeamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col rounded-[1.75rem] border border-black/[0.06] bg-white p-6 shadow-[0_16px_48px_rgba(15,23,42,0.05)] transition hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#2d5bff]/10 text-lg font-bold text-[#2d5bff]">
                {member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}
              </div>
              <div>
                <p className="font-semibold text-[#0b0b0b]">{member.name}</p>
                <p className="text-sm text-[#2d5bff]">{member.role}</p>
                <p className="mt-1 text-xs text-[#5c6370]">{member.location}</p>
              </div>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-[#5c6370]">{member.bio}</p>
            <div className="mt-5 flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-auto rounded-full px-0 py-0 text-[#2d5bff] hover:bg-transparent hover:underline" asChild>
                <Link href="/contact" className="inline-flex items-center gap-1">
                  Request intro
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <span className="text-muted-foreground/30">|</span>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full text-[#5c6370]" aria-label="LinkedIn placeholder">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-[1.75rem] border border-[#2d5bff]/20 bg-[#2d5bff]/[0.06] p-8 text-center sm:p-10">
        <h2 className="text-xl font-semibold text-[#0b0b0b]">Want to collaborate?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-[#5c6370]">
          We occasionally partner with academics, data journalists, and industry experts for scoped investigations—always with clear
          attribution and editorial control.
        </p>
        <Button className="mt-6 rounded-full bg-[#2d5bff] px-8 text-white hover:bg-[#2448d9]" asChild>
          <Link href="/contact">Start a conversation</Link>
        </Button>
      </div>
    </PageShell>
  )
}
