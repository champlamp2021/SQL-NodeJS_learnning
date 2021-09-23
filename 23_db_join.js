var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"mysql_db"
});
con.connect(function(err) {
    if (err) throw err;
    /*Connect two tables by using one field from each table as the connection point:*/
    var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
    con.query(sql, function (err, result) {
      if (err){ 
          throw err;
        }if(result){
             console.log(result);
        }
     
    });
  });
  