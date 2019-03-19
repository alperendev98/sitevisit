const knex = require('../../../dbConnect');

module.exports = (req, res) => {
  let mylat = req.body.latitude
  let mylong = req.body.longitude

  return knex('general')
  .first()
  .then(general => {
    return getsalesperson(general, mylat, mylong)
    // return general
  })
  .then(data => {
    return data
  })

};

getsalesperson = (general, mylat, mylong) => {
  
  return knex.raw("SELECT * , 111.045 * DEGREES(ACOS(COS(RADIANS(" + mylat + ")) * COS(RADIANS(s_lat)) * COS(RADIANS(s_lng) - RADIANS(" + mylong + ")) + SIN(RADIANS(" + mylat + ")) * SIN(RADIANS(s_lat)))) AS distance_in_km FROM salesperson ORDER BY distance_in_km ASC")
  .then(data => {
    console.log('close person')
    // console.log(general.close_distance)
    // console.log(JSON.stringify(data.rows))
    let bookings = data.filter(item => item.distance_in_km < general.close_distance)
    return bookings
  })
}
