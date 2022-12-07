export type projectType = {
    description: string
    title: string,
    __v: number,
    _id: string
}
export enum ProjectAsyncActions {
    ASYNC_ADD_PROJECTS = "ASYNC_ADD_PROJECTS",
    ASYNC_SET_PROJECT = "ASYNC_SET_PROJECT",
    ASYNC_REMOVE_PROJECT = "ASYNC_REMOVE_PROJECT",
    ASYNC_UPDATE_PROJECT = "ASYNC_UPDATE_PROJECT"
}
export enum ProjectActionTypes {
    PENDING = "PENDING",
    FULFILLED = "FULFILLED",
    REJECTED = "REJECTED",
    ADD_PROJECTS = "ADD_PROJECTS",
    ADD_PROJECT = "ADD_PROJECT",
    REMOVE_PROJECT = "REMOVE_PROJECT",
    UPDATE_PROJECT = "UPDATE_PROJECT"
}
interface IFetchProjectAction {
    type: ProjectActionTypes.PENDING,
}
interface IFetchProjectSuccessAction {
    type: ProjectActionTypes.FULFILLED,
}
interface IFetchProjectErrorAction {
    type: ProjectActionTypes.REJECTED,
    payload: string
}
interface  IAddProjects  {
    type: ProjectActionTypes.ADD_PROJECTS,
    payload: projectType[]
}
interface IAddProject {
    type: ProjectActionTypes.ADD_PROJECT,
    payload: projectType
}
interface IRemoveProject {
    type: ProjectActionTypes.REMOVE_PROJECT,
    payload: {
        message: string
        projects: projectType[]
    },
}
export type IProjectsActions =
    IAddProjects |
    IFetchProjectAction |
    IFetchProjectSuccessAction |
    IFetchProjectErrorAction |
    IAddProject |
    IRemoveProject
