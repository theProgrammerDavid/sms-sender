const express = require('express');
const router = express.Router();

const nodeController = require('./controllers/NodeController');

// Create Endpoint
router.use('/node', nodeController)
module.exports = router;