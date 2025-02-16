const AuthService = require('../services/auth.service');

class AuthController {
  static async register(req, res, next) {
    try {
      const token = await AuthService.registerUser(req.body);
      res.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const token = await AuthService.loginUser(req.body);
      res.json({ token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;