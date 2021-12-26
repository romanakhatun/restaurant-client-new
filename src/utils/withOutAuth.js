import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./useAuth";

export const WithOutAuth = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          <Redirect to={{ pathname: "/profile", state: { from: location } }} />
        ) : (
          children
        )
      }
    />
  );
};
