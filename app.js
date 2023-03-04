const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const product = require('./models/product')
const User = require('./models/user')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { use } = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next) => {
  User.findById(1)
  .then((user) => {
    req.user = user;
    next()
  }).catch((err) => console.log(err))
})


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

product.belongsTo(User,{ constraints:true,onDelete:'CASCADE'})
User.hasMany(product)



sequelize
  .sync()
  .then(result => {
    return User.findById(1);
    // console.log(result);
    
  })
  .then(user => {
    if(!user){
      user.create({ name:'Max',email:'test@gmail.com'})
    }
    return Promise.resolve(user)
  })
  .then(user => {
    console.log(user)
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
