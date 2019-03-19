const express = require('express');
const router = express.Router();

let fetchBookings = require('./controllers/fetchBookings.js');
let fetchBooking = require('./controllers/fetchBooking.js');
let createBooking = require('./controllers/createBooking.js');
let editBooking = require('./controllers/editBooking.js');
let deleteBooking = require('./controllers/deleteBooking.js');
let closestBooking = require('./controllers/closestBooking.js');
let suggest3BookingDate = require('./controllers/suggest3BookingDate.js');

router.get('/', fetchBookings);
router.post('/', createBooking);
router.get('/:id', fetchBooking);
router.put('/:id', editBooking);
router.delete('/:id', deleteBooking);
router.post('/closest', closestBooking);
router.post('/suggest3', suggest3BookingDate);

module.exports = router;