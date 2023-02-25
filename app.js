const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//middlewares
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="count"><button type="submit">Add Product</button></form>');
  });
  
app.post('/product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})


app.use('/',(req,res,next) => {
    res.send("<h1> hello ashok   </h1>")
})



app.listen(4000)