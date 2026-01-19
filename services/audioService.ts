


class AudioService {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  
  // Music state
  private isMusicPlaying: boolean = false;
  private musicNodes: AudioNode[] = [];
  private musicInterval: any = null;

  private getContext(): AudioContext | null {
    if (!this.ctx) {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass) {
          this.ctx = new AudioContextClass();
        } else {
           return null;
        }
      } catch (e) {
        console.error("Audio init error", e);
        return null;
      }
    }
    return this.ctx;
  }

  resume() {
    const ctx = this.getContext();
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(err => console.warn(err));
    }
  }

  setSound(enabled: boolean) {
    this.isMuted = !enabled;
    if (this.isMuted) {
      this.stopNodes();
    } else {
      this.resume();
    }
  }

  private playTone(
    freq: number, 
    type: OscillatorType, 
    duration: number, 
    startTime: number = 0,
    vol: number = 0.1
  ) {
    if (this.isMuted) return;
    
    const ctx = this.getContext();
    if (!ctx) return;
    
    // Always ensure running
    if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
    }

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);
      
      gain.gain.setValueAtTime(vol, ctx.currentTime + startTime);
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + startTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + startTime);
      osc.stop(ctx.currentTime + startTime + duration + 0.05);

      osc.onended = () => {
          osc.disconnect();
          gain.disconnect();
      };
    } catch (e) {
      // Ignore audio errors
    }
  }

  // --- Background Music Logic ---

  startMusic() {
    if (this.isMusicPlaying) return;
    this.isMusicPlaying = true;
    // Ambient drone disabled by user request.
  }

  stopMusic() {
    this.isMusicPlaying = false;
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
    this.stopNodes();
  }

  toggleMusic() {
    if (this.isMusicPlaying) {
      this.stopMusic();
      return false;
    } else {
      this.startMusic();
      return true;
    }
  }

  private stopNodes() {
    this.musicNodes.forEach(node => {
      try {
        node.disconnect();
      } catch (e) { /* ignore */ }
    });
    this.musicNodes = [];
  }

  // --- Sound Effects ---

  playTick() {
    this.playTone(800, 'square', 0.03, 0, 0.05);
  }

  playSelect() {
    this.playTone(600, 'sine', 0.08, 0, 0.1);
  }

  playSwap() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;
    
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});

    try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(600, ctx.currentTime + 0.1);
        
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start();
        osc.stop(ctx.currentTime + 0.15);

        osc.onended = () => {
            osc.disconnect();
            gain.disconnect();
        };
    } catch(e) {}
  }

  playCorrect() {
    this.playTone(660, 'sine', 0.1, 0, 0.15); 
    this.playTone(880, 'sine', 0.2, 0.08, 0.15);
  }

  playRowSolved() {
    this.playTone(440, 'sine', 0.4, 0, 0.1);   
    this.playTone(554.37, 'sine', 0.4, 0.05, 0.1); 
    this.playTone(659.25, 'sine', 0.4, 0.1, 0.1);  
  }

  playError() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});

    try {
        const t = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(120, t);
        osc.frequency.exponentialRampToValueAtTime(60, t + 0.3);
        
        gain.gain.setValueAtTime(0.15, t);
        gain.gain.linearRampToValueAtTime(0.001, t + 0.3);

        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(t);
        osc.stop(t + 0.35);

        osc.onended = () => {
            osc.disconnect();
            gain.disconnect();
        };
    } catch(e) {}
  }

  playWin() {
    const now = 0;
    this.playTone(523.25, 'triangle', 0.1, now, 0.2);       
    this.playTone(659.25, 'triangle', 0.1, now + 0.1, 0.2); 
    this.playTone(783.99, 'triangle', 0.1, now + 0.2, 0.2); 
    this.playTone(1046.50, 'square', 0.6, now + 0.3, 0.2);  
    this.playTone(523.25, 'sine', 0.4, now + 0.3, 0.2);     
  }

  playLevelStart() {
    const now = 0;
    this.playTone(440, 'sine', 0.1, now, 0.1);
    this.playTone(880, 'sine', 0.2, now + 0.1, 0.1);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopNodes(); 
    }
  }
}

export const audio = new AudioService();