import { START_SPINNER, REMOVE_SPINNER } from './global.types';
import { store } from '../../../redux/store';
const { dispatch } = store;

export const startSpinner = spinner =>
  dispatch({
    type: START_SPINNER,
    payload: { loading: true, spinner },
  });

export const removeSpinner = spinner =>
  dispatch({
    type: REMOVE_SPINNER,
    payload: { loading: false, spinner },
  });
