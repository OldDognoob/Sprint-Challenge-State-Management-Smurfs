import * as types from "./actionTypes";
import axios from "axios";

const smurfsAPI = "http://localhost:3333/smurfs";
//STEP-7 DESIGN ACTION CREATOR FUNCTIONS(help me God)
export const getSmurfs = () => dispatch => {
  dispatch({ type: types.GET_SMURF });
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      dispatch({
        type: types.GET_SMURF_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: types.GET_SMURF_FAILURE,
        payload: error.response.data.Error
      });
      console.log(error);
    });
};

export const postSmurfs = addSmurf => dispatch => {
  dispatch({ type: types.POST_SMURF });
  axios
    .post("http://localhost:3333/smurfs", addSmurf)
    .then(response => {
      dispatch({
        type: types.POST_SMURF_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error.response)
      dispatch({
        type: types.POST_SMURF_FAILURE,
        payload: error.response.data.Error
      });
    });
};
