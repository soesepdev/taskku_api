const express = require('express');
const router = express.Router();
const model = require('../models/user.model');

router.get('/', async (req, res) => {
  try {
    const users = await model.getUsers();
    if (result.length == 0) {
      return res.json({ message: 'Data not found!' });
    }
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users' });
  }
});

module.exports = router;