const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const user = await User.createUser(username, email, password);
    const token = jwt.sign({ id: user.id }, "token-secret", { expiresIn: '1h' });
    return res.send({ message: "User Created Successfully", token: token, user: user.rows[0] })
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    let user = await User.findUserByEmail(email);
    user = user.rows[0]
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, "token-secret", { expiresIn: '1h' });
    return res.send({ token, user });
});

module.exports = router;
