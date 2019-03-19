
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('general').del()
    .then(function () {
      // Inserts seed entries
      return knex('general').insert([
        {close_distance: '10000', far_distance: '20000', earlist_time: '9:00', latest_time: '4:30', looking_date: 5}
      ]);
    });
};
