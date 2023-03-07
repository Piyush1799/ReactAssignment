import React from "react";
import classes from "./LoginDetails.module.css";
import { useState } from "react";

const LoginDetails = ({ onLoggedInHandler }) => {
  // Define state variables for entered email, password, and validation status
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [validater, setValidater] = useState(false);

  // Update entered email state variable based on user input
  const PrintEmail = (event) => {
    setValidater(false);
    setEnteredEmail(event.target.value);
  };

  // Update entered password state variable based on user input
  const PrintPassword = (event) => {
    setValidater(false);
    setEnteredPassword(event.target.value);
  };

  // Check entered email and password against hardcoded values and update validation status
  const PrintDetails = () => {
    if (
      enteredEmail.trim().toLowerCase() === "demo@coralmango.com" &&
      enteredPassword.trim() === "demo123"
    ) {
      setValidater(false);
      onLoggedInHandler();
    }
    setValidater(true);
    setEnteredEmail("");
    setEnteredPassword("");
  };

  // Render login form with input fields and submit button
  return (
    <div className={classes.LogIncontainer}>
      <h2>Welcome Back!</h2>
      {validater && <h6 className={classes.invalid}>!Invalid Credentials</h6>}
      <label htmlFor="email" className={classes.email}>
        Email
      </label>
      <input
        type="email"
        placeholder="Enter Email"
        onChange={PrintEmail}
        value={enteredEmail}
      />
      <label htmlFor="password" className={classes.password}>
        Password
      </label>
      <input
        type="password"
        placeholder="Enter Password"
        onChange={PrintPassword}
        value={enteredPassword}
      />
      <button
        type="button"
        onClick={PrintDetails}
        className={classes.loginButton}
      >
        LOGIN
      </button>
    </div>
  );
};

export default LoginDetails;
