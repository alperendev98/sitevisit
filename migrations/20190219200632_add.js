
exports.up = function(knex, Promise) {
    return knex.schema.table('book', function(t) {
        t.integer('group_key').notNull()
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('book', function(t) {
        t.dropColumn('group_key')
    })
  };
  