import repositories from "../repositories";

export const getAll = async () => {
  return await repositories.optionSets.findAll();
};

export const getById = async (id: string) => {
  const optionSet = await repositories.optionSets.findById(id);

  if (!optionSet) return { found: false as const };
  return { found: true as const, optionSet };
};
