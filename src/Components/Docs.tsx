import './PagePolish.css'
import { useState } from 'react'

type DocSection = {
  id: string
  title: string
  description: string
  steps?: string[]
  notes?: string[]
}

const sections: DocSection[] = [
  {
    id: 'overview',
    title: 'Overview',
    description:
      'RenderGuard 0.2.0 is a Unity Editor companion for identifying, tracking, reviewing, and managing temporary project content. The Unity Manager works locally without an AI service or cloud account.',
    notes: [
      'Track explicitly tagged placeholders.',
      'Review suggested placeholders before accepting them.',
      'Link and verify replacement assets.',
      'Export reports and check build readiness.',
    ],
  },
  {
    id: 'installation',
    title: 'Installation',
    description:
      'Install RenderGuard 0.2.0 into a backed-up Unity 2021.3 or newer project.',
    steps: [
      'Download RenderGuard-0.2.0.zip from the Downloads page.',
      'Extract the ZIP and locate the inner RenderGuard folder.',
      'Copy that folder into your Unity project’s Packages directory.',
      'Confirm package.json is directly inside Packages/RenderGuard.',
      'Open Unity and wait for compilation.',
      'Navigate to Tools → RenderGuard → Open Dashboard.',
    ],
    notes: [
      'Test the package in a disposable Unity project before using it in production.',
      'Check the Unity Console for compilation errors.',
    ],
  },
  {
    id: 'tagging',
    title: 'Placeholder tagging',
    description:
      'Use the PlaceholderTag component to explicitly identify temporary GameObjects.',
    steps: [
      'Select the temporary GameObject in Unity.',
      'Add the PlaceholderTag component.',
      'Configure its identifying information, category, reason, and build-exemption setting as appropriate.',
      'Run a project scan to register the tagged object.',
    ],
    notes: [
      'Explicit tags are authoritative records.',
      'PlaceholderTag applies to GameObjects, not arbitrary asset files.',
    ],
  },
  {
    id: 'scanning',
    title: 'Project scanning',
    description:
      'RenderGuard scans supported scenes, prefab assets, and selected asset categories under Assets.',
    steps: [
      'Open the RenderGuard dashboard.',
      'Run a project scan.',
      'Review registered placeholders and the scan summary.',
      'Open Suggestions to inspect possible placeholders identified through naming and folder hints.',
      'Approve or dismiss suggestions after reviewing them.',
    ],
    notes: [
      'Heuristic suggestions are not confirmed placeholders.',
      'The scanner does not cover every Unity asset format or packages outside Assets.',
    ],
  },
  {
    id: 'replacements',
    title: 'Replacement workflow',
    description:
      'Replacement linking and replacement application are separate actions.',
    steps: [
      'Select a placeholder record in the dashboard.',
      'Choose and link a candidate replacement asset.',
      'Verify the replacement asset.',
      'For a supported scene-authored GameObject, review and confirm a prefab replacement.',
      'Inspect the modified scene and save it manually.',
    ],
    notes: [
      'Linking an asset does not automatically replace anything.',
      'Automatic application is limited to supported scene-authored GameObjects.',
      'Prefab instances, prefab contents, and asset-only records are not automatically replaced.',
      'Supported replacement operations use Unity Undo.',
    ],
  },
  {
    id: 'dashboard',
    title: 'Dashboard and reports',
    description:
      'The dashboard helps you review placeholder status and project readiness.',
    notes: [
      'Overview: scan totals, status analytics, readiness estimate, and build-blocking preference.',
      'Placeholders: tracked records and replacement management.',
      'Suggestions: heuristic candidates awaiting review.',
      'Reports: scan findings and JSON or CSV export.',
      'The readiness estimate is a project-management indicator, not a guarantee of production quality.',
    ],
  },
  {
    id: 'build-validation',
    title: 'Build validation',
    description:
      'RenderGuard can warn or block builds when explicitly tagged, non-exempt placeholders remain in enabled Build Settings scenes.',
    notes: [
      'Suggestions do not automatically block builds.',
      'Asset-only records do not automatically block builds.',
      'Build validation does not guarantee that a game is production-ready.',
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description:
      'Use these checks when installation, scanning, or replacement workflows do not behave as expected.',
    steps: [
      'Confirm that the Unity package folder contains package.json at the expected location.',
      'Check the Unity Console for errors.',
      'Verify that the project uses a supported Unity version.',
      'Run a fresh scan after changing placeholders.',
      'Confirm that a proposed replacement is a compatible prefab before attempting supported application.',
      'Review and save changed scenes manually.',
    ],
    notes: [
      'For unresolved problems, contact hexabytegen@gmail.com.',
    ],
  },
]

const sectionIcons: Record<string, string> = {
  overview: '◈',
  installation: '↓',
  tagging: '◎',
  scanning: '▦',
  replacements: '⇄',
  dashboard: '▤',
  'build-validation': '✓',
  troubleshooting: '?',
}

export default function Docs() {
  const [activeId, setActiveId] = useState('overview')
  const [query, setQuery] = useState('')

  const normalizedQuery = query.trim().toLowerCase()

  const filtered = sections.filter((section) =>
    [
      section.title,
      section.description,
      ...(section.steps ?? []),
      ...(section.notes ?? []),
    ]
      .join(' ')
      .toLowerCase()
      .includes(normalizedQuery)
  )

  const selectedSection = sections.find(
    (section) => section.id === activeId
  )

  const active =
    normalizedQuery && !filtered.some(
      (section) => section.id === activeId
    )
      ? filtered[0]
      : selectedSection ?? sections[0]

  const activeIndex = sections.findIndex(
    (section) => section.id === active?.id
  )

  const previousSection =
    activeIndex > 0 ? sections[activeIndex - 1] : null

  const nextSection =
    activeIndex >= 0 && activeIndex < sections.length - 1
      ? sections[activeIndex + 1]
      : null

  function navigateToSection(id: string) {
    setActiveId(id)
    setQuery('')
  }

  return (
    <div className="rg-docs mx-auto max-w-7xl space-y-10 pb-16">

      {/* PAGE HEADER */}
      <header className="space-y-5">
        <p className="text-xs font-semibold tracking-[0.22em] text-[#68E2CF]">
          RENDERGUARD / KNOWLEDGE BASE
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Documentation
          <span className="text-[#68E2CF]">.</span>
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          Everything you need to get started with RenderGuard
          Unity Manager 0.2.0, from installation to replacement workflows.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-white/10 bg-[#111E25] px-4 py-2 text-xs text-slate-300">
            Unity Manager v0.2.0
          </span>

          <span className="rounded-full border border-white/10 bg-[#111E25] px-4 py-2 text-xs text-slate-300">
            Unity 2021.3+
          </span>
        </div>
      </header>

      {/* DOCUMENTATION LAYOUT */}
      <div className="grid items-start gap-6 lg:grid-cols-[270px_minmax(0,1fr)]">

        {/* SIDEBAR */}
        <aside className="rg-docs-sidebar min-w-0 space-y-5 lg:sticky lg:top-24">

          {/* Search */}
          <div className="rounded-2xl border border-white/10 bg-[#111E25] p-4">
            <label
              htmlFor="docs-search"
              className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-slate-400"
            >
              Search documentation
            </label>

            <div className="relative">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>

              <input
                id="docs-search"
                type="search"
                value={query}
                onChange={(event) =>
                  setQuery(event.target.value)
                }
                placeholder="Search topics..."
                className="w-full rounded-xl border border-white/10 bg-[#0B161C] py-3 pl-10 pr-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#68E2CF]"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Documentation sections"
            className="rounded-2xl border border-white/10 bg-[#111E25] p-3"
          >
            <p className="px-3 pb-3 pt-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
              Contents
            </p>

            <div className="space-y-1">
              {filtered.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  aria-current={
                    active?.id === section.id
                      ? 'page'
                      : undefined
                  }
                  onClick={() =>
                    navigateToSection(section.id)
                  }
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#68E2CF] ${
                    active?.id === section.id
                      ? 'bg-[#25413E] font-medium text-[#68E2CF]'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#0B161C] text-base"
                    aria-hidden="true"
                  >
                    {sectionIcons[section.id]}
                  </span>

                  <span>{section.title}</span>

                  {active?.id === section.id && (
                    <span
                      className="ml-auto text-[#68E2CF]"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </button>
              ))}

              {filtered.length === 0 && (
                <div className="space-y-3 px-3 py-5">
                  <p className="text-sm text-slate-400">
                    No matching topics found.
                  </p>

                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="text-sm font-medium text-[#68E2CF] hover:text-white"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Support */}
          <div className="rounded-2xl border border-white/10 bg-[#111E25] p-5">
            <p className="text-sm font-semibold text-white">
              Need assistance?
            </p>

            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              If you encounter a problem that isn't covered
              in the documentation, contact our team.
            </p>

            <a
              href="mailto:hexabytegen@gmail.com"
              className="mt-4 inline-block break-all text-sm font-medium text-[#68E2CF] hover:text-white"
            >
              hexabytegen@gmail.com
            </a>
          </div>
        </aside>

        {/* ARTICLE */}
        <article className="rg-docs-article min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#111E25]">

          {active ? (
            <>
              {/* Article heading */}
              <div className="border-b border-white/10 p-6 sm:p-9">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#68E2CF]">
                    RENDERGUARD / V0.2.0
                  </p>

                  <span className="text-xs text-slate-500">
                    {String(activeIndex + 1).padStart(2, '0')}
                    {' / '}
                    {String(sections.length).padStart(2, '0')}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                  {active.title}
                </h2>

                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                  {active.description}
                </p>
              </div>

              {/* Article content */}
              <div className="space-y-10 p-6 sm:p-9">

                {/* Step-by-step instructions */}
                {active.steps && (
                  <section className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">
                        Step-by-step guide
                      </h3>

                      <p className="text-sm text-slate-500">
                        Follow the instructions below in order.
                      </p>
                    </div>

                    <ol className="space-y-3">
                      {active.steps.map((step, index) => (
                        <li
                          key={index}
                          className="flex gap-4 rounded-xl border border-white/10 bg-[#0B161C] p-4 sm:p-5"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#68E2CF]/25 bg-[#17312F] text-sm font-semibold text-[#68E2CF]">
                            {index + 1}
                          </span>

                          <p className="pt-1 text-sm leading-7 text-slate-300">
                            {step}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </section>
                )}

                {/* Notes */}
                {active.notes && (
                  <section className="space-y-5">
                    <h3 className="text-xl font-semibold text-white">
                      Important information
                    </h3>

                    <ul className="space-y-4">
                      {active.notes.map((note, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3"
                        >
                          <span
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#68E2CF]"
                            aria-hidden="true"
                          />

                          <p className="text-sm leading-7 text-slate-400">
                            {note}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Documentation note */}
                <div className="rounded-xl border border-[#68E2CF]/15 bg-[#102521] p-5">
                  <p className="text-sm leading-relaxed text-slate-300">
                    <span className="font-semibold text-[#68E2CF]">
                      Documentation note:
                    </span>{' '}
                    This guide describes RenderGuard Unity Manager
                    version 0.2.0. Available functionality may
                    differ in future releases.
                  </p>
                </div>
              </div>

              {/* Previous / Next navigation */}
              <div className="grid gap-3 border-t border-white/10 p-5 sm:grid-cols-2 sm:p-7">
                <div>
                  {previousSection && (
                    <button
                      type="button"
                      onClick={() =>
                        navigateToSection(previousSection.id)
                      }
                      className="w-full rounded-xl border border-white/10 bg-[#0B161C] p-4 text-left transition-colors hover:border-[#68E2CF]/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#68E2CF]"
                    >
                      <span className="block text-xs text-slate-500">
                        ← Previous
                      </span>

                      <span className="mt-2 block text-sm font-medium text-white">
                        {previousSection.title}
                      </span>
                    </button>
                  )}
                </div>

                <div>
                  {nextSection && (
                    <button
                      type="button"
                      onClick={() =>
                        navigateToSection(nextSection.id)
                      }
                      className="w-full rounded-xl border border-white/10 bg-[#0B161C] p-4 text-left transition-colors hover:border-[#68E2CF]/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#68E2CF]"
                    >
                      <span className="block text-xs text-slate-500">
                        Next →
                      </span>

                      <span className="mt-2 block text-sm font-medium text-white">
                        {nextSection.title}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="flex min-h-[360px] flex-col items-center justify-center gap-4 p-8 text-center">
              <p className="text-lg font-semibold text-white">
                No documentation found
              </p>

              <p className="max-w-sm text-sm text-slate-400">
                Try another search term or clear the search
                to browse all documentation topics.
              </p>

              <button
                type="button"
                onClick={() => setQuery('')}
                className="rounded-xl bg-[#68E2CF] px-5 py-2.5 text-sm font-semibold text-[#080F14] hover:bg-[#8AF0DE]"
              >
                Clear search
              </button>
            </div>
          )}
        </article>
      </div>
    </div>
  )
}
