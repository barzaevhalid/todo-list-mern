import mongoose from "mongoose"

const Subtask = new mongoose.Schema({
    completed: {type: Boolean, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    task: {type: mongoose.Schema.Types.ObjectId, ref: "Task", required: true },
})
export default mongoose.model("Subtask", Subtask)
