exports.up = function(knex, Promise) {
    return knex.schema.table('salesperson', function(t) {
        t.decimal('s_lat', 9, 6)
        t.decimal('s_lng', 9, 6)
        t.decimal('f_lat', 9, 6)
        t.decimal('f_lng', 9, 6)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('salesperson', function(t) {
        t.dropColumn('s_lat')
        t.dropColumn('s_lng')
        t.dropColumn('f_lat')
        t.dropColumn('f_lng')
    })
  };
  