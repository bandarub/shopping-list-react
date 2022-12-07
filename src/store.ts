import { legacy_createStore as createStore } from 'redux';
import { itemsReducer } from './itemsReducer';

export const store = createStore(itemsReducer)