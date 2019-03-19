const fetchBookings = require('../actions/fetchBookings.js');

module.exports = (req, res) => {
    fetchBookings(req, res)
    .then((books) => {
        res.status(200).json({
            success: books
        });
    }).catch((err) => {
        res.status(500).json({
            error: 'An error occurred when fetching all salesperson.',
            reason: err
        });
    });
};