import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteContent } from '@/config/site.content'

export function CTASection() {
  return (
    <section className="pb-24 pt-6 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#2d5bff] p-8 text-white shadow-[0_28px_80px_rgba(45,91,255,0.35)] sm:p-10 lg:p-14">
          <div
            className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-white/10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 left-1/3 h-72 w-72 rounded-full border border-white/10"
            aria-hidden
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90">
                <Sparkles className="h-3.5 w-3.5" />
                {siteContent.cta.badge}
              </div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{siteContent.cta.title}</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">{siteContent.cta.description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-end">
              <div className="flex min-h-[52px] flex-1 items-center rounded-full bg-white/95 px-2 py-2 shadow-inner sm:max-w-md lg:min-w-[280px]">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 border-0 bg-transparent px-4 text-sm text-[#0b0b0b] outline-none placeholder:text-[#5c6370]"
                />
                <Button
                  size="sm"
                  asChild
                  className="h-10 shrink-0 rounded-full bg-[#2d5bff] px-5 text-sm font-semibold text-white hover:bg-[#2448d9]"
                >
                  <Link href={siteContent.cta.primaryCta.href}>Subscribe</Link>
                </Button>
              </div>
              <Button
                size="sm"
                variant="outline"
                asChild
                className="h-10 rounded-full border-white/35 bg-transparent px-5 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={siteContent.cta.secondaryCta.href}>{siteContent.cta.secondaryCta.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
