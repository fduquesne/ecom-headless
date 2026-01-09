import { readJsonFile } from "../../../core/mock-data/json-path";

export type Product = {
  id: string;
  slug: string;
  name: string;
  collectionId: string;

  price: number;
  currency: "EUR";

  shortDescription: string;
  description: string;

  badges: string[];
  isLimited: boolean;
  limitedQuantity: number | null;

  stock: number;
  rating: number;
  reviewCount: number;

  images: string[];

  specs: Record<string, unknown>;
  optionSetIds: string[];
};

export const findAll = async (): Promise<Product[]> => {
  return readJsonFile<Product[]>("collections.json");
};

export const findById = async (id: string): Promise<Product | undefined> => {
  const all = await findAll();
  return all.find((c) => c.id === id);
};
