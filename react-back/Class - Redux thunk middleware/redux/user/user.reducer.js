import { LOADDATA_SUCCESS, LOAD_DATA } from './user.action'
let intialState = {
    users: []
};
//pure function, taking two parameter 
//1.initialstate, action
let userReducer = (state = intialState, action) => {
    //console.log(action);
    /* console.log(action.type) */
    console.log("In reducer ----")
    //console.log(action.payload)
    switch (action.type) {
        case LOAD_DATA:
            return { users: [] }
        case LOADDATA_SUCCESS:
            return { users: action.payload }
        default:
            return state;
    }
}

export { userReducer } 