import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers, } from "redux";
import thunk from "redux-thunk";
import { smurfReducer } from "./state/reducers";

//STEP-4 USE combineReducers FROM REDUX TO MAKE A SINGLE REDUCER
const combinedReducer = combineReducers({
  smurf: smurfReducer
});

//STEP-5 USE creatStore FROM REDUX TO CREATE A STATE STORE
const store = createStore(
    smurfReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

ReactDOM.render(
  // STEP-6 WRAP THE APPLICATION WITH A PROVIDER FROM REACT-REDUX
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
