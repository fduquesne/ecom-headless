import repositories from "../repositories";

export const getAll = async () => {
  return repositories.products.findAll();
};

export const getById = async (id: string) => {
  const product = await repositories.products.findById(id);

  if (!product) return { found: false as const };
  return { found: true as const, product };
};
