const express = require('express');
const router = express.Router();
const model  = require('../models/log.model');

router.get('/', async (req, res) => {
    let result = await model.getLogs();
    res.send(result);
});

module.exports = router;