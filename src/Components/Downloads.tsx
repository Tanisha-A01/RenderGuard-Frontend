import './PagePolish.css'
import { useState } from 'react'
import ManagerPreview from './ManagerPreview'

const managerFeatures = [
  {
    number: '01',
    title: 'Placeholder tracking',
    description:
      'Tag and track temporary GameObjects in Unity projects.',
    symbol: '◎',
  },
  {
    number: '02',
    title: 'Project scanning',
    description:
      'Review supported scenes, prefabs, and asset categories.',
    symbol: '▦',
  },
  {
    number: '03',
    title: 'Replacement management',
    description:
      'Link, verify, and apply supported prefab replacements with confirmation.',
    symbol: '⇄',
  },
  {
    number: '04',
    title: 'Build validation',
    description:
      'Identify explicitly tagged placeholders before building your game.',
    symbol: '✓',
  },
]

const installationSteps = [
  {
    title: 'Download the package',
    description:
      'Download RenderGuard 0.2.0 and extract the ZIP to a convenient location.',
  },
  {
    title: 'Locate the package folder',
    description:
      'Find the inner RenderGuard folder containing package.json.',
  },
  {
    title: 'Install in your Unity project',
    description:
      "Copy the RenderGuard folder into your Unity project's Packages directory.",
  },
  {
    title: 'Verify the structure',
    description:
      'Confirm package.json is directly inside Packages/RenderGuard.',
  },
  {
    title: 'Open Unity',
    description:
      'Open your project and wait for Unity to finish importing and compiling.',
  },
  {
    title: 'Launch RenderGuard',
    description:
      'Navigate to Tools → RenderGuard → Open Dashboard.',
  },
]

export default function Downloads() {
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState('')

  async function copyInstallPath() {
    try {
      await navigator.clipboard.writeText('Packages/RenderGuard')
      setCopied(true)
      setCopyError('')
    } catch {
      setCopied(false)
      setCopyError(
        'Could not copy automatically. Please select and copy the path manually.'
      )
    }
  }

  return (
    <div className="rg-downloads mx-auto max-w-7xl space-y-24 pb-16 sm:space-y-28">

      {/* PAGE HEADER */}
      <header className="space-y-6">
        <p className="text-xs font-semibold tracking-[0.22em] text-[#68E2CF]">
          RENDERGUARD / UNITY MANAGER
        </p>

        <div className="max-w-3xl space-y-5">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build with confidence.
            <br />
            <span className="text-[#68E2CF]">
              Manage what matters.
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Track temporary assets, review placeholders, and manage
            supported replacements directly inside the Unity Editor.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            'Version 0.2.0',
            'Unity 2021.3+',
            'Local Editor Workflow',
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-[#111E25] px-4 py-2 text-xs font-medium text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </header>

      {/* MAIN DOWNLOAD SECTION */}
      <section className="rg-download-hero overflow-hidden rounded-3xl border border-[#68E2CF]/20 bg-[#10221F]">
        <div className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-12">

          {/* Download information */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#68E2CF]/25 bg-[#173A35] px-3 py-1.5 text-xs font-medium text-[#68E2CF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#68E2CF]" />
              Unity Editor Extension
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                RenderGuard Manager
              </h2>

              <p className="leading-relaxed text-slate-400">
                Bring structure to your placeholder workflow.
                Review temporary GameObjects and manage supported
                prefab replacements from inside Unity.
              </p>
            </div>

            <a
              href="/downloads/RenderGuard-0.2.0.zip"
              download
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#68E2CF] px-7 py-3.5 font-semibold text-[#080F14] transition-all hover:-translate-y-0.5 hover:bg-[#8AF0DE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#68E2CF] sm:w-auto"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 20h14" />
              </svg>
              Download ZIP
            </a>

            <p className="text-xs leading-relaxed text-slate-500">
              RenderGuard v0.2.0 · Install locally in a backed-up
              Unity project.
            </p>
          </div>

          {/* Unity Manager visual */}
          <div className="min-w-0">
            <ManagerPreview />
            <p className="mt-3 text-center text-xs text-slate-500">
              Illustrative Unity Manager interface preview
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm tracking-widest text-[#68E2CF]">
            CORE CAPABILITIES
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            A clearer development workflow.
          </h2>

          <p className="leading-relaxed text-slate-400">
            Tools to help you identify, review, and manage
            temporary content before release.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {managerFeatures.map((feature) => (
            <article
              key={feature.title}
              className="rg-feature-card group rounded-2xl border border-white/10 bg-[#111E25] p-6 transition-colors hover:border-[#68E2CF]/30 sm:p-8"
            >
              <div className="mb-8 flex items-start justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#68E2CF]/20 bg-[#17312F] text-2xl text-[#68E2CF]"
                  aria-hidden="true"
                >
                  {feature.symbol}
                </div>

                <span className="text-xs text-slate-500">
                  {feature.number}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="max-w-sm text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* INSTALLATION */}
      <section className="space-y-10 border-t border-white/10 pt-16">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm tracking-widest text-[#68E2CF]">
            GETTING STARTED
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Set up in a few steps.
          </h2>

          <p className="leading-relaxed text-slate-400">
            Follow this installation guide in a backed-up Unity project.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Installation steps */}
          <ol className="space-y-4">
            {installationSteps.map((step, index) => (
              <li
                key={step.title}
                className="rg-install-step flex gap-5 rounded-xl border border-white/10 bg-[#111E25] p-5 sm:p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#68E2CF]/25 bg-[#17312F] text-sm font-semibold text-[#68E2CF]">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="space-y-2">
                  <h3 className="font-semibold text-white">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Package location */}
          <aside className="rg-install-aside h-fit space-y-6 rounded-2xl border border-white/10 bg-[#111E25] p-6 sm:p-8">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#68E2CF]">
                Installation directory
              </p>

              <h3 className="text-xl font-semibold text-white">
                Package location
              </h3>

              <p className="text-sm leading-relaxed text-slate-400">
                The RenderGuard package folder should be placed
                inside your Unity project's Packages directory.
              </p>
            </div>

            <div className="space-y-3">
              <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#0B161C] p-4">
                <code className="whitespace-nowrap text-sm text-[#68E2CF]">
                  Packages/RenderGuard
                </code>
              </div>

              <button
                type="button"
                onClick={copyInstallPath}
                className="w-full rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-[#68E2CF]/40 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#68E2CF]"
              >
                {copied ? '✓ Copied!' : 'Copy installation path'}
              </button>

              {copyError && (
                <p role="alert" className="text-xs text-rose-300">
                  {copyError}
                </p>
              )}
            </div>

            <div className="border-t border-white/10 pt-5">
              <p className="text-xs leading-relaxed text-slate-500">
                Make sure package.json is directly inside
                Packages/RenderGuard before launching Unity.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="rounded-2xl border border-white/10 bg-[#111E25] p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#17272F] text-xl text-slate-300"
            aria-hidden="true"
          >
            i
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              Current limitations
            </h2>

            <p className="max-w-4xl text-sm leading-relaxed text-slate-400">
              RenderGuard 0.2.0 supports confirmed prefab replacements
              for eligible scene-authored GameObjects. Linking an asset
              does not automatically replace it. Arbitrary PNG,
              texture, and asset-only replacements are not
              automatically applied by the current manager.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
