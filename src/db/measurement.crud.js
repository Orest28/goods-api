import MeasurementModel from '../models/measurement.model';
import mongoose from './db.connection';

export const createMeasurement = async (measurementJSON) => {
  const newMeasurement = new MeasurementModel(measurementJSON);
  const savedMeasurement = await newMeasurement.save();
  return savedMeasurement;
};

export const findAllMeasurement = async () => {
  const measurements = await MeasurementModel.find();
  return measurements;
};

export const findMeasurementByType = async (type) => {
  const measurementObject = {
    error: '',
    result: mongoose.Types.ObjectId(1),
  };

  await MeasurementModel.findOne({ type }, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      measurementObject.result = mongoose.Types.ObjectId(result._id);
    } else {
      measurementObject.error = 'The measurement not found';
    }
  });

  return measurementObject;
};

export default { createMeasurement, findAllMeasurement, findMeasurementByType };
