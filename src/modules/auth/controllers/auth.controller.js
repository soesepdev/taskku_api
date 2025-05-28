const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const model  = require('../models/auth.model');

router.post('/register', async (req, res) => {
    const { full_name, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);

    const user = await model.register({
        full_name,
        email,
        password: hashed,
    });

    res.status(201).json({
        id: user.id,
        full_name: user.full_name,
        email: user.email,
    });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await model.checkEmail(email);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET || 'secret',
        { expiresIn: '1d' }
    );

    const token_expired_at = new Date(Date.now() + 24 * 60 * 60 * 1000);

    const updatedUser = await model.updateLogin({
        id: user.id,
        token,
        token_expired_at
    });

    res.json({
        id: updatedUser.id,
        full_name: updatedUser.full_name,
        email: updatedUser.email,
        token: updatedUser.token,
        token_expired_at: updatedUser.token_expired_at,
        last_login: updatedUser.last_login
    });
});

module.exports = router;