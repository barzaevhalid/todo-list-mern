import Router from 'express'
import taskRouter from "./task.router.js";
import commentRouter from "./comment.router.js";
import subTaskRouter from "./subTask.router.js";
import SubCommentRouter from "./subComment.router.js";
import projectRouter from "./project.router.js";
const router = Router()


router.use(taskRouter)
router.use(commentRouter)
router.use(subTaskRouter)
router.use(SubCommentRouter)
router.use(projectRouter)



export default router;
