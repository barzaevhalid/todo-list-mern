import SubComment from "../models/SubComment.js";

class SubCommentController {
    async getAllSubComments(req, res) {
        try {
            const comments = await SubComment.find();
            res.status(200).json(comments);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async createSubComments(req, res) {
        try {
            const {text, comment} = req.body
            const createdComment  = await SubComment.create({text, comment})
            res.status(200).json(createdComment)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}
export default  new SubCommentController()
