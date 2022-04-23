// @flow
import * as React from "react";
import { useEffect, useState } from "react";
import SignUp from "../SignUp/SignUp";
import "./Login.style.css";

const Login = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("form", form);
  }, [form]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("form", form);
  };

  return (
    <div className="container">
      <div className="flex-container">
        <div className="flex-items">
          <h1 className="form-type">SignIn</h1>
          <form className="form-container">
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                defaultValue={form.email}
                onChange={(e) => (form.email = e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                defaultValue={form.password}
                onChange={(e) => (form.password = e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={onSubmitHandler}
            >
              SignIn
            </button>
          </form>
        </div>
        <div className="flex-items">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Login;
