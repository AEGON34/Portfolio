import { useEffect, useRef } from 'react';

/* Tiny SVG icons */
const IconCode = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const IconGear = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const IconCpu = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);
const IconBot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16" strokeWidth="3" />
    <line x1="16" y1="16" x2="16" y2="16" strokeWidth="3" />
  </svg>
);
const IconTerminal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);
const IconCircuit = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="6" cy="6" r="2" /><circle cx="18" cy="18" r="2" />
    <circle cx="6" cy="18" r="2" /><circle cx="18" cy="6" r="2" />
    <line x1="6" y1="8" x2="6" y2="16" />
    <line x1="18" y1="8" x2="18" y2="16" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="18" x2="16" y2="18" />
  </svg>
);

/* Animated dashed connector SVG */
function Connectors() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 z" fill="rgba(56,189,248,0.5)" />
        </marker>
      </defs>
      {/* center to top-left */}
      <line x1="50%" y1="50%" x2="22%" y2="22%"
        stroke="rgba(56,189,248,0.35)" strokeWidth="1" strokeDasharray="5 4">
        <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1.4s" repeatCount="indefinite" />
      </line>
      {/* center to top-right */}
      <line x1="50%" y1="50%" x2="78%" y2="22%"
        stroke="rgba(56,189,248,0.35)" strokeWidth="1" strokeDasharray="5 4">
        <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1.8s" repeatCount="indefinite" />
      </line>
      {/* center to bottom-left */}
      <line x1="50%" y1="50%" x2="22%" y2="78%"
        stroke="rgba(56,189,248,0.35)" strokeWidth="1" strokeDasharray="5 4">
        <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="2.2s" repeatCount="indefinite" />
      </line>
      {/* center to bottom-right */}
      <line x1="50%" y1="50%" x2="78%" y2="78%"
        stroke="rgba(56,189,248,0.35)" strokeWidth="1" strokeDasharray="5 4">
        <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1.6s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}

/* Individual node */
function Node({ icon, label, style, shape = 'square', delay = '0s' }) {
  const base = shape === 'circle'
    ? 'rounded-full border border-cyan-400/40'
    : 'rounded-xl border border-cyan-400/40';
  return (
    <div
      className={`absolute flex flex-col items-center justify-center gap-1 bg-slate-900/80 backdrop-blur-sm ${base} shadow-[0_0_18px_rgba(56,189,248,0.15)]`}
      style={{ ...style, animation: `heroNodeFloat 3s ease-in-out infinite`, animationDelay: delay }}
    >
      <div className="text-cyan-300">{icon}</div>
      {label && <span className="text-[8px] font-bold tracking-widest text-cyan-400/80 uppercase">{label}</span>}
    </div>
  );
}

export default function HeroIllustration() {
  const gearRef = useRef(null);
  const gear2Ref = useRef(null);

  useEffect(() => {
    let frame;
    let angle = 0;
    const tick = () => {
      angle += 0.3;
      if (gearRef.current) gearRef.current.style.transform = `rotate(${angle}deg)`;
      if (gear2Ref.current) gear2Ref.current.style.transform = `rotate(${-angle * 0.7}deg)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <style>{`
        @keyframes heroNodeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes heroPulseRing {
          0% { box-shadow: 0 0 0 0 rgba(56,189,248,0.5); }
          70% { box-shadow: 0 0 0 14px rgba(56,189,248,0); }
          100% { box-shadow: 0 0 0 0 rgba(56,189,248,0); }
        }
        @keyframes heroBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>

      {/* Outer frame */}
      <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-md shadow-[0_0_60px_rgba(56,189,248,0.1)] overflow-hidden">

        {/* Circuit grid background */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, rgba(56,189,248,0.4) 0px, transparent 1px, transparent 28px, rgba(56,189,248,0.4) 29px),
              repeating-linear-gradient(90deg, rgba(56,189,248,0.4) 0px, transparent 1px, transparent 28px, rgba(56,189,248,0.4) 29px)
            `,
            backgroundSize: '29px 29px',
          }}
        />

        {/* Animated dashed connectors */}
        <Connectors />

        {/* Center hub */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div
            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-900 border-2 border-cyan-400/60 flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.3)]"
            style={{ animation: 'heroPulseRing 2s infinite' }}
          >
            {/* Spinning outer gear ring */}
            <div
              ref={gearRef}
              className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full border border-dashed border-cyan-400/40"
            />
            {/* Inner code symbol */}
            <div className="text-cyan-300 flex flex-col items-center leading-none select-none">
              <span className="text-xs font-mono font-bold text-cyan-300" style={{ fontSize: '0.65rem', letterSpacing: '0.05em' }}>&lt;/&gt;</span>
              <span className="text-[7px] font-bold tracking-widest text-cyan-500 uppercase mt-0.5">AI · BOT</span>
            </div>
          </div>
        </div>

        {/* Node: top-left — Terminal / Software */}
        <Node
          icon={<IconTerminal />}
          label="Terminal"
          shape="square"
          delay="0s"
          style={{ top: '10%', left: '8%', width: 52, height: 52 }}
        />

        {/* Node: top-right — Gear / Robotics */}
        <Node
          icon={
            <div ref={gear2Ref} className="text-cyan-300">
              <IconGear />
            </div>
          }
          label="Servo"
          shape="circle"
          delay="0.5s"
          style={{ top: '10%', right: '8%', width: 56, height: 56 }}
        />

        {/* Node: bottom-left — Circuit / Hardware */}
        <Node
          icon={<IconCircuit />}
          label="Circuit"
          shape="circle"
          delay="1s"
          style={{ bottom: '10%', left: '8%', width: 54, height: 54 }}
        />

        {/* Node: bottom-right — CPU / Code */}
        <Node
          icon={<IconCpu />}
          label="Core"
          shape="square"
          delay="1.5s"
          style={{ bottom: '10%', right: '8%', width: 52, height: 52 }}
        />

        {/* Floating mini chips — mid edges */}
        <div
          className="absolute left-1/2 top-[6%] -translate-x-1/2 px-2 py-0.5 rounded-full border border-cyan-400/30 bg-slate-900/70 text-cyan-300 text-[9px] font-bold tracking-widest uppercase"
          style={{ animation: 'heroNodeFloat 2.5s ease-in-out infinite' }}
        >
          React
        </div>
        <div
          className="absolute left-[4%] top-1/2 -translate-y-1/2 px-2 py-0.5 rounded-full border border-cyan-400/30 bg-slate-900/70 text-cyan-300 text-[9px] font-bold tracking-widest uppercase"
          style={{ animation: 'heroNodeFloat 3s ease-in-out infinite', animationDelay: '0.8s' }}
        >
          Node
        </div>
        <div
          className="absolute right-[4%] top-1/2 -translate-y-1/2 px-2 py-0.5 rounded-full border border-cyan-400/30 bg-slate-900/70 text-cyan-300 text-[9px] font-bold tracking-widest uppercase"
          style={{ animation: 'heroNodeFloat 2.8s ease-in-out infinite', animationDelay: '1.2s' }}
        >
          API
        </div>
        <div
          className="absolute left-1/2 bottom-[5%] -translate-x-1/2 px-2 py-0.5 rounded-full border border-cyan-400/30 bg-slate-900/70 text-cyan-300 text-[9px] font-bold tracking-widest uppercase"
          style={{ animation: 'heroNodeFloat 3.2s ease-in-out infinite', animationDelay: '0.4s' }}
        >
          Robot
        </div>

        {/* Blinking status dots (circuit style) */}
        <div className="absolute bottom-[18%] left-[30%] w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: 'heroBlink 1.4s infinite' }} />
        <div className="absolute top-[28%] right-[28%] w-1.5 h-1.5 rounded-full bg-cyan-400" style={{ animation: 'heroBlink 2s infinite 0.6s' }} />
        <div className="absolute top-[55%] left-[24%] w-1 h-1 rounded-full bg-blue-400" style={{ animation: 'heroBlink 1.8s infinite 1s' }} />
      </div>
    </>
  );
}
