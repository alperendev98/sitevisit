const knex = require('../../../dbConnect');

module.exports = (req, res) => {
  return knex('general')
  .insert({
    content: req.body.content
  }).returning('*');
};