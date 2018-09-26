var mysql = require('mysql');
var connection  = mysql.createConnection({
  host:'119.29.116.60',
  user:'bishe1',
  password:'bishe1',
  database:'bishe1'
})

connection.connect();
var sql = 'SELECT * FROM users';
var addsql = 'INSERT INTO users (id,name,password,registerDa) VALUE (5,"zoulin","123","2018-09-26")';
connection.query(sql, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
connection.end();