'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

export function ContactForm() {
  const { toast } = useToast()
  const [pending, setPending] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    window.setTimeout(() => {
      setPending(false)
      toast({
        title: 'Message received',
        description: 'Thanks for reaching out. This demo does not send email—use your production form handler when wired.',
      })
      ;(e.target as HTMLFormElement).reset()
    }, 600)
  }

  return (
    <form className="mt-2 grid gap-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wide text-[#5c6370]">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          required
          className="mt-2 h-12 w-full rounded-xl border border-black/[0.1] bg-white px-4 text-sm text-[#0b0b0b] outline-none transition focus:border-[#2d5bff]/50 focus:ring-2 focus:ring-[#2d5bff]/20"
          placeholder="Your name"
          autoComplete="name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wide text-[#5c6370]">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="mt-2 h-12 w-full rounded-xl border border-black/[0.1] bg-white px-4 text-sm text-[#0b0b0b] outline-none transition focus:border-[#2d5bff]/50 focus:ring-2 focus:ring-[#2d5bff]/20"
          placeholder="you@company.com"
          autoComplete="email"
        />
      </div>
      <div>
        <label htmlFor="contact-topic" className="text-xs font-semibold uppercase tracking-wide text-[#5c6370]">
          Topic
        </label>
        <input
          id="contact-topic"
          name="topic"
          className="mt-2 h-12 w-full rounded-xl border border-black/[0.1] bg-white px-4 text-sm text-[#0b0b0b] outline-none transition focus:border-[#2d5bff]/50 focus:ring-2 focus:ring-[#2d5bff]/20"
          placeholder="e.g. Story pitch, syndication, bug on article page"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wide text-[#5c6370]">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          className="mt-2 min-h-[180px] w-full rounded-2xl border border-black/[0.1] bg-white px-4 py-3 text-sm text-[#0b0b0b] outline-none transition focus:border-[#2d5bff]/50 focus:ring-2 focus:ring-[#2d5bff]/20"
          placeholder="Share context, links, and what outcome you are hoping for—we route faster with specifics."
        />
      </div>
      <Button
        type="submit"
        disabled={pending}
        className="h-12 rounded-full bg-[#2d5bff] text-sm font-semibold text-white shadow-[0_12px_32px_rgba(45,91,255,0.28)] hover:bg-[#2448d9] disabled:opacity-70"
      >
        {pending ? 'Sending…' : 'Send message'}
      </Button>
      <p className="text-xs leading-relaxed text-[#5c6370]">
        By submitting, you agree we may store this message to respond. For sensitive documents, say so in the note and we will suggest a
        secure channel.
      </p>
    </form>
  )
}
