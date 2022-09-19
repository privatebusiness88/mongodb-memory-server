/**
 * @type {import('typedoc').TypeDocOptions}
 */
module.exports = {
  entryPoints: [
    './packages/mongodb-memory-server-core/src/*',
    './packages/mongodb-memory-server-core/src/internal/*',
  ],
  exclude: ['**/*/__tests__/**/*'],
  entryPointStrategy: 'expand',
  out: 'typedoc_out',
  tsconfig: './packages/mongodb-memory-server-core/tsconfig.build.json',
  readme: './README.md',
};
