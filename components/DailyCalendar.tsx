
import React from 'react';
import { getDailyHistory, getLocalISODate } from '../services/storage';

interface CalendarProps {
  onClose: () => void;
  onPlayToday: () => void;
}

const DailyCalendar: React.FC<CalendarProps> = ({ onClose, onPlayToday }) => {
  const history = getDailyHistory();
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const todayString = getLocalISODate(today);
  
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay(); // 0 = Sun
  
  const days = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const d = new Date(currentYear, currentMonth, i);
    const dateStr = getLocalISODate(d);
    days.push({
      day: i,
      dateStr: dateStr,
      isCompleted: history.includes(dateStr),
      isToday: dateStr === todayString,
      isPast: dateStr < todayString
    });
  }

  const isTodayCompleted = history.includes(todayString);

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in">
      <div className="bg-zinc-950 border-4 border-white rounded-2xl p-6 w-full max-w-md shadow-[0_0_40px_rgba(255,255,255,0.1)] relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-black font-oswald text-neon-blue uppercase text-center mb-1 italic">DAILY LOG</h2>
        <p className="text-zinc-500 text-center font-oswald mb-6 uppercase tracking-[0.3em] text-xs font-bold">
          {today.toLocaleString('default', { month: 'long' })} {currentYear}
        </p>

        <div className="grid grid-cols-7 gap-2 mb-6">
          {['S','M','T','W','T','F','S'].map((d, i) => (
            <div key={i} className="text-center text-zinc-700 font-bold text-xs uppercase">{d}</div>
          ))}
          
          {days.map((d, i) => {
            if (!d) return <div key={i} />;
            
            let bgClass = 'bg-black text-zinc-600 border-zinc-800';
            
            if (d.isCompleted) {
              bgClass = 'bg-neon-green/20 text-neon-green border-neon-green shadow-[0_0_10px_rgba(0,255,102,0.3)]';
            } else if (d.isToday) {
               bgClass = 'bg-zinc-900 text-white border-neon-blue animate-pulse';
            }

            return (
              <div 
                key={i} 
                className={`
                  aspect-square rounded-lg flex items-center justify-center font-black text-sm relative
                  border-2 ${bgClass} transition-all
                `}
              >
                {d.day}
                {d.isCompleted && (
                  <div className="absolute -bottom-1 -right-1 text-neon-yellow text-[8px] drop-shadow-[0_0_2px_black]">★</div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
            {isTodayCompleted ? (
                 <div className="px-8 py-3 bg-zinc-900 text-neon-green font-black font-oswald rounded-full border-2 border-neon-green shadow-[0_0_15px_rgba(0,255,102,0.2)] cursor-default uppercase tracking-widest">
                    PUZZLE COMPLETE
                 </div>
            ) : (
                <button 
                    onClick={onPlayToday}
                    className="px-8 py-4 bg-white text-black font-black font-oswald text-lg rounded-full hover:bg-neon-blue hover:text-black transition-all shadow-[0_0_20px_white] hover:scale-105 active:scale-95 uppercase tracking-widest"
                >
                    PLAY TODAY
                </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default DailyCalendar;
