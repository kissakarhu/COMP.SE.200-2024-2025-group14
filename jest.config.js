export default {
  collectCoverage: true,
  collectCoverageFrom: ["src/*.js"],

  coverageDirectory: "coverage",

  coverageReporters: ["text", "html", "lcov"],

  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/test/",
    "/.internal/"
  ],

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },

  testEnvironment: "node"
};
