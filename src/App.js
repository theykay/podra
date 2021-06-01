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

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact path="/account"
          render={Account}
        />
        <Route
          exact path="/browse"
          render={Browse}
        />
        <Route
          exact path="/library"
          render={Library}
        />
        <Route
          exact path="/settings"
          render={Settings}
        />
        <Route
          path="/show/:name"
          render={props => {
            <Show props={props} />
          }}
        />
        <Route
          path="/ep/:id"
          render={props => {
            <Episode props={props} />
          }}
        />
        <Route
          path="*"
          render={Default}
        />
      </Switch>
    </Router>
  );
}

export default App;
