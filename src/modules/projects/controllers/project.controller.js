const express = require('express');
const router = express.Router();
const model  = require('../models/project.model');

router.get('/', async (req, res) => {
    let result = await model.getProjects();
    res.send(result);
});

module.exports = router;