import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/site-config'
import { Globe2, Laptop, PenLine, Users } from 'lucide-react'

const roles = [
  {
    title: 'Senior markets reporter',
    location: 'Remote (US time zones)',
    type: 'Full-time',
    level: 'Senior',
    blurb: 'Own a coverage lane across rates, FX, or credit with a mix of breaking analysis and longer guides.',
  },
  {
    title: 'Technology editor',
    location: 'Hybrid · New York',
    type: 'Full-time',
    level: 'Lead',
    blurb: 'Shape enterprise AI, infra, and security coverage—partnering with reporters on structure and headlines.',
  },
  {
    title: 'Audience & growth lead',
    location: 'Remote',
    type: 'Full-time',
    level: 'Mid',
    blurb: 'Newsletters, partnerships, and lifecycle programs that respect readers’ attention and our editorial voice.',
  },
]

const benefits = [
  { title: 'Editorial autonomy', body: 'Room to propose beats, defend sourcing standards, and push back on noisy trends.' },
  { title: 'Modern publishing stack', body: 'Fast pages, accessible components, and tooling that stays out of your way.' },
  { title: 'Learning budget', body: 'Conferences, data licenses, and books—aligned with the beats you cover.' },
  { title: 'Calm pace', body: 'We optimize for fewer, stronger stories—not daily quotas that dilute the homepage.' },
]

const values = [
  { icon: PenLine, label: 'Clarity beats volume' },
  { icon: Laptop, label: 'Ship readable product' },
  { icon: Users, label: 'Collaborate generously' },
  { icon: Globe2, label: 'Think globally' },
]

export default function CareersPage() {
  return (
    <PageShell
      eyebrow="Company"
      title="Careers"
      description={`Join ${SITE_CONFIG.name} as we build a finance and technology publication readers return to—precise language, disciplined visuals, and respect for people’s time.`}
      actions={
        <Button className="rounded-full bg-[#2d5bff] px-6 text-white hover:bg-[#2448d9]" asChild>
          <Link href="/contact">Introduce yourself</Link>
        </Button>
      }
    >
      <div className="flex flex-wrap gap-3">
        {values.map((v) => (
          <div
            key={v.label}
            className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-[#f8faff] px-4 py-2 text-sm font-medium text-[#0b0b0b]"
          >
            <v.icon className="h-4 w-4 text-[#2d5bff]" />
            {v.label}
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          <h2 className="text-xl font-semibold tracking-tight text-[#0b0b0b]">Open roles</h2>
          {roles.map((role) => (
            <div
              key={role.title}
              className="rounded-[1.75rem] border border-black/[0.06] bg-white p-6 shadow-[0_16px_48px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5"
            >
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#2d5bff]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#2d5bff]">
                  {role.level}
                </span>
                <span className="rounded-full border border-black/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#5c6370]">
                  {role.type}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#0b0b0b]">{role.title}</h3>
              <p className="mt-1 text-sm text-[#5c6370]">{role.location}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#5c6370]">{role.blurb}</p>
              <Button variant="outline" className="mt-5 rounded-full border-black/10" asChild>
                <Link href="/contact">Discuss this role</Link>
              </Button>
            </div>
          ))}
        </div>
        <div className="rounded-[1.75rem] border border-black/[0.06] bg-[#f8faff] p-8">
          <h2 className="text-lg font-semibold text-[#0b0b0b]">Why join now</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#5c6370]">
            We are assembling a compact newsroom for the next era of markets coverage—where design, data, and narrative feel inseparable.
          </p>
          <ul className="mt-8 space-y-5">
            {benefits.map((b) => (
              <li key={b.title} className="border-t border-black/[0.06] pt-5 first:border-t-0 first:pt-0">
                <p className="font-semibold text-[#0b0b0b]">{b.title}</p>
                <p className="mt-2 text-sm text-[#5c6370]">{b.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  )
}
