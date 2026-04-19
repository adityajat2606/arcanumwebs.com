import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Mail, Newspaper, Search, UserCircle } from 'lucide-react'

const guides = [
  {
    title: 'Reading & accounts',
    description: 'Save articles, manage your profile, and understand how sessions work on this site.',
    icon: UserCircle,
    href: '/register',
    cta: 'Create an account',
  },
  {
    title: 'Search the archive',
    description: 'Use keywords, tags, and filters to jump between topics without losing context.',
    icon: Search,
    href: '/search',
    cta: 'Open search',
  },
  {
    title: 'Newsletters & briefings',
    description: 'Get weekly desk notes with what we are watching in markets, policy, and technology.',
    icon: Mail,
    href: '/register',
    cta: 'Subscribe via account',
  },
  {
    title: 'Pitch a story',
    description: 'Send a short outline, timeline, and why readers should care right now.',
    icon: Newspaper,
    href: '/contact',
    cta: 'Contact editorial',
  },
]

const faqs = [
  {
    id: 'faq-1',
    q: 'How do I report a correction?',
    a: 'Email editorial with the article URL, the sentence in question, and a primary source. We review corrections within two business days and post an update note on the story when appropriate.',
  },
  {
    id: 'faq-2',
    q: 'Can I republish excerpts?',
    a: 'Brief quotations with attribution and a link back are welcome. For syndication or full reprints, contact us so we can share the correct asset pack and terms.',
  },
  {
    id: 'faq-3',
    q: 'Where does funding come from?',
    a: 'We may partner on research or events; any sponsor relationship that could influence coverage is disclosed on the relevant page. The newsroom retains final editorial control.',
  },
  {
    id: 'faq-4',
    q: 'How are topics chosen?',
    a: 'Editors prioritize reader questions, market inflection points, and under-covered technology shifts. We publish fewer pieces on purpose—each one should earn its place on the homepage.',
  },
]

export default function HelpPage() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Help Center"
      description="Practical answers for readers, contributors, and partners—organized the same way we structure our articles: clear headings, short paragraphs, and next steps you can act on."
      actions={
        <Button className="rounded-full bg-[#2d5bff] px-6 text-white hover:bg-[#2448d9]" asChild>
          <Link href="/contact">Contact support</Link>
        </Button>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {guides.map((item) => (
          <div
            key={item.title}
            className="flex flex-col rounded-[1.75rem] border border-black/[0.06] bg-white p-6 shadow-[0_16px_48px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(45,91,255,0.1)]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2d5bff]/10 text-[#2d5bff]">
              <item.icon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-[#0b0b0b]">{item.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5c6370]">{item.description}</p>
            <Button variant="outline" className="mt-5 w-fit rounded-full border-black/10" asChild>
              <Link href={item.href}>{item.cta}</Link>
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[1.75rem] border border-black/[0.06] bg-[#f8faff] p-6 sm:p-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2d5bff]">FAQ</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0b0b0b]">Common questions</h2>
        <Accordion type="single" collapsible className="mt-6 divide-y divide-black/[0.06] rounded-2xl border border-black/[0.06] bg-white px-2">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-0 px-2">
              <AccordionTrigger className="text-left text-[#0b0b0b] hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-[#5c6370]">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </PageShell>
  )
}
