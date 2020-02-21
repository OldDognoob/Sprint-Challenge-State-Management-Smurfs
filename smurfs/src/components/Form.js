import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurfs } from "../state/actionCreators";

export function SmurfForm({ postSmurfs }) {
  const [smurfs, setSmurfsValues] = useState({ name: "", age: "", height: "" });

  const handleChange = event => {
    setSmurfsValues({
      ...smurfs,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(smurfs);
    if (!smurfs.name || !smurfs.age || !smurfs.height) {
      return alert("!Please complete all the blanks boxes!");
    }
    postSmurfs(smurfs);
  };
  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <p>Add a new Smurf</p>
      <input
        type="text"
        name="name"
        placeholder="What is the name of your Smurf?"
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        placeholder="How old is your Smurf?"
        onChange={handleChange}
      />
      <input
        type="text"
        name="height"
        placeholder="How tall is your Smurf?"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Send your smurf to the village!</button>
    </form>
  );
}
export default connect(state => state, { postSmurfs })(SmurfForm);
