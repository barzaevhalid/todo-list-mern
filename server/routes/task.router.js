import Router from "express"
import TaskController from '../controllers/TaskController.js'
import currentIdMiddleware from "../middleware/currentIdMiddleware.js";
const router = Router()

router.get("/tasks", TaskController.getAllTasks)
router.get("/tasks/:id?",currentIdMiddleware, TaskController.getTask)
router.post("/tasks", TaskController.createTask)
router.patch("/tasks/:id?", currentIdMiddleware, TaskController.updateTask)
router.delete("/tasks/:id?", currentIdMiddleware, TaskController.deleteTask)

export default router;
