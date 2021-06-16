import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Layout from "./containers/Layout";
import "./styles/index.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const App = () => (
  <HashRouter>
    <React.Suspense fallback={loading}>
      <Switch>
        <Route path="/" name="Home" render={(props) => <Layout {...props} />} />
      </Switch>
    </React.Suspense>
  </HashRouter>
);

export default App;
