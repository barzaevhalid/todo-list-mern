import Task from "../models/Task.js";
import fileService from "../files/fileService.js";
class TaskController {
    async getAllTasks(req, res) {
        try {
            const tasks = await Task.find()
            return res.json(tasks)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async createTask(req, res) {

        try {
            const {
            taskNumber,
            title,
            description,
            creationDate,
            workingTime,
            expirationDate,
            priority,
            currentStatus,
            completed
            } = req.body
            const fileName = await fileService.saveFile(req.files.attachedFiles)
            const task = await Task.create({
                completed,
                taskNumber,
                title,
                description,
                creationDate,
                workingTime,
                expirationDate,
                priority,
                attachedFiles: fileName,
                currentStatus,

            })
            return res.status(200).json({message: "Задача создана", task})
        } catch (e) {
            res.status(500).json(e)
        }
   }
   async getTask(req,res) {
        try {
            const {id} = req.params;
            const task = await Task.findById(id)
            if(!task) {
                return res.status(404).json({message: "Нет такой задачи"})
            }
            return  res.status(200).json(task)
        }catch (e) {
            res.status(500).json(e)
        }
   }
   async updateTask(req, res) {
        try {
            const {id} = req.params;
            const task = req.body

            const updatedTask = await Task.findByIdAndUpdate(id, task, {new: true})
            if(!updatedTask) {
                return res.status(404).json({message: "Нет такой задачи"})
            }
            return res.status(200).json(updatedTask)
        }catch (e) {
           res.status(500).json(e)
        }
   }
   async deleteTask(req, res) {
        try {
            const {id} = req.params
            const deletedTask = await Task.findByIdAndDelete(id)
            if(!deletedTask ) {
               return res.status(404).json({message: "Нет такой задачи"})
            }
            return res.status(200).json({message: "Задача удалена", deletedTask})
        }catch (e){
            res.status(500).json(e)
        }
   }
}
export default new TaskController()
