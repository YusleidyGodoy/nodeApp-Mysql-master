const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '206.189.181.49',
    user: 'root',
    password: 'Base010',
    database: 'SpotifyBD'
  });
}
