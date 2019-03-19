const knex = require('../../../dbConnect');

module.exports = (req, res) => {
  return knex('book').where({
    id: req.params.id
  }).del();
};