'use strict';
require('dotenv').config();

const express = require('express');
const logger = require('morgan');

const carpools = require('./routers/carpoolRouter');
const users = require('./routers/userRouter');

const bodyParser = require('body-parser');
const db = require('./modules/database');
const jwt = require('jsonwebtoken');

const app = express();

app.enable('trust proxy');
app.set('secretKey', process.env.SECRETKEY);

db.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/test`, app);
app.use ((req, res, next) => {
  if (req.secure) {
    // request was via https, so do no special handling
    next();
  } else {
    // request was via http, so redirect to https
    res.redirect('https://' + req.headers.host + req.url);
  }
});
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({"home" : "Build REST API with node.js"});
});

app.use('/users', users);
app.use('/carpools', validateUser, carpools);

function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
    if (err) {
      res.json({status:"error", message: err.message, data:null});
    }else{
      // add user id to request
      req.body.userId = decoded.id;
      next();
    }
  });
}