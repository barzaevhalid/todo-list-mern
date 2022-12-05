import {IProjectsBody} from "../../../services/service";

const initialState = {
    projects: [],
    loading: false,
    error: null
}
export const ASYNC_ADD_PROJECTS = "ASYNC_ADD_PROJECTS";
export const ASYNC_SET_PROJECT = "ASYNC_SET_PROJECT"

enum ProjectActionTypes {
    PENDING = "PENDING",
    FULFILLED = "FULFILLED",
    REJECTED = "REJECTED",
    ADD_PROJECTS ="ADD_PROJECTS"
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
    payload: [{
        description: string
        title: string,
        __v: number,
        _id: string
    }]
}
export type IProjectsActions = IAddProjects | IFetchProjectAction | IFetchProjectSuccessAction | IFetchProjectErrorAction

export const projectReducer = (state = initialState, action:IProjectsActions) => {
    switch (action.type) {
        case ProjectActionTypes.ADD_PROJECTS:
            return {
                ...state, projects: [...action.payload]
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
        default:
            return state
    }
}
export const requestProjectsPending = (payload: boolean) => ({type: ProjectActionTypes.PENDING, payload});
export const responseProjectsFulfilled = (payload: boolean) => ({type: ProjectActionTypes.FULFILLED, payload});
export const rejectedProjects = (payload: string) => ({type: ProjectActionTypes.REJECTED, payload});

export const addProjects = (payload: number[]) => ({type: ProjectActionTypes.ADD_PROJECTS, payload});
export const asyncAddProjects = () => ({type: ASYNC_ADD_PROJECTS});

export const asyncSetProjects = (payload: IProjectsBody) => ({type:ASYNC_SET_PROJECT, payload })
