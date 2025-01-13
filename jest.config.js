module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // Mock CSS modules
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js", // Mock image imports
  },
  moduleDirectories: ["node_modules", "src"], // Resolve modules from src or node_modules
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/build/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
};
