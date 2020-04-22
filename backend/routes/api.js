const express = require('express');
const router = express.Router();


const v1Controller = require('./api/v1/v1');


// router.get('/',(req, res)=>{
//     res.send('api router');
// })

router.use('/v1', v1Controller);
module.exports = router;