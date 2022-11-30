import Router from "express";
import ProjectController from '../controllers/ProrjectContorller.js'
import CurrentIdMiddleware from "../middleware/currentIdMiddleware.js";
const router  = Router()



router.get("/projects", ProjectController.getProjects)
router.post("/projects", ProjectController.createProject)
router.patch("/projects/:id", CurrentIdMiddleware, ProjectController.updateProject)
router.delete("/projects/:id", CurrentIdMiddleware, ProjectController.deleteProject)

export default router
