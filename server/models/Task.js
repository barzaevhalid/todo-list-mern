import mongoose from "mongoose"

const Task = new mongoose.Schema({
    completed: {type: Boolean},
    taskNumber: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    creationDate: {type: String, required: true},
    workingTime:  {type: String, required: true},
    expirationDate: {type: String, required: true},
    priority: {type: String, required: true},
    attachedFiles: {type: String},
    currentStatus: {type: String, required: true},

})
export default mongoose.model("Task", Task)
