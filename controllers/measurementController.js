import {findAllMeasurement, createMeasurement} from '../db/measurement.crud.js'

export const findAll = async (req, res) => {
    res.json(await findAllMeasurement());
}

export const create = async (req, res) => {
    res.json(createMeasurement(req.body));
}

export default {findAll, create};