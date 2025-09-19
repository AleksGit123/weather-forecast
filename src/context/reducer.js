/* eslint-disable no-unused-vars */

export const initialState = {
    // weather items
    current: "",
    condition:{
        icon:"",
        text:""
    },
    location:{
        country:"Country",
        name:"City",  
    },
    hourly:[],
    week:[],
    
    // registration items  
    log_in : false,
    sign_up:false,

    //feedback 
    feedback:"",

    // dark mode items
    darkMode: false,
}

export const reducer = (state,action) =>{
    let {type,payload} = action;

    switch(type){
        case "current_temp" : return {...state,current:payload}
        case "condition" : return {...state,
            condition: {
                ...state.condition,
                text:payload.text,
                icon:payload.icon,
            }
        }
        case "location" : return {...state,location:{
            ...state.location,
            country:payload.country,
            name:payload.name,
     
        }}
        case "hourly" : return {...state,hourly:payload}
        case "week" : return {...state,week:payload}
        case "log_in" : return {...state,log_in:payload}
        case "sign_up" : return {...state,sign_up:payload}
        case "feedback" : return {...state,feedback:payload}
        case "darkMode"  : return {...state,darkMode:payload}
     default : return state
    }
    
}