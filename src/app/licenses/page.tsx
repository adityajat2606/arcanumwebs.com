import { PageShell } from '@/components/shared/page-shell'

const stack = [
  { name: 'Next.js', license: 'MIT', note: 'React framework, routing, and server components runtime.' },
  { name: 'React', license: 'MIT', note: 'UI library powering interactive surfaces.' },
  { name: 'Tailwind CSS', license: 'MIT', note: 'Utility-first styling system for layout and tokens.' },
  { name: 'Lucide', license: 'ISC', note: 'Icon set used across navigation and marketing pages.' },
  { name: 'Radix UI', license: 'MIT', note: 'Accessible primitives for dialogs, accordions, and menus.' },
  { name: 'TypeScript', license: 'Apache-2.0', note: 'Typed JavaScript for safer refactors across the codebase.' },
]

export default function LicensesPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Open source licenses"
      description="We ship on top of a modern OSS stack. This page lists core dependencies and their licenses; the full lockfile in the repository remains the source of truth for versions."
    >
      <div className="rounded-[1.75rem] border border-black/[0.06] bg-[#f8faff] p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-[#0b0b0b]">How to read this list</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#5c6370]">
          License names refer to the upstream projects. Unless otherwise noted, we use these libraries unmodified from public package
          registries. If you need a complete attribution bundle for compliance, export your dependency tree from the project lockfile
          alongside this summary.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {stack.map((item) => (
          <div
            key={item.name}
            className="rounded-[1.5rem] border border-black/[0.06] bg-white p-6 shadow-[0_12px_36px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(45,91,255,0.12)]"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-[#0b0b0b]">{item.name}</h3>
              <span className="rounded-full bg-[#2d5bff]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#2d5bff]">
                {item.license}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#5c6370]">{item.note}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-xs text-[#5c6370]">
        Trademarks belong to their respective owners. {new Date().getFullYear()} — thank you to the maintainers who make publishing on
        the web faster and safer.
      </p>
    </PageShell>
  )
}
