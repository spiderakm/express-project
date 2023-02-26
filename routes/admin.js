const express = require('express')
const router  = express.Router()
const contactController = require('../controller/contactus')
const submitController = require('../controller/contactus')


router.get('/contactus', contactController.fillContact)
  
router.post('/success',submitController.submitContact)


module.exports = router;