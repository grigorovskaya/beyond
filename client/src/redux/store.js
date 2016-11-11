import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { fetchAuthStatus } from '../utils/utils';

export const store = applyMiddleware(thunk)(createStore)(reducers);
 fetchAuthStatus(store);
