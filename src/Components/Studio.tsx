import { useState } from 'react'

type Tool = 'Textures' | 'Audio' | 'Speech' | '3D'
type GenerationResult = { id: string; tool: Tool; description: string; createdAt: string }

const tools: Tool[] = ['Textures', 'Audio', 'Speech', '3D']
const descriptions: Record<Tool, string> = {
  Textures: 'Describe a seamless material for your game environment.',
  Audio: 'Describe a sound effect or environmental ambience.',
  Speech: 'Enter the dialogue you want a character to speak.',
  '3D': 'Describe a basic game prop or object.',
}

export default function Studio() {
  const [tool, setTool] = useState<Tool>('Textures')
  const [prompts, setPrompts] = useState<Record<Tool, string>>({
    Textures: 'Weathered stone with moss, seamless game texture',
    Audio: 'Footsteps on wet stone in a quiet dungeon',
    Speech: 'Welcome, traveler. Your journey begins here.',
    '3D': 'Low-poly wooden treasure chest with metal trim',
  })
  const [resolution, setResolution] = useState('1024')
  const [material, setMaterial] = useState('Stone')
  const [busy, setBusy] = useState(false)
  const [results, setResults] = useState<Partial<Record<Tool, GenerationResult>>>({})
  const [error, setError] = useState('')

  function generate() {
    if (!prompts[tool].trim()) {
      setError('Please enter a description first.')
      return
    }
    setError('')
    setBusy(true)
    // Demo-only response. No network requests or AI credentials are used.
    const result: GenerationResult = {
      id: crypto.randomUUID(),
      tool,
      description: prompts[tool].trim(),
      createdAt: new Date().toLocaleTimeString(),
    }
    setResults((previous) => ({ ...previous, [tool]: result }))
    setBusy(false)
  }

  const result = results[tool]

  return (
    <section className="mx-auto max-w-6xl space-y-8 pb-16">
      <div className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.22em] text-[#68E2CF]">RENDERGUARD / AI STUDIO</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Create something new.</h1>
        <p className="max-w-2xl text-slate-400">Explore asset creation in a focused workspace. Generation is simulated until the backend is connected.</p>
      </div>

      <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-[#111E25] p-2" role="tablist" aria-label="Asset generator">
        {tools.map((item) => (
          <button key={item} type="button" role="tab" aria-selected={tool === item}
            onClick={() => { setTool(item); setError('') }}
            className={`min-w-24 flex-1 rounded-xl px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#68E2CF] ${tool === item ? 'bg-[#25413E] text-[#68E2CF]' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6 rounded-2xl border border-white/10 bg-[#111E25] p-6 md:p-8">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">{tool} generator</h2>
            <p className="text-sm text-slate-400">{descriptions[tool]}</p>
          </div>
          <div className="space-y-2">
            <label htmlFor="asset-prompt" className="block text-sm font-medium text-slate-200">{tool === 'Speech' ? 'Dialogue' : 'Asset description'}</label>
            <textarea id="asset-prompt" rows={5} value={prompts[tool]}
              onChange={(event) => setPrompts((previous) => ({ ...previous, [tool]: event.target.value }))}
              maxLength={1000}
              className="w-full resize-y rounded-xl border border-white/15 bg-[#0B161C] p-4 text-sm leading-relaxed text-white outline-none transition-colors placeholder:text-slate-600 focus:border-[#68E2CF]"
              placeholder="Describe your asset..." />
            <p className="text-right text-xs text-slate-500">{prompts[tool].length}/1000</p>
          </div>
          {tool === 'Textures' && (
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="material" className="block text-sm text-slate-300">Material</label>
                <select id="material" value={material} onChange={(event) => setMaterial(event.target.value)} className="w-full rounded-xl border border-white/15 bg-[#0B161C] p-3 text-sm text-white focus:border-[#68E2CF]">
                  {['Stone', 'Metal', 'Wood', 'Fabric', 'Other'].map((item) => <option key={item}>{item}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="resolution" className="block text-sm text-slate-300">Resolution</label>
                <select id="resolution" value={resolution} onChange={(event) => setResolution(event.target.value)} className="w-full rounded-xl border border-white/15 bg-[#0B161C] p-3 text-sm text-white focus:border-[#68E2CF]">
                  <option value="512">512 × 512</option>
                  <option value="1024">1024 × 1024</option>
                  <option value="2048">2048 × 2048</option>
                </select>
              </div>
            </div>
          )}
          {error && <p role="alert" className="text-sm text-rose-300">{error}</p>}
          <button type="button" disabled={busy} onClick={generate}
            className="w-full rounded-xl bg-[#68E2CF] px-6 py-3 font-semibold text-[#080F14] transition-colors hover:bg-[#8AF0DE] disabled:cursor-not-allowed disabled:opacity-60">
            {busy ? 'Preparing preview…' : 'Generate demo result →'}
          </button>
          <p className="text-xs leading-relaxed text-slate-500">Demo mode: this action does not generate or download a real asset, contact a server, or consume API credits.</p>
        </div>

        <div className="flex min-h-[400px] flex-col rounded-2xl border border-white/10 bg-[#111E25] p-6 md:p-8" aria-live="polite">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-white">Preview</h2>
            <span className="rounded-full border border-[#68E2CF]/25 bg-[#17312F] px-3 py-1 text-xs text-[#68E2CF]">Demo only</span>
          </div>
          <div className="mt-6 flex flex-1 flex-col items-center justify-center gap-5 rounded-xl border border-dashed border-white/10 bg-[#0B161C] p-6 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-[#68E2CF]/25 bg-[#17312F] text-5xl text-[#68E2CF]" aria-hidden="true">
              {tool === 'Textures' ? '◉' : tool === 'Audio' ? '♫' : tool === 'Speech' ? '◌' : '⬡'}
            </div>
            {result ? (
              <div className="max-w-sm space-y-3">
                <p className="font-semibold text-white">Demo result created</p>
                <p className="break-words text-sm leading-relaxed text-slate-300">{result.description}</p>
                {tool === 'Textures' && <p className="text-xs text-slate-500">{material} · {resolution} × {resolution} (settings preview)</p>}
                <p className="text-xs text-slate-500">Created at {result.createdAt} · No actual media generated</p>
              </div>
            ) : (
              <div className="max-w-sm space-y-2">
                <p className="font-medium text-white">Your {tool.toLowerCase()} preview will appear here.</p>
                <p className="text-sm text-slate-400">Enter a description and click Generate demo result to test the interaction.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
