require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

// Database connection
const connectDB = require('./config/db') 
connectDB()

//Middleware
app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {
  res.send('Hello, welcome to the Online Tutor Booking API!')
})

// Routes
// Serve the tutorial form for testing/demo
const path = require('path')
app.get('/tutorial-form', (req, res) => {
  res.sendFile(path.join(__dirname, 'form/tutorialForm.html'))
})
// Tutorial routes
const tutorialRoutes = require('./routes/tutorial.routes')
app.use('/api/tutorials', tutorialRoutes)

// Firebase Admin routes
const firebaseApiAdmin = require('./routes/firebaseApiAdmin')
app.use('/api/users', firebaseApiAdmin)

// Booked routes
const bookedRoutes = require('./routes/booked.routes')
app.use('/api/booked', bookedRoutes)

//=================================
app.listen(port, () => {
  console.log(`Online Tutor Booking server is running on port${port}`)
})

//=================================
