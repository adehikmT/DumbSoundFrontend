import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  const { component: Component } = props;

  let token = false;
  if (localStorage.token) {
    token = true;
  }

  return (
    <Route
      render={() => (!token ? <Redirect to="/" /> : <Component {...props} />)}
    />
  );
};

export default PrivateRoute;
