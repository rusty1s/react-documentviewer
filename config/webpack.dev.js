const dev = require('react-dev-config/webpack.dev');

dev.entry = ['./demo/index.jsx'];

// We want to load specific ES6 modules and compile them on our side.
dev.module.rules[1].exclude = /node_modules(?!\/react-pattern-library)/;

module.exports = dev;
