const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log("this always runs");
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log("In another middleware");
    res.send('<h1>The add product page</h1>');
});


app.use('/', (req, res, next) => {
    console.log("In another middleware");
    res.send('<h1>Hello from express</h1>');
});


app.listen(3000);