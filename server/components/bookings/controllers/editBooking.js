const editBooking = require('../actions/editBooking.js');

module.exports = (req, res) => {
   editBooking(req, res)
   .then((book) => {
      res.status(200).json({
         success: book
      });
   }).catch((err) => {
         res.status(500).json({
            error: 'An error occurred when editing a site visit book.',
            reason: err
         });
   });
};