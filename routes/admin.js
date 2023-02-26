const express = require('express')
const router  = express.Router()

const path = require('path')
const pathDir = require('../utlis/path')

router.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(pathDir,'views','contactus.html'))
});
  
router.post('/success',(req,res,next) => {
    console.log(req.body);
    res.send("Form successfuly filled")
    
})


module.exports = router;