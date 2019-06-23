const express = require('express');
const router = express.Router();

router.get('/test/getProducts', require('./tests/products'));

router.get('/test/getBaskets', require('./tests/baskets'));

router.get('/test/chatRooms', require('./tests/chatRooms'));

module.exports = router;