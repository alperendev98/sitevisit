
exports.up = function(knex, Promise) {
  return knex.schema.table('general', function(t) {
      t.integer('looking_date').notNull().defaultTo(5)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('general', function(t) {
      t.dropColumn('looking_date')
  })
};
