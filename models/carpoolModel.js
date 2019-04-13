'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carpoolSchema = new Schema({
  from: {type: String,  required: true},
  to: {type: String, required: true}
});

module.exports = mongoose.model('Carpool', carpoolSchema);