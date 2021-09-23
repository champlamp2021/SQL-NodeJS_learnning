var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mydql_db"
});


con.connect(function(err) {
  if (err) throw err;
  //Delete the "customers" table:
  var sql = "DROP TABLE customers";
  con.query(sql, function (err, result) {
    if (err) {
        throw err;
    }else if(result){
        console.log("Table deleted");
        
    }
  });
});
