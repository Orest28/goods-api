import { findProductByName, findAllProducts, createProduct } from '../db/goods.crud';

import { findCategoryByName } from '../db/category.crud';
import { findProviderByCompany } from '../db/provider.crud';
import { findMeasurementByType } from '../db/measurement.crud';

export const find = async (req, res) => {
  res.json(findProductByName(req.params.name));
};

export const findAll = async (req, res) => {
  res.json(await findAllProducts());
};

export const create = async (req, res) => {
  const categoryResult = await findCategoryByName(req.body.category);
  const providerResult = await findProviderByCompany(req.body.provider);
  const measurementResult = await findMeasurementByType(req.body.measurement);

  const objectError = {};

  if (categoryResult.error !== '') {
    objectError.categoryError = categoryResult.error;
  }

  if (providerResult.error !== '') {
    objectError.providerError = providerResult.error;
  }

  if (measurementResult.error !== '') {
    objectError.measurementError = measurementResult.error;
  }

  if (objectError) {
    console.log(objectError);
    return res.status(400).json(objectError);
  }

  req.body.category = categoryResult.result;
  req.body.provider = providerResult.result;
  req.body.measurement = measurementResult.result;

  return res.json(await createProduct(req.body));
};

export default { find, findAll, create };
