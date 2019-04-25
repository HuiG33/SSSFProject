'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carpoolSchema = new Schema({
  start: {
    town: String,
    address: String,
    coordinates: {
      lat: String,
      lng: String
    }
  },
  end: {
    town: String,
    address: String,
    coordinates: {
      lat: String,
      lng: String
    }
  },
  waypoints: [{
    town: String,
    address: String,
    hitchhiker: String,
    coordinates: {
      lat: String,
      lng: String
    }
  }],
  suggestions: [{
    town: String,
    address: String,
    hitchhiker: String,
    coordinates: {
      lat: String,
      lng: String
    }
  }]
});

module.exports = mongoose.model('Carpool', carpoolSchema);