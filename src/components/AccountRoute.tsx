import { Redirect, Route, RouteProps } from "react-router-dom";

import React from "react";
import { Login } from "../pages/Account";
import { AccountState } from "../store/account/types";
import { useSelector } from "react-redux";
import { AppState } from "../store";

export const AccountRoute = ({
  children,
  ...rest
}: RouteProps): JSX.Element => {
  const account: AccountState = useSelector((state: AppState) => state.account);
  return (
    <Route
      {...rest}
      render={() =>
        (account.token ? (
          <Redirect to={{ pathname: "/admin/home" }} />
        ) : (
          <Login />
        )) as React.ReactElement
      }
    ></Route>
  );
};
