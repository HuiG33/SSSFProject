'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carpoolSchema = new Schema({
  start: {
    town: String,
    address: String
  },
  end: {
    town: String,
    address: String
  },
  waypoints: [{
    town: String,
    address: String,
    hitchhiker: String
  }],
  suggestions: [{
    town: String,
    address: String,
    hitchhiker: String
  }]
});

module.exports = mongoose.model('Carpool', carpoolSchema);