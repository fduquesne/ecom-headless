import path from "node:path";

export const getMockDataDir = () => {
  // From: apps/api/src/core/mock-data
  // To:   packages/mock-data
  return path.resolve(__dirname, "../../../../../packages/mock-data");
};
