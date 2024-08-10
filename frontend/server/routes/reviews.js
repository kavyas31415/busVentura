const express = require('express');
const router = express.Router();
const Review = require('../models/reviews');

// Route to get all reviews
router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new review
router.post('/reviews', async (req, res) => {
  const review = new Review({
    user: req.body.user,
    review: req.body.review,
    stars: req.body.stars
  });

  try {
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/reviews/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Review.findByIdAndDelete(id);
    res.status(204).send(); // No content response
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
