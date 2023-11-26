const express = require('express');
const taskController = require('../controllers/taskController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

// router.use(authController.protect);

router.route('/').get(taskController.getAllTasks).post(
  // authController.restrictTo('lecturer', 'HoP'),
  // taskController.setProjectLecturer,
  taskController.createTask
);

router
  .route('/:id')
  .get(taskController.getTask)
  .patch(
    // authController.restrictTo('lecturer', 'HoP'),
    taskController.updateTask
  )
  .delete(
    // authController.restrictTo('lecturer', 'HoP'),
    taskController.deleteTask
  );

module.exports = router;
