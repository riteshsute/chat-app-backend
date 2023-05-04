const path = require('path');

const express = require('express');

const ChatAppController = require('../controllers/signupController');

const router = express.Router();

router.post('/signup', ChatAppController.signUpUser);

router.post('/login', ChatAppController.loginUser);

module.exports = router;