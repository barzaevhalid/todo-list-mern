import {put, takeEvery, call} from "redux-saga/effects"
import {
    addProjects,
    ASYNC_ADD_PROJECTS, ASYNC_SET_PROJECT,
    rejectedProjects,
    requestProjectsPending,
    responseProjectsFulfilled
} from "../store/reducers/projectReducer";
import {getProjectsRequest, postProjectsRequest} from "../../services/service";

type payload = { payload: { title: string, description: string }, type: string }

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

    yield takeEvery(ASYNC_ADD_PROJECTS,  projectsWorker)
}

function* setProjectWorker({payload}:payload) {
    try {
        yield put(requestProjectsPending(true))
        const {data} = yield call(() => postProjectsRequest(payload))
        console.log(data, 'data')

        yield put(addProjects(data))
        yield put(requestProjectsPending(false))

    } catch (e:any) {
        yield put(rejectedProjects(e.message))
    }
}
export function* setProjectWatcher() {
    try {
        yield takeEvery(ASYNC_SET_PROJECT, setProjectWorker)
    } catch (e: any) {
        yield put(rejectedProjects(e.message))
    }
}
