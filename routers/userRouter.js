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
        res.send('User: ' + result + ' created!');
      });
    }
  });
});

module.exports = router;
