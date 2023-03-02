const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title:title,
    price:price,
    imageUrl:imageUrl,
    description:description
  }).then((res)=>{
    res.redirect("/")
    
  }).catch((err)=>console.log(err))
 
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findByPk(prodId).then((product) => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  Product.findByPk(prodId).then((product)=>{
    product.title=updatedTitle
    product.imageUrl=updatedImageUrl
    product.price=updatedPrice
    product.description=updatedDesc
     product.save()
  })
  .then(()=>{
    res.redirect('/admin/products');
  })
  .catch(()=>console.log("update product error"))
};

exports.getProducts = (req, res, next) => {
  Product.findAll().then((product)=>{
    res.render('admin/products', {
      prods: product,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(()=>[
    console.log("admin product error")
  ])
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId)
  .then((product)=>{
    return product.destroy()
  })
  .then(()=>{
    res.redirect("/admin/products")
  })
  .catch(()=>console.log("delete btn error..!"))

  
};