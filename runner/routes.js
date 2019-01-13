const express = require('express');
const router = express.Router();

router.post('/addServerInfo', require('./entry/addServerInfo'));

router.get('/test/getProducts', require('./tests/products'));

router.get('/test/chatRooms', require('./tests/chatRooms'));

module.exports = router;