const { Router } = require('express');
const router = Router();
const {
    postSendText,
    postSendImage,
    postSendContact
} = require('../controllers/Chat');

router.post('/text', postSendText);
router.post('/image', postSendImage);
router.post('/contact', postSendContact);

module.exports = router;