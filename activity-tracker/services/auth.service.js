const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/keys');
const User = require('../models/User');

class AuthService {
  static async registerUser(userData) {
    const { email, password, name } = userData;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('Email already registered');
    }

    const user = new User({ email, password, name });
    await user.save();
    
    return this.generateToken(user._id);
  }

  static async loginUser(credentials) {
    const { email, password } = credentials;
    
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid credentials');
    }
    
    return this.generateToken(user._id);
  }

  static generateToken(userId) {
    return jwt.sign({ userId }, config.jwtSecret, { expiresIn: '24h' });
  }

  static verifyToken(token) {
    return jwt.verify(token, config.jwtSecret);
  }
}

module.exports = AuthService;