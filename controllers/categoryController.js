import {findAllCategories, createCategory} from '../db/category.crud.js';

export const findAll = async (req,res) => {
    res.json(await findAllCategories());
}

export const create = async (req, res) => {
    res.json(createCategory(req.body));
}

export default {findAll, create};