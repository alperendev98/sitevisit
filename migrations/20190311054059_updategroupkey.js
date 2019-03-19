
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('book'),
        
    ])
};

exports.down = function(knex, Promise) {
  
};
