import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import {
  Account,
  Browse,
  Default,
  Episode,
  Library,
  Settings,
  Show
} from './pages';
import { Navbar } from './components';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact path="/account"
          component={Account}
        />
        <Route
          exact path="/browse"
          component={Browse}
        />
        <Route
          exact path="/library"
          component={Library}
        />
        <Route
          exact path="/settings"
          component={Settings}
        />
        <Route
          path="/show/:name"
          component={Show}
        />
        <Route
          path="/ep/:id"
          component={Episode}
        />
        <Route
          path="*"
          component={Default}
        />
      </Switch>
    </Router>
  );
}

export default App;
