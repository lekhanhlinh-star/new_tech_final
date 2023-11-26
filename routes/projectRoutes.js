const express = require('express');
const projectController = require('../controllers/projectController');
const authController = require('../controllers/authController');
const taskRouter = require('./../routes/taskRoutes');

const router = express.Router({ mergeParams: true });

// router.param('id', tourController.checkID);

// POST /tour/234fad4/reviews
// GET /tour/234fad4/reviews

router.use('/:projectId/tasks', taskRouter);

router.route('/').get(projectController.getAllProjects).post(
  // authController.protect,
  // authController.restrictTo('lecturer', 'HoP'),
  // projectController.setMajortLecturer,
  projectController.createProject
);

router
  .route('/:id')
  .get(projectController.getProject)
  .patch(
    // authController.protect,
    // authController.restrictTo('lecturer', 'HoP'),
    projectController.updateProject
  )
  .delete(
    // authController.protect,
    // authController.restrictTo('lecturer', 'HoP'),
    projectController.deleteProject
  );

module.exports = router;
