const closestBooking = require('../actions/closestBooking.js');

module.exports = (req, res) => {
    closestBooking(req, res).then((book) => {
        res.status(200).json({
            success: book
        });
    }).catch((err) => {
        res.status(500).json({
            error: 'An error occurred when select top 3 closest address',
            reason: err
        });
    });
};