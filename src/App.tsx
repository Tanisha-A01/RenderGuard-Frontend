
import { useEffect, useState } from 'react'

import Account from './Components/Account'
import Docs from './Components/Docs'
import Downloads from './Components/Downloads'
import Studio from './Components/Studio'
import Home from './Components/Home'

type Page = 'Home' | 'Studio' | 'Downloads' | 'Docs' | 'Account'

const pages: Page[] = [
  'Home',
  'Studio',
  'Downloads',
  'Docs',
  'Account',
]

export default function App() {
  const [activePage, setActivePage] = useState<Page>('Home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  }, [activePage])

  function navigateTo(page: Page) {
    setActivePage(page)
    setMobileMenuOpen(false)

    if (page === activePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[#080F14] text-[#EAF3F4]">

      {/* Subtle global background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[650px] overflow-hidden"
      >
        <div className="absolute -right-40 -top-64 h-[550px] w-[550px] rounded-full bg-[#68E2CF]/[0.035] blur-[110px]" />
        <div className="absolute -left-52 top-48 h-[420px] w-[420px] rounded-full bg-[#68E2CF]/[0.025] blur-[110px]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080F14]/90 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8"
        >
          {/* Brand */}
          <button
            type="button"
            onClick={() => navigateTo('Home')}
            aria-label="RenderGuard home"
            className="group inline-flex shrink-0 items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#68E2CF]"
          >
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#68E2CF]/25 bg-[#142A2A] text-[#68E2CF] transition-colors group-hover:border-[#68E2CF]/50"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 2 8.5 5v10L12 22l-8.5-5V7L12 2Z" />
                <path d="m3.5 7 8.5 5 8.5-5" />
                <path d="M12 12v10" />
              </svg>
            </span>

            <span className="text-xl font-bold tracking-tight text-white">
              Render
              <span className="text-[#68E2CF]">Guard</span>
            </span>
          </button>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 rounded-xl border border-white/[0.07] bg-[#111E25]/80 p-1 md:flex">
            {pages.map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => navigateTo(page)}
                aria-current={activePage === page ? 'page' : undefined}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#68E2CF] ${
                  activePage === page
                    ? 'bg-[#25413E] text-[#68E2CF]'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#111E25] text-slate-200 transition-colors hover:border-[#68E2CF]/30 md:hidden"
          >
            {mobileMenuOpen ? (
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M5 5 19 19M19 5 5 19" />
              </svg>
            ) : (
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-white/[0.08] bg-[#0B151B] px-5 py-4 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {pages.map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => navigateTo(page)}
                  aria-current={activePage === page ? 'page' : undefined}
                  className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                    activePage === page
                      ? 'bg-[#25413E] text-[#68E2CF]'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main
        id="main-content"
        className="relative z-10 mx-auto w-full max-w-7xl flex-1 px-5 pb-20 pt-10 sm:px-8 sm:pt-14"
      >
        {activePage === 'Home' && (
          <Home
            onOpenStudio={() => navigateTo('Studio')}
            onOpenDownloads={() => navigateTo('Downloads')}
          />
        )}

        {activePage === 'Studio' && <Studio />}
        {activePage === 'Downloads' && <Downloads />}
        {activePage === 'Docs' && <Docs />}
        {activePage === 'Account' && <Account />}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.08] bg-[#0A141A]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">

            {/* Product identity */}
            <div className="max-w-sm space-y-4">
              <div className="text-xl font-bold tracking-tight text-white">
                Render
                <span className="text-[#68E2CF]">Guard</span>
              </div>

              <p className="text-sm leading-7 text-slate-400">
                A workspace for game-development assets,
                paired with tools for tracking and managing
                temporary content in Unity.
              </p>
            </div>

            {/* Quick navigation */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-white">
                Explore
              </h2>

              <div className="flex flex-col items-start gap-3">
                {(['Home', 'Studio', 'Downloads', 'Docs'] as Page[]).map(
                  (page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => navigateTo(page)}
                      className="text-sm text-slate-400 transition-colors hover:text-[#68E2CF]"
                    >
                      {page === 'Studio' ? 'AI Studio' : page}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-white">
                Contact
              </h2>

              <a
                href="mailto:hexabytegen@gmail.com"
                className="inline-block break-all text-sm text-slate-400 transition-colors hover:text-[#68E2CF]"
              >
                hexabytegen@gmail.com
              </a>

              <p className="text-xs leading-6 text-slate-500">
                Questions, feedback, or support requests.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.08] pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 RenderGuard. All rights reserved.</p>

            <p>
              Built for game-development workflows.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
