require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const helpers = require('../helpers');
const dev = process.env.NODE_ENV === 'development';
const bookings = require('./components/bookings/bookings');
const salesperson = require('./components/salesperson/salesperson');
const closestperson = require('./components/closestperson/closestperson');
const general = require('./components/general/general');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(dev ? helpers.root('client/build') : helpers.root('dist')));
app.use(cookieParser());

app.use('/api/v1/salesperson', salesperson)
app.use('/api/v1/bookings', bookings)
app.use('/api/v1/general', general)
app.use('/api/v1/closestperson', closestperson)
app.all('*', (req, res, next) => {
    res.sendFile('index.html', {
        root: dev ? helpers.root('client/build') : helpers.root('dist')
    });
});

module.exports = app;