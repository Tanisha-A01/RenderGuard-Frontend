import Studio from './Components/Studio'
import Home from './Components/Home'

import { useState } from 'react'

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

  return (
    <div className="min-h-screen bg-[#080F14] text-[#EAF3F4]">

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080F14]/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">

          <button
            onClick={() => setActivePage('Home')}
            className="text-xl font-bold tracking-tight"
          >
            Render<span className="text-[#68E2CF]">Guard</span>
          </button>

          <div className="flex flex-wrap gap-1 rounded-xl bg-[#14242B] p-1">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                  activePage === page
                    ? 'bg-[#25413E] text-[#68E2CF]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="mx-auto min-h-[75vh] max-w-7xl px-6 pt-8 pb-16">
        {activePage === 'Home' && (
  <Home
    onOpenStudio={() => setActivePage('Studio')}
    onOpenDownloads={() => setActivePage('Downloads')}
  />
)}

        {activePage === 'Studio' && <Studio />}

        {activePage === 'Downloads' && (
          <section className="space-y-4">
            <p className="text-sm text-[#68E2CF]">DOWNLOADS</p>
            <h1 className="text-4xl font-bold">RenderGuard for Unity.</h1>
            <p className="text-slate-400">
              Download and installation options for the Unity Manager.
            </p>
          </section>
        )}

        {activePage === 'Docs' && (
          <section className="space-y-4">
            <p className="text-sm text-[#68E2CF]">DOCUMENTATION</p>
            <h1 className="text-4xl font-bold">Learn RenderGuard.</h1>
            <p className="text-slate-400">
              Installation guides, tutorials and workflow documentation.
            </p>
          </section>
        )}

        {activePage === 'Account' && (
          <section className="space-y-4">
            <p className="text-sm text-[#68E2CF]">ACCOUNT</p>
            <h1 className="text-4xl font-bold">Welcome back.</h1>
            <p className="text-slate-400">
              Sign in and sign up functionality will be integrated here.
            </p>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © 2026 RenderGuard
          </p>

          <a
            href="mailto:hexabytegen@gmail.com"
            className="text-sm text-slate-400 transition-colors hover:text-[#68E2CF]"
          >
            hexabytegen@gmail.com
          </a>
        </div>
      </footer>
    </div>
  )
}
