const { Router } = require('express');
const router = Router();
const {
    postSendText
} = require('../controllers/Chat');

router.post('/text', postSendText);

module.exports = router;