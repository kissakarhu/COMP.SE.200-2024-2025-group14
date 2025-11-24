export default {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/at.js",
    "src/ceil.js",
    "src/divide.js",
    "src/eq.js",
    "src/isEmpty.js",
    "src/isObjectLike.js",
    "src/map.js",
    "src/reduce.js",
    "src/toNumber.js",
    "src/toString.js"
  ],

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
