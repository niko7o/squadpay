/* eslint-disable no-undef */
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGO_DB_URI || 'mongodb://localhost:27017/squadpay';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
.then(() => {
    console.info('Connected to squadpay db')
}).catch(error => {
    console.error('Database connection error:', error);
});