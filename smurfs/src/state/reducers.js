import * as types from "./actionTypes";

// STEP 1 DESIGN APPLICATION STATE
const initialState = {
  smurfs: []
};
// STEP-3 CREATE ONE REDUCER FUNCTION PER SLICE OF STATE
const initialState = { smurfs: [] };
export function smurfReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };
    case types.POST_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    default:
      return state;
  }
}
