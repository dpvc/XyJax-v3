const webpack = require('webpack');
const PACKAGE = require('../webpack.common.js');

const package = PACKAGE(
  'example',                             // the package to build
  '../../js',                            // location of our js files
  [                                      // packages to link to
    'components/src/input/tex-base/lib',
    'components/src/core/lib',
    'components/src/output/chtml/lib',
    'components/src/output/svg/lib'
  ],
  __dirname                              // our directory
);

//
// Babel-load all .js files and process class properties
//
package.module.rules[0].test = /\.js$/;
package.module.rules[0].exclude = /node_modules/;
package.module.rules[0].use.options.plugins = [["@babel/plugin-proposal-class-properties", {loose: true}]];

module.exports = package;
