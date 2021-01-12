module.exports = {
  roots: ['<rootDir>/src/js/'],
  setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(scss|css)$': 'jest-css-modules',
  },
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
    '\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['<rootDir>/**/?(*.)+(spec|test).ts?(x)', '<rootDir>/**/?(*.)+(spec|test).js?(x)'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/**/*.ts?(x)', '<rootDir>/**/*.js?(x)'],
  coverageDirectory: './coverage/',
  coverageReporters: ['cobertura', 'html', 'text-summary'],
  reporters: ['default'],
}
