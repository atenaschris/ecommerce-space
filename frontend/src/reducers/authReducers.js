import {
  SIGN_IN_LOADING,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT,
} from "../constants/authConstants";

export const authReducer = (
  state = { user: {}, isLoading: false, error: null },
  action
) => {
  switch (action.type) {
    case SIGN_IN_LOADING:
      return {
        isLoading: true,
      };

    case SIGN_IN_SUCCESS:
      return {
        user: action.payload,
        isLoading: false,
      };

    case SIGN_IN_ERROR:
      return { user: {}, error: action.payload };

    case SIGN_OUT:
      return { user: {} };

    default:
      return state;
  }
};
