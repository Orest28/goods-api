import ProviderModel from '../models/provider.model.js';
import mongoose from 'mongoose';

export const findProviderByCompany = async providerCompany => {
    let provider = await ProviderModel.findOne({'company' : providerCompany}, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            return mongoose.Types.ObjectId(result._id);
        }
    })

    return provider;
}

export const findProviderById = async (id) => {
    return await ProviderModel.findById(id);
}

export const findAllProviders = async () => {
    let providers = await ProviderModel.find();
    return providers;
}

export const createProvider = async (providerJSON) => {
    let newProvider = new ProviderModel(providerJSON);
    let savedProvider = await newProvider.save();
    return savedProvider;
}

export default {findProviderByCompany, findAllProviders, createProvider};