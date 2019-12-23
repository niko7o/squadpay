/* eslint-disable no-undef */
require('dotenv').config({ debug: process.env.DEBUG });

const express = require('express');
const app = express();
const PORT = process.env.PORT;

const baseRoutes = require('./routes/base');
app.use('/', baseRoutes);

app.listen(PORT, (error) => {
    if (error) {
      return console.log('Trouble starting the server:', error)
    }
    console.log(`Listening on ${PORT}`)
});

module.exports = app;