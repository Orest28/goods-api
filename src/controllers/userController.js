import bcrypt from 'bcrypt';

import { createUser } from '../db/user.crud';

export const signup = async (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    req.body.password = hash;
    createUser(req.body).then(() => {
      res.status(200).json({
        message: 'User added successfully',
      });
    }).catch((err) => {
      res.status(500).json({
        erorr: err,
      });
    });
  });
};

export const login = async (req, res) => {

};

export default { signup, login };
