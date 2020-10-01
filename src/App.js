import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom'

import {TaskPage} from './pages/TaskPage.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={ TaskPage } exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
