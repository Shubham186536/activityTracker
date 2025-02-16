const Activity = require('../models/Activity');

class ActivityService {
  static async getUserActivities(userId) {
    return Activity.find({ userId });
  }

  static async getDailyPlan(userId, day) {
    return Activity.find({ userId, dayNumber: day });
  }

  static async completeActivity(activityId, userId) {
    const activity = await Activity.findOneAndUpdate(
      { _id: activityId, userId },
      { isCompleted: true },
      { new: true }
    );
    
    if (!activity) {
      throw new Error('Activity not found');
    }
    
    return activity;
  }

  static async createActivity(activityData) {
    return await Activity.create(activityData);
  }
}

module.exports = ActivityService;