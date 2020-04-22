import React from 'react';
import 'static/styles/main.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from 'pages/Home/index';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
