'use strict';

const User = require('../models/userModel');

exports.register_user = (req) => {
  return User.create(req.body).then(user => {
    return user;
  }).catch((err) => {
    return err;
  });
};

exports.login_user = (req, res, next) => {

};