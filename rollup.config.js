import json from '@rollup/plugin-json';

export default {
    input: 'src/scripts/main.js',
    output: {
      file: 'build/bundle.js',
      format: 'cjs'
    },
    plugins: [json()]
  };