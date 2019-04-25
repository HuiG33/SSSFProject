'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carpoolSchema = new Schema({
  start: {
    town: String,
    address: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  end: {
    town: String,
    address: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  waypoints: [{
    town: String,
    address: String,
    hitchhiker: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  }],
  suggestions: [{
    town: String,
    address: String,
    hitchhiker: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  }]
});

module.exports = mongoose.model('Carpool', carpoolSchema);