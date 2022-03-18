import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesPokemon } from "../types/type";

export const addSyn = (newPokemon) => {
    return (dispatch) => {
        addDoc(collection(db, "data-pokemon"), newPokemon)
            .then(resp => {
                dispatch(addAsyn(newPokemon))
                dispatch(cardPokemonAsyn())
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const addAsyn = (pokemon) => {
    return {
        type: typesPokemon.add,
        payload: pokemon
    }
}
///listar
export const cardPokemonSyn = (pokemon) => {
    return {
        type: typesPokemon.list,
        payload: pokemon
    }
}
export const cardPokemonAsyn = () => {
    return async (dispatch) => {
        const consul = await getDocs(collection(db, 'data-pokemon'))
        const pokemon = []
        consul.forEach((doc) => {
            pokemon.push({
                ...doc.data()
            })
        })
        dispatch(cardPokemonSyn(pokemon))
    }
}

///eliminar
export const pokemonDeleSyn = (codigo) => {
    return {
        type: typesPokemon.delete,
        payload: codigo
    }
}
export const pokemonDeleAsyn = (codigo) => {
    return async (dispatch) => {
        const consulsd = collection(db, 'data-pokemon')
        const del = query(consulsd, where('codigo', '==', codigo))
        const datosDel = await getDocs(del)
        datosDel.forEach((docu => {
            deleteDoc(doc(db, 'data-pokemon', docu.id))
        }))
        dispatch(pokemonDeleSyn(codigo))
    }
}

///---------editar producto----------///
export const editPokemon = (name, pokemon) => {
    return {
        type: typesPokemon.edit,
        payload: pokemon
    }
}

export const editPokemonAsync = (name, pokemon) => {
    return async (dispatch) => {
        const traerCollection = collection(db, 'data-pokemon')
        const t = query(traerCollection, where('name', '==', name))
        const datosT = await getDocs(t)
        let id
        datosT.forEach(async (docu) => {
            id = docu.id
        })
        const docRefer = doc(db, 'data-pokemon', id)
        await updateDoc(docRefer, pokemon)
            .then(() => cardPokemonAsyn())
    }
}