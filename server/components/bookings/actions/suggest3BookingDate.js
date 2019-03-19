const knex = require('../../../dbConnect');

module.exports = (req, res) => {  
    return knex('book').where({
        group_key: req.body.group_key
    })
};