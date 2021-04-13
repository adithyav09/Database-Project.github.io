const mysql = require('mysql');
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Duluth.11173",
  database: 'vacationdb'
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM vacationdb.customer;", function(error, rows, fields) {
        if (err) throw err;
        console.log(rows);
        return console.log("Connected to Vacation Database!");
});



app.get('/', function(req, res) {
    //callback
    if (err) {
      console.log('Error in the query');
    } else {
      console.log('Successful query');
      app.use('/static', express.static('public'));
      res.sendFile(path.join(__dirname, '../', 'index.html'));
    }
  });
})
app.listen(3000);