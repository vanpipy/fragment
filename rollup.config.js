
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjsResolve = require('rollup-plugin-commonjs');
const buildins = require('rollup-plugin-node-builtins');

export default {
    input: 'src/Fragment.js',
    output: {
        name: 'Fragment',
        file: 'Fragment.js',
        format: 'iife'
    },
    plugins: [
        buildins(),
        nodeResolve(),
        commonjsResolve(),
    ],
}
