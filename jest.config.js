console.log('a7a');

module.exports = {
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)'],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
};
