const knex = require('../../../dbConnect');
/*

-- The main SQL query that returns the closest 5 airports.
SELECT book_pk, full_name, latitude, longitude, 111.045 * DEGREES(ACOS(COS(RADIANS(51.891648))
 * COS(RADIANS(latitude))
 * COS(RADIANS(longitude) - RADIANS(0.244799))
 + SIN(RADIANS(51.891648))
 * SIN(RADIANS(latitude))))
 AS distance_in_km
FROM book
WHERE pick_time < NOW() + INTERVAL '5 DAY' AND pick_time > NOW()
ORDER BY distance_in_km ASC
LIMIT 5 OFFSET 0;

*/

/* MSSQL
SELECT book_pk, full_name, pick_time, latitude, longitude, 111.045 * DEGREES(ACOS(COS(RADIANS(51.891648))
 * COS(RADIANS(latitude))
 * COS(RADIANS(longitude) - RADIANS(0.244799))
 + SIN(RADIANS(51.891648))
 * SIN(RADIANS(latitude))))
 AS distance_in_km
FROM book
WHERE pick_time BETWEEN getutcdate() AND DATEADD(day,7, getutcdate())
ORDER BY distance_in_km ASC

*/

module.exports = (req, res) => {
  let mylat = req.body.latitude
  let mylong = req.body.longitude

  return knex('general')
  .first()
  .then(general => {
    return getLocations(general, mylat, mylong)
    // return general
  })
  .then(data => {
    return data
  })

};

getLocations = (general, mylat, mylong) => {
  
  return knex.raw("SELECT * , 111.045 * DEGREES(ACOS(COS(RADIANS(" + mylat + ")) * COS(RADIANS(latitude)) * COS(RADIANS(longitude) - RADIANS(" + mylong + ")) + SIN(RADIANS(" + mylat + ")) * SIN(RADIANS(latitude)))) AS distance_in_km FROM book  WHERE pick_time BETWEEN DATEADD(day, -15, getutcdate()) AND DATEADD(day, 15, getutcdate()) ORDER BY distance_in_km ASC")
  .then(data => {
    console.log('closebooking')
    // console.log(general.close_distance)
    // console.log(JSON.stringify(data.rows))
    // let bookings = data.filter(item => item.distance_in_km < general.close_distance)
    return data
  })
}
