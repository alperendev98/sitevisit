const knex = require('../../../dbConnect');

module.exports = (req, res) => {
  return knex('book')
  .insert({
    full_name: req.body.full_name,	
    email: req.body.email,	
    phone: req.body.phone,
    pick_time: req.body.pick_time,
    address_name: req.body.address_name,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    group_key: req.body.group_key,
    eid: req.body.eid,
    
  }).returning('*');
};