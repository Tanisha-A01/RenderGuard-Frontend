
import { useState } from 'react'
import HeroVisual from './HeroVisual'
import ManagerPreview from './ManagerPreview'
import StudioCardVisual from './StudioCardVisual'

type HomeProps = {
  onOpenStudio: () => void
  onOpenDownloads: () => void
}

type StudioTool = {
  title: 'Textures' | 'Audio' | 'Speech' | '3D Assets'
  description: string
}

const steps = [
  {
    number: '01',
    title: 'Identify',
    heading: "Find what's temporary.",
    description:
      'Use RenderGuard Unity Manager to identify placeholder assets and understand what needs replacing.',
    symbol: '◎',
  },
  {
    number: '02',
    title: 'Generate',
    heading: 'Create the missing pieces.',
    description:
      'Explore AI Studio tools for textures, audio, speech, and 3D assets. Generation requires backend integration.',
    symbol: '✦',
  },
  {
    number: '03',
    title: 'Preview',
    heading: 'Inspect before exporting.',
    description:
      'Review generated assets and make adjustments before adding them to your game. Asset previews will be available when the Studio is connected.',
    symbol: '◈',
  },
  {
    number: '04',
    title: 'Replace',
    heading: 'Bring it into your project.',
    description:
      'Export your assets and follow the Unity Manager workflow to replace supported scene-authored placeholder objects.',
    symbol: '▣',
  },
]

const tools: StudioTool[] = [
  {
    title: 'Textures',
    description: 'Explore material and surface creation for your game.',
  },
  {
    title: 'Audio',
    description: 'Explore sound effects and ambient audio generation.',
  },
  {
    title: 'Speech',
    description: 'Explore voice generation for character dialogue.',
  },
  {
    title: '3D Assets',
    description: 'Explore basic 3D models and game objects.',
  },
]

export default function Home({
  onOpenStudio,
  onOpenDownloads,
}: HomeProps) {
  const [activeStep, setActiveStep] = useState(0)
  const step = steps[activeStep]

  return (
    <div className="space-y-24 pb-16 sm:space-y-32">

      {/* HERO */}
      <section className="relative grid min-h-[70vh] items-center gap-12 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="pointer-events-none absolute left-0 top-10 h-72 w-72 rounded-full bg-teal-400/5 blur-3xl" />

        {/* Hero content */}
        <div className="relative space-y-8">
          <p className="text-xs font-medium tracking-[0.25em] text-[#68E2CF] sm:text-sm">
            UNITY × AI ASSET WORKFLOW
          </p>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl xl:text-7xl">
            Less managing.
            <br />
            <span className="text-[#68E2CF]">
              More creating.
            </span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Track temporary placeholders in Unity and explore AI-powered
            textures, audio, speech, and 3D assets — all through a focused
            game-development workflow.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={onOpenStudio}
              className="rounded-xl bg-[#68E2CF] px-7 py-3 font-semibold text-[#080F14] transition-all hover:-translate-y-0.5 hover:bg-[#8AF0DE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#68E2CF]"
            >
              Open AI Studio →
            </button>

            <button
              type="button"
              onClick={onOpenDownloads}
              className="rounded-xl border border-white/15 px-7 py-3 font-medium text-white transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#68E2CF]"
            >
              Get Unity Manager
            </button>
          </div>

          <p className="text-xs leading-relaxed text-slate-500">
            Unity Manager v0.2.0 available · AI Studio integration in progress
          </p>
        </div>

        {/* 3D-inspired asset visualization */}
        <div className="relative min-w-0">
          <HeroVisual />
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm tracking-widest text-[#68E2CF]">
            HOW IT WORKS
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            From a placeholder
            <br />
            to something real.
          </h2>

          <p className="text-slate-400">
            Explore the workflow, one step at a time.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Workflow step selector */}
          <div className="space-y-3">
            {steps.map((item, index) => (
              <button
                key={item.number}
                type="button"
                onClick={() => setActiveStep(index)}
                aria-pressed={activeStep === index}
                className={`flex w-full items-center gap-5 rounded-xl border p-5 text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#68E2CF] ${
                  activeStep === index
                    ? 'border-[#68E2CF]/40 bg-[#17312F]'
                    : 'border-white/10 bg-[#111E25] hover:bg-[#17272F]'
                }`}
              >
                <span className="text-sm text-[#68E2CF]">
                  {item.number}
                </span>

                <span className="text-lg font-medium">
                  {item.title}
                </span>

                <span
                  className="ml-auto text-slate-500"
                  aria-hidden="true"
                >
                  →
                </span>
              </button>
            ))}
          </div>

          {/* Active workflow description */}
          <div className="flex min-h-80 flex-col justify-between rounded-2xl border border-white/10 bg-[#111E25] p-6 sm:p-8 md:p-10">
            <div className="space-y-6">
              <div
                className="text-6xl text-[#68E2CF]"
                aria-hidden="true"
              >
                {step.symbol}
              </div>

              <p className="text-sm text-[#68E2CF]">
                STEP {step.number} / 04
              </p>

              <h3 className="text-2xl font-semibold sm:text-3xl">
                {step.heading}
              </h3>

              <p className="max-w-md leading-relaxed text-slate-400">
                {step.description}
              </p>
            </div>

            <div className="mt-10 flex items-center justify-between gap-4">
              <div
                className="flex gap-2"
                aria-hidden="true"
              >
                {steps.map((item, index) => (
                  <span
                    key={item.number}
                    className={`h-1.5 rounded-full transition-all ${
                      index === activeStep
                        ? 'w-8 bg-[#68E2CF]'
                        : 'w-3 bg-slate-600'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() =>
                  setActiveStep((current) => (current + 1) % steps.length)
                }
                className="text-sm font-medium text-[#68E2CF] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#68E2CF]"
              >
                Next step →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI STUDIO */}
      <section className="space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm tracking-widest text-[#68E2CF]">
            AI ASSET STUDIO
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Your ideas, made tangible.
          </h2>

          <p className="text-slate-400">
            Four creative tools in one focused environment.
            Backend integration is currently in progress.
          </p>
        </div>

        {/* Studio visual cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="group min-w-0 rounded-2xl border border-white/10 bg-[#111E25] p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#68E2CF]/40 sm:p-5"
            >
              <StudioCardVisual type={tool.title} />

              <div className="px-2 pb-2 pt-6">
                <h3 className="mb-3 text-xl font-semibold">
                  {tool.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-400">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={onOpenStudio}
          className="font-medium text-[#68E2CF] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#68E2CF]"
        >
          Explore AI Studio →
        </button>
      </section>

      {/* UNITY MANAGER */}
      <section className="grid items-center gap-12 border-t border-white/10 pt-20 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm tracking-widest text-[#68E2CF]">
            UNITY MANAGER
          </p>

          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Stay in your workflow.
          </h2>

          <p className="leading-relaxed text-slate-400">
            Keep track of placeholders in Unity and organize the journey
            from temporary assets to finished content.
          </p>

          <p className="text-sm leading-relaxed text-slate-500">
            Download Unity Manager v0.2.0 to explore supported placeholder
            tracking and replacement workflows.
          </p>

          <button
            type="button"
            onClick={onOpenDownloads}
            className="rounded-xl bg-[#68E2CF] px-7 py-3 font-semibold text-[#080F14] transition-colors hover:bg-[#8AF0DE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#68E2CF]"
          >
            Get Unity Manager →
          </button>
        </div>

        {/* Illustrative Unity Manager dashboard */}
        <div className="min-w-0">
          <ManagerPreview />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="rounded-3xl border border-[#68E2CF]/20 bg-[#102521] px-6 py-14 text-center sm:px-8 md:px-16 md:py-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Ready to build better worlds?
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-400">
          Spend less time managing temporary content
          and more time creating your game.
        </p>

        <button
          type="button"
          onClick={onOpenStudio}
          className="mt-8 rounded-xl bg-[#68E2CF] px-8 py-3 font-semibold text-[#080F14] transition-colors hover:bg-[#8AF0DE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#68E2CF]"
        >
          Launch Studio →
        </button>
      </section>
    </div>
  )
}
