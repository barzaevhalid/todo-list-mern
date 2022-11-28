import Router from "express"
import currentIdMiddleware from "../middleware/currentIdMiddleware.js";
import CommentController from "../controllers/CommentController.js"
const router = Router()

router.get("/comments", CommentController.getComments)
router.post("/comments", CommentController.createComment )
router.delete("/comments/:id", currentIdMiddleware, CommentController.deleteComment)

export default router;
