var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"mysql_db"
});
con.connect(function(err){
    if(err)throw err;
    //Return 5 customers, starting from position 2:
    con.query("SELECT * FROM customers Limit 2,5",function(err,result){
        if(err){
            throw err;
        }else if(result){
            console.log(result);
        }
    })
})