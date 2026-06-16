import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Strip broken sourceMappingURL comments from @capacitor-community/admob
// to suppress "points to missing source files" warnings during dev/build.
function stripAdmobSourcemapPlugin() {
  const filter = /@capacitor-community[\/\\]admob/;
  return {
    name: 'strip-admob-sourcemaps',
    transform(code: string, id: string) {
      if (filter.test(id)) {
        return {
          code: code.replace(/\n?\/\/# sourceMappingURL=.+/, ''),
          map: null,
        };
      }
      return null;
    },
  };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        warmup: {
          // Pre-transform critical client files at startup so first request is fast
          // Paths relative to project root (no leading slash)
          clientFiles: [
            'index.tsx',
            'App.tsx',
            'types.ts',
            'services/storage.ts',
            'services/csvData.ts',
            'services/levelContent.ts',
            'services/audioService.ts',
            'services/tileStyles.ts',
            'components/Tile.tsx',
            'components/Header.tsx',
            'components/LevelLayout.tsx',
            'components/LevelMenu.tsx',
            'components/Level1_Standard.tsx',
            'components/Footer.tsx',
          ],
        },

      },
      plugins: [stripAdmobSourcemapPlugin(), react()],
      optimizeDeps: {
        include: [
          'framer-motion',
        ],
        exclude: ['@capacitor/core', '@capacitor-community/admob'],
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY ?? ''),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY ?? '')
      },
      resolve: {
        alias: {
          '@': path.resolve('.'),
        }
      }
    };
});
