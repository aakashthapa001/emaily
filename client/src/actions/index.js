import axios from "axios";
import * as types from "./types";

// Action creator to fetchUser
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({
    type: types.FETCH_USER,
    payload: res.data
  });
};

// Action creator for handling token of STRIPE to handle POST request to backend
export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({
    type: types.FETCH_USER,
    payload: res.data
  });
};
