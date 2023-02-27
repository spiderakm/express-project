const { json } = require('body-parser');
const fs = require('fs')
const path = require('path')

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports = class Cart {
    static addProduct(id,prductPrice){
        fs.readFile(p,(err,fileContent) => {
            let cart = {prducts:[],totalprie:0}
            if(err){
                cart = JSON.parse(fileContent)
            }
            const existingProductIndex = cart.prducts.findIndex(prod => prod.id === id)
            const existingProduct = cart.prducts[existingProductIndex]
            if(existingProduct){
                let updatedProduct = {...existingProduct}
                updatedProduct.qty = updatedProduct.qty + 1
                cart.prducts = [...cart.prducts]
                cart.prducts[existingProductIndex] = updatedProduct
            }else{
                updatedProduct = {id: id,qty : 1}
            }
            cart.totalprie = cart.totalprie + +prductPrice  
            fs.writeFile(p, JSON.stringify(cart),err => {
                console.log(err)
            })
            // cart.prducts = [...cart.prducts,updatedProduct]

            
        })
    }



}