const express = require('express');
const router = express.Router();
const model  = require('../models/user.model');

router.get('/', async (req, res) => {
    let result = await model.getUsers();
    res.send(result);
});

module.exports = router;