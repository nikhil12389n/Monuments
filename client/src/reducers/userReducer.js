import {
  CHECK_USER_EXISTENCE_REQUEST,
  CHECK_USER_EXISTENCE_SUCCESS,
  CHECK_USER_EXISTENCE_FAILURE,
} from '../actions/userActions';

export const registerUserReducer=(state={},action)=>{
    switch(action.type){
        case 'USER_REGISTER_REQUEST' :return{
            loading:true
        }
        case 'USER_REGISTER_SUCCESS' :return{
            loading:false,
            success:true
        }
        case 'USER_REGISTER_FAILED' :return{
            loading:false,
            error:action.payload
        }
        default: return state
    }
}


export const loginUserReducer = (state = {}, action) => {
    switch (action.type) {
      case 'USER_LOGIN_REQUEST':
        return { loading: true }
      case 'USER_LOGIN_SUCCESS':
        return { loading: false,success:true, currentUser: action.payload }
      case 'USER_LOGIN_FAILED':
        return { loading: false, error: action.payload }
      
      default:
        return state;
    }
  };
  


// userReducer.js

const initialState = {
  loading: false,
  isUserExists: false,
  error: null,
};

export const alreadyUser = (state = initialState, action) => {
  switch (action.type) {
      case CHECK_USER_EXISTENCE_REQUEST:
          return {
              ...state,
              loading: true,
              error: null,
          };
      case CHECK_USER_EXISTENCE_SUCCESS:
          return {
              ...state,
              loading: false,
              isUserExists: action.payload,
          };
      case CHECK_USER_EXISTENCE_FAILURE:
          return {
              ...state,
              loading: false,
              error: action.payload,
          };
      default:
          return state;
  }
};

export const getAllUsersReducer=(state={users:[]},action)=>{
  switch(action.type){
      case 'GET_USERS_REQUEST' :return{
          
          ...state,
          loading:true
      }
      case 'GET_USERS_SUCCESS' :return{
          
          users:action.payload,
          loading:false
      }
      case 'GET_USERS_FAILED' :return{
         
          error:action.payload,
          loading:false
      }
      default: return state;

  }
}