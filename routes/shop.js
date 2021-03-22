const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products
   res.render('shop', {prods: products, docTitle: 'Vacay GetAway Home'});
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // // '../util/path/views/shop.html'
});

module.exports = router;