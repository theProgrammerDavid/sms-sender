const express = require('express');
const router = express.Router();



// Create Endpoint
router.get('/', function(req, res){
    res.send('v1 route');
})
module.exports = router;