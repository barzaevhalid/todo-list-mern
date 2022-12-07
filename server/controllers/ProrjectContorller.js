import Project from "../models/Project.js";


class ProjectController  {
    async getProjects(req, res) {
        try {
            const projects = await Project.find()
            res.status(200).json(projects)
        } catch (e) {
            res.status(500).json(e)
        }
    }
   async createProject(req, res) {
        try {
            const {title, description} = req.body
            const projectCreated = await Project.create({
                title, description
            })
             res.status(201).json(projectCreated)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async deleteProject(req, res) {
        try {
            const {id} = req.params
            const deletedProject =  await  Project.findByIdAndDelete(id)
            if(!deletedProject) {
                return res.status(404).json({message: "Нет такого проекта"})
            }
            const projects = await  Project.find()
            return res.status(200).json({message: "Проект удален",projects})
        } catch (e) {
            res.status(500).json(e)
        }
    }
   async updateProject(req, res) {
        try {
            const {id} = req.params
            const updateProject =  await  Project.findByIdAndDelete(id)
            if(!updateProject) {
                return res.status(404).json({message: "Нет такого проекта"})
            }
            const project = req.body
            const newProject = await Project.findByIdAndUpdate(id, project, {new: true})
            res.status(201).json(newProject)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}
export default  new ProjectController()
