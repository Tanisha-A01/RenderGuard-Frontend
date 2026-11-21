import './PagePolish.css'
import { useState } from 'react'
import './VisualPolish.css'

type Tool = 'Textures' | 'Audio' | 'Speech' | '3D'

type GenerationResult = {
  id: string
  tool: Tool
  description: string
  createdAt: string
  material?: string
  resolution?: string
}

const tools: Tool[] = ['Textures', 'Audio', 'Speech', '3D']

const toolDetails: Record<
  Tool,
  { title: string; subtitle: string; icon: string; placeholder: string }
> = {
  Textures: {
    title: 'Texture Studio',
    subtitle: 'Design surfaces and materials for your game world.',
    icon: '▦',
    placeholder: 'Describe a seamless texture, material, or surface...',
  },
  Audio: {
    title: 'Audio Studio',
    subtitle: 'Explore sound effects and environmental ambience.',
    icon: '♫',
    placeholder: 'Describe a sound effect or environmental ambience...',
  },
  Speech: {
    title: 'Speech Studio',
    subtitle: 'Develop dialogue and voice concepts for characters.',
    icon: '◉',
    placeholder: 'Enter the dialogue your character should speak...',
  },
  '3D': {
    title: '3D Asset Studio',
    subtitle: 'Explore props, objects, and low-poly asset concepts.',
    icon: '⬡',
    placeholder: 'Describe a game object or 3D prop...',
  },
}

const initialPrompts: Record<Tool, string> = {
  Textures: 'Weathered stone with moss, seamless game texture',
  Audio: 'Footsteps on wet stone in a quiet dungeon',
  Speech: 'Welcome, traveler. Your journey begins here.',
  '3D': 'Low-poly wooden treasure chest with metal trim',
}

function AssetIllustration({ tool }: { tool: Tool }) {
  if (tool === 'Textures') {
    return (
      <div className="relative flex h-52 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#10231F]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#68E2CF12,transparent_70%)]" />
        <div className="relative grid h-36 w-36 rotate-[-12deg] grid-cols-4 gap-1 rounded-xl border border-[#68E2CF]/30 bg-[#163A35] p-2 shadow-2xl">
          {Array.from({ length: 16 }).map((_, index) => (
            <div
              key={index}
              className="rounded-sm border border-white/10"
              style={{
                backgroundColor:
                  index % 4 === 0
                    ? '#40746B'
                    : index % 3 === 0
                      ? '#2E6058'
                      : '#214A45',
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  if (tool === 'Audio') {
    const heights = [
      16, 26, 40, 24, 58, 36, 72, 48, 84, 53,
      32, 65, 92, 55, 40, 76, 46, 63, 29, 50,
      80, 42, 68, 33, 55, 71, 39, 22, 44, 25,
    ]

    return (
      <div className="flex h-52 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#10231F] px-6">
        <div className="flex h-28 w-full max-w-sm items-center justify-center gap-[3px]">
          {heights.map((height, index) => (
            <div
              key={index}
              className="min-w-0 flex-1 rounded-full bg-[#68E2CF]"
              style={{
                height: `${height}%`,
                opacity: index % 3 === 0 ? 0.45 : 0.85,
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  if (tool === 'Speech') {
    return (
      <div className="flex h-52 w-full flex-col items-center justify-center gap-5 rounded-2xl bg-[#10231F]">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#68E2CF]/40 bg-[#1A4039]">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#68E2CF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="2" width="6" height="13" rx="3" />
            <path d="M5 10a7 7 0 0 0 14 0" />
            <path d="M12 17v5M8 22h8" />
          </svg>
        </div>

        <div className="flex h-6 items-center gap-1">
          {[8, 17, 12, 23, 15, 20, 10, 16, 7].map(
            (height, index) => (
              <span
                key={index}
                className="w-1 rounded-full bg-[#68E2CF]/70"
                style={{ height }}
              />
            )
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-52 w-full items-center justify-center rounded-2xl bg-[#10231F]">
      <svg
        viewBox="0 0 180 150"
        className="h-40 w-44"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M90 12L155 49L90 87L25 49Z"
          fill="#2D625A"
          stroke="#68E2CF"
          strokeWidth="1.5"
        />
        <path
          d="M25 49L90 87V139L25 101Z"
          fill="#173A38"
          stroke="#68E2CF"
          strokeWidth="1.5"
        />
        <path
          d="M90 87L155 49V101L90 139Z"
          fill="#24514A"
          stroke="#68E2CF"
          strokeWidth="1.5"
        />
        <path
          d="M57 30L122 68M122 30L57 68M25 75L90 113L155 75"
          stroke="#A4F6E9"
          strokeOpacity="0.35"
        />
        {[ [90, 12], [25, 49], [155, 49], [90, 139] ].map(
          ([x, y], index) => (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="2.5"
              fill="#A4F6E9"
            />
          )
        )}
      </svg>
    </div>
  )
}

export default function Studio() {
  const [tool, setTool] = useState<Tool>('Textures')
  const [prompts, setPrompts] =
    useState<Record<Tool, string>>(initialPrompts)
  const [resolution, setResolution] = useState('1024')
  const [material, setMaterial] = useState('Stone')
  const [busy, setBusy] = useState(false)
  const [results, setResults] =
    useState<Partial<Record<Tool, GenerationResult>>>({})
  const [error, setError] = useState('')

  const details = toolDetails[tool]
  const result = results[tool]

  function generate() {
    const description = prompts[tool].trim()

    if (!description) {
      setError('Please enter a description first.')
      return
    }

    setError('')
    setBusy(true)

    // Demo only: no backend request or actual asset generation.
    const demoResult: GenerationResult = {
      id: crypto.randomUUID(),
      tool,
      description,
      createdAt: new Date().toLocaleTimeString(),
      ...(tool === 'Textures'
        ? { material, resolution }
        : {}),
    }

    setResults((previous) => ({
      ...previous,
      [tool]: demoResult,
    }))

    setBusy(false)
  }

  return (
    <section className="rg-studio rg-studio-refined mx-auto max-w-7xl space-y-8 pb-16">

      {/* PAGE HEADER */}
      <header className="rg-studio-header relative space-y-4">
        <p className="text-xs font-semibold tracking-[0.22em] text-[#68E2CF]">
          RENDERGUARD / CREATIVE WORKSPACE
        </p>

        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              AI Asset Studio
            </h1>

            <p className="max-w-2xl leading-relaxed text-slate-400">
              Explore textures, sound, speech, and 3D assets in a
              focused game-development workspace.
            </p>
          </div>

          <span className="rounded-full border border-white/10 bg-[#17272F] px-4 py-2 text-xs font-medium text-slate-300">
            Prototype workspace
          </span>
        </div>
      </header>

      {/* TOOL NAVIGATION */}
      <div
        className="rg-tool-nav grid grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-[#111E25] p-2 sm:grid-cols-4"
        role="tablist"
        aria-label="Asset generator"
      >
        {tools.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={tool === item}
            onClick={() => {
              setTool(item)
              setError('')
            }}
            className={`flex items-center justify-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#68E2CF] ${
              tool === item
                ? 'bg-[#25413E] text-[#68E2CF]'
                : 'text-slate-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span className="text-lg" aria-hidden="true">
              {toolDetails[item].icon}
            </span>
            <span>{item === '3D' ? '3D Assets' : item}</span>
          </button>
        ))}
      </div>

      {/* WORKSPACE */}
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">

        {/* GENERATION PANEL */}
        <div className="rg-studio-panel space-y-7 rounded-2xl border border-white/10 bg-[#111E25] p-5 sm:p-7 lg:p-8">

          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#68E2CF]">
              Asset configuration
            </p>

            <h2 className="text-2xl font-semibold text-white">
              {details.title}
            </h2>

            <p className="text-sm leading-relaxed text-slate-400">
              {details.subtitle}
            </p>
          </div>

          {/* PROMPT INPUT */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <label
                htmlFor="asset-prompt"
                className="text-sm font-medium text-slate-200"
              >
                {tool === 'Speech'
                  ? 'Character dialogue'
                  : 'Asset description'}
              </label>

              <span className="text-xs text-slate-500">
                {prompts[tool].length}/1000
              </span>
            </div>

            <textarea
              id="asset-prompt"
              rows={6}
              value={prompts[tool]}
              onChange={(event) =>
                setPrompts((previous) => ({
                  ...previous,
                  [tool]: event.target.value,
                }))
              }
              maxLength={1000}
              placeholder={details.placeholder}
              className="w-full resize-y rounded-xl border border-white/15 bg-[#0B161C] p-4 text-sm leading-relaxed text-white outline-none transition-colors placeholder:text-slate-600 focus:border-[#68E2CF]"
            />

            <p className="text-xs leading-relaxed text-slate-500">
              Describe the style, environment, and details
              you want to explore.
            </p>
          </div>

          {/* TEXTURE OPTIONS */}
          {tool === 'Textures' && (
            <div className="space-y-4 border-t border-white/10 pt-6">
              <h3 className="text-sm font-semibold text-slate-200">
                Texture settings
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="material"
                    className="block text-sm text-slate-300"
                  >
                    Material
                  </label>

                  <select
                    id="material"
                    value={material}
                    onChange={(event) =>
                      setMaterial(event.target.value)
                    }
                    className="w-full rounded-xl border border-white/15 bg-[#0B161C] p-3 text-sm text-white outline-none focus:border-[#68E2CF]"
                  >
                    {[
                      'Stone',
                      'Metal',
                      'Wood',
                      'Fabric',
                      'Other',
                    ].map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="resolution"
                    className="block text-sm text-slate-300"
                  >
                    Resolution
                  </label>

                  <select
                    id="resolution"
                    value={resolution}
                    onChange={(event) =>
                      setResolution(event.target.value)
                    }
                    className="w-full rounded-xl border border-white/15 bg-[#0B161C] p-3 text-sm text-white outline-none focus:border-[#68E2CF]"
                  >
                    <option value="512">512 × 512</option>
                    <option value="1024">1024 × 1024</option>
                    <option value="2048">2048 × 2048</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* VALIDATION */}
          {error && (
            <p
              role="alert"
              className="rounded-xl border border-rose-400/20 bg-rose-400/5 px-4 py-3 text-sm text-rose-300"
            >
              {error}
            </p>
          )}

          {/* GENERATE ACTION */}
          <div className="space-y-3">
            <button
              type="button"
              disabled={busy}
              onClick={generate}
              className="rg-primary-action w-full rounded-xl bg-[#68E2CF] px-6 py-3.5 font-semibold text-[#080F14] transition-all hover:bg-[#8AF0DE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#68E2CF] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {busy
                ? 'Preparing preview…'
                : 'Generate demo result →'}
            </button>

            <p className="text-center text-xs leading-relaxed text-slate-500">
              Demo mode — no real media is generated,
              downloaded, or sent to a server.
            </p>
          </div>
        </div>

        {/* PREVIEW PANEL */}
        <div
          className="rg-studio-panel flex min-h-[480px] min-w-0 flex-col rounded-2xl border border-white/10 bg-[#111E25] p-5 sm:p-7 lg:p-8"
          aria-live="polite"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-1">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#68E2CF]">
                Output workspace
              </p>

              <h2 className="text-2xl font-semibold text-white">
                Asset preview
              </h2>
            </div>

            <span className="rounded-full border border-[#68E2CF]/20 bg-[#17312F] px-3 py-1 text-xs font-medium text-[#68E2CF]">
              Demo only
            </span>
          </div>

          <div className="rg-preview-frame mt-6 flex flex-1 flex-col rounded-2xl border border-white/10 bg-[#0B161C] p-4 sm:p-5">

            {/* CATEGORY VISUAL */}
            <div aria-hidden="true">
              <AssetIllustration tool={tool} />
            </div>

            {/* RESULT CONTENT */}
            <div className="flex flex-1 flex-col justify-center py-7 text-center">
              {result ? (
                <div className="mx-auto max-w-sm space-y-4">
                  <div className="flex items-center justify-center gap-2 text-[#68E2CF]">
                    <span aria-hidden="true">✓</span>
                    <p className="text-sm font-semibold">
                      Demo record created
                    </p>
                  </div>

                  <p className="break-words text-sm leading-relaxed text-slate-300">
                    {result.description}
                  </p>

                  {tool === 'Textures' && (
                    <p className="text-xs text-slate-500">
                      {result.material} · {result.resolution} ×{' '}
                      {result.resolution} (selected settings)
                    </p>
                  )}

                  <p className="text-xs text-slate-500">
                    Created at {result.createdAt}
                  </p>

                  <p className="text-xs leading-relaxed text-slate-500">
                    No actual media file was generated.
                    The illustration above is a static example.
                  </p>
                </div>
              ) : (
                <div className="mx-auto max-w-sm space-y-3">
                  <h3 className="text-lg font-semibold text-white">
                    Your workspace is ready.
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-400">
                    Enter a description and select
                    Generate demo result to test the workflow.
                  </p>

                  <p className="text-xs text-slate-500">
                    The illustration above represents the selected
                    asset category, not generated content.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
            <span>
              Selected: {tool === '3D' ? '3D Assets' : tool}
            </span>

            <span>
              Backend integration pending
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
