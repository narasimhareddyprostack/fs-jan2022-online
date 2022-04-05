import { combineReducers } from 'redux'
import { userReducer } from './user/user.reducer'
let rootReducer = combineReducers({ users: userReducer });
export { rootReducer }