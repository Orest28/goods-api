import UserModel from '../models/user.model.js';

export const createUser = (user) => {
  const newUser = new UserModel(user);
  return newUser.save();
};

export const findUserByEmail = (userEmail) => UserModel.findOne({ email: userEmail });

export default { createUser, findUserByEmail };
