const path = require('path');

const express = require('express');

const ChatMessageController = require('../controllers/chatMessages');

const router = express.Router();

router.post('/sendMessage', ChatMessageController.dbMessages);

module.exports = router;