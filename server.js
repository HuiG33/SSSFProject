'use strict';
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./routers/userRouter');
const db = require('./modules/database');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

db.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/test`, app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/', userRouter);