import profileImg from '../assets/original.jpeg';

export default function ProfileOrbit() {
  return (
    <>
      <style>{`
        @keyframes orbitEarth {
          from { transform: rotate(0deg) translateX(130px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(130px) rotate(-360deg); }
        }
        @keyframes orbitMoon {
          from { transform: rotate(0deg) translateX(195px) rotate(0deg); }
          to   { transform: rotate(-360deg) translateX(195px) rotate(360deg); }
        }
        @keyframes profileGlow {
          0%,100% { box-shadow: 0 0 30px rgba(56,189,248,0.3), 0 0 60px rgba(56,189,248,0.1); }
          50%      { box-shadow: 0 0 50px rgba(56,189,248,0.5), 0 0 90px rgba(56,189,248,0.2); }
        }
        @keyframes earthSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes moonGlow {
          0%,100% { box-shadow: 0 0 8px rgba(148,163,184,0.6); }
          50%      { box-shadow: 0 0 16px rgba(148,163,184,0.9); }
        }
        .orbit-track-1 {
          position: absolute;
          width: 260px; height: 260px;
          border-radius: 50%;
          border: 1px dashed rgba(56,189,248,0.25);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .orbit-track-2 {
          position: absolute;
          width: 390px; height: 390px;
          border-radius: 50%;
          border: 1px dashed rgba(56,189,248,0.15);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>

      {/* Total container — big enough for outer orbit */}
      <div className="relative flex items-center justify-center" style={{ width: 430, height: 430 }}>

        {/* Orbit tracks */}
        <div className="orbit-track-1" aria-hidden="true" />
        <div className="orbit-track-2" aria-hidden="true" />

        {/* Profile photo — the "Sun" */}
        <div
          className="relative z-10 rounded-full overflow-hidden border-2 border-cyan-400/50"
          style={{
            width: 220,
            height: 220,
            animation: 'profileGlow 3s ease-in-out infinite',
          }}
        >
          <img
            src={profileImg}
            alt="MD Rejwan"
            className="w-full h-full object-cover object-top"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </div>

        {/* Earth — inner orbit */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width: 0,
            height: 0,
            animation: 'orbitEarth 18s linear infinite',
          }}
          aria-hidden="true"
        >
          <div
            className="rounded-full border border-cyan-400/40 overflow-hidden"
            style={{
              width: 28,
              height: 28,
              marginTop: -14,
              marginLeft: -14,
              background: 'radial-gradient(circle at 35% 35%, #3b82f6, #1e3a8a)',
              boxShadow: '0 0 10px rgba(59,130,246,0.7)',
              animation: 'earthSpin 8s linear infinite',
            }}
          >
            {/* continent blobs */}
            <div style={{
              position: 'absolute', width: 9, height: 6, borderRadius: '50%',
              background: 'rgba(34,197,94,0.8)', top: 6, left: 4,
            }} />
            <div style={{
              position: 'absolute', width: 6, height: 5, borderRadius: '50%',
              background: 'rgba(34,197,94,0.7)', top: 14, left: 14,
            }} />
          </div>
        </div>

        {/* Moon — outer orbit */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width: 0,
            height: 0,
            animation: 'orbitMoon 30s linear infinite',
          }}
          aria-hidden="true"
        >
          <div
            className="rounded-full"
            style={{
              width: 18,
              height: 18,
              marginTop: -9,
              marginLeft: -9,
              background: 'radial-gradient(circle at 35% 30%, #e2e8f0, #94a3b8)',
              animation: 'moonGlow 2.5s ease-in-out infinite',
            }}
          >
            {/* crater spots */}
            <div style={{ position:'absolute', width:3, height:3, borderRadius:'50%', background:'rgba(100,116,139,0.6)', top:4, left:5 }} />
            <div style={{ position:'absolute', width:2, height:2, borderRadius:'50%', background:'rgba(100,116,139,0.5)', top:10, left:11 }} />
          </div>
        </div>

        {/* Glow behind photo */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 180, height: 180,
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)',
            filter: 'blur(16px)',
            zIndex: 0,
          }}
          aria-hidden="true"
        />
      </div>
    </>
  );
}
