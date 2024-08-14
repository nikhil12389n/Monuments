import {combineReducers} from 'redux';
import { createStore,applyMiddleware,compose } from 'redux';
import {thunk} from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import { getAllMonumentsReducer } from './reducers/monuReducers';
import { cartReducer } from './reducers/cartReducer';
import { registerUserReducer } from './reducers/userReducer';
import { loginUserReducer,getAllUsersReducer } from './reducers/userReducer';
import {alreadyUser} from './reducers/userReducer'
import { addMonumentReducer ,editMonumentReducer} from './reducers/monuReducers';
import { getMonumentByIdReducer } from './reducers/monuReducers';
const currentUser=localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')):null
const finalReducer=combineReducers({
    getAllMonumentsReducer:getAllMonumentsReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    alreadyUser:alreadyUser,
    addMonumentReducer:addMonumentReducer,
    getMonumentByIdReducer:getMonumentByIdReducer,
    editMonumentReducer:editMonumentReducer,
    getAllUsersReducer:getAllUsersReducer
})

const cartItems=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]

const initialState={
   cartReducer: {
    cartItems:cartItems,
   },
   loginUserReducer:{
    currentUser:currentUser
   }
}

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// composeWithDevTools({})
const middleware=[thunk];
const store=createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(...middleware)))

export default store