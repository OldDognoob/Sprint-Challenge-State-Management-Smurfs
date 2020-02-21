import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "redux-thunk";
import { creatStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "react-thunk";
import { smurfReducer } from "./state/reducers";

//STEP-4 USE combineReducers FROM REDUX TO MAKE A SINGLE REDUCER
const combinedReducer = combineReducers({
  smurf: smurfReducer
});

//STEP-5 USE creatStore FROM REDUX TO CREATE A STATE STORE
const store = creatStore(
  smurfReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      windows.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  // STEP-6 WRAP THE APPLICATION WITH A PROVIDER FROM REACT-REDUX
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
