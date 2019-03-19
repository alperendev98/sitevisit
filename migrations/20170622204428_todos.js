exports.up = (knex, Promise) => {
    return Promise.all([
        knex.schema.createTable('salesperson', (table) => {
            table.increments('sp_pk').primary();
            table.string('name')
            table.string('email')
            table.string('phone')
            table.string('s_address')
            table.string('f_address')
        }),
        knex.schema.createTable('general', (table) => {
            table.increments('g_pk').primary();
            table.integer('close_distance')
            table.integer('far_distance')
            table.string('earlist_time')
            table.string('latest_time')
        }),
        knex.schema.createTable('book', (table) => {
            table.increments('book_pk').primary();
            table.string('full_name')
            table.string('email')
            table.string('phone')
            table.timestamp('pick_time')
            table.string('address_name')
            table.decimal('latitude', 9, 6)
            table.decimal('longitude', 9, 6)
        })
    ])
};

exports.down = (knex, Promise) => {
    return Promise.all([
        knex.schema.dropTable('salesperson'),
        knex.schema.dropTable('book')
    ])
};