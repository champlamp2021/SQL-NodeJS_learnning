var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mySql_db"//database name
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*Create a table named "customers":*/
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err){ 
      throw err;
    }else if (result){
        console.log("Table created");
    }
  });
});
