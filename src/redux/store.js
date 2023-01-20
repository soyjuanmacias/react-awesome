import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';

import root from './root.reducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['entities', 'team', 'auth'],
};

const persistedReducer = persistReducer(persistConfig, root);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

const persistor = persistStore(store);

export { store, persistor };
