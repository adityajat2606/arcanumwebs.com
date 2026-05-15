import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'

const rows = [
  {
    title: 'Strictly necessary',
    purpose: 'Authentication, security, load balancing, and remembering consent choices.',
    duration: 'Session to 12 months',
    control: 'Cannot be disabled without breaking core functionality.',
  },
  {
    title: 'Functional',
    purpose: 'Remembering preferences such as theme (if offered) or dismissed banners.',
    duration: 'Up to 12 months',
    control: 'Manage via site settings when available; otherwise clear site data in your browser.',
  },
  {
    title: 'Analytics (aggregated)',
    purpose: 'Understanding which sections readers finish, where errors occur, and how performance varies by device.',
    duration: 'Up to 24 months (pseudonymous IDs)',
    control: 'Use browser controls or any opt-out link we provide in the consent layer.',
  },
]

export default function CookiesPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Cookie policy"
      description="Plain-language detail on the cookies and local storage keys we use to keep reading fast, accounts secure, and our editorial roadmap informed."
      contentClassName="max-w-4xl"
    >
      <p className="text-sm leading-relaxed text-[#5c6370]">
        Cookies are small text files stored on your device. We use them sparingly and pair them with server-side protections where
        possible. This page should be read together with our{' '}
        <Link href="/privacy" className="font-semibold text-[#2d5bff] hover:underline">
          Privacy policy
        </Link>
        .
      </p>

      <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-black/[0.06] bg-white shadow-sm">
        <div className="grid grid-cols-12 gap-3 border-b border-black/[0.06] bg-[#f8faff] px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-[#5c6370] sm:px-6">
          <div className="col-span-12 sm:col-span-3">Category</div>
          <div className="col-span-12 hidden sm:col-span-4 sm:block">Purpose</div>
          <div className="col-span-12 hidden sm:col-span-2 sm:block">Duration</div>
          <div className="col-span-12 hidden sm:col-span-3 sm:block">Your control</div>
        </div>
        {rows.map((row) => (
          <div
            key={row.title}
            className="grid grid-cols-1 gap-4 border-b border-black/[0.06] px-4 py-5 last:border-b-0 sm:grid-cols-12 sm:items-start sm:px-6"
          >
            <div className="sm:col-span-3">
              <p className="font-semibold text-[#0b0b0b]">{row.title}</p>
            </div>
            <p className="text-sm text-[#5c6370] sm:col-span-4">{row.purpose}</p>
            <p className="text-sm text-[#5c6370] sm:col-span-2">{row.duration}</p>
            <p className="text-sm text-[#5c6370] sm:col-span-3">{row.control}</p>
          </div>
        ))}
      </div>

    

      <p className="mt-8 text-xs text-[#5c6370]">Last updated: April 18, 2026</p>
    </PageShell>
  )
}
