import React, { createContext, useContext, useEffect } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config";
import { useState } from "react";
import { Route, Redirect } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();
export const AuthContextProvider = (props) => {
  const auth = Auth();
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);

export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

const getUser = (user) => {
  const { displayName, email, photoURL, password } = user;
  return { name: displayName, email, photo: photoURL, password };
};

const Auth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  //GOOGLE
  const SIGN_IN_GOOGLE = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        setUser(getUser(res.user));
        return res.user;
      })
      .catch((err) => {
        setUser(null);
        return err.message;
      });
  };

  //CREATE ACCOUNT
  const CREATE_ACCOUNT = (name, email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        res.user.updateProfile({
          displayName: name,
        });
        setUser(getUser(res.user));
        return res.user;
      })
      .catch((err) => {
        setError(err.message);
        return err.message;
      });
  };

  //SIGNIN
  const SIGNIN = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(getUser(res.user));
        return res.user;
      })
      .catch((err) => {
        setError(err.message);
        return err.message;
      });
  };

  // SIGNOUT
  const SIGNOUT = () => {
    return firebase
      .auth()
      .signOut()
      .then((res) => {
        setUser(null);
      })
      .catch((err) => {
        return err.message;
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (usr) {
      if (usr) {
        setUser(getUser(usr));
      } else {
        console.log("No user is signed in.");
      }
    });
  }, []);

  return {
    user,
    error,
    SIGN_IN_GOOGLE,
    CREATE_ACCOUNT,
    SIGNIN,
    SIGNOUT,
  };
};
export default Auth;
