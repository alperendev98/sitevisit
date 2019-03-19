const knex = require('../../../dbConnect');

module.exports = (req, res) => {
    return knex('book').where({
        book_pk: req.params.id
    }).update({
        eid: req.body.eid,
    }).returning('*');
};