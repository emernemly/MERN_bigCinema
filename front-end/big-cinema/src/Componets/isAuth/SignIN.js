import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, user_signin } from "../../Redux/ActionAndType/Action";
import "./SignIN.css";

const SignIN = () => {
  const [user_name, setuser_name] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const naviget = useNavigate();
  const hamdleSignIN = (e) => {
    e.preventDefault();
    dispatch(user_signin({ user_name, email, password }, naviget));
  };

  useEffect(() => {
    dispatch(logout());
  }, []);
  return (
    <div className="root">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form className="for">
            <h1>Create Account</h1>

            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </form>{" "}
          <button>Sign Up</button>
        </div>
        <div className="form-container sign-in-container">
          <form className="for">
            <h1>Sign in</h1>
            <span>or use your account</span>
            <input
              type="text"
              placeholder="User_Name"
              onChange={(e) => {
                setuser_name(e.target.value);
              }}
              value={user_name}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              value={password}
            />
            <h4>Forgot your password?</h4>{" "}
            <button onClick={hamdleSignIN}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>

              <button className="ghost">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>{" "}
              <Link to="/signUP">
                <button className="ghost">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIN;
