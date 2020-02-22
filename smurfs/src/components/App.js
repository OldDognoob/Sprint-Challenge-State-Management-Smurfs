import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs } from "../state/actionCreators";
import SmurfForm from "./Form";
import Header from "./Header";

function App({ smurfs, getSmurfs, isFetching, error }) {
  useEffect(() => {
    getSmurfs();
  }, []);

  return (
    <div>
      <Header />
      <SmurfForm />
      {isFetching && <p>Loading…</p>}
      {error && <p>{error}</p>}
      {smurfs.map(smurf => {
        return (
          <div key={smurf.id}>
            <div>{smurf.name}</div>
            <div>{smurf.age}</div>
            <div>{smurf.height}</div>
          </div>
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
}
//STEP-8 USE connect FROM react-redux to WRAP OUR COMPONENT
export default connect(
  mapStateToProps,
  //STEP-9 BRING IN THE ACTION CREATORS
  { getSmurfs }
)(App);
