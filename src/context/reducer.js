/* eslint-disable no-unused-vars */


export const initialState = {
    current: "",
    condition:{
        icon:"",
        text:""
    },
    location:{
        country:"Country",
        name:"City",  
    },
    feedback:"",
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
        case "location" : return {...state,location:{
            ...state.location,
            country:payload.country,
            name:payload.name,
     
        }}
        case "condition" : return {...state,
            condition: {
                ...state.condition,
                text:payload.text,
                icon:payload.icon,
            }
        }
        case "feedback" : return {...state,feedback:payload}
        case "hourly" : return {...state,hourly:payload}
        case "week" : return {...state,week:payload}
        case "valid" : return {...state,valid:payload}
        case "log_in" : return {...state,log_in:payload}
        case "sign_up" : return {...state,sign_up:payload}

     default : return state
    }
    
}