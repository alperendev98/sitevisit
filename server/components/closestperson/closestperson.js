const express = require('express');
const router = express.Router();

let closestSalesperson = require('./controllers/closestSalesperson.js');

router.post('/', closestSalesperson);
module.exports = router;