import { productReducer } from './product/product.reducer'
import { combineReducers } from 'redux';
import { messageReducer } from './message/message.reducer'
let rootReducer = combineReducers({ product: productReducer, message: messageReducer });
export { rootReducer }