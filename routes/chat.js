const { Router } = require('express');
const router = Router();
const {
    postSendText, 
    postSendImage, 
    postSendFile, 
    postSendVoice, 
    postSendVideo, 
    postSendLocation, 
    postSendContact, 
    postSendContactList
} = require('../controllers/Chat');

router.post('/text', postSendText);
router.post('/image', postSendImage);
router.post('/file', postSendFile);
router.post('/voice', postSendVoice);
router.post('/video', postSendVideo);
router.post('/location', postSendLocation);
router.post('/contact', postSendContact);
router.post('/contact_list', postSendContactList);

module.exports = router;