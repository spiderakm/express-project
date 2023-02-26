const express = require('express');
const { dirname } = require('path');
const path = require('path');
const pathDir = require('../utlis/path')
const router = express.Router()


router.get('/',(req,res,next) => {
    res.sendFile(path.join(pathDir,'views','shop.html'))
})



module.exports = router