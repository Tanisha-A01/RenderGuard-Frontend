
const assets = [
  {
    name: 'Environment_Rock_01',
    path: 'Scene / Environment',
    type: 'Prefab',
    status: 'Placeholder',
    color: 'bg-amber-400',
  },
  {
    name: 'Player_Character',
    path: 'Scene / Characters',
    type: 'Prefab',
    status: 'Placeholder',
    color: 'bg-amber-400',
  },
  {
    name: 'Wooden_Crate',
    path: 'Scene / Props',
    type: 'Prefab',
    status: 'Reviewed',
    color: 'bg-[#68E2CF]',
  },
]

export default function ManagerPreview() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0B151B] p-3 shadow-2xl shadow-black/30 sm:p-5">

      {/* Window title bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E17B70]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#DDBB68]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#68E2CF]" />
          </div>
          <span className="ml-2 text-xs font-medium text-slate-300">
            RenderGuard / Unity Manager
          </span>
        </div>

        <span className="hidden rounded-md border border-[#68E2CF]/20 bg-[#68E2CF]/10 px-2 py-1 text-[10px] text-[#68E2CF] sm:inline">
          v0.2.0
        </span>
      </div>

      {/* Summary */}
      <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
        {[
          { label: 'Assets found', value: '12' },
          { label: 'To review', value: '08' },
          { label: 'Reviewed', value: '04' },
        ].map((metric) => (
          <div
            key={metric.label}
            className="min-w-0 rounded-xl border border-white/10 bg-[#111F26] p-3 sm:p-4"
          >
            <p className="text-[10px] leading-4 text-slate-400 sm:text-xs">
              {metric.label}
            </p>
            <p className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      {/* Asset list */}
      <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-[#101C23]">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-3 sm:px-4">
          <div>
            <p className="text-xs font-semibold text-white sm:text-sm">
              Placeholder inventory
            </p>
            <p className="mt-1 text-[10px] text-slate-500">
              Example scene scan
            </p>
          </div>

          <span className="rounded-md border border-white/10 px-2 py-1 text-[10px] text-slate-400">
            3 shown
          </span>
        </div>

        <div className="divide-y divide-white/5">
          {assets.map((asset) => (
            <div
              key={asset.name}
              className="flex items-center gap-3 px-3 py-3 sm:px-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#192D34] text-lg text-[#68E2CF]">
                ◈
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-slate-200 sm:text-sm">
                  {asset.name}
                </p>
                <p className="mt-1 truncate text-[10px] text-slate-500">
                  {asset.path} · {asset.type}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${asset.color}`} />
                <span className="hidden text-[10px] text-slate-400 sm:inline">
                  {asset.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scan indicator */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#68E2CF]/15 bg-[#68E2CF]/5 px-3 py-3 sm:px-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#68E2CF]" />
          <span className="text-xs text-slate-300">
            Example scan completed
          </span>
        </div>

        <span className="text-[10px] font-medium text-[#68E2CF]">
          Inventory ready
        </span>
      </div>

      <p className="mt-4 text-center text-[10px] leading-relaxed text-slate-500">
        Illustrative preview with sample data — not a live Unity scan.
      </p>
    </div>
  )
}
