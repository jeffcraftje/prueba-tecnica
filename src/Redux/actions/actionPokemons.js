import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typespoke } from "../types/type";

export const addSync = (newpoke) => {
    return (dispatch) => {
        addDoc(collection(db, "datpokemons"), newpoke)
            .then(resp => {
                dispatch(addAsync(newpoke))
                dispatch(cardpokeync())
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const addAsync = (poke) => {
    return {
        type: typespoke.add,
        payload: poke
    }
}
///listar
export const cardpokeync = (poke) => {
    return {
        type: typespoke.list,
        payload: poke
    }
}
export const cardPokeAsync = (poke) => {
    return async (dispatch) => {
        const consul = await getDocs(collection(db, 'datpokemons'))
        const poke = []
        consul.forEach((doc) => {
            poke.push({
                ...doc.data()
            })
        })
        dispatch(cardpokeync(poke))
    }
}

///eliminar
export const pokeDeleSyn = (codigo) => {
    return {
        type: typespoke.delete,
        payload: codigo
    }
}
export const pokeDeleAsyn = (codigo) => {
    return async (dispatch) => {
        const consulsd = collection(db, 'datpokemons')
        const del = query(consulsd, where('codigo', '==', codigo))
        const datosDel = await getDocs(del)
        datosDel.forEach((docu => {
            deleteDoc(doc(db, 'datpokemons', docu.id))
        }))
        dispatch(pokeDeleSyn(codigo))
    }
}

///---------editar producto----------///
export const editpoke = (name, poke) => {
    return {
        type: typespoke.edit,
        payload: poke
    }
}

export const editpokeAsync = (name, poke) => {
    return async (dispatch) => {
        const traerCollection = collection(db, 'datpokemons')
        const t = query(traerCollection, where('name', '==', name))
        const datosT = await getDocs(t)
        let id
        datosT.forEach(async (docu) => {
            id = docu.id
        })
        const docRefer = doc(db, 'datpokemons', id)
        await updateDoc(docRefer, poke)
            .then(() => cardPokeAsync())
    }
}