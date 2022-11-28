import mongoose from "mongoose";


const SubComment = new mongoose.Schema({
    text: {type: String, required: true},
    comment: {type: mongoose.Schema.Types.ObjectId, ref: "Comment", required: true },
})

export default mongoose.model("SubComment", SubComment)
