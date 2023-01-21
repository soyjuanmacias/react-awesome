import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';

import root from './root.reducer';

export const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(thunk))
);
