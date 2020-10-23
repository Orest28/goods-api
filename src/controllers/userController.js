import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { createUser, findUserByEmail } from '../db/user.crud.js';

export const signup = (req, res) => {
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
  findUserByEmail(req.body.email).then((user) => {
    if (!user) {
      return res.status(401).json({
        error: new Error('User not found!'),
      });
    }
    bcrypt.compare(req.body.password, user.password).then((valid) => {
      if (!valid) {
        return res.status(401).json({
          erorr: new Error('Incorrect password'),
        });
      }
      const jwtToken = jwt.sign(
        { userId: user._id },
        'TOKEN_SECRET',
        { expiresIn: '24h' },
      );
      return res.status(200).json({
        userId: user._id,
        token: jwtToken,
      });
    }).catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
  }).catch((err) => {
    res.status(500).json({
      error: err,
    });
  });
};

export default { signup, login };
