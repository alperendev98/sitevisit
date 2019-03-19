const fetchBooking = require('../actions/fetchBooking.js');

module.exports = (req, res) => {
    fetchBooking(req, res)
    .then((book) => {
        res.status(200).json({
            success: book
        });
    }).catch((err) => {
        res.status(500).json({
            error: 'An error occurred when fetching a site visit book.',
            reason: err
        });
    });
};