
exports.up = function(knex, Promise) {
    return knex.schema.table('general', function(t) {
        t.integer('day_factor').notNull().defaultTo(15)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('general', function(t) {
        t.dropColumn('day_factor')
    })
  };
  