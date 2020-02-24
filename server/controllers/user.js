const mongoose = require('mongoose');
const User = require('../models/User');

module.exports.createUser = (req, res, next) => {
  const userEmail = req.body.email;
  const userPass = req.body.password;

  User.findOne({ email: userEmail })
    .then(user => {
      if (user) {
        res.status(400).json({
          data: `${userEmail} already registered`
        });
      } else {
        user = new User({
          email: userEmail,
          password: userPass
        });
        return user.save();
      }
    }).then(() => {
      res.status(201).json({
        data: `${userEmail} signed up successfully`
      })
    }).catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(400).json({
          errors: error.errors,
        });
      } else {
        next(error);
      }
    })
};

module.exports.getAllUsers = (req, res, next) => {
  User.find({}).then(users => {
    res.json({
      users: users
    })
  }).catch(error => {
    next(error);
  })
};