import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AboutUs from "./view/aboutUs/AboutUs";
import Account from "./view/account/Account";
import Shop from "./view/shop/Shop";

export default function App() {
  return (
    <Router>
      <div>
        <Layout>
          <Switch>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/">
              <Shop />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}
