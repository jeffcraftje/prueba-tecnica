import { types } from '../types/type';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
export const registroEmailPassword = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { dispatchName: name })
                dispatch(actionRegister(user.email, user.uid, user.displayName))
            })
            .catch(e => {

            })
    }
}
export const actionRegister = (email, password, name) => {
    return {
        type: types.register,
        payload: {
            email,
            password,
            name
        }
    }

}