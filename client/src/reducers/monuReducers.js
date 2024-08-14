export const getAllMonumentsReducer=(state={monuments:[]},action)=>{
    switch(action.type){
        case 'GET_MONUMENTS_REQUEST' :return{
            
            ...state,
            loading:true
        }
        case 'GET_MONUMENTS_SUCCESS' :return{
            
            monuments:action.payload,
            loading:false
        }
        case 'GET_MONUMENTS_FAILED' :return{
           
            error:action.payload,
            loading:false
        }
        default: return state;

    }
}


export const addMonumentReducer=(state={},action)=>{
    switch(action.type){
        case 'ADD_MONUMENT_REQUEST' :return{
           
            ...state,
            loading:true,
            success:false,
            error:null
            
        }
        case 'ADD_MONUMENT_SUCCESS' :return{
            
            ...state,
            loading:false,
            success:true
        }
        case 'ADD_MONUMENT_FAILED' :return{
           ...state,
            error:action.payload,
            loading:false
        }
        default: return state;

    }
}

export const getMonumentByIdReducer=(state={},action)=>{
    switch(action.type){
        case 'GET_MONUMENTBYID_REQUEST' :return{
            
            ...state,
            loading:true
        }
        case 'GET_MONUMENTBYID_SUCCESS' :return{
            
            monument:action.payload,
            loading:false
        }
        case 'GET_MONUMENTBYID_FAILED' :return{   
            error:action.payload,
            loading:false
        }
        default: return state;
    }
}

export const editMonumentReducer=(state={},action)=>{
    switch(action.type){
        case 'EDIT_MONUMENT_REQUEST' :return{
           
            ...state,
            eloading:true,
            esuccess:false,
            eerror:null
            
        }
        case 'EDIT_MONUMENT_SUCCESS' :return{
            
            ...state,
            eloading:false,
            esuccess:true
        }
        case 'EDIT_MONUMENT_FAILED' :return{
           ...state,
            eerror:action.payload,
            eloading:false
        }
        default: return state;

    }
}