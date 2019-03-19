const knex = require('../../../dbConnect');

module.exports = (req, res) => {
  return knex('salesperson')
  .insert({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    s_address: req.body.s_address,
    f_address: req.body.f_address,
    f_lng: req.body.f_lng,
    f_lat: req.body.f_lat,
    s_lng: req.body.s_lng,
    s_lat: req.body.s_lat,
  }).returning('*');
};