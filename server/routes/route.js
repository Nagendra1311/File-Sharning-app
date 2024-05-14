const express = require('express');
const { uploadImage, downloadImage } = require('../constrollers/image.controller');
const upload = require('../middleware/upload.middleware');

const router = express.Router();


router.post('/upload', upload.single('file'), uploadImage)

router.get('/file/:id', downloadImage)


module.exports = router;
