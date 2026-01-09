import path from "node:path";
import fs from "node:fs/promises";

import { getMockDataDir } from "./mock-data-path";

const cache = new Map<string, unknown>();

export const readJsonFile = async <T>(fileName: string): Promise<T> => {
  const fullPath = path.join(getMockDataDir(), fileName);

  if (cache.has(fullPath)) {
    return cache.get(fullPath) as T;
  }

  const raw = await fs.readFile(fullPath, "utf-8");
  const parsed = JSON.parse(raw) as T;

  cache.set(fullPath, parsed);
  return parsed;
};

export const clearJsonCache = () => {
  cache.clear();
};
