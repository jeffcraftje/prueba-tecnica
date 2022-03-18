import { types } from "../types/type";


export const loginReducers = (state={}, action)=>{
    switch(action.types){
        case types.login:
            return{
                id: action.payload.id,
                name: action.payload.displayname
            }
        case types.logout:
            return{ }
        default:
            return state;
    }
}