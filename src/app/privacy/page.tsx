import { PageShell } from '@/components/shared/page-shell'
import { SITE_CONFIG } from '@/lib/site-config'

const sections = [
  {
    title: 'What we collect',
    body: `When you create an account on ${SITE_CONFIG.name}, we store the profile details you provide (such as name and email) so you can sign in, receive newsletters you opt into, and manage saved reading. We also collect limited technical data—device type, approximate region, and basic usage signals—to keep the site fast, secure, and accessible.`,
  },
  {
    title: 'How we use information',
    body: 'Editorial analytics help us understand which topics resonate so we can plan coverage—not to sell granular reader profiles. Support conversations may reference your account history solely to resolve the issue you raised.',
  },
  {
    title: 'Cookies & similar technologies',
    body: 'Essential cookies keep sessions and security protections working. Optional analytics cookies help us spot broken flows; you can limit those through your browser or any cookie banner we surface on your first visit.',
  },
  {
    title: 'Sharing & processors',
    body: 'We use infrastructure and email vendors as processors; they may only use data to provide the service we contracted. We do not sell personal information. If we ever run sponsored research with identifiable data, we will disclose the scope in the relevant article or program page.',
  },
  {
    title: 'Retention & deletion',
    body: 'Account data is kept while your account is active. You may request deletion of your account; some records may persist for a short period in encrypted backups or where law requires retention.',
  },
  {
    title: 'International readers',
    body: 'We operate primarily from the United States. If you read us from elsewhere, your information may be processed in the US or other regions where our subprocessors maintain facilities—always with appropriate safeguards for transfers where required.',
  },
  {
    title: 'Contact',
    body: `Questions about this policy or a data request? Use the contact page on ${SITE_CONFIG.name} and choose Privacy as the topic so the right team receives it.`,
  },
]

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Privacy policy"
      description={`How ${SITE_CONFIG.name} collects, uses, and protects personal information across reading accounts, newsletters, and the public site you see today.`}
      contentClassName="max-w-3xl"
    >
      <p className="rounded-2xl border border-black/[0.06] bg-[#f8faff] px-5 py-4 text-sm text-[#5c6370]">
        <span className="font-semibold text-[#0b0b0b]">Last updated:</span> This page is written for a general audience; your counsel should review any bespoke commitments.
      </p>
      <div className="mt-10 space-y-8">
        {sections.map((section, i) => (
          <article key={section.title} id={`section-${i + 1}`} className="scroll-mt-28">
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
