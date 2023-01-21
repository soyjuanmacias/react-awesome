import { combineReducers } from 'redux';
import { authReducer } from '../core/auth/state/auth.reducer';
import { globalReducer } from '../core/global/state/global.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  global: globalReducer,
});

export default rootReducer;
