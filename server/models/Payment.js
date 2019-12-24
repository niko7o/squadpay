const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const PaymentSchema = new mongoose.Schema({
  from: {
    type: ObjectId
  },
  to: {
    type: ObjectId
  },
  amount: {
    type: Number,
    required: 'Amount is required',
    min: 1
  },
  date: {
    type: Date,
    default: Date.now
  },
  paid: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
});

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;