import React, { useState } from "react";
import Auth from "../utils/useAuth";
import "../styles/components/Login.css";

const Login = () => {
  const [haveAccount, setHaveAccount] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    success: "",
    error: "",
    isValid: false,
  });
  const auth = Auth();

  // Change Form
  const goSignIn = () => {
    setHaveAccount(true);
  };
  const goSignUp = () => {
    setHaveAccount(false);
  };

  // Input check
  const isValidName = (email) => /^[a-zA-Z ]{2,30}$/.test(email);
  const isValidEmail = (email) => /(.+)@(.+){2,}\.(.+){2,}/.test(email);
  const isValidPassword = (pass) =>
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/.test(
      pass
    );

  // Input Change
  const inputChange = (e) => {
    const newUser = { ...user };

    // Validation
    let isValid = true;
    if (e.target.name === "name") {
      isValid = isValidName(e.target.value);

      if (!isValidName(e.target.value)) {
        newUser.error =
          "Name should have contains only letters and at least 2 to up to 30 letters.";
      } else {
        newUser.error = "";
      }
    }
    if (e.target.name === "email") {
      isValid = isValidEmail(e.target.value);

      if (!isValidEmail(e.target.value)) {
        newUser.error = "Invalid Email formate.";
      } else {
        newUser.error = "";
      }
    }
    if (e.target.name === "password") {
      isValid = isValidPassword(e.target.value);

      if (!isValidPassword(e.target.value)) {
        newUser.error =
          "Password should have contained 1 uppercase and lowercase letter, 1 number, 1 special character and at least 8 to up to 30 characters.";
      } else {
        newUser.error = "";
      }
    }
    if (e.target.name === "confirmPassword") {
      let password = document.getElementById("password").value;

      if (password !== e.target.value) {
        newUser.error = "Password did not match";
        isValid = false;
      } else {
        newUser.error = "";
        isValid = true;
      }
    }

    newUser[e.target.name] = e.target.value;
    newUser.isValid = isValid;
    setUser(newUser);
  };

  const signInGoogle = () => {
    auth.SIGN_IN_GOOGLE().then((res) => {
      window.location.pathname = "/cart";
    });
  };

  // Create Account

  const createAccount = (e) => {
    if (user.isValid) {
      auth.CREATE_ACCOUNT(user.name, user.email, user.password).then((res) => {
        if (res.email) window.location.pathname = "/cart";
      });
    } else {
      const formValid = { ...user };
      formValid.error = "Form is not valid";
      setUser(formValid);
    }
    e.preventDefault();
    e.target.reset();
  };

  // Sign In
  const signIn = (e) => {
    auth.SIGNIN(user.email, user.password).then((res) => {
      if (res.email) window.location.pathname = "/cart";
    });

    e.preventDefault();
    e.target.reset();
  };

  return (
    <div className="loginPage">
      {!auth.user && (
        <button onClick={signInGoogle} className="btn btnFull googleSign">
          Google Sign In
        </button>
      )}
      <p className="red formText">{user.error}</p>
      <p className="green formText">{user.success}</p>
      <div
        className="form"
        id="signUp"
        style={{ display: haveAccount ? "none" : "block" }}
      >
        <form onSubmit={createAccount}>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            onBlur={inputChange}
            required
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            onBlur={inputChange}
            required
          />
          <input
            id="passValue"
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            onBlur={inputChange}
            required
          />
          <input
            className="input"
            id="password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onBlur={inputChange}
            required
          />
          <input type="submit" value="Sign Up" className="btn btnFull" />
        </form>
        <p className="green formText" onClick={goSignIn}>
          Already have an account? Sign In
        </p>
      </div>

      <div
        className="form"
        id="signIn"
        style={{ display: haveAccount ? "block" : "none" }}
      >
        <form onSubmit={signIn}>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input type="submit" value="Sign In" className="btn btnFull" />
        </form>
        <p className="red formText" onClick={goSignUp}>
          Not have an account? Sign Up
        </p>
      </div>
    </div>
  );
};
export default Login;
