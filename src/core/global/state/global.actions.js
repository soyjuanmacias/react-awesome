import { LOADING } from "./global.types";

export const setLoading = (loading, isLoading) => dispatch => {
  dispatch({
    type: LOADING,
    payload: { loading, isLoading },
  });
};