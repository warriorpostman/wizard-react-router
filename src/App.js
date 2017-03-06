import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import logo from './logo.svg';
import WizardPage from './WizardPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="/wizard">Go To Wizard</a>
        <Router history={browserHistory}>
          <Route path="/">
            <Route path="/wizard" component={WizardPage}></Route>
            <Route path="/wizard/:stepNumber" component={WizardPage} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
