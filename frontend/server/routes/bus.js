const express = require('express');
const router = express.Router();
const Bus = require('../models/bus'); // Import the Bus model

// Route to get all buses
router.get('/buses', async (req, res) => {
  try {
    // Fetch all buses from the database
    const buses = await Bus.find();
    res.json(buses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
