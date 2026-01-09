import { readJsonFile } from "../../../core/mock-data/json-path";

export type OptionValue = {
  id: string;
  label: string;
};

export type OptionSet = {
  id: string;
  name: string;
  type: "single";
  values: OptionValue[];
  defaultValueId: string;
};

export const findAll = async (): Promise<OptionSet[]> => {
  return await readJsonFile<OptionSet[]>("option-sets.json");
};

export const findById = async (id: string): Promise<OptionSet | undefined> => {
  const optionSets = await findAll();
  return optionSets.find((o) => o.id === id);
};
