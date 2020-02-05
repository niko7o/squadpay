/* eslint-disable no-undef */
require('dotenv').config({ debug: process.env.DEBUG });

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const baseRoutes = require('./routes/base');
const eventRoutes = require('./routes/event');

require('./configs/database');

app.use('/', baseRoutes);
app.use('/event', eventRoutes);

app.listen(PORT, (error) => {
    if (error) {
      return console.log('Trouble starting the server:', error);
    }
    console.log(`# SquadPay Server Listening on PORT ${PORT}`)
});

module.exports = app;