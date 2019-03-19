const createBooking = require('../actions/createBooking.js');

module.exports = (req, res) => {
    createBooking(req, res).then((book) => {
        res.status(200).json({
            success: book
        });
    }).catch((err) => {
        res.status(500).json({
            error: 'An error occurred when adding a site visit book.',
            reason: err
        });
    });
};