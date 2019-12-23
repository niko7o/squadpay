/* eslint-disable no-undef */
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGO_DB_URI;

mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.info('Connected to the DB')
}).catch(error => {
    console.error('Database connection error:', error);
});