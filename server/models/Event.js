const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Event name is required',
    unique: true
  }
}, { timestamps: true });

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;