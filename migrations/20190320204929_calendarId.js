exports.up = function(knex, Promise) {
    return knex.schema.table('salesperson', function(t) {
        t.string('calendarId').notNull()
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('salesperson', function(t) {
        t.dropColumn('calendarId')
    })
  };
  