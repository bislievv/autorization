import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch,Route, Redirect } from "react-router-dom"
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

function App(props) {
  const token = useSelector(state => state.application.token)

  if (!token) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/signin">
            <SigninPage />
          </Route>
          <Redirect to="/signin"/>
        </Switch>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;