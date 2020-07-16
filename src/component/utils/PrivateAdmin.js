import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  const { component: Component } = props;

  let token = false;
  if (localStorage.token) {
    token = true;
  }

  let auth = false;
  if (localStorage.getItem("role") > 0) {
    auth = true;
  }

  return (
    <Route
      render={() =>
        !token || !auth ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
