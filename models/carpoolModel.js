'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carpoolSchema = new Schema({
  start: {
    town: String,
    address: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  end: {
    town: String,
    address: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  waypoints: [{
    town: String,
    address: String,
    hitchhiker: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  }],
  suggestions: [{
    town: String,
    address: String,
    hitchhiker: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  }]
});

module.exports = mongoose.model('Carpool', carpoolSchema);