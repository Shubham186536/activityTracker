const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 500
  },
  dayNumber: {
    type: Number,
    required: true,
    min: 1,
    max: 31,
    validate: {
      validator: Number.isInteger,
      message: "Day number must be an integer."
    }
  },
  isCompleted: {
    type: Boolean,
    default: false,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

activitySchema.index({ userId: 1 });
activitySchema.index({ dayNumber: 1 });

module.exports = mongoose.model('Activity', activitySchema);
