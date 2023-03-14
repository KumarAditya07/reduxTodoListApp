import {legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
    //this contain all reducers


})

const initialtState = {};

const middleware = [thunk];

const store = createStore(
    reducer,initialtState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

