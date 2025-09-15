/* eslint-disable no-unused-vars */

export const initialState = {
    current: "",
    location:{
        country:"Country",
        city:"City"
    },
    hourly:[],
    week:[],
    user: {
        email: "",
        userName: "",
        password: "",
    },
    
    log_in : false,
    sign_up:false,
}


export const reducer = (state,action) =>{
    let {type,payload} = action;

    switch(type){
        case "current_temp" : return {...state,current:payload}
        case "location" : return {...state,location:payload}
        case "hourly" : return {...state,hourly:payload}
        case "week" : return {...state,week:payload}
        case "valid" : return {...state,valid:payload}
        case "log_in" : return {...state,log_in:payload}
        case "sign_up" : return {...state,sign_up:payload}

     default : return state
    }
    
}