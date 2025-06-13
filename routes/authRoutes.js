// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.get('/check-auth', authController.checkAuth);
router.post('/logout', authController.logout);

module.exports = router;
