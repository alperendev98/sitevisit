const suggest3BookingDate = require('../actions/suggest3BookingDate.js');

module.exports = (req, res) => {
    suggest3BookingDate(req, res)
    .then((books) => {
        res.status(200).json({
            success: books
        });
    }).catch((err) => {
        res.status(500).json({
            error: 'An error occurred when fetching all bookings by groupid',
            reason: err
        });
    });
};