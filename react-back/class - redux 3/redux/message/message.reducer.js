import { GM, GN } from './message.action'
let intialState = {
    message: "Hello"
}
let messageReducer = (state = intialState, action) => {
    console.log(action);
    console.log(action.type)
    switch (action.type) {
        case GM:
            return { message: action.payload }
        case GN:
            return { message: "Good Night" }
        default:
            return state
    }
}

export { messageReducer }