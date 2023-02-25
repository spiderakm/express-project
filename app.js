const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const app = express();

//middlewares
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes)

//404 
app.use((req,res,next) => {
    res.status(404).send('<h1> 404 not found </h2>')
})


app.listen(4000)