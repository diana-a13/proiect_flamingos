var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "flamingos",
  password: "parolaflamingi",
  database: "FlamingoDB"
});

con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query("SELECT * FROM Transport", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});