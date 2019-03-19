
exports.up = function(knex, Promise) {
    return knex.schema.table('general', function(t) {
        t.integer('buffer_time').notNull().defaultTo(3)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('general', function(t) {
        t.dropColumn('buffer_time')
    })
  };
  