const express = require('express');
const router = express.Router();
const Booked = require('../model/booked.model');
const Tutorial = require('../model/tutorial.model');

// POST a new booking (public route)
router.post('/', async (req, res) => {
  try {
    const { userName, tutorId } = req.body;
    const booked = new Booked({ userName, tutorId });
    await booked.save();
    res.status(201).json(booked);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET all bookings with matched tutorial data (public route)
router.get('/', async (req, res) => {
  try {
    const bookings = await Booked.find();
    // For each booking, find the matching tutorial
    const results = await Promise.all(
      bookings.map(async (booking) => {
        const tutorial = await Tutorial.findById(booking.tutorId);
        if (tutorial) {
          return {
            ...booking.toObject(),
            tutorDetails: tutorial,
          };
        }
        return null;
      })
    );
    // Filter out nulls (where no matching tutorial found)
    res.json(results.filter((item) => item !== null));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
