import mongoose from "mongoose";


const Comment  = new mongoose.Schema({
    text: {type: String, required: true},
    task: {type: mongoose.Schema.Types.ObjectId, ref: "Task", required: true },
})

export default mongoose.model("Comment", Comment)
