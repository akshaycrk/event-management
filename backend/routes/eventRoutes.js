const express = require('express');
const router = express.Router();
const Event = require('../models/eventModel');

router.post('/create', async (req, res) => {
    const { name, date, location, description } = req.body;
    const newEvent = new Event({ name, date, location, description });
    try {
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
