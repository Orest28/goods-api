import { findProductByName, findAllProducts, createProduct, updateProduct, deleteProductById } from '../db/goods.crud.js';

import { findCategoryByName } from '../db/category.crud.js';
import { findProviderByCompany } from '../db/provider.crud.js';
import { findMeasurementByType } from '../db/measurement.crud.js';

export const find = async (req, res) => {
  res.json(findProductByName(req.params.name));
};

export const findAll = async (req, res) => {
  res.json(await findAllProducts());
};

export const update = async (req, res) => {
  res.json(await updateProduct(req.body));
};

export const deleteProduct = async (req, res) => {
  const objectDeletedProduct = await deleteProductById(req.params.id);
  // eslint-disable-next-line no-prototype-builtins
  if (objectDeletedProduct.error !== '') return res.status(400).json(objectDeletedProduct.error);
  return res.status(200).json(objectDeletedProduct.message);
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

  // eslint-disable-next-line no-prototype-builtins
  if (objectError.hasOwnProperty('categoryError') || objectError.hasOwnProperty('providerError') || objectError.hasOwnProperty('measurementError')) {
    console.log(objectError);
    return res.status(400).json(objectError);
  }

  req.body.category = categoryResult.result;
  req.body.provider = providerResult.result;
  req.body.measurement = measurementResult.result;

  return res.json(await createProduct(req.body));
};

export default {
  find, findAll, create, deleteProduct,
};
