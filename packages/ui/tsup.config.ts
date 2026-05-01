import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    entry: ['src/index.ts'],
    format: ['esm'],
    dts: true,
    sourcemap: true,
    clean: true,
    external: ['react', 'react-dom'],
  };
});
