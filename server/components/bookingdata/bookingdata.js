const express = require('express');
const router = express.Router();

let createBooking = require('./controllers/createBooking.js');

router.post('/', createBooking);

module.exports = router;