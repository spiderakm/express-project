const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const app = express();
const path = require('path')
//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))


app.use('/admin',adminRoutes);
app.use(shopRoutes)

//404 
app.use((req,res,next) => {
    res.sendFile(path.join(__dirname,'views','404.html'))
})


app.listen(4000)