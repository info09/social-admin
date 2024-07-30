import { Route, RouteProps } from "react-router-dom";

import React from "react";
import { Login } from "../pages/Account";

export const PrivateRoute = ({
  children,
  ...rest
}: RouteProps): JSX.Element => {
  return (
    <Route
      {...rest}
      render={() => (true ? children : <Login />) as React.ReactElement}
    ></Route>
  );
};
