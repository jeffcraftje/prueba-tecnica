import { getAuth, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { types } from '../types/type';
import { authentication, google, provider } from '../../firebase/firebaseConfig';


export const loginEmailPassword = (email, password) => {

    return (dispatch) => {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(loginAction(user.uid, user.displayName))
            })
            .catch(e => {
            })
    }
}

export const loginGoogle = () => {

    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
            .then(({ user }) => {
                dispatch(loginAction(user.uid, user.displayName))
            })
            .catch(e => {
                console.log(e);
            })
    }
}
export const loginFacebookAction = () => {
    return (dispatch) => {
        signInWithPopup(authentication, provider)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error.message)
        });
    }
}

export const loginAction = (id, displayname) => {

    return {
        type: types.login,
        payload: {
            id,
            displayname
        }
    }
}
export const logout = () => {

    return (dispatch) => {
        const auth = getAuth();
        signOut(auth)
            .then(user => {
                dispatch(logoutSincrono())
            })
            .catch(error => {
                console.log(error);
            })
    }
}


export const logoutSincrono = () => {
    return {
        type: types.logout,
    }
}
export const logoutSyn = () => {
    return {
        type: types.logout
    }
}
export const logoutAsyn = () => {
    return (dispatch) => {
        const auth = getAuth();
        signOut(auth)
            .then(user => {
                dispatch(logoutSyn())
            })
            .catch(error => console.log(error))
    }
}