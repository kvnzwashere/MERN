const express = require('express');

const app = express();
const productsRoutes = require('./src/routes/products');

productsRoutes.use((req, res, next) => {
    res.setHeader('accses-Control-Allow-Origin' , '*');
    res.setHeader('accses-Control-Allow-Methods' , 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('accses-Control-Allow-Origin' , 'Content-Type, Authorization');
    next();
})

app.use('/v1/customer' , productsRoutes);


app.listen(4000);