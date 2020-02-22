const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Event = require('./Event');
const User = require('./User');

const PaymentSchema = new mongoose.Schema({
  fromUser: {
    type: ObjectId,
    ref: User,
    required: 'Originating user required'
  },
  toUser: {
    type: ObjectId,
    ref: User,
    required: 'Destination user required'
  },
  event: {
    type: ObjectId,
    ref: Event,
    required: 'Specify an event for these payments'
  },
  amountPaid: {
    type: Number,
    required: 'Amount is required',
    min: 1
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
}, { timestamps: true });

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;