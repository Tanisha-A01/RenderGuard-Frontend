
export default function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-3xl border border-white/10 bg-[#0C181E]"
      aria-label="Illustration of a game asset inside a development workspace"
      role="img"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(#68E2CF12 1px, transparent 1px), linear-gradient(90deg, #68E2CF12 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Main illustration */}
      <svg
  viewBox="0 0 520 480"
  className="relative block h-auto w-full"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
>
  <g transform="translate(0 -30) translate(260 240) scale(0.82) translate(-260 -240)">
        <defs>
          <linearGradient id="rg-top" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3D7775" />
            <stop offset="100%" stopColor="#204847" />
          </linearGradient>

          <linearGradient id="rg-left" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#234C4D" />
            <stop offset="100%" stopColor="#102B31" />
          </linearGradient>

          <linearGradient id="rg-right" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2E6462" />
            <stop offset="100%" stopColor="#173B3D" />
          </linearGradient>

          <radialGradient id="rg-glow">
            <stop offset="0%" stopColor="#68E2CF" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#68E2CF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient glow */}
        <circle cx="265" cy="235" r="195" fill="url(#rg-glow)" />

        {/* Ground plane */}
        <path
          d="M55 333 L258 425 L467 329 L265 240 Z"
          fill="#10272C"
          fillOpacity="0.8"
          stroke="#68E2CF"
          strokeOpacity="0.13"
        />

        <path
          d="M100 353 L304 260 M150 377 L355 282 M202 400 L408 306"
          stroke="#68E2CF"
          strokeOpacity="0.09"
        />

        <path
          d="M108 310 L309 402 M160 286 L363 379 M213 262 L416 354"
          stroke="#68E2CF"
          strokeOpacity="0.09"
        />

        {/* Object shadow */}
        <ellipse
          cx="262"
          cy="345"
          rx="114"
          ry="33"
          fill="#000000"
          opacity="0.28"
        />

        {/* Stylized low-poly cube */}
        <g stroke="#68E2CF" strokeWidth="1.5" strokeLinejoin="round">
          <path
            d="M260 95 L386 160 L260 226 L134 160 Z"
            fill="url(#rg-top)"
          />
          <path
            d="M134 160 L260 226 L260 362 L134 296 Z"
            fill="url(#rg-left)"
          />
          <path
            d="M260 226 L386 160 L386 296 L260 362 Z"
            fill="url(#rg-right)"
          />
        </g>

        {/* Mesh details */}
        <g
          fill="none"
          stroke="#A4F6E9"
          strokeOpacity="0.23"
          strokeWidth="1"
        >
          <path d="M197 127 L323 193" />
          <path d="M323 127 L197 193" />
          <path d="M134 228 L260 294 L386 228" />
          <path d="M197 193 L197 329" />
          <path d="M323 193 L323 329" />
        </g>

        {/* Highlighted vertices */}
        <g fill="#A4F6E9">
          <circle cx="260" cy="95" r="3" />
          <circle cx="134" cy="160" r="3" />
          <circle cx="386" cy="160" r="3" />
          <circle cx="260" cy="226" r="3" />
          <circle cx="260" cy="362" r="3" />
        </g>

        {/* Floating inspection guides */}
        <g
          stroke="#68E2CF"
          strokeWidth="1"
          strokeOpacity="0.6"
          fill="none"
          strokeDasharray="4 5"
        >
          <path d="M386 160 L438 125" />
          <path d="M134 296 L85 329" />
        </g>

        <g fill="#68E2CF">
          <circle cx="438" cy="125" r="3" />
          <circle cx="85" cy="329" r="3" />
        </g>
          </g>
      </svg>

      {/* Top label */}
      <div className="absolute left-4 top-4 rounded-lg border border-white/10 bg-[#101F26]/90 px-3 py-2 backdrop-blur-sm sm:left-6 sm:top-6">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#68E2CF]" />
          <span className="text-[10px] font-medium tracking-wider text-slate-300 sm:text-xs">
            ASSET WORKSPACE
          </span>
        </div>
      </div>

      {/* Bottom inspection panel */}
      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#101F26]/95 p-3 shadow-xl backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-6 sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-white sm:text-sm">
              Environment_Block_01
            </p>
            <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">
              Sample 3D asset visualization
            </p>
          </div>

          <span className="shrink-0 rounded-full border border-[#68E2CF]/25 bg-[#68E2CF]/10 px-3 py-1 text-[10px] font-medium text-[#68E2CF]">
            Preview
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-slate-400">
            Mesh
          </span>
          <span className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-slate-400">
            Material
          </span>
          <span className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-slate-400">
            Scene object
          </span>
        </div>
      </div>
    </div>
  )
}
