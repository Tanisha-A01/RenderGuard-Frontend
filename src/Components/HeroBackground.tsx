
export default function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Central ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#68E2CF]/[0.075] blur-[90px] sm:h-[550px] sm:w-[550px]" />

      {/* Centre-focused technical grid */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(104,226,207,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(104,226,207,0.09) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 48% 65% at 50% 50%, black 10%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 48% 65% at 50% 50%, black 10%, transparent 100%)',
        }}
      />

      {/* Central geometric guides */}
      <svg
        viewBox="0 0 1000 650"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="500"
          cy="325"
          r="210"
          stroke="#68E2CF"
          strokeOpacity="0.15"
        />

        <circle
          cx="500"
          cy="325"
          r="150"
          stroke="#68E2CF"
          strokeOpacity="0.13"
          strokeDasharray="5 10"
        />

        <path
          d="M260 325H740M500 85V565"
          stroke="#68E2CF"
          strokeOpacity="0.12"
          strokeDasharray="4 12"
        />

        <circle
          cx="500"
          cy="325"
          r="4"
          fill="#68E2CF"
          fillOpacity="0.35"
        />
      </svg>
    </div>
  )
}
