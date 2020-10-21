import {findProductByName, findAllProducts, createProduct} from '../db/goods.crud';


async const find = (req, res) => {
    res.json(findProductByName(req.params.name));
}

async const findAll = (req,res) => {
    res.json(findAllProducts())
}

async const create = (req, res) => {
    res.json(createProduct(req.body))
}

export default {find, findAll, create};