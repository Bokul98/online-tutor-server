const express = require('express')
const router = express.Router()

const Tutorial = require('../model/tutorial.model')
const auth = require('../middleware/auth')
// DELETE a tutorial by ID (public route)
router.delete('/:id', async (req, res) => {
  try {
    const tutorial = await Tutorial.findByIdAndDelete(req.params.id)
    if (!tutorial) return res.status(404).json({ error: 'Tutorial not found' })
    res.json({ message: 'Tutorial deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// UPDATE a tutorial by ID (public route)
router.put('/edit/:id', async (req, res) => {
  try {
    const updateFields = {}
    const allowedFields = ['image', 'language', 'price', 'description']
    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) updateFields[field] = req.body[field]
    })
    const tutorial = await Tutorial.findByIdAndUpdate(
      req.params.id,
      { $set: updateFields },
      { new: true }
    )
    if (!tutorial) return res.status(404).json({ error: 'Tutorial not found' })
    res.json(tutorial)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// GET tutorials for the authenticated user (private route)
router.get('/my-tutorials', auth, async (req, res) => {
  try {
    const userEmail = req.user.email
    const tutorials = await Tutorial.find({ email: userEmail })
    res.json(tutorials)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// GET all tutorials
router.get('/', async (req, res) => {
  try {
    const tutorials = await Tutorial.find()
    res.json(tutorials)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// POST a new tutorial
router.post('/', async (req, res) => {
  try {
    const { userName, email, image, language, price, description } = req.body
    const tutorial = new Tutorial({
      userName,
      email,
      image,
      language,
      price,
      description,
      review: 0
    })
    await tutorial.save()
    res.status(201).json(tutorial)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// GET tutor details by ID (public route)
router.get('/tutor-details/:id', async (req, res) => {
  try {
    const tutorial = await Tutorial.findById(req.params.id)
    if (!tutorial) return res.status(404).json({ error: 'Tutor not found' })
    res.json(tutorial)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// Increment review count for a tutorial (public route)
router.patch('/review/:id', async (req, res) => {
  try {
    const tutorial = await Tutorial.findByIdAndUpdate(
      req.params.id,
      { $inc: { review: 1 } },
      { new: true }
    );
    if (!tutorial) return res.status(404).json({ error: 'Tutorial not found' });
    res.json({ message: 'Review incremented', review: tutorial.review });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router
