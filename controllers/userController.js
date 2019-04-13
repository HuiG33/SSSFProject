'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.register_user = (req) => {
  const salt = bcrypt.genSaltSync(10);

  req.body.password = bcrypt.hashSync(req.body.password, salt);

  return User.create(req.body).then(user => {
    return user
  }).catch(err => {
    return err;
  });
};

exports.login_user = (req, res) => {
  const username = req.body.username;

  return User.findOne({username: username}).then(user => {
    if (!user){
      res.json({status:"error", message: "Invalid email/password", data:null});
    }
    if (bcrypt.compareSync(req.body.password, user.password)){
      const token = jwt.sign({id: user._id}, req.app.get('secretKey'), {expiresIn: '1h'});
      res.json({status:"success", message: "User found", data: {user: user.username, token: token}});
    }
    else {
      res.json({status:"error", message: "Invalid email/password!!!", data:null});
    }
  });
};

