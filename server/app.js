/* eslint-disable no-undef */
require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const rootRoutes = require('./routes/root');
const eventRoutes = require('./routes/event');

require('./configs/database');

app.use('/', rootRoutes);
app.use('/events', eventRoutes);

app.listen(PORT, (error) => {
    if (error) {
      return console.log('Trouble starting the server:', error);
    }
    console.log(`Squadpay server listening on PORT ${PORT}`)
});

module.exports = app;