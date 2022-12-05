import axios from 'axios'
interface IProjectsResponse {
    _id: string
    title: string
    description: string
    _v: number
}
export interface IProjectsBody {
    title: string
    description: string
}
interface IProjectBodyPatch {
    title?: string
    description?: string
}
export const getProjectsRequest = async (): Promise<IProjectsResponse> => {
    return  await axios.get(`http://localhost:5000/api/projects/`)
}
export const postProjectsRequest = async  ({title, description}:IProjectsBody): Promise<IProjectsResponse> => {
    return await axios.post(`http://localhost:5000/api/projects/`, {title, description})
}
export const patchProjectsRequest = async  (body: IProjectBodyPatch) => {
    return await axios.patch(`http://localhost:5000/api/projects/`)
}
export const deleteProjectsRequest = async  (id: string) => {
    return await axios.delete(`http://localhost:5000/api/projects/${id}`)
}
