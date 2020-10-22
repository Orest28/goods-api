import { findAllProviders, createProvider } from '../db/provider.crud';

export const findAll = async (req, res) => {
  res.json(await findAllProviders());
};

export const create = async (req, res) => {
  res.json(createProvider(req.body));
};

export default { findAll, create };
