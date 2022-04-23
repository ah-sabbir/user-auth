// @flow
import * as React from "react";
import "./SignUp.style.css";

const SignUp = (props) => {
  return (
    <div>
      <h1 className="form-type">SignUp</h1>
      <form className="form-container">
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default SignUp;
