// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/qr_app_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
