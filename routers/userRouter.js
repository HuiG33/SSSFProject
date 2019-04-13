'use strict';

const express = require('express');
const router = express.Router();

const User = require('../models/userModel');
const userController = require('../controllers/userController');

router.post('/register', (req, res) => {
  User.findOne({username: req.body.username}).then(user => {
    if (user) {
      res.send('User already exists!');
    }
    else {
      userController.register_user(req).then((result) => {
        res.send('User: ' + result.username + ' created!');
      });
    }
  });
});

router.post('/login', (req, res) => {
  userController.login_user(req, res).then((result) => {
    res.send(result);
  });
});

module.exports = router;
