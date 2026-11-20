
import { useState } from 'react'

type HomeProps = {
  onOpenStudio: () => void
  onOpenDownloads: () => void
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
      'Use AI Studio to generate textures, audio, speech, and 3D assets for your project.',
    symbol: '✦',
  },
  {
    number: '03',
    title: 'Preview',
    heading: 'Inspect before exporting.',
    description:
      'Review your generated assets and make adjustments before adding them to your game.',
    symbol: '◈',
  },
  {
    number: '04',
    title: 'Replace',
    heading: 'Bring it into your project.',
    description:
      'Export your assets and follow the Unity Manager workflow to replace temporary content.',
    symbol: '▣',
  },
]

const tools = [
  {
    title: 'Textures',
    description: 'Create materials and surfaces for your game.',
    symbol: '◉',
  },
  {
    title: 'Audio',
    description: 'Generate sound effects and ambient audio.',
    symbol: '♫',
  },
  {
    title: 'Speech',
    description: 'Turn dialogue into character voices.',
    symbol: '◌',
  },
  {
    title: '3D Assets',
    description: 'Build basic models and game objects.',
    symbol: '⬡',
  },
]

export default function Home({
  onOpenStudio,
  onOpenDownloads,
}: HomeProps) {
  const [activeStep, setActiveStep] = useState(0)
  const step = steps[activeStep]

  return (
    <div className="space-y-32 pb-16">

      {/* HERO */}
      <section className="relative flex min-h-[70vh] flex-col justify-center">
        <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-teal-400/5 blur-3xl" />

        <div className="relative max-w-4xl space-y-8">
          <p className="text-sm font-medium tracking-[0.25em] text-[#68E2CF]">
            UNITY × AI ASSET WORKFLOW
          </p>

          <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight md:text-7xl">
            Less managing.
            <br />
            <span className="text-[#68E2CF]">More creating.</span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
            From temporary placeholders to production-ready
            game assets. One focused workspace for creating,
            managing, and refining your Unity projects.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onOpenStudio}
              className="rounded-xl bg-[#68E2CF] px-7 py-3 font-semibold text-[#080F14] transition-all hover:-translate-y-0.5 hover:bg-[#8AF0DE]"
            >
              Open AI Studio →
            </button>

            <button
              onClick={onOpenDownloads}
              className="rounded-xl border border-white/15 px-7 py-3 font-medium text-white transition-colors hover:bg-white/5"
            >
              Get Unity Manager
            </button>
          </div>
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
          <div className="space-y-3">
            {steps.map((item, index) => (
              <button
                key={item.number}
                onClick={() => setActiveStep(index)}
                className={`flex w-full items-center gap-5 rounded-xl border p-5 text-left transition-all ${
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

                <span className="ml-auto text-slate-500">
                  →
                </span>
              </button>
            ))}
          </div>

          <div className="flex min-h-80 flex-col justify-between rounded-2xl border border-white/10 bg-[#111E25] p-8 md:p-10">
            <div className="space-y-6">
              <div className="text-6xl text-[#68E2CF]">
                {step.symbol}
              </div>

              <p className="text-sm text-[#68E2CF]">
                STEP {step.number} / 04
              </p>

              <h3 className="text-3xl font-semibold">
                {step.heading}
              </h3>

              <p className="max-w-md leading-relaxed text-slate-400">
                {step.description}
              </p>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-2">
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
                onClick={() =>
                  setActiveStep((activeStep + 1) % steps.length)
                }
                className="text-sm text-[#68E2CF] hover:text-white"
              >
                Next step →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO */}
      <section className="space-y-10">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm tracking-widest text-[#68E2CF]">
            AI ASSET STUDIO
          </p>

          <h2 className="text-3xl font-semibold md:text-5xl">
            Your ideas, made tangible.
          </h2>

          <p className="text-slate-400">
            Four creative tools in one focused environment.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <div
              key={tool.title}
              className="group rounded-2xl border border-white/10 bg-[#111E25] p-7 transition-all hover:-translate-y-1 hover:border-[#68E2CF]/40"
            >
              <div className="mb-10 text-4xl text-[#68E2CF]">
                {tool.symbol}
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                {tool.title}
              </h3>

              <p className="text-sm leading-relaxed text-slate-400">
                {tool.description}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={onOpenStudio}
          className="font-medium text-[#68E2CF] hover:text-white"
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

          <h2 className="text-3xl font-semibold md:text-5xl">
            Stay in your workflow.
          </h2>

          <p className="leading-relaxed text-slate-400">
            Keep track of placeholders in Unity and
            organize the journey from temporary assets
            to finished content.
          </p>

          <button
            onClick={onOpenDownloads}
            className="rounded-xl bg-[#68E2CF] px-7 py-3 font-semibold text-[#080F14] hover:bg-[#8AF0DE]"
          >
            Get Unity Manager →
          </button>
        </div>

        <div className="flex aspect-video items-center justify-center rounded-2xl border border-white/10 bg-[#111E25]">
          <div className="space-y-3 text-center">
            <div className="text-6xl text-[#68E2CF]">⬡</div>
            <p className="text-sm text-slate-500">
              Unity Manager preview
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="rounded-3xl border border-[#68E2CF]/20 bg-[#102521] px-8 py-16 text-center md:px-16">
        <h2 className="text-3xl font-semibold md:text-5xl">
          Ready to build better worlds?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-slate-400">
          Spend less time managing temporary content
          and more time creating your game.
        </p>

        <button
          onClick={onOpenStudio}
          className="mt-8 rounded-xl bg-[#68E2CF] px-8 py-3 font-semibold text-[#080F14] hover:bg-[#8AF0DE]"
        >
          Launch Studio →
        </button>
      </section>
    </div>
  )
}
