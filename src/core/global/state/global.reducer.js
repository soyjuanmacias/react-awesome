import { START_SPINNER, REMOVE_SPINNER } from './global.types';

const INITIAL = {
  loading: false,
  spinners: [],
};

export const globalReducer = (state = INITIAL, action) => {
  const { type, payload: data } = action;

  switch (type) {
    case START_SPINNER:
      return { ...state, loading: true, spinners: [...state.spinners, data.spinner] };

    case REMOVE_SPINNER:
      return { ...state, loading: data.loading, spinners: state.spinners.filter(el => el !== data.spinner) };

    default:
      return state;
  }
};
