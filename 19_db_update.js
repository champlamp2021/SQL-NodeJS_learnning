var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mysql_db"
});

con.connect(function(err) {
  if (err) throw err;
  //Update the address field:
  var sql = "UPDATE customers SET address = 'nawdataupdate' WHERE address = 'nawdata'";
  con.query(sql, function (err, result) {
    if (err) {
        throw err;
    }else if(result){
        console.log(result.affectedRows + " record(s) updated");
    }
  });
});
