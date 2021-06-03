import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from './styles/useDarkMode';
import { GlobalStyles } from "./styles/partials/globalStyles";
import { lightTheme, darkTheme } from "./styles/partials/Themes";
import "./App.scss";
import {
  Account,
  Browse,
  Default,
  Episode,
  Library,
  Settings,
  Show,
} from "./pages";
import { Navbar } from "./components";

const App = () => {
  // https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/
  const [ theme, mountedComponent ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/account" component={Account} />
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/settings" component={Settings} />
          <Route path="/show/:name" component={Show} />
          <Route path="/ep/:id" component={Episode} />
          <Route path="*" component={Default} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
