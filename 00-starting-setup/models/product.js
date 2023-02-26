const products = []
const path = require('path')
const fs = require('fs')
const { json } = require('body-parser')
module.exports = class Product {
    constructor(title){
        this.title = title
    }


    save(){
        const p = path.join(path.dirname(process.mainModule.filename),
        'data',
        'products.json'
        );
        fs.readFile(p,(err,data) => {
            let products = [];
            if(!err){
                products = JSON.parse(data)
            }
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),(err) => {
                console.log(err)
            })
        });
    }

    static fetchAll(cb){
        const p = path.join(path.dirname(process.mainModule.filename),
        'data',
        'products.json'
        );
        fs.readFile(p,(err,data) => {
            if(!err){
                cb([])
            }
             cb(JSON.parse(data))
    })
}

}
