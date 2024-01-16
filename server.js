// server.js
const express = require('express');
const db = require('./db.js'); // Adjust the path accordingly

const app = express();
const PORT = 9000;

// Use the database connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// ... your other Express.js setup

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
