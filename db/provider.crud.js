import ProviderModel from '../models/provider.model.js';
import mongoose from 'mongoose';

export const findProviderByCompany = async providerCompany => {
    
    let providerObject = {
        error : "",
        result: mongoose.Types.ObjectId(1)
    }

    await ProviderModel.findOne({'company' : providerCompany}, (err, result) => {
        if(err) {
            console.log(err);
        } 
        if(result) {
            providerObject.result = mongoose.Types.ObjectId(result._id);
        } else {
            providerObject.error = "The provider not found";
        }
    })

    return providerObject;
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