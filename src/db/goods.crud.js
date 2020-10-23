import GoodsModel from '../models/goods.model.js';

import { findCategoryByName } from './category.crud.js';
import { findProviderByCompany } from './provider.crud.js';
import { findMeasurementByType } from './measurement.crud.js';

export const findProductByName = async (productName) => {
  const found = await GoodsModel.find({ name: productName });
  return found;
};

export const findAllProducts = async () => {
  const allProducts = await GoodsModel.find()
    .populate('category')
    .populate('provider')
    .populate('measurement');
  return allProducts;
};

export const createProduct = async (productJSON) => {
  const newProduct = new GoodsModel(productJSON);
  const savedProduct = await newProduct.save();
  return savedProduct;
};

export const deleteProductById = async (id) => {
  const response = {
    error: '',
    message: '',
  };

  await GoodsModel.deleteOne({ _id: id }, (err) => {
    if (err) response.error = err;
    else response.message = 'document deleted successfully';
  });

  return response;
};

// eslint-disable-next-line no-return-await
export const findProductById = async (id) => await GoodsModel.findById(id);

export const updateProduct = async (product) => {
  const category = (await findCategoryByName(product.category)).result;
  const provider = (await findProviderByCompany(product.provider)).result;
  const measurement = (await findMeasurementByType(product.measurement)).result;

  const doc = await findProductById(product._id);

  doc.name = product.name;
  doc.price = product.price;
  doc.category = category;
  doc.provider = provider;
  doc.measurement = measurement;
  doc.expirationDate = product.expirationDate;

  return (await doc).save();
};

export default {
  findProductByName, findAllProducts, createProduct, updateProduct, deleteProductById,
};
