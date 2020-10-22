import mongoose from 'mongoose';
import ProviderModel from '../models/provider.model';

export const findProviderByCompany = async (providerCompany) => {
  const providerObject = {
    error: '',
    result: mongoose.Types.ObjectId(1),
  };

  await ProviderModel.findOne({ company: providerCompany }, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      providerObject.result = mongoose.Types.ObjectId(result._id);
    } else {
      providerObject.error = 'The provider not found';
    }
  });

  return providerObject;
};

export const findProviderById = (id) => ProviderModel.findById(id);

export const findAllProviders = async () => {
  const providers = await ProviderModel.find();
  return providers;
};

export const createProvider = async (providerJSON) => {
  const newProvider = new ProviderModel(providerJSON);
  const savedProvider = await newProvider.save();
  return savedProvider;
};

export default { findProviderByCompany, findAllProviders, createProvider };
