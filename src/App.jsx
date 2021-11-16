import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components";
import { Dashboard, Login, MngCurrency, MngDenomination } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/management/currency">
          <MngCurrency />
        </Route>
        <Route path="/management/denomination">
          <MngDenomination />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
