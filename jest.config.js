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

  testEnvironment: "node"
};
