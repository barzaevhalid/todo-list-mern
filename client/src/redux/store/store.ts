import {createStore, combineReducers, applyMiddleware} from "redux";
import {projectReducer} from "./reducers/projectReducer";
import {tasksReducer} from "./reducers/tasksReducer";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";
const sagaMiddleware  = createSagaMiddleware()
const rootReducer = combineReducers({
    projects: projectReducer,
    tasks: tasksReducer,
})
export const store = createStore(rootReducer,  applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootWatcher)
