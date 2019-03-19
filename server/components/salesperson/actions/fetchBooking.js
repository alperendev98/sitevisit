const knex = require('../../../dbConnect');

module.exports = (req, res) => {
  return knex('salesperson').where({
    book_pk: req.params.id
  }).first();
};