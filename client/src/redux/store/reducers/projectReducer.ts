import {IProjectsBody} from "../../../services/service";
import {IProjectsActions, ProjectActionTypes, ProjectAsyncActions, projectType} from "../../types/projectTypes";
interface IProjectState  {
    projects: projectType[] | []
    loading: boolean
    error: string
    message: string
}
const initialState:IProjectState = {
    projects: [],
    loading: false,
    error: '',
    message: ''
}

export const projectReducer = (state = initialState, action:IProjectsActions) => {
    switch (action.type) {
        case ProjectActionTypes.ADD_PROJECTS:
            return {
                ...state, projects: [...action.payload]
            }
        case ProjectActionTypes.ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload]
            }
        case ProjectActionTypes.PENDING:
            return {
                ...state, loading: true
            }
        case ProjectActionTypes.FULFILLED:
            return {
                ...state, loading: false
            }
        case ProjectActionTypes.REJECTED:
            return {
                ...state, error: action.payload
            }
        case ProjectActionTypes.REMOVE_PROJECT:
            return {
                ...state,
                projects: [...action.payload.projects],
                message: action.payload.message

        }
        default:
            return state
    }
}
export const requestProjectsPending = (payload: boolean) => ({type: ProjectActionTypes.PENDING, payload});
export const responseProjectsFulfilled = (payload: boolean) => ({type: ProjectActionTypes.FULFILLED, payload});
export const rejectedProjects = (payload: string) => ({type: ProjectActionTypes.REJECTED, payload});
//add all projects
export const addProjects = (payload: number[]) => ({type: ProjectActionTypes.ADD_PROJECTS, payload});
export const asyncAddProjects = () => ({type: ProjectAsyncActions.ASYNC_ADD_PROJECTS});

//add 1 project
export const addProject = (payload:projectType) => ({type: ProjectActionTypes.ADD_PROJECT, payload})
export const asyncSetProjects = (payload: IProjectsBody) => ({type: ProjectAsyncActions.ASYNC_SET_PROJECT, payload })

//remove project
export const removeProject = (payload:{id: string}) => ({type: ProjectActionTypes.REMOVE_PROJECT, payload})
export const asyncRemoveProject = (payload:string) => ({ type: ProjectAsyncActions.ASYNC_REMOVE_PROJECT, payload})

//update project

export const updateProject = (payload: {id: string}) => ({type:ProjectActionTypes.UPDATE_PROJECT})
export const asyncUpdateProject = (payload:string) => ({type: ProjectAsyncActions.ASYNC_UPDATE_PROJECT})
