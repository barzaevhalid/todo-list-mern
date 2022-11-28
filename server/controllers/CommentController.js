import Comment from "../models/Comment.js";


class CommentController {
    async getComments(req, res) {
       try {
           const comment = await Comment.find();
           res.status(200).json(comment)
       } catch (e) {
           res.status(500).json(e);
       }
    }
    async createComment(req, res) {
        try {
            const {text, task} = req.body
            const createdComment = await Comment.create({text, task})
            res.status(200).json(createdComment)
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async deleteComment(req, res) {
        try {
            const {id} = req.params
            await Comment.findByIdAndDelete(id)
            const comments = await Comment.find();
            res.status(200).json(comments)
        } catch (e){
            res.status(500).json(e);
        }
    }
}
export default  new CommentController()
