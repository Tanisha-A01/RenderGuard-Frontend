
type StudioCardVisualProps = {
  type: 'Textures' | 'Audio' | 'Speech' | '3D Assets'
}

const audioBars = [
  14, 22, 35, 19, 44, 61, 30, 52, 75, 43,
  26, 58, 84, 48, 29, 68, 39, 53, 24, 46,
  72, 35, 56, 28, 43, 63, 31, 18, 38, 21,
]

export default function StudioCardVisual({
  type,
}: StudioCardVisualProps) {
  return (
    <div
      className="relative flex h-36 w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#0B171D]"
      role="img"
      aria-label={`${type} illustrative preview`}
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(#68E2CF10 1px, transparent 1px), linear-gradient(90deg, #68E2CF10 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* TEXTURES */}
      {type === 'Textures' && (
        <div className="relative grid h-24 w-24 rotate-[-12deg] grid-cols-3 gap-1 rounded-lg border border-[#68E2CF]/30 bg-[#162F30] p-2 shadow-xl">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="rounded-sm border border-white/10"
              style={{
                backgroundColor:
                  index % 3 === 0
                    ? '#34635E'
                    : index % 2 === 0
                      ? '#244C4A'
                      : '#1B393B',
              }}
            />
          ))}
        </div>
      )}

      {/* AUDIO */}
      {type === 'Audio' && (
        <div className="relative flex h-24 w-[85%] items-center justify-center gap-[3px]">
          {audioBars.map((height, index) => (
            <div
              key={index}
              className="min-w-0 flex-1 rounded-full bg-[#68E2CF]"
              style={{
                height: `${height}%`,
                opacity: index % 3 === 0 ? 0.55 : 0.9,
              }}
            />
          ))}
        </div>
      )}

      {/* SPEECH */}
      {type === 'Speech' && (
        <div className="relative flex flex-col items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#68E2CF]/40 bg-[#17312F]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#68E2CF"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="9" y="2" width="6" height="13" rx="3" />
              <path d="M5 10a7 7 0 0 0 14 0" />
              <path d="M12 17v5" />
              <path d="M8 22h8" />
            </svg>
          </div>

          <div className="flex h-5 items-center gap-1">
            {[8, 15, 11, 20, 12, 17, 9, 14, 7].map(
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
      )}

      {/* 3D ASSETS */}
      {type === '3D Assets' && (
        <svg
          viewBox="0 0 160 130"
          className="relative h-28 w-36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M80 12 L137 44 L80 77 L23 44 Z"
            fill="#285957"
            stroke="#68E2CF"
            strokeWidth="1.5"
          />
          <path
            d="M23 44 L80 77 L80 122 L23 89 Z"
            fill="#17383A"
            stroke="#68E2CF"
            strokeWidth="1.5"
          />
          <path
            d="M80 77 L137 44 L137 89 L80 122 Z"
            fill="#204A49"
            stroke="#68E2CF"
            strokeWidth="1.5"
          />

          <path
            d="M51 28 L108 61 M108 28 L51 61 M23 66 L80 99 L137 66"
            stroke="#A4F6E9"
            strokeOpacity="0.35"
          />

          <circle cx="80" cy="12" r="2.5" fill="#A4F6E9" />
          <circle cx="23" cy="44" r="2.5" fill="#A4F6E9" />
          <circle cx="137" cy="44" r="2.5" fill="#A4F6E9" />
          <circle cx="80" cy="122" r="2.5" fill="#A4F6E9" />
        </svg>
      )}

      <span className="absolute bottom-2 right-3 text-[9px] uppercase tracking-widest text-slate-500">
        Visual preview
      </span>
    </div>
  )
}
