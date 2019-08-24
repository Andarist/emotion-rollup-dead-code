/* globals process */
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};
const external = Object.keys(globals);
const input = 'src/index.js';

const plugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  nodeResolve(),
  commonjs({
    exclude: 'src/**',
  }),
  babel({
    exclude: 'node_modules/**',
  }),
];

export default {
  input,
  output: {
    file: 'dist/build.esm.js',
    format: 'esm',
    globals,
  },
  plugins,
  external,
};
