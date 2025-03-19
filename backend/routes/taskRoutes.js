const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// 📌 Route pour insérer les tâches dans MongoDB
router.post('/seed', taskController.seedDatabase);
router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTaskById);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;