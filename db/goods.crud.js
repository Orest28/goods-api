import GoodsModel from '../models/goods.model.js';

export const findProductByName = async productName => {
    let found = await GoodsModel.find({name: productName});
    return found;
}

export const findAllProducts = async () => {
    let allProducts = await GoodsModel.find()
                                    .populate("category")
                                    .populate("provider");
    return allProducts;
}

export const createProduct = async (productJSON) => {
    let newProduct = new GoodsModel(productJSON);
    let savedProduct = await newProduct.save();
    return savedProduct;
}

export default {findProductByName, findAllProducts, createProduct};