'use strict';

const Carpool = require('../models/carpoolModel');

exports.get_carpools = (res) => {
  return Carpool.find().then((all) => {
    res.json({status:"success", message: "Carpools found!", data: {carpools: all}});
  }).catch((err) => {
    res.json({status:"error", message: err, data:null});
  });
};

exports.sort_carpools_user = (res, user) => {
  return Carpool.find({_id: user}).then((all) => {
    res.json({status:"success", message: "Carpools found!", data: {carpools: all}});
  }).catch((err) => {
    res.json({status:"error", message: err, data:null});
  });
};

exports.sort_carpools_start = (res, start) => {
  return Carpool.find({"start.town": start}).then((all) => {
    res.json({status:"success", message: "Carpools found!", data: {carpools: all}});
  }).catch((err) => {
    res.json({status:"error", message: err, data:null});
  });
};

exports.sort_carpools_end = (res, end) => {
  return Carpool.find({"end.town": end}).then((all) => {
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

exports.delete_carpool = (id) => {
  return Carpool.findByIdAndDelete({_id: id}).then((response) => {
    return response;
  }).catch((err) => {
    return err;
  });
};

exports.add_suggestion = (req) => {
  const query = {_id: req.params.id};
  const update = {$push: {suggestions: req.body}};
  const opt = {new: true};
  return Carpool.findOneAndUpdate(query, update, opt);
};

exports.add_waypoint = (req) => {
  const query = {_id: req.params.id};
  const update = {$push: {waypoints: req.body}};
  const opt = {new: true};
  return Carpool.findOneAndUpdate(query, update, opt);
};

exports.del_suggestion = (req) => {
  const query = {_id: req.params.id};
  const update = {$pull: {suggestions: {_id: req.params.ids}}};
  const opt = {new: true};
  return Carpool.findOneAndUpdate(query, update, opt);
};

exports.del_waypoint = (req) => {
  const query = {_id: req.params.id};
  const update = {$pull: {waypoints: {_id: req.params.idw}}};
  const opt = {new: true};
  return Carpool.findOneAndUpdate(query, update, opt);
};