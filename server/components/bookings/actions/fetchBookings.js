const knex = require('../../../dbConnect');

module.exports = (req, res) => {
    return knex.select([
        'book.*',
        'salesperson.name as s_name',
        'salesperson.email as s_email',
        'salesperson.phone as s_phone',
        'salesperson.s_address as s_address',
        'salesperson.f_address as f_address',
        'salesperson.s_lat as s_lat',
        'salesperson.s_lng as s_lng',
        'salesperson.f_lat as f_lat',
        'salesperson.f_lng as f_lng',
        'salesperson.calendarId as calendarId',
    ])
    .from('book').leftJoin('salesperson', 'book.group_key', '=', 'salesperson.sp_pk')
}