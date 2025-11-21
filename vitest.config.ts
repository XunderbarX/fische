import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    setupFiles: './vitest.setup.ts',
    coverage: {
      exclude: ['node_modules/', 'dist/', 'test/'],
      reporter: ['text', 'html']
    }
  }
})
