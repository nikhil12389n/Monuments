import axios from 'axios' 

export const getAllMonuments=()=>async (dispatch)=>{
    dispatch({type:'GET_MONUMENTS_REQUEST'})

    try {
        const response=await axios.get('/api/monuments/getallmonuments')
        console.log(response)
        dispatch({type:'GET_MONUMENTS_SUCCESS',payload:response.data})

    } catch (error) {
        dispatch({type:'GET_MONUMENTS_FAILED',payload:error})   
    }

}

export const addMonument=(monument)=>async dispatch=>{
    dispatch({type:'ADD_MONUMENT_REQUEST'})
    try {
        const res=await axios.post('/api/monuments/addmonument',{monument})
        console.log(res)
        dispatch({type:'ADD_MONUMENT_SUCCESS'})
    } catch (error) {
        dispatch({type:'ADD_MONUMENT_FAILED',payload:error})
    }
}


export const editMonument=(upmonument)=>async dispatch=>{
    dispatch({type:'EDIT_MONUMENT_REQUEST'})
    try {
        const res=await axios.post('/api/monuments/editmonument',{upmonument})
        console.log(res)
        dispatch({type:'EDIT_MONUMENT_SUCCESS'})
        window.location.href='/admin/monumentlist'
    } catch (error) {
        dispatch({type:'EDIT_MONUMENT_FAILED',payload:error})
    }
}


export const getMonumentById=(monumentid)=>async (dispatch)=>{
    dispatch({type:'GET_MONUMENTBYID_REQUEST'})

    try {
        const response=await axios.post('/api/monuments/getmonumentbyid',{monumentid})
        console.log(response)
        dispatch({type:'GET_MONUMENTBYID_SUCCESS',payload:response.data})

    } catch (error) {
        dispatch({type:'GET_MONUMENTBYID_FAILED',payload:error})   
    }

}
export const deleteMonument=(monumentid)=>async dispatch=>{
    try {
        const res=await axios.post('/api/monuments/deletemonument',{monumentid})
        alert('Monument Deleted Successfully')
        console.log(res);
        window.location.reload()
    } catch (error) {
        alert('Monument Deleted Successfully')
        console.log(error)
    }
}