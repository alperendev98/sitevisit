const knex = require('../../../dbConnect');

module.exports = (req, res) => {
    return knex('general');
};