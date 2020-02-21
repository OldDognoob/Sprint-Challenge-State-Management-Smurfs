import * as types from "./actionTypes";

// STEP 1 DESIGN APPLICATION STATE
const initialState = {
  smurfs: [],
  isFetching: false,
  error: ""
};
// STEP-3 CREATE ONE REDUCER FUNCTION PER SLICE OF STATE

export function smurfReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_SMURF:
      return {
        ...state,
        isFetching:true,
        error: ''
      };
    case types.GET_SMURF_SUCCESS:
      return {
        ...state,
        isFetching:false,
        smurfs: action.payload,
        error: ''
      };
    case types.GET_SMURF_FAILURE:
      return {
        ...state,
        isFetching:false,
        error:action.payload
      };
    case types.POST_SMURF:
      return {
        ...state,
        isFetching:true,
        error: ''
      };
    case types.POST_SMURF_SUCCESS:
      return {
        ...state,
        isFetching:false,
        smurfs: action.payload,
        error: ''
      };
    case types.POST_SMURF_FAILURE:
      return {
        ...state,
        isFetching:false,
        error:action.payload
      };
    default:
      return state;
  }
}
