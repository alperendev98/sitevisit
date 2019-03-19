
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('book').del()
    .then(function () {
      // Inserts seed entries
      return knex('book').insert([
        {
          full_name: 'Madeline Wekey', 
          email: 'MadelineWekey@gmail.com',
          phone: '0249149868',
          group_key: 'ei-ewir-ehi',
          pick_time: '2019-02-18 10:30:00',
          address_name: '82 Gadd Avenue, Crystal Brook Port Pirie, South Australia, Australia',
          latitude: -33.3598938,
          longitude: 138.20220530000006
        },
        {
          full_name: 'Jesse Wekey', 
          email: 'Jesse@gmail.com',
          phone: '0249147388',
          group_key: 'ei-ewir-ehi',
          pick_time: '2019-02-18 10:30:00',
          address_name: '28 Yulara Drive, Yulara NT, Australia',
          latitude: -25.2445239,
          longitude: 130.98604439999997
        },
        {
          full_name: 'Alexander Wekey', 
          group_key: 'ei-ewir-ehi',
          email: 'Alexander@gmail.com',
          phone: '0245649388',
          pick_time: '2019-02-18 10:30:00',
          address_name: '50 Hillsdale Avenue West, Old Toronto, Toronto, ON, Canada',
          latitude: 43.7031715,
          longitude: -79.3992255
        },
        {
          full_name: 'Nova Wekey', 
          email: 'Nova@gmail.com',
          phone: '0249459388',
          pick_time: '2019-02-18 10:30:00',
          address_name: '53 Carba Road, Caroline SA, Australia',
          group_key: 'ei-ewir-ehi',
          latitude: -37.9883271,
          longitude: 140.87959669999998
        },
        {
          full_name: 'Dala Wekey', 
          email: 'Dala@gmail.com',
          phone: '0249146788',
          pick_time: '2019-02-18 10:30:00',
          group_key: 'ei-ewir-ehi',
          address_name: '27 Glen William Road, Clarence Town NSW, Comunidade da Austrália',
          latitude: -32.5783106,
          longitude: 151.77832139999998
        },
        {
          full_name: 'Josn Wekey', 
          email: 'Josn@gmail.com',
          phone: '0249789388',
          pick_time: '2019-02-18 10:30:00',
          group_key: 'ei-ewir-ehi',
          address_name: '53 Seiferts Rd, Bondoola QLD, Australia',
          latitude: -23.1720613,
          longitude: 150.67543279999995
        },
        {
          full_name: 'Micle Wekey', 
          email: 'Micle@gmail.com',
          phone: '0249459388',
          group_key: 'ei-ewir-ehi',
          pick_time: '2019-02-18 10:30:00',
          address_name: '33 McDowall Street, Mitcham VIC, Australia',
          latitude: -37.814794,
          longitude: 145.19513470000004
        },
      ]);
    });
};
