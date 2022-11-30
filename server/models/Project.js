import mongoose from "mongoose";


const Project  = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true}
})

export default mongoose.model("Project", Project)
