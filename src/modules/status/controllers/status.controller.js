const express = require('express');
const router = express.Router();
const model  = require('../models/status.model');

router.get('/', async (req, res) => {
    let result = await model.getStatus();
    if (result.length == 0) {
      return res.json({ message: 'Data not found!' });
    }
    res.send(result);
});

module.exports = router;