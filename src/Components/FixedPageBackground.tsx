type BackgroundPage = 'Studio' | 'Downloads' | 'Docs' | 'Account'

type Props = { page: BackgroundPage }

export default function FixedPageBackground({ page }: Props) {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {page === 'Studio' && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_38%,rgba(50,170,155,0.13),transparent_58%)]" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" fill="none">
            <defs><linearGradient id="studioFade" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#68E2CF" stopOpacity="0"/><stop offset="1" stopColor="#68E2CF" stopOpacity="0.22"/></linearGradient></defs>
            <path d="M600 320 L-100 800 M600 320 L100 800 M600 320 L300 800 M600 320 L500 800 M600 320 L700 800 M600 320 L900 800 M600 320 L1100 800 M600 320 L1300 800" stroke="url(#studioFade)" strokeWidth="1" />
            <path d="M0 445H1200 M0 520H1200 M0 625H1200 M0 765H1200" stroke="#68E2CF" strokeOpacity="0.095" />
            <circle cx="880" cy="280" r="165" stroke="#68E2CF" strokeOpacity="0.14" strokeDasharray="5 12"/>
            <path d="M880 90V470 M690 280H1070" stroke="#68E2CF" strokeOpacity="0.10" strokeDasharray="4 10"/>
          </svg>
        </>
      )}
      {page === 'Downloads' && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_42%,rgba(104,226,207,0.12),transparent_55%)]" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#68E2CF">
            <g strokeOpacity="0.16" strokeWidth="1.5">
              <path d="M1200 150H970L900 220H750 M1200 310H1010L945 375H760 M1200 560H1040L950 470H810 M0 650H230L310 570H440"/>
              <path d="M850 220V375H945 M900 470V580H1100" strokeDasharray="5 9"/>
              <rect x="610" y="245" width="230" height="230" rx="16" strokeOpacity="0.26"/>
              <path d="M610 305H840 M675 245V475 M775 245V475" strokeOpacity="0.12"/>
            </g>
            <g fill="#68E2CF" stroke="none" fillOpacity="0.35"><circle cx="750" cy="220" r="4"/><circle cx="760" cy="375" r="4"/><circle cx="810" cy="470" r="4"/><circle cx="440" cy="570" r="4"/></g>
          </svg>
        </>
      )}
      {page === 'Docs' && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(104,226,207,0.075),transparent_50%)]" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#68E2CF">
            <g strokeOpacity="0.105" strokeWidth="1">
              <path d="M830 90H1150V660H830Z M850 130H1130 M850 170H1090 M850 210H1110 M850 250H1030 M850 290H1100"/>
              <path d="M800 90H770V660H800 M830 70V45H1150V70" strokeDasharray="4 8"/>
              <path d="M70 700H460 M70 720H320 M70 740H390" strokeOpacity="0.07"/>
              <path d="M860 370H1120 M860 390H1050 M860 410H1090" strokeOpacity="0.07"/>
            </g>
            <g fill="#68E2CF" fillOpacity="0.20" stroke="none"><circle cx="830" cy="90" r="3"/><circle cx="1150" cy="660" r="3"/></g>
          </svg>
        </>
      )}
      {page === 'Account' && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,rgba(104,226,207,0.10),transparent_65%)]" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#68E2CF">
            <circle cx="870" cy="385" r="180" strokeOpacity="0.17"/>
            <circle cx="870" cy="385" r="255" strokeOpacity="0.11"/>
            <circle cx="870" cy="385" r="330" strokeOpacity="0.07" strokeDasharray="5 12"/>
            <path d="M870 30V740 M520 385H1200" strokeOpacity="0.055" strokeDasharray="3 12"/>
          </svg>
        </>
      )}
    </div>
  )
}
