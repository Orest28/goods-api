import {findProductByName, findAllProducts, createProduct} from '../db/goods.crud.js';

import { findCategoryByName } from '../db/category.crud.js'


export const find = async (req, res) => {
    res.json(findProductByName(req.params.name));
}

export const findAll = async (req,res) => {
    console.log("hello from conteroller")
    res.json(await findAllProducts())
}

export const create = async (req, res) => {
    
    const categoryResult = await findCategoryByName(req.body.category);

    console.log(categoryResult)

    req.body.category = categoryResult;

    res.json(await createProduct(req.body))
}

export default {find, findAll, create};