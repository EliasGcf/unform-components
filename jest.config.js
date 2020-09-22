module.exports = {
  bail: true,
  clearMocks: true,
  // collectCoverage: true,
  collectCoverageFrom: [
    'packages/**/lib/**/*.{js,ts,tsx}',
    'packages/**/lib/*.{js,ts,tsx}',
    '!**/*-test.{js,ts,tsx}',
  ],
  coverageReporters: ['json', 'lcov'],
  coverageDirectory: 'coverage',
  projects: ['<rootDir>/packages/*/jest.config.js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '@mobile': '<rootDir>/packages/mobile/lib',
    '@web': '<rootDir>/packages/web/lib',
  },
};
