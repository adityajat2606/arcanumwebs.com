'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { Button } from '@/components/ui/button'

export function RegisterForm({ actionClassName }: { actionClassName: string }) {
  const { signup, isLoading } = useAuth()
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await signup(name, email, password)
    router.push('/articles')
    router.refresh()
  }

  return (
    <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
      <input
        required
        type="text"
        autoComplete="name"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
        className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm"
        placeholder="Full name"
      />
      <input
        required
        type="email"
        autoComplete="email"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
        className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm"
        placeholder="Email address"
      />
      <input
        required
        type="password"
        autoComplete="new-password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
        className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm"
        placeholder="Password"
      />
      <Button type="submit" disabled={isLoading} className={`h-12 rounded-full px-6 text-sm font-semibold ${actionClassName}`}>
        {isLoading ? 'Creating…' : 'Create account'}
      </Button>
      <p className="text-xs text-muted-foreground">
        By continuing you agree to the site terms. This demo saves your session in the browser only.
      </p>
    </form>
  )
}
