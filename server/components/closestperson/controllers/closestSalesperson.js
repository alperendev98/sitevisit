const closestSalesperson = require('../actions/closestSalesperson.js');

module.exports = (req, res) => {
    closestSalesperson(req, res).then((salesperson) => {
        res.status(200).json({
            success: salesperson
        });
    }).catch((err) => {
        res.status(500).json({
            error: 'An error occurred when select top 3 closest address',
            reason: err
        });
    });
};