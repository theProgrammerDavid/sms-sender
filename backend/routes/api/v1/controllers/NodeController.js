const express = require('express');
const router = express.Router();



// Create Endpoint
router.get('/new', function(req, res){
    res.send('yes');
})
module.exports = router;