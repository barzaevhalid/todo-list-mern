import Subtask from "../models/Subtask.js";
import Task from "../models/Task.js";
class SubTaskController {
    async getAllSubTasks(req, res) {
        try {
            const tasks = await Subtask.find()
            return res.json(tasks)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async createSubTask(req, res) {
        try {
            const {title, description, task} = req.body
            const subTask = await Subtask.create({
                title, description, task
            })

            return res.status(200).json({message: "Подзадача добавлена", subTask})
        }catch (e) {
            res.status(500).json(e)
        }
    }
    async getSubTask(req, res) {
        try {
            const {id} = req.params;
            const subTask = await Subtask.findById(id);
            res.status(200).json(subTask)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async updateSubTask(req, res) {
        try {
            const {id} = req.params;
            const subTask = req.body
            const updateSubTask = await Subtask.findByIdAndUpdate(id, subTask, {new: true})
            res.status(200).json({message: "Задача обновлена", updateSubTask})
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async deleteSubTask(req, res) {
        try {
            const {id} = req.params;
            const subTask = await  Subtask.findById(id)
            res.status(200).json({message: "Задача удалена", subTask})

             await Subtask.findByIdAndDelete(id)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default  new SubTaskController()
