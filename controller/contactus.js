const path = require('path')
const pathDir = require('../utlis/path')


exports.fillContact = (req, res, next) => {
    res.sendFile(path.join(pathDir,'views','contactus.html'))
};


exports.submitContact = (req,res,next) => {
    console.log(req.body);
    res.send("Form successfuly filled")
    
};