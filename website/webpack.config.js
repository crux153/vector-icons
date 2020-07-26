const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['@ref/vector-icons'],
      },
    },
    argv,
  );
  config.resolve.alias['@expo/vector-icons'] = '@ref/vector-icons';
  return config;
};
