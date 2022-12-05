
const initialState = {
    tasks: []
}
interface IAction {
    type: string,
    payload: []
}
const ADD_TASKS = "ADD_TASKS"

export const tasksReducer = (state = initialState, action: IAction ) => {
    switch (action.type) {
        case ADD_TASKS:
            return {
                ...state, tasks: [...state.tasks, ...action.payload]
            }
        default:
            return state
    }
}

export const addTasks = (payload: []) => ({type: ADD_TASKS, payload})
