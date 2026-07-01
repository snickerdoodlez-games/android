import React from 'react';
import { GameOverlay } from '../types';
import ArcadeIcon from './ArcadeIcon';
import ArcadeStyledText from './ArcadeStyledText';
import NextLevelButton from './NextLevelButton';

interface LevelSuccessScreenProps {
	starsEarned: number;
	onNext: () => void;
	onOverlay: (overlay: GameOverlay) => void;
	onExit: () => void;
}

const LevelSuccessScreen: React.FC<LevelSuccessScreenProps> = ({
	starsEarned,
	onNext,
	onOverlay,
	onExit,
}) => {
	return (
		<div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
			<div className="border-2 border-neon-blue bg-zinc-900 rounded-xl p-8 max-w-md w-full mx-4 text-center shadow-[0_0_20px_rgba(0,240,255,0.3)]">
				{/* Arcade cabinet header */}
				<div className="mb-6">
					<ArcadeIcon
						viewBox="0 0 800 400"
						className="w-full max-w-xs mx-auto"
					>
						{/* Arcade cabinet frame */}
						<rect x="50" y="20" width="700" height="360" rx="14" fill="#18181b" stroke="#D946EF" strokeWidth="5" />
						{/* Screen bezel */}
						<rect x="100" y="50" width="600" height="220" rx="8" fill="#1a1a2e" stroke="#0DF2FF" strokeWidth="4" />
						{/* Stars display */}
						<text x="400" y="170" textAnchor="middle" fill="#F9FF00" fontSize="120" fontFamily="Oswald, sans-serif" fontWeight="bold">
							{'★'.repeat(Math.max(1, starsEarned))}
						</text>
						{/* Score label below screen */}
						<text x="400" y="312" textAnchor="middle" fill="#ffffff" fontSize="40" fontFamily="Oswald, sans-serif" fontWeight="bold">
							{starsEarned} STAR{starsEarned !== 1 ? 'S' : ''}
						</text>
					</ArcadeIcon>
				</div>

				{/* Level Complete text */}
				<ArcadeStyledText
					as="h1"
					text="LEVEL COMPLETE"
					colors={['#F9FF00', '#D946EF', '#0DF2FF']}
					gradient
					size="3xl"
					className="mb-4"
				/>

				{/* Stars earned display */}
				<div className="mb-4">
					<div className="text-5xl mb-2 tracking-wider">
						{'★'.repeat(Math.max(1, starsEarned))}
					</div>
					<div className="text-neon-yellow text-lg font-bold">
						{starsEarned} STAR{starsEarned !== 1 ? 'S' : ''} EARNED
					</div>
				</div>

				{/* Next Level button */}
				<NextLevelButton onClick={onNext} className="mb-6" />

				{/* Secondary actions */}
				<div className="flex gap-2 justify-center">
					<button
						onClick={() => onOverlay('scoreBreakdown')}
						className="min-w-[48px] min-h-[48px] px-3 py-2 border-2 border-neon-green bg-transparent text-neon-green font-bold rounded-lg hover:bg-neon-green/10 transition-colors text-sm"
					>
						SCORE BREAKDOWN
					</button>
					<button
						onClick={() => onOverlay('stats')}
						className="min-w-[48px] min-h-[48px] px-3 py-2 border-2 border-neon-green bg-transparent text-neon-green font-bold rounded-lg hover:bg-neon-green/10 transition-colors text-sm"
					>
						HALL OF FAME
					</button>
				</div>
			</div>
		</div>
	);
};

export default LevelSuccessScreen;