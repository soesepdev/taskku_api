const express = require('express');
const router = express.Router();
const model  = require('../models/auth.model');

router.get('/login', async (req, res) => {
    let result = await model.login();
    res.send(result);
});

module.exports = router;