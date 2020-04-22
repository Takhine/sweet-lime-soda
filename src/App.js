import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "Layout";
import Home from "pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/" exact component={Home} />
        </Layout>
      </Switch>
    </Router>
  );
}


export default App;
