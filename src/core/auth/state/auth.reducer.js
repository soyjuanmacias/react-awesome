import { SET_USER, ERROR } from './auth.types';

const INITIAL_STATE = {
  user: null,
  error: null,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload: data } = action;

  switch (type) {
    case SET_USER: () => ({ ...state, ...data });

    case ERROR: () => ({ ...state, ...data })

    default:
      return state;
  }
};
