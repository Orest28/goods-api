import { response } from 'express';
import GoodsModel from '../models/goods.model';

const findProductByName = productName => {
    let found = await GoodsModel.find({name: productName});
    return found;
}

const findAllProducts = () => {
    let allProducts = await GoodsModel.find();
    return allProducts;
}

const createProduct = (productJSON) => {
    let newProduct = new GoodsModel(productJSON);
    let savedProduct = await newProduct.save();
    return savedProduct;
}

export default {findProductByName, findAllProducts, createProduct};