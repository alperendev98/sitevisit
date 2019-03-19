const deleteBooking = require('../actions/deleteBooking.js');

module.exports = (req, res) => {
    deleteBooking(req, res).then((book) => {
        res.status(200).json({
            success: book
        });
    }).catch((err) => {
        res.status(500).json({
            error: 'An error occurred when deleting a site visit book.',
            reason: err
        });
    });
};