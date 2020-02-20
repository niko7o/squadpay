const express = require('express');
const router = express.Router();

const eventController = require('../controllers/event');

router.post('/create', eventController.createEvent);
router.post('/edit/:id', eventController.editEvent);
router.post('/delete/:id', eventController.deleteEvent);
router.get('/', eventController.getAllEvents);

module.exports = router;