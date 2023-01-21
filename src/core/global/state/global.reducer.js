import { LOADING } from './global.types';

const INITIAL_STATE = {
  isLoading: false,
  loading: [],
};

export const globalReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING: {
      const { isLoading, loading } = payload;
      return {
        ...state,
        isLoading,
        [`${loading}Loading`]: isLoading,
        loading: isLoading ? [...state.loading, loading] : state.loading.filter(el => el !== loading),
      }
    }

    default:
      return state;
  }
};
