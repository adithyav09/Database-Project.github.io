var mysql = require('mysql');
var express = require('express');
var app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "saybyesayhi123",
  database: 'VacationDB'
});

con.connect(function(err) {
    if (err) throw err;
      return console.log("Connected!");
});

app.get('/', function(req, resp) {
  // about mysql
  connection.query("SELECT * FROM vac_location", function(error, rows, fields) {
    //callback
    if (!!error) {
      console.log('Error in the quer');
    } else {
      console.log('Successful query');
    }
  });
})

app.listen(1337);