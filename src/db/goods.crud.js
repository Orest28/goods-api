import GoodsModel from '../models/goods.model';

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

export default { findProductByName, findAllProducts, createProduct };
