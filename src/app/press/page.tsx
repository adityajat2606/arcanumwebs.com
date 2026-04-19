'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { mockPressAssets, mockPressCoverage } from '@/data/mock-data'
import { Download, ExternalLink } from 'lucide-react'

export default function PressPage() {
  const { toast } = useToast()
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)
  const activeAsset = mockPressAssets.find((asset) => asset.id === activeAssetId)

  return (
    <PageShell
      eyebrow="Company"
      title="Press"
      description="Brand assets, product imagery, and recent coverage—packaged so journalists and producers can move quickly without chasing ad-hoc file shares."
      actions={
        <Button variant="outline" className="rounded-full border-black/10 bg-white" asChild>
          <Link href="/contact">Talk to communications</Link>
        </Button>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[1.75rem] border border-black/[0.06] bg-white p-6 shadow-[0_16px_48px_rgba(15,23,42,0.05)] sm:p-8">
          <h2 className="text-lg font-semibold text-[#0b0b0b]">Press kit</h2>
          <p className="mt-2 text-sm leading-relaxed text-[#5c6370]">
            Logos, UI captures, and boilerplate descriptions for broadcast, print, and digital features. Preview before download—files
            are optimized for modern CMS uploads.
          </p>
          <div className="mt-6 space-y-3">
            {mockPressAssets.map((asset) => (
              <div
                key={asset.id}
                className="rounded-2xl border border-black/[0.06] bg-[#f8faff] px-4 py-4 transition hover:border-[#2d5bff]/30"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-medium text-[#0b0b0b]">{asset.title}</p>
                    <p className="mt-1 text-xs text-[#5c6370]">{asset.description}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-[#2d5bff]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#2d5bff]">
                      {asset.fileType}
                    </span>
                    <Button size="sm" variant="outline" className="rounded-full border-black/10" onClick={() => setActiveAssetId(asset.id)}>
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      className="rounded-full bg-[#2d5bff] text-white hover:bg-[#2448d9]"
                      onClick={() =>
                        toast({
                          title: 'Download started',
                          description: `${asset.title} is downloading.`,
                        })
                      }
                    >
                      <Download className="mr-1 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#0b0b0b]">Recent coverage</h2>
          {mockPressCoverage.map((item) => (
            <div
              key={item.id}
              className="rounded-[1.5rem] border border-black/[0.06] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(45,91,255,0.12)]"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2d5bff]">{item.outlet}</div>
              <p className="mt-2 text-sm font-medium leading-snug text-[#0b0b0b]">{item.headline}</p>
              <p className="mt-2 text-xs text-[#5c6370]">{item.date}</p>
              <button
                type="button"
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#2d5bff] hover:underline"
                onClick={() =>
                  toast({
                    title: 'Link unavailable in preview',
                    description: 'Wire your production URL for outbound coverage links.',
                  })
                }
              >
                Read story
                <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(activeAsset)} onOpenChange={() => setActiveAssetId(null)}>
        <DialogContent className="max-w-3xl border-black/10">
          <DialogHeader>
            <DialogTitle>{activeAsset?.title}</DialogTitle>
          </DialogHeader>
          {activeAsset?.previewUrl && (
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-black/[0.06] bg-[#f8faff]">
              <Image src={activeAsset.previewUrl} alt={activeAsset.title} fill className="object-cover" />
            </div>
          )}
          <p className="text-sm text-[#5c6370]">{activeAsset?.description}</p>
          <DialogFooter>
            <Button variant="outline" className="rounded-full border-black/10" onClick={() => setActiveAssetId(null)}>
              Close
            </Button>
            <Button
              className="rounded-full bg-[#2d5bff] text-white hover:bg-[#2448d9]"
              onClick={() =>
                toast({
                  title: 'Download started',
                  description: `${activeAsset?.title} is downloading.`,
                })
              }
            >
              Download {activeAsset?.fileType}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageShell>
  )
}
