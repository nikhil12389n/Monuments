import axios from "axios"
export const registerUser=(user)=>async dispatch=>{
    dispatch({type:'USER_REGISTER_REQUEST'})
    try {
        const response=await axios.post('/api/users/register',user)
        dispatch({type:'USER_REGISTER_SUCCESS'})
        return { success: true };
    } catch (error) {
        dispatch({type:'USER_REGISTER_FAILED',payload:error})
        return { success: false };
    }
}




export const loginUser = (user) => async dispatch => {
  dispatch({ type: 'USER_LOGIN_REQUEST' })
  try {
    const response = await axios.post('/api/users/login', user)
    console.log(response)
    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data })
    // Optionally, you can save user data in localStorage or sessionStorage
    localStorage.setItem('currentUser', JSON.stringify(response.data));
    // window.location.href='/'
    return { success: true };
  } catch (error) {
    dispatch({ type: 'USER_LOGIN_FAILED', payload: error })
    return { success: false };
  }
};

export const logoutUser=()=>dispatch=>{
  localStorage.removeItem('currentUser')
  window.location.href='/login';
}


// userActions.js
export const CHECK_USER_EXISTENCE_REQUEST = 'CHECK_USER_EXISTENCE_REQUEST';
export const CHECK_USER_EXISTENCE_SUCCESS = 'CHECK_USER_EXISTENCE_SUCCESS';
export const CHECK_USER_EXISTENCE_FAILURE = 'CHECK_USER_EXISTENCE_FAILURE';

export const checkUserExistence = (email) => async (dispatch) => {
    dispatch({ type: CHECK_USER_EXISTENCE_REQUEST });
    try {
        // Make API call to check if user exists with the given email
        const response = await fetch(`/api/users/check?email=${email}`);
        const data = await response.json();
        if (response.ok) {
            dispatch({ type: CHECK_USER_EXISTENCE_SUCCESS, payload: data.exists });
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        dispatch({ type: CHECK_USER_EXISTENCE_FAILURE, payload: error.message });
    }
};

export const getAllUsers=()=>async (dispatch)=>{
  dispatch({type:'GET_USERS_REQUEST'})

  try {
      const response=await axios.get('/api/users/getallusers')
      console.log(response)
      dispatch({type:'GET_USERS_SUCCESS',payload:response.data})

  } catch (error) {
      dispatch({type:'GET_USERS_FAILED',payload:error})   
  }

}

export const deleteUser=(userid)=> async dispatch=>{
  try {
    await axios.post('/api/users/deleteuser',{userid})
    alert('User deleted successfully')
    window.location.reload()
  } catch (error) {
    alert('Something went wrong')
    
  }
}