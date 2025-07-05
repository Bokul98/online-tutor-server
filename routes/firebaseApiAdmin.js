const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

// Initialize Firebase Admin
const serviceAccount = require('../config/firebase-config.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

// Get all users
router.get('/', async (req, res) => {
  try {
    const result = await admin.auth().listUsers(1000);
    const users = result.users.map(user => ({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    }));
    res.status(200).json(users);
  } catch (error) {
    console.error('Error listing users:', error);
    res.status(500).json({ error: 'Failed to list users' });
  }
});

// Get a single user by UID
router.get('/:uid', async (req, res) => {
  try {
    const userRecord = await admin.auth().getUser(req.params.uid);
    res.status(200).json({
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      photoURL: userRecord.photoURL,
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(404).json({ error: 'User not found' });
  }
});

module.exports = router;
