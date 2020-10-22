import UserModel from '../models/user.model';

export const createUser = (user) => {
  const newUser = new UserModel(user);
  return newUser.save();
};

export default { createUser };
