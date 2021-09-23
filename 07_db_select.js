var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mysql_db"
});

con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err){ 
        throw err;
    }else if(result){
        console.log(result);
    }
   // console.log(fields);
  });
});
