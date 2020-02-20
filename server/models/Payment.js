const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const PaymentSchema = new mongoose.Schema({
  fromUser: {
    type: ObjectId,
    required: 'User with session is required'
  },
  toUser: {
    type: ObjectId
  },
  event: {
    type: ObjectId,
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