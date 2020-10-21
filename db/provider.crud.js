import ProviderModel from '../models/provider.model.js';

export const findProviderByCompany = async providerCompany => {
    let found = await ProviderModel.find({company: providerCompany});
    return found;
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