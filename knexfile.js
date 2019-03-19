require('dotenv').config();

module.exports = {
  development: {
    client : 'mssql',
    connection: {
      server : 'sitievisit.database.windows.net',
      user : 'alperendev',
      password : 'Barcelona2019',
      options: {
          port: 1433,
          database : 'sitevisit',
          encrypt: true
      }
    }
  },
  production: {
    client : 'mssql',
    connection: {
      server : 'sitievisit.database.windows.net',
      user : 'alperendev',
      password : 'Barcelona2019',
      options: {
          port: 1433,
          database : 'sitevisit',
          encrypt: true
      }
    }
  },
};