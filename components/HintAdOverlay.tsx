import React from 'react';

interface HintAdOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onWatchAd: () => void;
  hintsAvailable: number;
  isNative: boolean;
}

const HintAdOverlay: React.FC<HintAdOverlayProps> = ({
  isOpen,
  onClose,
  onWatchAd,
  hintsAvailable,
  isNative,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div
        className="bg-black border-2 border-white rounded-large px-6 py-8 mx-4 shadow-[0_0_40px_rgba(249,255,0,0.6)] max-w-[90vw] w-full"
        style={{ maxWidth: '380px' }}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        {/* Lightbulb Icon */}
        <div className="flex justify-center mb-4">
          <svg
            viewBox="0 0 24 24"
            className="w-16 h-16"
            style={{ filter: 'drop-shadow(0 0 12px #F9FF00)' }}
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zM9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1z"
              fill="#F9FF00"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-[clamp(1.25rem,5vw,1.75rem)] font-black font-oswald uppercase text-center text-neon-yellow tracking-wider leading-tight mb-2">
          {hintsAvailable > 0 ? 'More Hints?' : 'Out of Hints'}
        </h2>

        {/* Description */}
        <p className="text-sm text-white font-oswald text-center mb-4">
          {hintsAvailable > 0
            ? 'Watch a short video to earn 3 more hints!'
            : 'Watch a short video to earn 3 hints!'}
        </p>

        {/* Current hints display */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-xs text-zinc-400 font-oswald uppercase">Hints:</span>
          <span className="text-2xl font-black font-oswald text-neon-yellow">
            {hintsAvailable}
          </span>
          <span className="text-xs text-neon-yellow font-oswald">+3</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          {isNative ? (
            <button
              onClick={onWatchAd}
              className="w-full px-6 py-3 min-w-[48px] min-h-[48px] bg-neon-yellow text-black font-black font-oswald text-lg uppercase rounded-medium border-2 border-white shadow-[0_0_20px_rgba(249,255,0,0.5)] active:scale-95 transition-all"
              aria-label="Watch an ad to earn 3 hints"
            >
              Watch Ad (+3 Hints)
            </button>
          ) : (
            <button
              onClick={() => {
                // Simulate ad reward for non-native/dev environments
                onWatchAd();
              }}
              className="w-full px-6 py-3 min-w-[48px] min-h-[48px] bg-neon-yellow text-black font-black font-oswald text-lg uppercase rounded-medium border-2 border-white shadow-[0_0_20px_rgba(249,255,255,0.5)] active:scale-95 transition-all"
              aria-label="Earn 3 hints (dev mode)"
            >
              Earn 3 Hints (Dev)
            </button>
          )}

          <button
            onClick={onClose}
            className="w-full px-6 py-2 min-w-[48px] min-h-[48px] bg-transparent text-zinc-400 font-bold font-oswald text-sm uppercase rounded-medium border border-zinc-700 hover:text-white hover:border-white active:scale-95 transition-all"
            aria-label="Close hint ad overlay"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default HintAdOverlay;