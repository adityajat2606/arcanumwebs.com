import Link from 'next/link'
import { Clock, FileText, Mail, MapPin, MessageSquare, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContactForm } from '@/components/contact/contact-form'
import { SITE_CONFIG } from '@/lib/site-config'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'
import { ContactLeadForm } from "@/components/shared/contact-lead-form";

const lanes = [
  {
    icon: FileText,
    title: 'Editorial & pitches',
    body: 'Long-form ideas, corrections, expert commentary, and data partnerships that strengthen finance and technology coverage.',
  },
  {
    icon: Mail,
    title: 'Press & syndication',
    body: 'Media requests, reprint permissions, logo use, and co-branded research programs.',
  },
  {
    icon: MessageSquare,
    title: 'Readers & accounts',
    body: 'Newsletters, saved reading, accessibility, or anything that gets in the way of finishing a story.',
  },
]

const expectations = [
  { label: 'First reply', value: 'Within 2 business days' },
  { label: 'Editorial review', value: 'Pitch queue reviewed weekly' },
  { label: 'Offices', value: 'Remote-first · US / EU time zones' },
]

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  return (
    <div className="min-h-screen bg-white text-[#0b0b0b]">
      <NavbarShell />
      <main>
        <section className="border-b border-black/[0.06] bg-[linear-gradient(180deg,#ffffff_0%,#f4f7ff_100%)]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2d5bff]">Contact</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">Let’s route your note to the right desk</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5c6370] sm:text-lg">
              Tell us whether you are pitching a story, coordinating press, or fixing a reader experience issue—we reply faster when the
              subject line matches how we work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/help"
                className="inline-flex items-center rounded-full border border-black/[0.08] bg-white px-5 py-2.5 text-sm font-semibold text-[#0b0b0b] transition hover:border-[#2d5bff]/35 hover:shadow-md"
              >
                Help center
              </Link>
              
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.02fr] lg:items-start">
            <div className="space-y-6">
              

              <div className="space-y-4">
                {lanes.map((lane) => (
                  <div
                    key={lane.title}
                    className="rounded-[1.5rem] border border-black/[0.06] bg-[#f8faff] p-5 transition hover:-translate-y-0.5 hover:border-[#2d5bff]/25 hover:shadow-[0_16px_48px_rgba(45,91,255,0.1)] sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#2d5bff] shadow-sm">
                        <lane.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-[#0b0b0b]">{lane.title}</h2>
                        <p className="mt-2 text-sm leading-relaxed text-[#5c6370]">{lane.body}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-dashed border-black/10 bg-white px-5 py-4 text-sm text-[#5c6370]">
                <MapPin className="h-4 w-4 shrink-0 text-[#2d5bff]" />
                <span>
                  Mailing address and phone routing are shared after we confirm your request—avoid posting PII in the first message when
                  possible.
                </span>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/[0.08] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#2d5bff]" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2d5bff]">Write to {SITE_CONFIG.name}</p>
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0b0b0b]">Send a message</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#5c6370]">
                The more context you share—URLs, publish dates, and desired outcomes—the faster we can triage.
              </p>
              <ContactLeadForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
