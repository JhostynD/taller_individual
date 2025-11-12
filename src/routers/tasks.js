import { Router } from 'express';
import {
  createTask,
  getTasks,
  getTaskById,
  getTasksByUser,
  updateTask,
  deleteTask
} from '../controller/taks.Controller.js';

const router = Router();

// Rutas para
router.post('/tasks', createTask);
router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskById);
router.get('/tasks/user/:userId', getTasksByUser);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;
