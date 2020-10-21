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

    console.log("hello from findCategoryByName");
    let category = await categoryModel.findOne({'name' : name}, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            return mongoose.Types.ObjectId(result._id);
        }
    })

    return category;
}

export default {createCategory, findAllCategories};