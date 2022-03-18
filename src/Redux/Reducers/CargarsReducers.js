import { typespoke } from "../types/type"

const initialState = {
    poke: []
}

export const CargarsReducers = (state = { initialState }, action) => {
    switch (action.type) {
        case typespoke.add:
            return {
                poke: [action.payload]
            }
        case typespoke.list:
            return {
                poke: [...action.payload]
            }
        case typespoke.edit:
            return {
                ...state
            }
        case typespoke.delete:
            return {
                poke: state.poke.filter(proc => proc.codigo !== action.payload)
            }
        default:
            return state;
    }
}