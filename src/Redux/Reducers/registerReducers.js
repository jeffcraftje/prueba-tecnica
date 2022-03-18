import {types} from '../types/type';

export const registerReducers = (state={}, action) => {

    switch (action.types) {
        case types.register:
            return{
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name
            }
    
        default:
            return state;
    }
}