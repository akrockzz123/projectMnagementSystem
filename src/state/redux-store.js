




import { Provider } from 'react-redux';
import rootSaga from '../sagas/rootSaga';
import { userLoginReducers } from './reducers/userLoginReducer';

import createSagaMiddleware from '@redux-saga/core';

import { composeWithDevTools } from 'redux-devtools-extension';

import {createStore,applyMiddleware} from 'redux'

import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware()



const store= createStore(userLoginReducers, composeWithDevTools(applyMiddleware(thunk,sagaMiddleware)));

sagaMiddleware.run(rootSaga)


export default store