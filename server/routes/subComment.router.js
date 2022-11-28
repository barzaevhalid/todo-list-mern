import Router from 'express'
import SubCommentController from "../controllers/SubCommentController.js";
const router = Router()

router.get("/subcomments", SubCommentController.getAllSubComments )
router.post("/subcomments", SubCommentController.createSubComments)


export default router
