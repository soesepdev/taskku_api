const express = require('express');
const router = express.Router();
const model  = require('../models/label.model');

router.get('/', async (req, res) => {
    let result = await model.getLabels();
    res.send(result);
});

module.exports = router;