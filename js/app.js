const mysql = require('mysql');
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

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
        // console.log(rows);
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


// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /booking gets urlencoded bodies
app.post('/booking', urlencodedParser, function(req, res) {
  //callback
  var sql = "INSERT INTO customer (FirstName, LastName, Age, PhoneNumber, City, State) VALUES (" + `'${req.body.fname}', '${req.body.lname}', '${req.body.age}', '${req.body.phone_number}', '${req.body.city}', '${req.body.state}');`
  
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    console.log(req.body);
  })
  console.log(req.bodyParser);
  // console.log(`'${req.body.fname}'`)
    // res.sendFile(path.join(__dirname, '../templates', 'booking.html'));
});







//Profile Page
app.get('/profile', function(req, res) {
  //callback
    console.log('Successful query');
    res.sendFile(path.join(__dirname, '../templates', 'profile.html'));
});





//Vacations Locations Page
app.get('/vacations', function(req, res) {
  //callback
    console.log('Successful query');
    res.sendFile(path.join(__dirname, '../templates', 'vacations.html'));
});


//404 Page
// app.get((req, res, next) => {
//   res.status(404).sendFile(path.join(__dirname, '../templates', '404.html'));
// });

app.listen(3001);