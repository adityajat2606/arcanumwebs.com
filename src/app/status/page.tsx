import { PageShell } from '@/components/shared/page-shell'
import { Activity, Clock, Server } from 'lucide-react'

const services = [
  { name: 'Reading experience', detail: 'Article pages, images, and typography delivery', status: 'Operational', icon: Server },
  { name: 'Search & discovery', detail: 'Site search and category filters', status: 'Operational', icon: Activity },
  { name: 'Newsletter signup', detail: 'Account creation and subscription surfaces', status: 'Operational', icon: Clock },
]

const incidents = [
  { date: 'April 8, 2026', title: 'Elevated latency on image CDN', detail: 'Resolved within 42 minutes; no article data loss.', status: 'Resolved' },
  { date: 'March 21, 2026', title: 'Scheduled database maintenance', detail: 'Brief read-only window during off-peak hours.', status: 'Resolved' },
  { date: 'March 2, 2026', title: 'Search index refresh delay', detail: 'New articles appeared in listings immediately; search caught up within 25 minutes.', status: 'Resolved' },
]

export default function StatusPage() {
  return (
    <PageShell
      eyebrow="Resources"
      title="System status"
      description="Live posture for the surfaces readers rely on—article delivery, discovery, and account tools. Timestamps reflect the editorial site, not third-party data vendors."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.name}
            className="rounded-[1.75rem] border border-black/[0.06] bg-white p-6 shadow-[0_16px_48px_rgba(15,23,42,0.05)]"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2d5bff]/10 text-[#2d5bff]">
                <service.icon className="h-5 w-5" />
              </div>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-800">
                {service.status}
              </span>
            </div>
            <h2 className="mt-5 text-lg font-semibold text-[#0b0b0b]">{service.name}</h2>
            <p className="mt-2 text-sm text-[#5c6370]">{service.detail}</p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight text-[#0b0b0b]">Recent incidents</h2>
        <p className="mt-2 max-w-2xl text-sm text-[#5c6370]">
          We post notes when reader-facing systems degrade—plus what we changed afterward so the same class of issue is less likely
          to repeat.
        </p>
        <div className="mt-8 space-y-4">
          {incidents.map((incident) => (
            <div
              key={incident.title}
              className="rounded-[1.5rem] border border-black/[0.06] bg-[#f8faff] px-5 py-4 sm:flex sm:items-start sm:justify-between sm:gap-6"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#2d5bff]">{incident.date}</p>
                <p className="mt-2 font-medium text-[#0b0b0b]">{incident.title}</p>
                <p className="mt-2 text-sm text-[#5c6370]">{incident.detail}</p>
              </div>
              <span className="mt-3 inline-flex shrink-0 self-start rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-[#5c6370] sm:mt-2">
                {incident.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
