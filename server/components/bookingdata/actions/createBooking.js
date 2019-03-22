const knex = require('../../../dbConnect');

module.exports = (req, res) => {
  let bookingarray = req.body.bookingData
    return knex('book')
    .insert(bookingarray)

};