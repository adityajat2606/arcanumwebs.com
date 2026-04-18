import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { mockTeamMembers } from '@/data/mock-data'
import { SITE_CONFIG } from '@/lib/site-config'
import { ArrowRight, BookOpen, LineChart, Shield } from 'lucide-react'

const pillars = [
  {
    title: 'Evidence-led reporting',
    body: 'We prioritize sourcing, context, and clarity—so readers can trust what they scan in two minutes or study for twenty.',
    icon: LineChart,
  },
  {
    title: 'Reading-first product',
    body: 'Typography, spacing, and motion are tuned for long-form finance and technology stories—not generic marketplace tiles.',
    icon: BookOpen,
  },
  {
    title: 'Editorial independence',
    body: 'Sponsors and partners are disclosed where relevant; the newsroom maintains final say on headlines, framing, and corrections.',
    icon: Shield,
  },
]

const stats = [
  { value: '40+', label: 'Deep dives & explainers' },
  { value: '12', label: 'Core editorial beats' },
  { value: 'Weekly', label: 'Desk notes & briefings' },
]

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="Company"
      title={`About ${SITE_CONFIG.name}`}
      description="We publish finance and technology analysis for readers who want signal over noise—structured like a magazine, delivered on the open web."
      actions={
        <>
          <Button variant="outline" className="rounded-full border-black/10 bg-white" asChild>
            <Link href="/team">Meet the team</Link>
          </Button>
          <Button className="rounded-full bg-[#2d5bff] px-6 text-white shadow-[0_12px_32px_rgba(45,91,255,0.28)] hover:bg-[#2448d9]" asChild>
            <Link href="/contact">Contact editorial</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="rounded-[1.75rem] border border-black/[0.06] bg-[#f8faff] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-[#0b0b0b]">Why we built this desk</h2>
          <p className="mt-4 text-sm leading-7 text-[#5c6370] sm:text-base sm:leading-8">
            Markets move fast, but understanding them still rewards patience. {SITE_CONFIG.name} exists to give serious readers a
            calmer surface: sharp ledes, disciplined sections, and visuals that support the story instead of competing with it.
          </p>
          <p className="mt-4 text-sm leading-7 text-[#5c6370] sm:text-base sm:leading-8">
            Whether you are tracking rates and FX, following AI infrastructure, or mapping policy risk, our goal is the same—help
            you orient quickly, then go deeper when you choose to.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-black/[0.06] bg-white px-4 py-5 text-center shadow-sm">
                <div className="text-2xl font-semibold tracking-tight text-[#2d5bff]">{item.value}</div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wide text-[#5c6370]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[1.75rem] border border-black/[0.06] bg-white p-6 shadow-[0_16px_48px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(45,91,255,0.1)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2d5bff]/10 text-[#2d5bff]">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0b0b0b]">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5c6370]">{pillar.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-black/[0.06] pt-16">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2d5bff]">Editorial roster</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0b0b0b]">People behind the bylines</h2>
            <p className="mt-3 max-w-xl text-sm text-[#5c6370]">A small, senior group of editors, reporters, and researchers—listed here in brief.</p>
          </div>
          <Link href="/team" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2d5bff] hover:underline">
            Full team directory
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockTeamMembers.slice(0, 6).map((member) => (
            <div
              key={member.id}
              className="rounded-[1.75rem] border border-black/[0.06] bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d5bff]/10 text-sm font-bold text-[#2d5bff]">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#0b0b0b]">{member.name}</p>
                  <p className="text-xs text-[#5c6370]">{member.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#5c6370]">{member.bio}</p>
              <p className="mt-3 text-xs text-[#5c6370]/80">{member.location}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
