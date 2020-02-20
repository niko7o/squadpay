const express = require('express');
const router = express.Router();

const eventController = require('../controllers/event');

router.get('/', eventController.getAllEvents);
router.get('/create', eventController.createEvent);


module.exports = router;