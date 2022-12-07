import {put, takeEvery, call} from "redux-saga/effects"
import {
    addProject,
    addProjects,
    rejectedProjects, removeProject,
    requestProjectsPending,
    responseProjectsFulfilled
} from "../store/reducers/projectReducer";
import {deleteProjectsRequest, getProjectsRequest, postProjectsRequest} from "../../services/service";
import {ProjectAsyncActions} from "../types/projectTypes";

type payload = { payload: { title: string, description: string }, type: string }
type payloadId = {payload: {id: string}}

export function* projectsWorker() {

    try {
        yield put(requestProjectsPending(true))
        const {data} = yield call(() => getProjectsRequest())
        yield put(addProjects(data))
        yield put(responseProjectsFulfilled(false))
    } catch (e: any) {

        yield put(rejectedProjects(e.message))
    }
}
export function* projectsWatcher() {

    yield takeEvery(ProjectAsyncActions.ASYNC_ADD_PROJECTS,  projectsWorker)
}

function* setProjectWorker({payload}:payload) {
    try {
        yield put(requestProjectsPending(true))
        const {data} = yield call(() => postProjectsRequest(payload))
        yield put(addProject(data))
        yield put(requestProjectsPending(false))

    } catch (e:any) {
        yield put(rejectedProjects(e.message))
    }
}
export function* setProjectWatcher() {
    try {
        yield takeEvery(ProjectAsyncActions.ASYNC_SET_PROJECT, setProjectWorker)
    } catch (e: any) {
        yield put(rejectedProjects(e.message))
    }
}

function* removeProjectWorker(payload: { type: string, payload: string }) {
    try {
        yield put(requestProjectsPending(true))
        // @ts-ignore
        const {data} = yield call(() => deleteProjectsRequest(payload.payload))
        console.log(data.projects)

        yield put(removeProject(data))
        yield put(responseProjectsFulfilled(false))
    } catch (e: any) {
        yield put(rejectedProjects(e.message))
    }
}

export function* removeProjectWatcher() {
    try {
        yield takeEvery (ProjectAsyncActions.ASYNC_REMOVE_PROJECT, removeProjectWorker)
    } catch (e:any) {
        yield put(rejectedProjects(e.message))
    }
}
