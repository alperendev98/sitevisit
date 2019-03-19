const knex = require('../../../dbConnect');

module.exports = (req, res) => {
    return knex('general').where({
        g_pk: req.params.id
    }).update({
        close_distance: req.body.close_distance,	
        far_distance: req.body.far_distance,	
        earlist_time: req.body.earlist_time,
        latest_time: req.body.latest_time,
        looking_date: req.body.looking_date,
        buffer_time: req.body.buffer_time,
        day_factor: req.body.day_factor,
    }).returning('*');
};