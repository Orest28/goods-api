import categoryModel from '../models/category.model.js';
import mongoose from './db.connection.js';

export const createCategory = async (categoryJSON) => {
    let newCategory = new categoryModel(categoryJSON);
    let savedCategory = await newCategory.save();
    return savedCategory;
}

export const findAllCategories = async () => {
    let allCategories = await categoryModel.find();
    return allCategories;
}

export const findCategoryByName = async (name) => {

    let categoryObject = {
        error : "",
        result: mongoose.Types.ObjectId(1)
    }

    await categoryModel.findOne({'name' : name}, (err, result) => {
        if(err) {
            console.log(err)
        }
        if(result) {
            categoryObject.result = mongoose.Types.ObjectId(result._id);
        } else {
            categoryObject.error = "The category not found";
        }
    })

    return categoryObject;
}

export default {createCategory, findAllCategories};