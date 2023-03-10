import typescript from 'rollup-plugin-typescript2';
import { string } from "rollup-plugin-string";

import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      strict: false,
    },
  ],
  plugins: [
    typescript(),
    string({
      include: "**/*.txt"
    })
  ],
  external: ['react', 'react-dom'],
}