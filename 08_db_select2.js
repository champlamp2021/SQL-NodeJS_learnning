var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mysql_db"
});

con.connect(function(err) {
    if (err) throw err;
    //Select only "name" and "address" from "customers":
    con.query("SELECT name, address FROM customers", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
  