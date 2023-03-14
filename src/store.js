import {legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { TodoReducer } from './reducer/TodoReducers';

const reducer = combineReducers({
    //this contain all reducers

    Todo:TodoReducer


})

const initialtState = {};

const middleware = [thunk];

const store = createStore(
    reducer,initialtState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

