const express = require('express');
const router = express.Router();

const eventController = require('../controllers/event');

router.post('/create', eventController.createEvent);
router.post('/edit', eventController.editEvent);
router.get('/', eventController.getAllEvents);

module.exports = router;