import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/sb-admin-2.min.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { AccountRoute, PrivateRoute } from "./components";
import { Login } from "./pages/Account";
import { Admin } from "./pages/Admin/Admin";

function App() {
  return (
    <div className="App" id="wrapper">
      <BrowserRouter>
        <Switch>
          <AccountRoute>
            <Login />
          </AccountRoute>
          <PrivateRoute>
            <Admin></Admin>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
