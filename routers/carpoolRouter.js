'use strict';

const express = require('express');
const router = express.Router();

const carpoolController = require('../controllers/carpoolController');

router.get('/', (req, res) => {
  carpoolController.get_carpools(res).then((result) => {
    res.send(result);
  });
});

router.post('/create', (req, res) => {
  carpoolController.create_carpool(req, res).then((result) => {
    res.send(result);
  });
});

module.exports = router;