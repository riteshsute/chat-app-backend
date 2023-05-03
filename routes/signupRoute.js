const path = require('path');

const express = require('express');

const ChatAppController = require('../controllers/signupController');

const router = express.Router();

router.post('/ChatApp/signup', ChatAppController.signUpUser);

module.exports = router;