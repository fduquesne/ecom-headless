import { readJsonFile } from "../../../core/mock-data/json-path";

export type Collection = {
  id: string;
  name: string;
  slug: string;
  description: string;
  isLimited: boolean;
};

export const findAll = async (): Promise<Collection[]> => {
  return readJsonFile<Collection[]>("collections.json");
};

export const findById = async (id: string): Promise<Collection | undefined> => {
  const all = await findAll();
  return all.find((c) => c.id === id);
};
