import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "layout/index";
import Home from "pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path="/" exact component={Home} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
