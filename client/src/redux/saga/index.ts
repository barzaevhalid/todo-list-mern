import {all} from "redux-saga/effects"
import {projectsWatcher, setProjectWatcher} from "./projectsSaga";
import {tasksWatcher} from "./tasksSaga";

export function* rootWatcher() {
    yield all([projectsWatcher(), tasksWatcher(), setProjectWatcher()])
}
