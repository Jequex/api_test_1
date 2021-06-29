const express = require('express');
const Users = require('../models/Users');


const router = express.Router();

router.get('/', async (req, res) => {
    const data = await Users.find();
    res.json(data)
});

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    const newUser = new Users({ username, password });
    const user = await newUser.save();
    res.status(200).send({
        message: "user created",
        user: user,
        done: "done"
    });
});

module.exports = router;