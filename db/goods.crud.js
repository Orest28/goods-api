import GoodsModel from '../models/goods.model.js';

export const findProductByName = async productName => {
    let found = await GoodsModel.find({name: productName});
    return found;
}

export const findAllProducts = async () => {
    console.log("hello");
    let allProducts = await GoodsModel.find();
    return allProducts;
}

export const createProduct = async (productJSON) => {
    console.log("hello from createProduct, productJSON: " + productJSON);
    let newProduct = new GoodsModel(productJSON);
    let savedProduct = await newProduct.save();
    return savedProduct;
}

export default {findProductByName, findAllProducts, createProduct};