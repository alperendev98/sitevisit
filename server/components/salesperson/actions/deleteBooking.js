const knex = require('../../../dbConnect');

module.exports = (req, res) => {
  return knex('salesperson').where({
    sp_pk: req.params.id
  }).del();
};