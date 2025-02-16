module.exports = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017',
    jwtSecret: process.env.JWT_SECRET || 'prodigy_$K9x#mP2^vL5nQ8*rY3jW7',
    env: process.env.NODE_ENV || 'development'
  };