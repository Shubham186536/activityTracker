const express = require('express');
const ActivityController = require('../controllers/activity.controller');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

router.post('/', authMiddleware, ActivityController.createActivity);
router.get('/', authMiddleware, ActivityController.getAllActivities);
router.get('/daily', authMiddleware, ActivityController.getDailyPlan);
router.put('/:id/complete', authMiddleware, ActivityController.completeActivity);

module.exports = router;

