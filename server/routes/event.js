const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event');

router.get('/', (request, response) => {
    response.status(200).json({
        message: '✅ Health check ✅'
    });
});

router.get('/create', eventController.createEvent);

module.exports = router;