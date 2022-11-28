import Router from "express"
import SubTaskController from '../controllers/SubTaskController.js'
import currentIdMiddleware from "../middleware/currentIdMiddleware.js";
const router = Router()

router.get("/subtasks", SubTaskController.getAllSubTasks)
router.get("/subtasks/:id?",currentIdMiddleware, SubTaskController.getSubTask)
router.post("/subtasks/", SubTaskController.createSubTask)
router.patch("/subtasks/:id?", currentIdMiddleware, SubTaskController.updateSubTask)
router.delete("/subtasks/:id?", currentIdMiddleware, SubTaskController.deleteSubTask)

export default router;
