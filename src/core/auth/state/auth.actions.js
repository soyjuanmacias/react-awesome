import { store } from '../../../redux/store';
import { ERROR, SET_USER } from './auth.types';

const { dispatch } = store;

export const setUser = user =>
  dispatch({
    type: SET_USER,
    payload: {
      user,
      error: null,
    },
  });

export const setError = ({ message, status }) => {
  dispatch({
    type: ERROR,
    payload: {
      error: { message, status },
    },
  });
};
