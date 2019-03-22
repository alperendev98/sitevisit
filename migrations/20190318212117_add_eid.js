
exports.up = function(knex, Promise) {
    return knex.schema.table('book', function(t) {
        t.string('eid').notNull()
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('book', function(t) {
        t.dropColumn('eid')
    })
  };
  