const commonConfig = require('./webpackconfig/webpack.common');
const validation = require('./webpackconfig/validation');
const webpackMerge = require('webpack-merge');


const addons = (/* string | string[] */ addonsArg) => {
  let addons = [...[addonsArg]]   // Normalize array of addons (flatten)
    .filter(Boolean);             // If addons is undefined, filter it out

  return addons.map((addonName) =>
    require(`./webpackconfig/addons/webpack.${addonName}.js`)
  );
};

module.exports = env => {
  console.log(env);
  if(!env) {
    throw new Error(validation.ERR_NO_ENV_FLAG);
  }

  const envConfig = require(`./webpackconfig/webpack.${env.env}.js`);
  return webpackMerge(commonConfig, envConfig, ...addons(env.addons));
}
