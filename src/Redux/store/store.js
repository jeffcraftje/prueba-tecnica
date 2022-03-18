import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { CargarReducers } from '../Reducers/CargarReducers';
import { CargarsReducers } from '../Reducers/CargarsReducers';
import { loginReducers } from '../Reducers/loginReducers';
import { registerReducers } from '../Reducers/registerReducers';


const composeEnhancers = (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducers,
    register: registerReducers,
    pokemon: CargarReducers,
    oke: CargarsReducers

})


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk))
)