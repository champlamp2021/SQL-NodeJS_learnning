var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mysql_db"
});
con.connect(function(err) {
  if (err) throw err;
  //Delete all customers with the address "Mountain 21":
  var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
  con.query(sql, function (err, result) {
    if (err){
         throw err;
        }else if(result){
            console.log("Number of records deleted: " + result.affectedRows);
        }
  });
});
