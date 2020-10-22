import {findProductByName, findAllProducts, createProduct} from '../db/goods.crud.js';

import { findCategoryByName } from '../db/category.crud.js'
import { findProviderByCompany } from '../db/provider.crud.js'
import { findMeasurementByType } from '../db/measurement.crud.js';


export const find = async (req, res) => {
    res.json(findProductByName(req.params.name));
}

export const findAll = async (req,res) => {
    res.json(await findAllProducts())
}

export const create = async (req, res) => {
    
    const categoryResult = await findCategoryByName(req.body.category);
    const providerResult = await findProviderByCompany(req.body.provider);
    const measurementResult = await findMeasurementByType(req.body.measurement);

    req.body.category = categoryResult;
    req.body.provider = providerResult;
    req.body.measurement = measurementResult;

    res.json(await createProduct(req.body))
}

export default {find, findAll, create};