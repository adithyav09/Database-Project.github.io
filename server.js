const express = require('express');

const app = express();

//Routes Admin and Shop
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);