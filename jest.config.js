/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  testMatch: ["**/__tests__/**/*.+(ts|tsx)", "**/?(*.)+(spec|test).+(ts|tsx)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
