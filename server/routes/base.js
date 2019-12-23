const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.status(200).json({
        message: "✅ Health check ✅"
    });
});

router.get('/events', (req, res) => {
    console.log('Events');
    return res.status(200).json({
        "events": "1"
    })
})

module.exports = router;