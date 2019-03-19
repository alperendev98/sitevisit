
-- The main SQL query that returns the closest 5 airports.
SELECT book_pk, full_name, latitude, longitude, 111.045 * DEGREES(ACOS(COS(RADIANS(51.891648))
 * COS(RADIANS(latitude))
 * COS(RADIANS(longitude) - RADIANS(0.244799))
 + SIN(RADIANS(51.891648))
 * SIN(RADIANS(latitude))))
 AS distance_in_km
FROM book
ORDER BY distance_in_km ASC
LIMIT 5 OFFSET 0;


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