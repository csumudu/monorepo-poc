/* eslint-disable */
const path = require('path');
const fs = require('fs');
const { override, babelInclude } = require('customize-cra');

module.exports = (config, env) => {
  return Object.assign(
    config,
    override(
      babelInclude([
        path.resolve('src'),
        fs.realpathSync('../ui-widgets/src'), 
      ]),
    )(config, env),
  );
};
