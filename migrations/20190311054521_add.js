
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', (table) => {
    table.increments('book_pk').primary();
    table.string('full_name')
    table.string('email')
    table.string('phone')
    table.timestamp('pick_time')
    table.string('address_name')
    table.decimal('latitude', 9, 6)
    table.decimal('longitude', 9, 6)
    table.integer('group_key').notNull()
})
};

exports.down = function(knex, Promise) {
  
};
