import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { user_signup } from "../../Redux/ActionAndType/Action";
import "./SignUP.css";

const SgineUP = () => {
  const [user_name, setuser_name] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("");
  const dispatch = useDispatch();
  const naviget = useNavigate();
  const handlesignUP = (e) => {
    e.preventDefault();
    dispatch(user_signup({ user_name, email, password, role }, naviget));
  };
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
            <h1>Sign Up</h1>
            <p>Enter your personal details and start journey with us</p>{" "}
            <input
              type="text"
              placeholder="UserName"
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
            <ul style={{ display: "flex", listStyle: "none" }}>
              <li style={{ padding: "10px" }}>
                <h5>user</h5>
                <input
                  type="radio"
                  name="a"
                  value="user"
                  onChange={(e) => {
                    setrole(e.target.value);
                  }}
                />
              </li>
              <li style={{ padding: "10px" }}>
                <h5>Cinema</h5>
                <input
                  type="radio"
                  name="a"
                  value="cinema"
                  onChange={(e) => {
                    setrole(e.target.value);
                  }}
                />
              </li>
            </ul>
            <button onClick={handlesignUP}>Sign Up</button>
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

              <Link to="/">
                {" "}
                <button className="ghost">Back to sign In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SgineUP;
