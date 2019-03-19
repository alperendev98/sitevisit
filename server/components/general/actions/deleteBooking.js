const knex = require('../../../dbConnect');

module.exports = (req, res) => {
  return knex('general').where({
    global_pk: req.params.id
  }).del();
};