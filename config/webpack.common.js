const common = require('react-dev-config/webpack.common');

common.entry = ['./demo/index.jsx'];

// We want to load specific ES6 modules and compile them on our side.
common.module.rules[1].exclude = /node_modules(?!\/react-pattern-library)/;

module.exports = common;
