import CategoryModel from '../models/category.model';
import mongoose from './db.connection';

export const createCategory = async (categoryJSON) => {
  const newCategory = new CategoryModel(categoryJSON);
  const savedCategory = await newCategory.save();
  return savedCategory;
};

export const findAllCategories = async () => {
  const allCategories = await CategoryModel.find();
  return allCategories;
};

export const findCategoryByName = async (name) => {
  const categoryObject = {
    error: '',
    result: mongoose.Types.ObjectId(1),
  };

  await CategoryModel.findOne({ name }, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      categoryObject.result = mongoose.Types.ObjectId(result._id);
    } else {
      categoryObject.error = 'The category not found';
    }
  });

  return categoryObject;
};

export default { createCategory, findAllCategories };
