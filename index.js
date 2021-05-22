const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

// Connect To DB
mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MONGO CONNECTION SUCCESSFULLY !!!')
    })
    .catch((err) => {
        console.log('MONGO CONNECTION ERROR?')
        console.log(err)
    })

const Product = require('./models/products.js')


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/products', async(req, res) => {
    const products = await Product.find({});
    res.render('index', { products })
})


app.listen(3000, () => {
    console.log('App listening on port 3000!');
});