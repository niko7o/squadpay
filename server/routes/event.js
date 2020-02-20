const express = require('express');
const router = express.Router();

const eventController = require('../controllers/event');

router.post('/create', eventController.createEvent);
router.get('/', eventController.getAllEvents);

module.exports = router;