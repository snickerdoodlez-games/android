
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Fix: Cast motion object to any to bypass environment-specific prop type errors globally in this file
const m = motion as any;

export interface AnimationConfig {
  duration?: number;
  count?: number;
  size?: number;
  colors?: string[];
  opacity?: number;
  speed?: number;
  hueShift?: number;
  gridSplit?: boolean;
  gradientIntensity?: number;
  gradientFlow?: number;
}

interface AnimProps {
  config?: AnimationConfig;
}

const NEON_GLOWS = ['#00E5FF', '#FF1FBF', '#39FF14', '#F9FF00', '#FF073A', '#D400FF', '#FF6A00', '#00FFF6'];

const ConfigWrapper: React.FC<{ config?: AnimationConfig, children: React.ReactNode }> = ({ config, children }) => {
  const intensity = config?.gradientIntensity ?? 0;
  const flow = config?.gradientFlow ?? 1;

  const content = (
    <div className="absolute inset-0 overflow-hidden isolate">
      {children}
      {intensity > 0 && (
        <m.div 
          className="absolute inset-[-100%] pointer-events-none mix-blend-overlay z-50"
          animate={{
            background: [
              `linear-gradient(0deg, #ff0080 ${intensity * 100}%, #00bfff 100%)`,
              `linear-gradient(120deg, #00ff00 ${intensity * 100}%, #ff0080 100%)`,
              `linear-gradient(240deg, #00bfff ${intensity * 100}%, #00ff00 100%)`,
              `linear-gradient(360deg, #ff0080 ${intensity * 100}%, #00bfff 100%)`
            ],
            rotate: [0, 360]
          }}
          transition={{
            duration: 10 / (flow || 1),
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ opacity: intensity }}
        />
      )}
    </div>
  );

  return (
    <div 
      className="absolute inset-0 overflow-hidden" 
      style={{ 
        opacity: config?.opacity ?? 1,
        filter: config?.hueShift ? `hue-rotate(${config.hueShift}deg)` : undefined
      }}
    >
      {config?.gridSplit ? (
        <div className="grid grid-cols-4 grid-rows-4 w-full h-full">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="relative overflow-hidden border-[0.5px] border-white/5">
              <div 
                className="absolute inset-0" 
                style={{ 
                  transform: `scale(4) translate(${(i % 4) * -25 + 37.5}%, ${Math.floor(i / 4) * -25 + 37.5}%) rotate(${i * 5}deg)`,
                  opacity: 1 - (i * 0.02)
                }}
              >
                {content}
              </div>
            </div>
          ))}
        </div>
      ) : content}
    </div>
  );
};

const DiamondSVG = ({ color, size = 1 }: { color: string, size?: number }) => (
  <svg 
    viewBox="0 0 100 100" 
    className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
    style={{ transform: `scale(${size})` }}
  >
    <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke={color} strokeWidth="4" />
  </svg>
);

// --- MIND BENDING WACKY ANIMATIONS ---

export const ArcadeWacky_NeonWeb: React.FC<AnimProps> = ({ config }) => {
  const count = config?.count ?? 12;
  const speed = config?.speed ?? 1;
  return (
    <ConfigWrapper config={config}>
      <svg className="w-full h-full">
        {[...Array(count)].map((_, i) => (
          <m.line
            key={i}
            x1={Math.random() * 100 + "%"}
            y1={Math.random() * 100 + "%"}
            x2={Math.random() * 100 + "%"}
            y2={Math.random() * 100 + "%"}
            stroke={NEON_GLOWS[i % NEON_GLOWS.length]}
            strokeWidth="1"
            animate={{ opacity: [0, 0.8, 0], x1: [Math.random() * 100 + "%", Math.random() * 100 + "%"] }}
            transition={{ duration: 3 / speed, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </svg>
    </ConfigWrapper>
  );
};

export const ArcadeWacky_PolygonalDrift: React.FC<AnimProps> = ({ config }) => {
  const count = config?.count ?? 8;
  const speed = config?.speed ?? 1;
  return (
    <ConfigWrapper config={config}>
      {[...Array(count)].map((_, i) => (
        <m.div
          key={i}
          className="absolute border border-white/30"
          style={{ 
            width: (config?.size ?? 40), 
            height: (config?.size ?? 40),
            left: Math.random() * 80 + "%",
            top: Math.random() * 80 + "%",
            clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
          }}
          animate={{ rotate: [0, 360], scale: [1, 1.2, 0.8, 1], x: [0, 50, -50, 0] }}
          transition={{ duration: 5 / speed, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </ConfigWrapper>
  );
};

export const ArcadeWacky_ScannerBar: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <m.div 
      className="w-full h-8 bg-gradient-to-b from-transparent via-white/40 to-transparent blur-sm"
      animate={{ top: ['-10%', '110%'] }}
      transition={{ duration: 2 / (config?.speed ?? 1), repeat: Infinity, ease: "linear" }}
      style={{ position: 'absolute' }}
    />
    <div className="grid grid-cols-4 grid-rows-4 w-full h-full opacity-10">
      {[...Array(16)].map((_, i) => <div key={i} className="border border-white" />)}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_InterferencePattern: React.FC<AnimProps> = ({ config }) => {
  const speed = config?.speed ?? 1;
  return (
    <ConfigWrapper config={config}>
      {[...Array(5)].map((_, i) => (
        <m.div
          key={i}
          className="absolute rounded-full border-2 border-neon-blue"
          style={{ left: '50%', top: '50%', x: '-50%', y: '-50%' }}
          animate={{ width: [0, 500], height: [0, 500], opacity: [1, 0] }}
          transition={{ duration: 4 / speed, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
        />
      ))}
    </ConfigWrapper>
  );
};

export const ArcadeWacky_AcidTrip: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <m.div 
      className="w-full h-full"
      animate={{ 
        background: [
          'radial-gradient(circle at 0% 0%, #ff00ff, #00ffff)',
          'radial-gradient(circle at 100% 100%, #00ffff, #ffff00)',
          'radial-gradient(circle at 0% 100%, #ffff00, #ff0000)',
          'radial-gradient(circle at 100% 0%, #ff0000, #ff00ff)',
        ]
      }}
      transition={{ duration: 8 / (config?.speed ?? 1), repeat: Infinity, repeatType: "mirror" }}
    />
  </ConfigWrapper>
);

export const ArcadeWacky_PixelShatter: React.FC<AnimProps> = ({ config }) => {
  const count = config?.count ?? 20;
  const speed = config?.speed ?? 1;
  return (
    <ConfigWrapper config={config}>
      {[...Array(count)].map((_, i) => (
        <m.div
          key={i}
          className="absolute w-4 h-4 bg-white/20 border border-white/40"
          style={{ left: "50%", top: "50%" }}
          animate={{ 
            x: [0, (Math.random() - 0.5) * 400], 
            y: [0, (Math.random() - 0.5) * 400],
            rotate: [0, 720],
            opacity: [1, 0],
            scale: [1, 0]
          }}
          transition={{ duration: 1.5 / speed, repeat: Infinity, delay: Math.random() }}
        />
      ))}
    </ConfigWrapper>
  );
};

export const ArcadeWacky_DeepFringe: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    {[...Array(10)].map((_, i) => (
      <m.div
        key={i}
        className="absolute inset-0 border-[2px]"
        style={{ borderColor: NEON_GLOWS[i % NEON_GLOWS.length] }}
        animate={{ scale: [1, 2], opacity: [0.5, 0] }}
        transition={{ duration: 3 / (config?.speed ?? 1), repeat: Infinity, delay: i * 0.3 }}
      />
    ))}
  </ConfigWrapper>
);

export const ArcadeWacky_Supernova: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex items-center justify-center w-full h-full">
      {[...Array(15)].map((_, i) => (
        <m.div
          key={i}
          className="absolute rounded-full bg-white"
          animate={{ 
            width: [0, 10], height: [0, 10], 
            x: [0, (Math.random() - 0.5) * 300], 
            y: [0, (Math.random() - 0.5) * 300],
            opacity: [1, 0]
          }}
          transition={{ duration: 1 / (config?.speed ?? 1), repeat: Infinity, delay: Math.random() }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_GridJitter: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="grid grid-cols-3 grid-rows-3 w-full h-full p-2 gap-2">
      {[...Array(9)].map((_, i) => (
        <m.div
          key={i}
          className="bg-white/10 border border-white/20"
          animate={{ x: [0, 5, -5, 0], y: [0, -5, 5, 0] }}
          transition={{ duration: 0.1 / (config?.speed ?? 1), repeat: Infinity }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_BinaryStream: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex flex-col w-full h-full font-mono text-[10px] text-neon-green overflow-hidden select-none">
      {[...Array(12)].map((_, i) => (
        <m.div
          key={i}
          className="whitespace-nowrap"
          animate={{ x: ['-100%', '0%'] }}
          transition={{ duration: (3 + i * 0.2) / (config?.speed ?? 1), repeat: Infinity, ease: "linear" }}
        >
          {Math.random().toString(2).slice(2, 50)}
        </m.div>
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_ChromaticAberration: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="relative w-full h-full">
      <m.div className="absolute inset-0 border-4 border-neon-red mix-blend-screen" animate={{ x: [-2, 2, -2] }} transition={{ duration: 0.05, repeat: Infinity }} />
      <m.div className="absolute inset-0 border-4 border-neon-blue mix-blend-screen" animate={{ x: [2, -2, 2] }} transition={{ duration: 0.05, repeat: Infinity }} />
      <div className="absolute inset-0 border-4 border-white opacity-20" />
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_RetroSunset: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="w-full h-full bg-gradient-to-b from-purple-900 to-black relative">
      <m.div 
        className="absolute top-1/2 left-1/2 w-24 h-24 bg-neon-hot-orange rounded-full blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ x: '-50%', y: '-50%' }}
      />
      <div className="absolute bottom-0 w-full h-1/2 flex flex-col justify-end">
        {[...Array(6)].map((_, i) => (
          <m.div
            key={i}
            className="w-full h-[2px] bg-neon-pink"
            animate={{ scaleY: [1, 4], opacity: [0, 1, 0], y: [0, 50] }}
            transition={{ duration: 2 / (config?.speed ?? 1), repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </div>
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_WarpPortal: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex items-center justify-center w-full h-full">
      {[...Array(20)].map((_, i) => (
        <m.div
          key={i}
          className="absolute border-2 border-neon-violet"
          animate={{ rotate: [0, 360], scale: [0, 5], opacity: [1, 0] }}
          transition={{ duration: 3 / (config?.speed ?? 1), repeat: Infinity, delay: i * 0.15 }}
          style={{ width: 10, height: 10 }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_NeonPulse: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <m.div
      className="w-full h-full border-8 border-white"
      animate={{ 
        borderColor: NEON_GLOWS, 
        boxShadow: NEON_GLOWS.map(c => `inset 0 0 40px ${c}, 0 0 40px ${c}`),
        scale: [1, 0.95, 1]
      }}
      transition={{ duration: 4 / (config?.speed ?? 1), repeat: Infinity }}
    />
  </ConfigWrapper>
);

export const ArcadeWacky_DiamondStorm: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    {[...Array(config?.count ?? 15)].map((_, i) => (
      <m.div
        key={i}
        className="absolute w-6 h-6 border-2 border-white/20"
        style={{ left: Math.random() * 100 + "%", top: -20, rotate: 45 }}
        animate={{ y: [0, 400], rotate: [45, 405] }}
        transition={{ duration: 2 / (config?.speed ?? 1), repeat: Infinity, delay: Math.random() * 2 }}
      >
        <DiamondSVG color={NEON_GLOWS[i % NEON_GLOWS.length]} size={0.5} />
      </m.div>
    ))}
  </ConfigWrapper>
);

export const ArcadeWacky_HexagonGrid: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="grid grid-cols-4 grid-rows-4 w-full h-full p-2 gap-1">
      {[...Array(16)].map((_, i) => (
        <m.div
          key={i}
          className="w-full h-full bg-white/10"
          style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
          animate={{ scale: [1, 0.5, 1], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2 / (config?.speed ?? 1), repeat: Infinity, delay: (i % 4) * 0.2 }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_CircuitGlow: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="w-full h-full p-4 relative">
      <div className="absolute inset-0 opacity-10 border-2 border-white/20" />
      {[...Array(4)].map((_, i) => (
        <m.div
          key={i}
          className="absolute h-1 bg-neon-blue shadow-[0_0_10px_cyan]"
          style={{ top: 25 * i + "%", left: 0 }}
          animate={{ width: ['0%', '100%', '0%'] }}
          transition={{ duration: 3 / (config?.speed ?? 1), repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_MeltDown: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex justify-around items-start h-full w-full">
      {[...Array(8)].map((_, i) => (
        <m.div
          key={i}
          className="w-2 rounded-full"
          style={{ backgroundColor: NEON_GLOWS[i % NEON_GLOWS.length] }}
          animate={{ height: ['0%', '100%', '0%'], y: [0, 50, 0] }}
          transition={{ duration: 4 / (config?.speed ?? 1), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_GlitchLines: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    {[...Array(20)].map((_, i) => (
      <m.div
        key={i}
        className="absolute w-full h-[1px] bg-white/40"
        style={{ top: Math.random() * 100 + "%" }}
        animate={{ x: [-200, 200], opacity: [0, 1, 0] }}
        transition={{ duration: 0.1, repeat: Infinity, delay: Math.random() * 2 }}
      />
    ))}
  </ConfigWrapper>
);

export const ArcadeWacky_VortexTunnel: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex items-center justify-center w-full h-full perspective-1000">
      {[...Array(10)].map((_, i) => (
        <m.div
          key={i}
          className="absolute border-2 border-white/20"
          style={{ width: 100, height: 100 }}
          animate={{ 
            rotate: [0, 360], 
            scale: [0.1, 4], 
            opacity: [0, 1, 0],
            borderColor: NEON_GLOWS[i % NEON_GLOWS.length]
          }}
          transition={{ duration: 4 / (config?.speed ?? 1), repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_LaserBounce: React.FC<AnimProps> = ({ config }) => {
  const speed = config?.speed ?? 1;
  const count = config?.count ?? 6;
  return (
    <ConfigWrapper config={config}>
      <svg className="w-full h-full">
        {[...Array(count)].map((_, i) => (
          <m.line
            key={i}
            x1="10%" y1="10%" x2="90%" y2="90%"
            stroke={NEON_GLOWS[i % NEON_GLOWS.length]}
            strokeWidth="3"
            animate={{ 
              x1: ["10%", "90%", "10%", "50%", "10%"],
              y1: ["10%", "50%", "90%", "10%", "10%"],
              x2: ["90%", "10%", "50%", "90%", "90%"],
              y2: ["90%", "10%", "10%", "50%", "90%"]
            }}
            transition={{ duration: 5 / speed, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
          />
        ))}
      </svg>
    </ConfigWrapper>
  );
};

export const ArcadeWacky_PixelFire: React.FC<AnimProps> = ({ config }) => {
  const count = config?.count ?? 15;
  const speed = config?.speed ?? 1;
  return (
    <ConfigWrapper config={config}>
      <div className="flex justify-center items-end w-full h-full">
        {[...Array(count)].map((_, i) => (
          <m.div
            key={i}
            className="w-2 mx-0.5"
            style={{ backgroundColor: ['#FF073A', '#FF6A00', '#F9FF00'][i % 3] }}
            animate={{ height: [10, 40, 20, 50, 10], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: (1 + Math.random()) / speed, repeat: Infinity }}
          />
        ))}
      </div>
    </ConfigWrapper>
  );
};

export const ArcadeWacky_Hyperspace: React.FC<AnimProps> = ({ config }) => {
  const count = config?.count ?? 40;
  const speed = config?.speed ?? 1;
  return (
    <ConfigWrapper config={config}>
      <div className="relative w-full h-full bg-black">
        {[...Array(count)].map((_, i) => (
          <m.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{ left: "50%", top: "50%", width: 2, height: 2 }}
            animate={{ 
              x: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 500],
              y: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 500],
              scale: [0, 4],
              opacity: [1, 0]
            }}
            transition={{ duration: 2 / speed, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>
    </m.div>
  );
};

export const ArcadeWacky_GlitchVHS: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="relative w-full h-full overflow-hidden">
      <m.div className="absolute inset-0 bg-white/10" animate={{ x: [-2, 2, -1], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 0.1, repeat: Infinity }} />
      {[...Array(5)].map((_, i) => (
        <m.div 
          key={i}
          className="absolute w-full h-1 bg-white/20"
          animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
          transition={{ duration: 0.5 / (config?.speed ?? 1), repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_NeonRain: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex justify-around w-full h-full">
      {[...Array(10)].map((_, i) => (
        <m.div
          key={i}
          className="w-[2px] h-12 rounded-full"
          style={{ backgroundColor: NEON_GLOWS[i % NEON_GLOWS.length] }}
          animate={{ y: [-50, 200], opacity: [0, 1, 0] }}
          transition={{ duration: 1 / (config?.speed ?? 1), repeat: Infinity, delay: i * 0.1 }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_OrbitalPulse: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex items-center justify-center w-full h-full">
      {[...Array(6)].map((_, i) => (
        <m.div
          key={i}
          className="absolute border-2 border-white/20 rounded-full"
          animate={{ scale: [0, 3], opacity: [1, 0], borderColor: NEON_GLOWS }}
          transition={{ duration: 3 / (config?.speed ?? 1), repeat: Infinity, delay: i * 0.5 }}
          style={{ width: 50, height: 50 }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_BinaryExplosion: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex items-center justify-center w-full h-full font-mono text-neon-green">
      {[...Array(12)].map((_, i) => (
        <m.span
          key={i}
          className="absolute"
          animate={{ 
            x: [(Math.random() - 0.5) * 300], 
            y: [(Math.random() - 0.5) * 300], 
            scale: [0, 2], 
            opacity: [1, 0],
            rotate: [0, 360]
          }}
          transition={{ duration: 1.5 / (config?.speed ?? 1), repeat: Infinity, delay: i * 0.1 }}
        >
          {i % 2}
        </m.span>
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_GhostTrails: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex items-center justify-center w-full h-full">
      {[...Array(5)].map((_, i) => (
        <m.div
          key={i}
          className="absolute w-12 h-12 border-4 border-neon-blue"
          animate={{ x: [-100, 100, -100], opacity: [1 - i * 0.2, 0] }}
          transition={{ duration: 2 / (config?.speed ?? 1), repeat: Infinity, delay: i * 0.1 }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_JellyPulse: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex items-center justify-center w-full h-full">
      <m.div
        className="w-16 h-16 bg-neon-purple rounded-full blur-md"
        animate={{ 
          scale: [1, 1.5, 0.8, 1.2, 1],
          borderRadius: ["50%", "40% 60% 70% 30% / 40% 50% 60% 50%", "50%"],
          backgroundColor: NEON_GLOWS
        }}
        transition={{ duration: 4 / (config?.speed ?? 1), repeat: Infinity }}
      />
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_ChaosShapes: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    {[...Array(8)].map((_, i) => (
      <m.div
        key={i}
        className="absolute border-2"
        style={{ 
          width: 30, height: 30, 
          borderColor: NEON_GLOWS[i % NEON_GLOWS.length],
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%'
        }}
        animate={{ rotate: [0, 360], scale: [0.5, 1.5, 0.5], x: [0, 50, -50, 0] }}
        transition={{ duration: 3 / (config?.speed ?? 1), repeat: Infinity, delay: i * 0.3 }}
      />
    ))}
  </ConfigWrapper>
);

export const ArcadeWacky_FractalBloom: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex items-center justify-center w-full h-full">
      {[...Array(8)].map((_, i) => (
        <m.div
          key={i}
          className="absolute border border-white/40"
          style={{ width: 10, height: 10, rotate: i * 45 }}
          animate={{ scale: [1, 10], opacity: [1, 0], rotate: [i * 45, i * 45 + 180] }}
          transition={{ duration: 4 / (config?.speed ?? 1), repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_CyberVortex: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex items-center justify-center w-full h-full">
      <m.div
        className="w-32 h-32 border-l-4 border-neon-aqua rounded-full"
        animate={{ rotate: [0, 360], scale: [1, 1.2, 0.8, 1] }}
        transition={{ duration: 1 / (config?.speed ?? 1), repeat: Infinity, ease: "linear" }}
      />
      <m.div
        className="absolute w-24 h-24 border-r-4 border-neon-pink rounded-full"
        animate={{ rotate: [360, 0], scale: [0.8, 1, 1.2, 0.8] }}
        transition={{ duration: 1.5 / (config?.speed ?? 1), repeat: Infinity, ease: "linear" }}
      />
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_PlasmaStorm: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <m.div
      className="w-full h-full"
      animate={{ 
        background: [
          "radial-gradient(circle at 20% 20%, #FF073A, transparent)",
          "radial-gradient(circle at 80% 80%, #00E5FF, transparent)",
          "radial-gradient(circle at 20% 80%, #39FF14, transparent)",
          "radial-gradient(circle at 80% 20%, #D400FF, transparent)"
        ]
      }}
      transition={{ duration: 5 / (config?.speed ?? 1), repeat: Infinity, repeatType: "mirror" }}
    />
  </ConfigWrapper>
);

export const ArcadeWacky_TunnelVision: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex items-center justify-center w-full h-full">
      {[...Array(10)].map((_, i) => (
        <m.div
          key={i}
          className="absolute border-2 border-white/10"
          style={{ width: 100, height: 100 }}
          animate={{ scale: [0.1, 4], opacity: [1, 0] }}
          transition={{ duration: 3 / (config?.speed ?? 1), repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_StaticShock: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <m.div
      className="w-full h-full bg-white/20"
      animate={{ opacity: [0, 0.8, 0, 0.5, 0], x: [-5, 5, -5] }}
      transition={{ duration: 0.08 / (config?.speed ?? 1), repeat: Infinity }}
    />
  </ConfigWrapper>
);

export const ArcadeWacky_PrismRain: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex justify-around w-full h-full">
      {[...Array(12)].map((_, i) => (
        <m.div
          key={i}
          className="w-1 h-8 rounded-full"
          animate={{ 
            y: [-20, 150], 
            backgroundColor: NEON_GLOWS,
            boxShadow: NEON_GLOWS.map(c => `0 0 10px ${c}`)
          }}
          transition={{ duration: (1 + Math.random()) / (config?.speed ?? 1), repeat: Infinity, delay: Math.random() }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_Kaleidoscope: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
      {[...Array(4)].map((_, i) => (
        <m.div
          key={i}
          className="w-full h-full border border-white/20"
          style={{ rotate: i * 90 }}
          animate={{ scale: [1, 1.2, 1], rotate: [i * 90, i * 90 + 90] }}
          transition={{ duration: 4 / (config?.speed ?? 1), repeat: Infinity }}
        >
          <div className="w-full h-full bg-neon-blue/20" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
        </m.div>
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_EchoSquare: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex items-center justify-center w-full h-full">
      {[...Array(5)].map((_, i) => (
        <m.div
          key={i}
          className="absolute border-2 border-white/40"
          animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
          transition={{ duration: 2 / (config?.speed ?? 1), repeat: Infinity, delay: i * 0.4 }}
          style={{ width: 40, height: 40 }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_AtomOrbit: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex items-center justify-center w-full h-full">
      <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_white]" />
      {[...Array(3)].map((_, i) => (
        <m.div
          key={i}
          className="absolute border border-white/30 rounded-full"
          style={{ width: 60, height: 20, rotate: i * 60 }}
          animate={{ rotate: [i * 60, i * 60 + 360] }}
          transition={{ duration: 2 / (config?.speed ?? 1), repeat: Infinity, ease: "linear" }}
        >
          <m.div className="w-2 h-2 bg-neon-aqua rounded-full" style={{ marginLeft: '100%' }} />
        </m.div>
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_WarpGrid: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <m.div 
      className="grid grid-cols-5 grid-rows-5 w-full h-full opacity-20"
      animate={{ scale: [1, 1.2, 0.9, 1.1, 1], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 6 / (config?.speed ?? 1), repeat: Infinity }}
    >
      {[...Array(25)].map((_, i) => <div key={i} className="border border-white" />)}
    </m.div>
  </ConfigWrapper>
);

export const ArcadeWacky_RainbowStretch: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex flex-col h-full w-full">
      {NEON_GLOWS.map((c, i) => (
        <m.div
          key={i}
          className="flex-1 w-full"
          style={{ backgroundColor: c }}
          animate={{ opacity: [0.4, 0.8, 0.4], x: ['-10%', '10%', '-10%'] }}
          transition={{ duration: (2 + i * 0.2) / (config?.speed ?? 1), repeat: Infinity }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_DigitalSnow: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    {[...Array(30)].map((_, i) => (
      <m.div
        key={i}
        className="absolute w-1 h-1 bg-white"
        style={{ left: Math.random() * 100 + '%', top: Math.random() * 100 + '%' }}
        animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
        transition={{ duration: (0.5 + Math.random()) / (config?.speed ?? 1), repeat: Infinity, delay: Math.random() * 2 }}
      />
    ))}
  </ConfigWrapper>
);

export const ArcadeWacky_CircuitPath: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <svg className="w-full h-full opacity-30">
      {[...Array(5)].map((_, i) => (
        <m.path
          key={i}
          d={`M ${Math.random()*100} 0 v ${Math.random()*50} h ${Math.random()*50} v 100`}
          fill="none"
          stroke={NEON_GLOWS[i % NEON_GLOWS.length]}
          strokeWidth="2"
          animate={{ strokeDashoffset: [200, 0] }}
          style={{ strokeDasharray: 200 }}
          transition={{ duration: 4 / (config?.speed ?? 1), repeat: Infinity, ease: "linear" }}
        />
      ))}
    </svg>
  </ConfigWrapper>
);

export const ArcadeWacky_GhostShift: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex items-center justify-center w-full h-full">
      {[...Array(4)].map((_, i) => (
        <m.div
          key={i}
          className="absolute w-16 h-16 border-2 border-white"
          animate={{ 
            x: [0, (i + 1) * 20], 
            y: [0, (i + 1) * -10],
            opacity: [0.5, 0],
            scale: [1, 1 + i * 0.1]
          }}
          transition={{ duration: 1.5 / (config?.speed ?? 1), repeat: Infinity }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_LavaBurst: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="w-full h-full bg-zinc-900 relative">
      {[...Array(6)].map((_, i) => (
        <m.div
          key={i}
          className="absolute rounded-full bg-neon-hot-orange blur-lg"
          style={{ width: 40, height: 40, bottom: -20, left: i * 20 + '%' }}
          animate={{ y: [0, -150], opacity: [1, 0], scale: [1, 2] }}
          transition={{ duration: (2 + Math.random()) / (config?.speed ?? 1), repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_StarBurst: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex items-center justify-center w-full h-full">
      {[...Array(15)].map((_, i) => (
        <m.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          animate={{ 
            x: [0, Math.cos(i) * 150], 
            y: [0, Math.sin(i) * 150], 
            scale: [1, 0],
            opacity: [1, 0]
          }}
          transition={{ duration: 1 / (config?.speed ?? 1), repeat: Infinity, delay: Math.random() }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_ChromaWave: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {NEON_GLOWS.slice(0, 5).map((c, i) => (
        <m.path
          key={i}
          d="M0 50 Q 25 30, 50 50 T 100 50"
          fill="none"
          stroke={c}
          strokeWidth="4"
          animate={{ d: ["M0 50 Q 25 30, 50 50 T 100 50", "M0 50 Q 25 70, 50 50 T 100 50", "M0 50 Q 25 30, 50 50 T 100 50"] }}
          transition={{ duration: (2 + i * 0.5) / (config?.speed ?? 1), repeat: Infinity }}
        />
      ))}
    </svg>
  </ConfigWrapper>
);

export const ArcadeWacky_MatrixCode: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex justify-around h-full w-full font-mono text-[8px] text-neon-green/60">
      {[...Array(8)].map((_, i) => (
        <m.div
          key={i}
          animate={{ y: [-100, 100] }}
          transition={{ duration: (3 + Math.random() * 2) / (config?.speed ?? 1), repeat: Infinity, delay: Math.random() * 2 }}
        >
          {"WORD".split('').map((char, j) => <div key={j}>{char}</div>)}
        </m.div>
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_PulseNebula: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="w-full h-full flex items-center justify-center">
      <m.div
        className="w-32 h-32 rounded-full blur-2xl opacity-40"
        animate={{ 
          background: NEON_GLOWS,
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 6 / (config?.speed ?? 1), repeat: Infinity }}
      />
    </div>
  </ConfigWrapper>
);

export const ArcadeWacky_DigitalRings: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex items-center justify-center w-full h-full">
      {[...Array(4)].map((_, i) => (
        <m.div
          key={i}
          className="absolute border-4 rounded-full border-dashed"
          style={{ 
            width: 40 + i * 25, 
            height: 40 + i * 25, 
            borderColor: NEON_GLOWS[i % NEON_GLOWS.length]
          }}
          animate={{ rotate: i % 2 === 0 ? [0, 360] : [360, 0] }}
          transition={{ duration: (5 + i) / (config?.speed ?? 1), repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  </ConfigWrapper>
);


// --- DATA VISUALIZATION COMPONENTS ---

const BarBase: React.FC<{ variant: 'equalizer' | 'stack' | 'chaos' | 'vapor', config?: AnimationConfig }> = ({ variant, config }) => {
  const count = config?.count ?? 8;
  const speed = config?.speed ?? 1;
  const size = (config?.size ?? 20) / 20;

  return (
    <ConfigWrapper config={config}>
      <div className="flex items-end justify-around w-full h-full p-4 gap-1">
        {[...Array(count)].map((_, i) => (
          <m.div
            key={i}
            className="w-full rounded-t-sm"
            style={{ 
              backgroundColor: NEON_GLOWS[i % NEON_GLOWS.length],
              boxShadow: `0 0 ${15 * size}px ${NEON_GLOWS[i % NEON_GLOWS.length]}`
            }}
            animate={{ 
              height: variant === 'stack' ? ['0%', '100%', '0%'] : [Math.random()*100 + '%', Math.random()*100 + '%'],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: variant === 'stack' ? 2 / speed : 0.5 / speed, 
              repeat: Infinity, 
              delay: i * 0.1,
              ease: variant === 'stack' ? "easeInOut" : "linear"
            }}
          />
        ))}
      </div>
    </ConfigWrapper>
  );
};

export const ArcadeData_Bar_Equalizer: React.FC<AnimProps> = ({ config }) => <BarBase variant="equalizer" config={config} />;
export const ArcadeData_Bar_Stack: React.FC<AnimProps> = ({ config }) => <BarBase variant="stack" config={config} />;
export const ArcadeData_Bar_Chaos: React.FC<AnimProps> = ({ config }) => <BarBase variant="chaos" config={config} />;
export const ArcadeData_Bar_Vapor: React.FC<AnimProps> = ({ config }) => <BarBase variant="vapor" config={{...config, hueShift: 280}} />;

const PieBase: React.FC<{ variant: 'pulse' | 'clock' | 'donut' | 'radar', config?: AnimationConfig }> = ({ variant, config }) => {
  const speed = config?.speed ?? 1;
  const size = (config?.size ?? 20) / 20;
  const count = Math.min(12, config?.count ?? 4);

  return (
    <ConfigWrapper config={config}>
      <div className="flex items-center justify-center w-full h-full">
        <div className="relative w-3/4 h-3/4">
          {[...Array(count)].map((_, i) => (
            <m.div
              key={i}
              className="absolute inset-0 rounded-full border-[10px]"
              style={{ 
                borderColor: NEON_GLOWS[i % NEON_GLOWS.length],
                clipPath: variant === 'radar' ? 'polygon(50% 50%, 100% 0, 100% 100%)' : `conic-gradient(from ${i * (360/count)}deg, #fff, transparent)`,
                scale: (1 - i * 0.15) * size,
                boxShadow: `inset 0 0 20px ${NEON_GLOWS[i % NEON_GLOWS.length]}`
              }}
              animate={{ 
                rotate: [0, 360],
                opacity: variant === 'pulse' ? [0.2, 0.8, 0.2] : 1
              }}
              transition={{ 
                duration: (3 + i) / speed, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
          ))}
        </div>
      </div>
    </ConfigWrapper>
  );
};

export const ArcadeData_Pie_Pulse: React.FC<AnimProps> = ({ config }) => <PieBase variant="pulse" config={config} />;
export const ArcadeData_Pie_Clockwork: React.FC<AnimProps> = ({ config }) => <PieBase variant="clock" config={config} />;
export const ArcadeData_Pie_Donut: React.FC<AnimProps> = ({ config }) => <PieBase variant="donut" config={config} />;
export const ArcadeData_Pie_Radar: React.FC<AnimProps> = ({ config }) => <PieBase variant="radar" config={config} />;

const LineBase: React.FC<{ variant: 'asc' | 'pulse' | 'digital' | 'wave', config?: AnimationConfig }> = ({ variant, config }) => {
  const count = config?.count ?? 10;
  const speed = config?.speed ?? 1;
  const size = (config?.size ?? 20) / 20;

  return (
    <ConfigWrapper config={config}>
      <svg viewBox="0 0 200 100" className="w-full h-full preserve-3d" preserveAspectRatio="none">
        {[...Array(Math.min(5, Math.ceil(count/4)))].map((_, lineIdx) => (
          <m.path
            key={lineIdx}
            d={`M 0 50 ${[...Array(10)].map((_, i) => `L ${i * 20 + 20} ${variant === 'asc' ? 80 - i * 8 : Math.random() * 100}`).join(' ')}`}
            fill="none"
            stroke={NEON_GLOWS[(lineIdx + 2) % NEON_GLOWS.length]}
            strokeWidth={2 * size}
            strokeDasharray="10,5"
            animate={{ 
              strokeDashoffset: [0, -100],
              opacity: [0.3, 1, 0.3],
              y: variant === 'wave' ? [0, -10, 10, 0] : 0
            }}
            transition={{ 
              duration: 2 / speed, 
              repeat: Infinity, 
              ease: "linear"
            }}
          />
        ))}
      </svg>
    </ConfigWrapper>
  );
};

export const ArcadeData_Line_Ascending: React.FC<AnimProps> = ({ config }) => <LineBase variant="asc" config={config} />;
export const ArcadeData_Line_Pulse: React.FC<AnimProps> = ({ config }) => <LineBase variant="pulse" config={config} />;
export const ArcadeData_Line_Digital: React.FC<AnimProps> = ({ config }) => <LineBase variant="digital" config={config} />;
export const ArcadeData_Line_NeonWave: React.FC<AnimProps> = ({ config }) => <LineBase variant="wave" config={config} />;

export const ArcadeData_Binary_Fall: React.FC<AnimProps> = ({ config }) => {
  const count = config?.count ?? 30;
  const speed = config?.speed ?? 1;
  return (
    <ConfigWrapper config={config}>
      <div className="flex justify-around w-full h-full font-mono text-[8px] opacity-40">
        {[...Array(count)].map((_, i) => (
          <m.div
            key={i}
            className="flex flex-col text-neon-green"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: (2 + Math.random() * 3) / speed, repeat: Infinity, ease: "linear", delay: Math.random() * 2 }}
          >
            {[...Array(10)].map((_, j) => <span key={j}>{Math.round(Math.random())}</span>)}
          </m.div>
        ))}
      </div>
    </ConfigWrapper>
  );
};

export const ArcadeData_Grid_Scan: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="grid grid-cols-8 grid-rows-8 w-full h-full opacity-30 border border-white/10">
      <m.div 
        className="col-span-8 h-1 bg-neon-blue shadow-[0_0_15px_cyan]"
        animate={{ translateY: ['0px', '200px', '0px'] }}
        transition={{ duration: 3 / (config?.speed ?? 1), repeat: Infinity, ease: "easeInOut" }}
      />
      {[...Array(64)].map((_, i) => <div key={i} className="border-[0.5px] border-white/5" />)}
    </div>
  </ConfigWrapper>
);

export const ArcadeData_Oscilloscope: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex items-center justify-center w-full h-full bg-zinc-900/50">
      <m.div 
        className="w-full h-0.5 bg-neon-lime"
        animate={{ scaleY: [1, 20, 5, 40, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 0.1 / (config?.speed ?? 1), repeat: Infinity }}
      />
    </div>
  </ConfigWrapper>
);

export const ArcadeData_Neural: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="relative w-full h-full">
      {[...Array(config?.count ?? 12)].map((_, i) => (
        <m.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"
          style={{ left: Math.random() * 100 + '%', top: Math.random() * 100 + '%' }}
          animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2 / (config?.speed ?? 1), repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeData_Heatmap: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="grid grid-cols-5 grid-rows-5 w-full h-full">
      {[...Array(25)].map((_, i) => (
        <m.div
          key={i}
          className="w-full h-full"
          animate={{ backgroundColor: ['#ff0000', '#ffff00', '#00ff00', '#0000ff', '#ff0000'] }}
          transition={{ duration: (4 + i * 0.1) / (config?.speed ?? 1), repeat: Infinity }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeData_Bubble_Sort: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex items-center justify-around w-full h-full p-4">
      {[...Array(config?.count ?? 6)].map((_, i) => (
        <m.div
          key={i}
          className="rounded-full border-2 border-white"
          style={{ width: (10 + i * 5) * ((config?.size ?? 20)/20), height: (10 + i * 5) * ((config?.size ?? 20)/20) }}
          animate={{ y: [0, -50, 0], x: [0, i % 2 === 0 ? 20 : -20, 0] }}
          transition={{ duration: (2 + i * 0.5) / (config?.speed ?? 1), repeat: Infinity }}
        />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeData_Vector_Field: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="grid grid-cols-6 grid-rows-6 w-full h-full p-2">
      {[...Array(36)].map((_, i) => (
        <m.div
          key={i}
          className="text-[10px] text-white flex items-center justify-center"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 5 / (config?.speed ?? 1), repeat: Infinity, delay: (i % 6) * 0.2 }}
        >
          →
        </m.div>
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeData_Node_Web: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="relative w-full h-full overflow-hidden">
      <m.div 
        className="absolute inset-0 border-2 border-neon-blue rounded-full opacity-20"
        animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 360] }}
        transition={{ duration: 10 / (config?.speed ?? 1), repeat: Infinity }}
      />
      {[...Array(8)].map((_, i) => (
        <m.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ left: '50%', top: '50%' }}
          animate={{ 
            x: [0, Math.cos(i) * 50, 0], 
            y: [0, Math.sin(i) * 50, 0] 
          }}
          transition={{ duration: 4 / (config?.speed ?? 1), repeat: Infinity }}
        />
      ))}
    </div>
  </ConfigWrapper>
);


// --- DIAGONAL BASE ---
const DiagonalLinesBase: React.FC<{ 
  colors: string[], 
  speedScale?: number, 
  thickness?: number, 
  gap?: number,
  glitch?: boolean,
  reverse?: boolean,
  config?: AnimationConfig
}> = ({ colors, speedScale = 1, thickness = 20, gap = 40, glitch = false, reverse = false, config }) => {
  const speed = config?.speed ?? speedScale;
  const duration = (config?.duration ?? 3) / (speed || 1);
  const lineCount = config?.count ?? 12;
  const sizeScale = (config?.size ?? 20) / 20;

  return (
    <ConfigWrapper config={config}>
      <div 
        className="absolute inset-[-100%] flex flex-col items-center justify-center"
        style={{ transform: `rotate(${reverse ? -45 : 45}deg)` }}
      >
        {[...Array(lineCount)].map((_, i) => (
          <m.div
            key={i}
            className="w-[300%] shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            style={{ 
              height: thickness * sizeScale, 
              backgroundColor: colors[i % colors.length],
              marginBottom: gap * sizeScale,
              opacity: glitch ? 0.8 : 1
            }}
            animate={{
              x: reverse ? ['20%', '-20%'] : ['-20%', '20%'],
              opacity: glitch ? [0.4, 1, 0.6] : 1
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </ConfigWrapper>
  );
};

export const ArcadeDiagonal_Classic: React.FC<AnimProps> = ({ config }) => (
  <DiagonalLinesBase colors={['#00E5FF', '#FF1FBF', '#39FF14', '#F9FF00']} speedScale={1} config={config} />
);
export const ArcadeDiagonal_Hyper: React.FC<AnimProps> = ({ config }) => (
  <DiagonalLinesBase colors={['#FF073A', '#D400FF', '#00FFF6', '#FFFFFF']} speedScale={2.5} thickness={8} gap={15} glitch config={config} />
);
export const ArcadeDiagonal_Oceanic: React.FC<AnimProps> = ({ config }) => (
  <DiagonalLinesBase colors={['#00E5FF', '#4169E1', '#00FFF6', '#7CFFDA']} speedScale={0.5} thickness={40} gap={60} config={config} />
);
export const ArcadeDiagonal_Crossfire: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <DiagonalLinesBase colors={['#FF6A00', '#FF2A00', '#FFD400', '#F9FF00']} speedScale={0.8} thickness={12} gap={40} config={{...config, gridSplit: false}} />
    <div className="absolute inset-0 opacity-40 mix-blend-screen">
      <DiagonalLinesBase colors={['#D400FF', '#FF1FBF', '#9B00FF', '#C87CFF']} speedScale={1.2} thickness={12} gap={40} reverse config={{...config, gridSplit: false}} />
    </div>
  </ConfigWrapper>
);
export const ArcadeDiagonal_Prism: React.FC<AnimProps> = ({ config }) => (
  <DiagonalLinesBase colors={NEON_GLOWS.slice(0, 4)} speedScale={1.5} thickness={25} gap={10} glitch config={config} />
);

export const Arcade8BitRain: React.FC<AnimProps> = ({ config }) => {
  const count = config?.count ?? 64;
  const speed = config?.speed ?? 1;
  const size = (config?.size ?? 20) / 20;
  const cols = Math.ceil(Math.sqrt(count));

  return (
    <ConfigWrapper config={config}>
      <div className="grid w-full h-full p-1 gap-1" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {[...Array(count)].map((_, i) => (
          <m.div
            key={i}
            className="w-full h-full border border-white/5"
            style={{ scale: size }}
            animate={{ backgroundColor: [['#00E5FF', '#39FF14', '#F9FF00'][i % 3], 'rgba(0,0,0,0)'], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5 / speed, repeat: Infinity, delay: (i % cols) * 0.1, ease: "steps(5)" as any }}
          />
        ))}
      </div>
    </ConfigWrapper>
  );
};

export const ArcadeDiamond_Mesh: React.FC<AnimProps> = ({ config }) => {
  const count = config?.count ?? 9;
  const speed = config?.speed ?? 1;
  const size = (config?.size ?? 20) / 20;
  const cols = Math.ceil(Math.sqrt(count));

  return (
    <ConfigWrapper config={config}>
      <div className="grid w-full h-full p-2 gap-2" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {[...Array(count)].map((_, i) => (
          <m.div key={i} className="w-full h-full opacity-40" animate={{ scale: [0.8 * size, 1.1 * size, 0.8 * size], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 2 / speed, repeat: Infinity, delay: i * 0.1 }}>
            <DiamondSVG color="#FFFFFF" size={size} />
          </m.div>
        ))}
      </div>
    </ConfigWrapper>
  );
};

const MultiFlipBase: React.FC<{ layout: 'grid' | 'spiral' | 'wave', speed?: number, variant: number, config?: AnimationConfig }> = ({ layout, speed = 1, variant, config }) => {
  const count = config?.count ?? 16;
  const sScale = config?.speed ?? speed;
  const size = (config?.size ?? 20) / 20;
  const cols = Math.ceil(Math.sqrt(count));

  return (
    <ConfigWrapper config={config}>
      <div className="grid w-full h-full p-2 gap-1.5 preserve-3d" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {[...Array(count)].map((_, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          let delay = (layout === 'wave') ? (row + col) * 0.1 : (layout === 'spiral') ? (Math.sqrt(Math.pow(col - cols/2, 2) + Math.pow(row - cols/2, 2))) * 0.2 : Math.random() * 0.5;
          return (
            <m.div 
              key={i} 
              className="w-full h-full border-2 rounded-small" 
              style={{ scale: size }}
              animate={{ 
                rotateY: variant % 2 === 0 ? [0, 180, 360] : 0, 
                rotateX: variant % 3 === 0 ? [0, 180, 360] : 0, 
                borderColor: NEON_GLOWS[i % NEON_GLOWS.length], 
                boxShadow: `0 0 ${10 * size}px ${NEON_GLOWS[i % NEON_GLOWS.length]}` 
              }} 
              transition={{ duration: 3 / sScale, repeat: Infinity, delay: delay / sScale, ease: "easeInOut" }} 
            />
          );
        })}
      </div>
    </ConfigWrapper>
  );
};

export const ArcadeMultiFlip_WaveH: React.FC<AnimProps> = ({ config }) => <MultiFlipBase layout="wave" variant={0} config={config} />;
export const ArcadeMultiFlip_WaveV: React.FC<AnimProps> = ({ config }) => <MultiFlipBase layout="wave" variant={1} config={config} />;
export const ArcadeMultiFlip_Spiral: React.FC<AnimProps> = ({ config }) => <MultiFlipBase layout="spiral" variant={2} config={config} />;
export const ArcadeMultiFlip_Chaos: React.FC<AnimProps> = ({ config }) => <MultiFlipBase layout="grid" variant={3} config={config} />;
export const ArcadeMultiFlip_Strobe: React.FC<AnimProps> = ({ config }) => <MultiFlipBase layout="grid" variant={0} speed={3} config={config} />;
export const ArcadeMultiFlip_3D: React.FC<AnimProps> = ({ config }) => <MultiFlipBase layout="grid" variant={6} config={config} />;

export const Arcade16BitStarfield: React.FC<AnimProps> = ({ config }) => {
  const count = config?.count ?? 40;
  const speed = config?.speed ?? 1;
  const sizeScale = (config?.size ?? 20) / 20;

  const stars = useMemo(() => [...Array(count)].map(() => ({ 
    x: Math.random() * 100, 
    y: Math.random() * 100, 
    size: (1 + Math.random() * 3) * sizeScale, 
    color: NEON_GLOWS[Math.floor(Math.random() * NEON_GLOWS.length)] 
  })), [count, sizeScale]);

  return (
    <ConfigWrapper config={config}>
      <m.div className="w-[200%] h-full flex" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 15 / speed, repeat: Infinity, ease: "linear" }}>
          <div className="relative w-full h-full">{stars.map((s, i) => (<div key={i} className="absolute rounded-full" style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size, backgroundColor: s.color, boxShadow: `0 0 5px ${s.color}` }} />))}</div>
          <div className="relative w-full h-full">{stars.map((s, i) => (<div key={i + 'copy'} className="absolute rounded-full" style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size, backgroundColor: s.color, boxShadow: `0 0 5px ${s.color}` }} />))}</div>
      </m.div>
    </ConfigWrapper>
  );
};

export const Arcade16BitPrismWaves: React.FC<AnimProps> = ({ config }) => {
  const count = config?.count ?? 6;
  const speed = config?.speed ?? 1;
  const size = (config?.size ?? 20) / 20;

  return (
    <ConfigWrapper config={config}>
      <div className="flex flex-col justify-center h-full w-full">
        {NEON_GLOWS.slice(0, count).map((color, i) => (
          <m.div 
            key={i} 
            className="w-[200%] opacity-60 blur-[1px]" 
            style={{ height: 24 * size, backgroundColor: color, boxShadow: `0 0 15px ${color}` }}
            animate={{ x: ['-50%', '0%', '-50%'], skewY: [2, -2, 2] }} 
            transition={{ duration: (4 + i) / speed, repeat: Infinity, ease: "easeInOut" }} 
          />
        ))}
      </div>
    </ConfigWrapper>
  );
};

export const ArcadeMorph_HyperColor68: React.FC<AnimProps> = ({ config }) => {
  const count = config?.count ?? 16;
  const speed = config?.speed ?? 1;
  const cols = Math.ceil(Math.sqrt(count));
  return (
    <ConfigWrapper config={config}>
      <div className="grid w-full h-full p-1 gap-1" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {[...Array(count)].map((_, i) => (
          <m.div key={i} className="w-full h-full border-4 shadow-[0_0_15px_currentColor]"
            animate={{
              borderRadius: ["0%", "50%", "20%", "0%"],
              rotate: [0, 180, 360],
              scale: [1, 1.5, 0.5, 1],
              borderColor: NEON_GLOWS,
              backgroundColor: [NEON_GLOWS[i % NEON_GLOWS.length] + '88', 'transparent']
            }}
            transition={{ duration: 2 / speed, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
          />
        ))}
      </div>
    </ConfigWrapper>
  );
};

export const Arcade8BitSpiral: React.FC<AnimProps> = ({ config }) => {
  const count = config?.count ?? 36;
  const speed = config?.speed ?? 1;
  const cols = Math.ceil(Math.sqrt(count));
  return (
    <ConfigWrapper config={config}>
      <div className="grid w-full h-full gap-1" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {[...Array(count)].map((_, i) => {
          const row = Math.floor(i / cols); const col = i % cols; const dist = Math.abs(row - cols/2) + Math.abs(col - cols/2);
          return <m.div key={i} className="bg-neon-pink" animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }} transition={{ duration: 2 / speed, repeat: Infinity, delay: dist * 0.2 / speed, ease: "steps(3)" as any }} />;
        })}
      </div>
    </ConfigWrapper>
  );
};

export const Arcade8BitNoise: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="grid grid-cols-10 grid-rows-10 w-full h-full">
      {[...Array(100)].map((_, i) => (<m.div key={i} animate={{ backgroundColor: NEON_GLOWS, x: [0, 5, 0] }} transition={{ duration: 0.2 / (config?.speed ?? 1), repeat: Infinity, delay: Math.random() }} className="w-full h-full" />))}
    </div>
  </ConfigWrapper>
);

export const Arcade16BitLavaWaves: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="absolute inset-0 bg-zinc-900 overflow-hidden">
      {[...Array(Math.min(8, config?.count ?? 4))].map((_, i) => (<m.div key={i} className="absolute inset-0 opacity-40" style={{ background: `radial-gradient(circle at ${50 + i * 10}% ${50 + i * 10}%, #FF2A00, transparent)`, filter: 'blur(30px)' }} animate={{ scale: [1, 1.5, 1], x: [0, 20, 0] }} transition={{ duration: (5 + i) / (config?.speed ?? 1), repeat: Infinity }} />))}
    </div>
  </ConfigWrapper>
);

export const Arcade16BitElectricWaves: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex flex-col justify-center gap-2 h-full w-full">
      {[...Array(config?.count ?? 12)].map((_, i) => (<m.div key={i} className="w-full h-[1px] bg-neon-aqua shadow-[0_0_10px_cyan]" animate={{ opacity: [0.2, 1, 0.2], scaleY: [1, 10, 1] }} transition={{ duration: 0.1 / (config?.speed ?? 1), repeat: Infinity, delay: i * 0.05 }} />))}
    </div>
  </ConfigWrapper>
);

export const Arcade16BitSunsetWaves: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="bg-gradient-to-t from-black via-purple-900 to-red-900 w-full h-full relative">
      {[...Array(config?.count ?? 6)].map((_, i) => (
        <m.div key={i} className="absolute bottom-0 w-[200%] h-8 opacity-40" style={{ bottom: `${i * 15}%`, background: 'linear-gradient(90deg, transparent, #FF6A00, transparent)', filter: 'blur(4px)' }} animate={{ x: ['-50%', '0%'] }} transition={{ duration: (10 - i) / (config?.speed ?? 1), repeat: Infinity, ease: "linear" }} />
      ))}
    </div>
  </ConfigWrapper>
);

export const ArcadeIcons_TechnoHearts: React.FC<AnimProps> = ({ config }) => (
  <ConfigWrapper config={config}>
    <div className="flex items-center justify-around w-full h-full">
      {[...Array(config?.count ?? 3)].map((_, i) => (
        <m.div key={i} className="relative text-3xl font-black" animate={{ y: [10, -10, 10], rotate: [-10, 10, -10] }} transition={{ duration: 2 / (config?.speed ?? 1), repeat: Infinity, delay: i * 0.5 }}>
          <span className="absolute inset-0 text-neon-hot-orange opacity-50 blur-[2px]">❤</span><span className="relative text-white">❤</span>
        </m.div>
      ))}
    </div>
  </ConfigWrapper>
);

// POOL DEFINITIONS
export const LOCKED_TILES_POOL = [
  Arcade8BitRain, Arcade8BitSpiral, Arcade8BitNoise, ArcadeDiagonal_Classic, ArcadeDiagonal_Hyper, 
  ArcadeDiamond_Mesh, ArcadeMultiFlip_Spiral, ArcadeMultiFlip_Chaos, ArcadeIcons_TechnoHearts
];

export const SOLVED_ROW_POOL = [
  Arcade16BitPrismWaves, Arcade16BitLavaWaves, Arcade16BitElectricWaves, Arcade16BitSunsetWaves, Arcade16BitStarfield,
  ArcadeDiagonal_Classic, ArcadeDiagonal_Hyper, ArcadeDiagonal_Oceanic, ArcadeDiagonal_Crossfire, ArcadeDiagonal_Prism,
  ArcadeMorph_HyperColor68, Arcade8BitRain, Arcade8BitSpiral, Arcade8BitNoise, ArcadeDiamond_Mesh,
  ArcadeMultiFlip_WaveH, ArcadeMultiFlip_WaveV, ArcadeMultiFlip_Spiral, ArcadeMultiFlip_Chaos, ArcadeMultiFlip_Strobe, ArcadeMultiFlip_3D,
  ArcadeIcons_TechnoHearts,
  ArcadeData_Bar_Equalizer, ArcadeData_Bar_Stack, ArcadeData_Bar_Chaos, ArcadeData_Bar_Vapor,
  ArcadeData_Pie_Pulse, ArcadeData_Pie_Clockwork, ArcadeData_Pie_Donut, ArcadeData_Pie_Radar,
  ArcadeData_Line_Ascending, ArcadeData_Line_Pulse, ArcadeData_Line_Digital, ArcadeData_Line_NeonWave,
  ArcadeData_Binary_Fall, ArcadeData_Grid_Scan, ArcadeData_Oscilloscope, ArcadeData_Neural, ArcadeData_Heatmap, ArcadeData_Bubble_Sort, ArcadeData_Vector_Field, ArcadeData_Node_Web,
  ArcadeWacky_NeonWeb, ArcadeWacky_PolygonalDrift, ArcadeWacky_ScannerBar, ArcadeWacky_InterferencePattern, ArcadeWacky_AcidTrip,
  ArcadeWacky_PixelShatter, ArcadeWacky_DeepFringe, ArcadeWacky_Supernova, ArcadeWacky_GridJitter, ArcadeWacky_BinaryStream,
  ArcadeWacky_ChromaticAberration, ArcadeWacky_RetroSunset, ArcadeWacky_WarpPortal, ArcadeWacky_NeonPulse, ArcadeWacky_DiamondStorm,
  ArcadeWacky_HexagonGrid, ArcadeWacky_CircuitGlow, ArcadeWacky_MeltDown, ArcadeWacky_GlitchLines, ArcadeWacky_VortexTunnel,
  ArcadeWacky_LaserBounce, ArcadeWacky_PixelFire, ArcadeWacky_Hyperspace, ArcadeWacky_GlitchVHS, ArcadeWacky_NeonRain,
  ArcadeWacky_OrbitalPulse, ArcadeWacky_BinaryExplosion, ArcadeWacky_GhostTrails, ArcadeWacky_JellyPulse, ArcadeWacky_ChaosShapes,
  ArcadeWacky_FractalBloom, ArcadeWacky_CyberVortex, ArcadeWacky_PlasmaStorm, ArcadeWacky_TunnelVision, ArcadeWacky_StaticShock,
  ArcadeWacky_PrismRain, ArcadeWacky_Kaleidoscope, ArcadeWacky_EchoSquare, ArcadeWacky_AtomOrbit, ArcadeWacky_WarpGrid,
  ArcadeWacky_RainbowStretch, ArcadeWacky_DigitalSnow, ArcadeWacky_CircuitPath, ArcadeWacky_GhostShift, ArcadeWacky_LavaBurst,
  ArcadeWacky_StarBurst, ArcadeWacky_ChromaWave, ArcadeWacky_MatrixCode, ArcadeWacky_PulseNebula, ArcadeWacky_DigitalRings
];
