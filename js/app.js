const mysql = require('mysql');
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "saybyesayhi123",
  database: 'vacationdb'
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM vacationdb.customer;", function(error, rows, fields) {
        if (err) throw err;
        console.log(rows);
        return console.log("Connected to Vacation Database!");
});


app.use('/static', express.static('public'));

//Home Page
app.get('/', function(req, res) {
    //callback
    if (err) {
      console.log('Error in the query');
    } else {
      console.log('Successful query');
      res.sendFile(path.join(__dirname, '../', 'index.html'));
    }
  });
})

//Booking Page
app.get('/booking', function(req, res) {
  //callback
    console.log('Successful query');
    res.sendFile(path.join(__dirname, '../templates', 'booking.html'));
});

// //404 Page
// app.use((req, res, next) => {
//   res.status(404).sendFile(path.join(__dirname, '../templates', '404.html'));
// });

app.listen(3000);