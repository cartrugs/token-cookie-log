// routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const { loginUser, profilePage, logoutUser, renewToken } = require('../controllers/controller')

router.post('/login', loginUser);
router.get('/profile', profilePage);
router.get('/logout', logoutUser);
router.get('/renew-token', renewToken);

module.exports = router;
