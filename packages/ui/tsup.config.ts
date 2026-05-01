import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  clean: true,
  tsconfig: './tsconfig.json',
  dts: {
    compilerOptions: {
      ignoreDeprecations: '6.0',
    },
  },
});
