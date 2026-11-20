
import { useState, type FormEvent } from 'react'

type AuthMode = 'signin' | 'signup'

export default function Account() {
  const [mode, setMode] = useState<AuthMode>('signin')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  function switchMode(nextMode: AuthMode) {
    setMode(nextMode)
    setMessage('')
    setError('')
    setPassword('')
    setConfirmPassword('')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    setMessage('')

    if (mode === 'signup' && !name.trim()) {
      setError('Please enter your name.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }

    if (password.length < 8) {
      setError('Your password must contain at least 8 characters.')
      return
    }

    if (mode === 'signup' && password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setMessage(
      'Form validation passed. Authentication is not connected yet; no account has been created and you are not signed in.'
    )
  }

  return (
    <div className="mx-auto max-w-6xl py-8 sm:py-14">
      <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#101B22] lg:grid-cols-2">

        {/* Visual panel */}
        <section className="relative hidden min-h-[620px] overflow-hidden border-r border-white/10 bg-[#0B171C] p-12 lg:flex lg:flex-col lg:justify-between">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-28 h-96 w-96 rounded-full border border-[#68E2CF]/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-44 h-72 w-72 rounded-full border border-[#68E2CF]/20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-60 h-48 w-48 rounded-full bg-[#68E2CF]/5 blur-3xl"
          />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#68E2CF]">
              RenderGuard Workspace
            </p>

            <h2 className="mt-8 max-w-sm text-4xl font-semibold leading-tight tracking-tight">
              Your creative workflow, connected.
            </h2>

            <p className="mt-6 max-w-sm leading-8 text-slate-400">
              A future home for your generation history, project assets,
              and workspace preferences.
            </p>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-[#14242B]/90 p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-200">
                Workspace preview
              </span>
              <span className="rounded-full border border-[#68E2CF]/30 px-3 py-1 text-xs text-[#68E2CF]">
                Planned
              </span>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3">
              {[
                { label: 'Textures', icon: '▦' },
                { label: 'Audio', icon: '♫' },
                { label: '3D Assets', icon: '⬡' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-[#0B171C] px-2 py-5 text-center"
                >
                  <div className="text-2xl text-[#68E2CF]">{item.icon}</div>
                  <div className="mt-3 text-xs text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-2/3 rounded-full bg-[#68E2CF]/70" />
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Illustrative interface — not connected to live account data.
            </p>
          </div>
        </section>

        {/* Authentication form */}
        <section className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
          <div className="w-full max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#68E2CF]">
              Account
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {mode === 'signin' ? 'Welcome back.' : 'Create your account.'}
            </h1>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              {mode === 'signin'
                ? 'Your RenderGuard workspace starts here.'
                : 'Set up your future RenderGuard workspace.'}
            </p>

            <div className="mt-8 flex rounded-xl bg-[#080F14] p-1" role="group" aria-label="Account form mode">
              <button
                type="button"
                onClick={() => switchMode('signin')}
                aria-pressed={mode === 'signin'}
                className={`flex-1 rounded-lg px-4 py-3 text-sm font-medium transition ${
                  mode === 'signin'
                    ? 'bg-[#25413E] text-[#68E2CF]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Sign in
              </button>

              <button
                type="button"
                onClick={() => switchMode('signup')}
                aria-pressed={mode === 'signup'}
                className={`flex-1 rounded-lg px-4 py-3 text-sm font-medium transition ${
                  mode === 'signup'
                    ? 'bg-[#25413E] text-[#68E2CF]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Sign up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {mode === 'signup' && (
                <div>
                  <label htmlFor="account-name" className="mb-2 block text-sm text-slate-300">
                    Full name
                  </label>
                  <input
                    id="account-name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-[#080F14] px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-[#68E2CF]"
                  />
                </div>
              )}

              <div>
                <label htmlFor="account-email" className="mb-2 block text-sm text-slate-300">
                  Email address
                </label>
                <input
                  id="account-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#080F14] px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-[#68E2CF]"
                />
              </div>

              <div>
                <label htmlFor="account-password" className="mb-2 block text-sm text-slate-300">
                  Password
                </label>

                <div className="relative">
                  <input
                    id="account-password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#080F14] px-4 py-3 pr-20 text-white outline-none placeholder:text-slate-600 focus:border-[#68E2CF]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute inset-y-0 right-4 text-sm text-[#68E2CF] hover:text-white"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              {mode === 'signup' && (
                <div>
                  <label htmlFor="account-confirm" className="mb-2 block text-sm text-slate-300">
                    Confirm password
                  </label>
                  <input
                    id="account-confirm"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    placeholder="Confirm your password"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#080F14] px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-[#68E2CF]"
                  />
                </div>
              )}

              {error && (
                <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                  {error}
                </p>
              )}

              {message && (
                <p role="status" className="rounded-xl border border-white/10 bg-[#14242B] p-4 text-sm text-slate-300">
                  {message}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-[#68E2CF] px-5 py-3.5 font-semibold text-[#080F14] transition hover:bg-[#8EF0DF]"
              >
                {mode === 'signin' ? 'Continue' : 'Create account'}
              </button>
            </form>

            <p className="mt-6 text-center text-xs leading-6 text-slate-500">
              Preview mode. Authentication is not connected yet.
              Please do not enter a real password.
            </p>

            <p className="mt-8 text-center text-sm text-slate-400">
              Need help?{' '}
              <a
                href="mailto:hexabytegen@gmail.com"
                className="text-[#68E2CF] hover:underline"
              >
                Contact support
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
