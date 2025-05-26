const express = require('express');
const router = express.Router();
const model  = require('../models/icon.model');

router.get('/', async (req, res) => {
    let result = await model.getIcons();
    res.send(result);
});

module.exports = router;