var mysql = require('mysql');
var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "123456"
    });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  /*Create a database named "mySql_db3":*/
  con.query("CREATE DATABASE mySql_db3", function (err, result) {
    if (err){ 
      throw err;
    }else if(result){ 
      console.log("Database created");

    }
  });
});
