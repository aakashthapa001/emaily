import axios from "axios";
import * as types from "./types";

// Action creator to fetchUser
export const fetchUser = () => async dispatch => {
  const currentUser = await axios.get("/api/current_user");

  dispatch({
    type: types.FETCH_USER,
    payload: currentUser.data
  });
};
