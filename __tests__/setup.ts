import '@testing-library/jest-dom';

// Mock localStorage for all tests
const store: Record<string, string> = {};

const localStorageMock: Storage = {
  getItem: (key: string): string | null => {
    return store[key] ?? null;
  },
  setItem: (key: string, value: string): void => {
    store[key] = value;
  },
  removeItem: (key: string): void => {
    delete store[key];
  },
  clear: (): void => {
    Object.keys(store).forEach(key => delete store[key]);
  },
  get length(): number {
    return Object.keys(store).length;
  },
  key: (index: number): string | null => {
    const keys = Object.keys(store);
    return keys[index] ?? null;
  },
};

Object.defineProperty(globalThis, 'localStorage', {
  value: localStorageMock,
  writable: true,
  configurable: true,
});

// Mock window.AudioContext for audio service tests
class MockAudioContext {
  state = 'running';
  destination = {};

  createOscillator() {
    return {
      type: '',
      frequency: { setValueAtTime() {}, exponentialRampToValueAtTime() {} },
      connect() {},
      start() {},
      stop() {},
      disconnect() {},
      onended: null,
    };
  }

  createGain() {
    return {
      gain: { setValueAtTime() {}, exponentialRampToValueAtTime() {}, linearRampToValueAtTime() {} },
      connect() {},
      disconnect() {},
    };
  }

  resume() {
    return Promise.resolve();
  }

  get currentTime() { return 0; }
}

Object.defineProperty(globalThis, 'AudioContext', {
  value: MockAudioContext,
  writable: true,
  configurable: true,
});

Object.defineProperty(globalThis, 'webkitAudioContext', {
  value: undefined,
  writable: true,
  configurable: true,
});
