'use strict';

const Carpool = require('../models/carpoolModel');

exports.get_carpools = (res) => {
  return Carpool.find().then((all) => {
    res.json({status:"success", message: "Carpools found!", data: {carpools: all}});
  }).catch((err) => {
    res.json({status:"error", message: err, data:null});
  });
};

exports.create_carpool = (req, res) => {
  return Carpool.create(req.body).then(post => {
    res.json({status:"success", message: "Carpool created!", data: {carpool: post}});
  }).catch((err) => {
    res.json({status:"error", message: err, data:null});
  });
};