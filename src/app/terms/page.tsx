import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { SITE_CONFIG } from '@/lib/site-config'

const sections = [
  {
    title: 'Using the site',
    body: `By accessing ${SITE_CONFIG.name}, you agree to these terms and to any supplemental guidelines we post for specific programs (such as events or research partnerships). If you disagree, please stop using the site.`,
  },
  {
    title: 'Accounts & eligibility',
    body: 'You must provide accurate registration information and keep credentials secure. We may suspend accounts that compromise security, abuse staff, or attempt to disrupt the service.',
  },
  {
    title: 'Content & intellectual property',
    body: 'Editorial content is owned by its respective authors and licensors. You receive a limited license to read, share links, and quote short excerpts with attribution. Automated scraping, bulk redistribution, or training models on our content without written permission is not allowed.',
  },
  {
    title: 'Acceptable use',
    body: 'No harassment, malware, spam, or attempts to access non-public systems. Comments or submissions must be good-faith additions to the conversation—we may remove material that violates community norms or law.',
  },
  {
    title: 'Disclaimers',
    body: 'Articles are informational and reflect the authors’ analysis as of the publish date. Nothing here is personalized financial, legal, or investment advice. Past performance does not guarantee future results.',
  },
  {
    title: 'Limitation of liability',
    body: 'To the fullest extent permitted by law, we are not liable for indirect or consequential damages arising from your use of the site. Some jurisdictions do not allow certain limitations; in those cases our liability is limited to the maximum permitted.',
  },
  {
    title: 'Changes & contact',
    body: 'We may update these terms; the “Last updated” date will change when we do. Continued use after updates constitutes acceptance. Questions? Reach out via the contact page.',
  },
]

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Terms of service"
      description={`The agreement between you and ${SITE_CONFIG.name} when you read, comment, register for an account, or otherwise use our services.`}
      contentClassName="max-w-3xl"
    >
      <p className="rounded-2xl border border-black/[0.06] bg-[#f8faff] px-5 py-4 text-sm text-[#5c6370]">
        <span className="font-semibold text-[#0b0b0b]">Last updated:</span> For privacy-specific details, see our{' '}
        <Link href="/privacy" className="font-semibold text-[#2d5bff] hover:underline">
          Privacy policy
        </Link>
        .
      </p>
      <div className="mt-10 space-y-8">
        {sections.map((section, i) => (
          <article key={section.title} className="scroll-mt-28">
            <h2 className="text-lg font-semibold text-[#0b0b0b]">
              <span className="mr-2 font-mono text-sm text-[#2d5bff]">{String(i + 1).padStart(2, '0')}</span>
              {section.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#5c6370] sm:text-base sm:leading-7">{section.body}</p>
          </article>
        ))}
      </div>
    </PageShell>
  )
}
