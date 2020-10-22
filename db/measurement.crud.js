import measurementModel  from '../models/measurement.model.js';
import mongoose from './db.connection.js';

export const createMeasurement = async (measurementJSON) => {
    let newMeasurement = new measurementModel(measurementJSON);
    let savedMeasurement = await newMeasurement.save();
    return savedMeasurement;
}

export const findAllMeasurement = async () => {
    let measurements = await measurementModel.find();
    return measurements;
}

export const findMeasurementByType = async (type) => {
    
    let measurementObject = {
        error : "",
        result: mongoose.Types.ObjectId(1)
    }
    
    await measurementModel.findOne({'type' : type}, (err, result) => {
        if(err) {
            console.log(err);
        }
        if(result) {
            measurementObject.result = mongoose.Types.ObjectId(result._id);
        } else {
            measurementObject.error = "The measurement not found";
        }
    })

    return measurementObject;
}

export default {createMeasurement, findAllMeasurement, findMeasurementByType};