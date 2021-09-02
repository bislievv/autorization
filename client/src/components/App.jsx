import React from 'react';
import { BrowserRouter, Switch,Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/signin">
          <SigninPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;