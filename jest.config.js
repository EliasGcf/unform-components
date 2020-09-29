const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/**/*/lib/**/*.{js,ts,tsx}',
    'packages/**/*/lib/*.{js,ts,tsx}',
    '!**/*-test.{js,ts,tsx}',
  ],
  coverageReporters: ['json', 'lcov'],
  coverageDirectory: 'coverage',
  projects: ['<rootDir>/packages/**/*/jest.config.js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/'
  }),
};
