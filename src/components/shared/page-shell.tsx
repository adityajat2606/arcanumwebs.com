'use client'

import type { ReactNode } from 'react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { cn } from '@/lib/utils'

export function PageShell({
  eyebrow,
  title,
  description,
  actions,
  children,
  contentClassName,
}: {
  eyebrow?: string
  title: string
  description?: string
  actions?: ReactNode
  children?: ReactNode
  contentClassName?: string
}) {
  return (
    <div className="min-h-screen bg-white text-[#0b0b0b]">
      <NavbarShell />
      <main>
        <section className="border-b border-black/[0.06] bg-[linear-gradient(180deg,#ffffff_0%,#f4f7ff_100%)]">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                {eyebrow ? (
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#2d5bff]">{eyebrow}</p>
                ) : null}
                <h1
                  className={cn(
                    'text-4xl font-semibold tracking-tight text-[#0b0b0b] sm:text-5xl',
                    eyebrow ? 'mt-4' : '',
                  )}
                >
                  {title}
                </h1>
                {description ? (
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5c6370] sm:text-lg">{description}</p>
                ) : null}
              </div>
              {actions ? <div className="flex flex-shrink-0 flex-wrap gap-3">{actions}</div> : null}
            </div>
          </div>
        </section>
        <section className={cn('mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16', contentClassName)}>
          {children}
        </section>
      </main>
      <Footer />
    </div>
  )
}
