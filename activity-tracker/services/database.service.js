const mongoose = require('mongoose');
const config = require('../config/keys');

class DatabaseService {
  static async connect() {
    try {
      await mongoose.connect(config.mongoURI);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1);
    }
  }

  static async disconnect() {
    await mongoose.disconnect();
  }
}

module.exports = DatabaseService;