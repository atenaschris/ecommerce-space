import {
  SIGN_IN_LOADING,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
} from "../constants/authConstants";
import axios from "axios";

export const authenticateUser = (email, password) => async (dispatch) => {
  dispatch({
    type: SIGN_IN_LOADING,
  });
  try {
    const { data } = await axios({
      method: "post",
      url: "/api/users/signin",
      data: {
        email,
        password,
      },
    });
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: data,
    });
  } catch (err) {
      dispatch({
          type: SIGN_IN_ERROR,
          payload:err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
      })
  }
};
