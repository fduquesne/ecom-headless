import repositories from "../repositories";

export const getAll = async () => {
  return repositories.collections.findAll();
};

export const getById = async (id: string) => {
  const collection = await repositories.collections.findById(id);

  if (!collection) return { found: false as const };
  return { found: true as const, collection };
};
