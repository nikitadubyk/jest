/** @type {import('jest').Config} */
const config = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.{js, jsx, ts, tsx}"],
  coverageThreshold: {
    global: {
      lines: 80,
      branches: 80,
      functions: 80,
      statements: 80,
    },
  },
};

module.exports = config;
