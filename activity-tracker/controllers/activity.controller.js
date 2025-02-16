const ActivityService = require("../services/activity.service");

class ActivityController {
  static async getAllActivities(req, res, next) {
    try {
      const activities = await ActivityService.getUserActivities(
        req.user.userId
      );
      httpResponseSuccessHandler(res, 200, "Success", activities);
    } catch (error) {
      next(error);
    }
  }

  static async getDailyPlan(req, res, next) {
    try {
      const day = parseInt(req.query.day) || new Date().getDate();
      const activities = await ActivityService.getDailyPlan(
        req.user.userId,
        day
      );
      httpResponseSuccessHandler(res, 200, "Success", activities);
    } catch (error) {
      next(error);
    }
  }

  static async completeActivity(req, res, next) {
    try {
      const activity = await ActivityService.completeActivity(
        req.params.id,
        req.user.userId
      );
      httpResponseSuccessHandler(res, 200, "Success", activity);
    } catch (error) {
      next(error);
    }
  }

  static async createActivity(req, res, next) {
    try {
      const { title, description, dayNumber } = req.body;

      const activity = await ActivityService.createActivity({
        title,
        description,
        dayNumber,
        userId: req.user.userId,
      });

      httpResponseSuccessHandler(
        res,
        201,
        "Activity Created Successfully",
        activity
      );
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ActivityController;
