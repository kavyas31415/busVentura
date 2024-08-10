const express = require('express');
const router = express.Router();
const HireRequest = require('../models/hire')
const Bus = require('../models/bus');

// Route to create a new hire request
router.post('/hire', async (req, res) => {
  try {
    const { size, amenities, customRoute, userDetails } = req.body;
    
    // Fetch buses that match the criteria
    const buses = await Bus.find({ busType: size, amenities: { $in: amenities } });

    // Create a new hire request
    const hireRequest = new HireRequest({ size, amenities, customRoute, userDetails });
    await hireRequest.save();

    res.json({ message: 'Hire request created successfully', buses });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
