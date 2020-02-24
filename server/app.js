require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const PORT = process.env.PORT || 5000;
const app = express();

const rootRoutes = require('./routes/root');
const eventRoutes = require('./routes/event');
const userRoutes = require('./routes/user');

require('./configs/database');
require('./configs/passport');

// Session, cookie, passport handling
app.use(passport.initialize());
app.use(passport.session());
app.use(require('cookie-parser')());
app.use(require('express-session')({ 
  secret: process.env.EXPRESS_SESSION_SECRET, 
  resave: true, 
  saveUninitialized: true
}));

// req.body parser for POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', rootRoutes);
app.use('/users', userRoutes);
app.use('/events', eventRoutes);

app.listen(PORT, (error) => {
    if (error) {
      return console.log('Trouble starting the server:', error);
    };
    console.log(`Squadpay server listening on PORT ${PORT}`);
});

module.exports = app;