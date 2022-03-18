import { typesPokemon } from '../types/type';
const initialState = {
    pokemon: [],
}

export const CargarReducers = (state = { initialState }, action) => {
    switch (action.type) {
        case typesPokemon.add:
            return {
                pokemon: [action.payload]
            }
        case typesPokemon.list:
            return {
                pokemon: [...action.payload]
            }
        case typesPokemon.search:
            return {
                pokemon: [...action.payload]
            }
        case typesPokemon.edit:
            return {
                ...state
            }
        case typesPokemon.delete:
            return {
                pokemon: state.pokemon.filter(proc => proc.codiProct !== action.payload)
            }
        default:
            return state;
    }
}