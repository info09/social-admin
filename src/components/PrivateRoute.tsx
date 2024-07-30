import { Route, RouteProps } from "react-router-dom";

import React from "react";
import { Login } from "../pages/Account";
import { AccountState } from "../store/account/types";
import { useSelector } from "react-redux";
import { AppState } from "../store";

export const PrivateRoute = ({
  children,
  ...rest
}: RouteProps): JSX.Element => {
  const account: AccountState = useSelector((state: AppState) => state.account);
  return (
    <Route
      {...rest}
      render={() =>
        (account.token ? children : <Login />) as React.ReactElement
      }
    ></Route>
  );
};
