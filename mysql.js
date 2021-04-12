const mysql = require('mysql');
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

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

app.get('/', function(req, res) {
  // about mysql
  con.query("SELECT * FROM vac_location", function(error, rows, fields) {
    //callback
    if (!error) {
      console.log('Error in the query');
    } else {
      console.log('Successful query');
      res.sendFile(path.join(__dirname + '/test.html'));
    }
  });
})
app.listen(1337);