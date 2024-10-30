const express = require('express');
const { getUserById, getUserByUsernameAndPassword } = require('../SQL/dbController');

const router = express.Router();

// GET user by username and password for login check
router.post('/user/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await getUserByUsernameAndPassword(username, password);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve user' });
    }
});

// GET user by ID
router.get('/user/:id', async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve user' });
    }
});

module.exports = router;