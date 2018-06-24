import { GET_ERRORS } from "./types";
import axios from "axios";

// Register User
export const registerUser = newUser => dispatch => {
  axios
    .post("/api/users/register", newUser)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
