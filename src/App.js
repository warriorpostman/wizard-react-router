import React, { Component } from 'react';
// import { Route, IndexRoute, browserHistory } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import logo from './logo.svg';
import WizardPage from './WizardPage';
import PantherIndex from './PantherIndex';
import SpecificPanther from './SpecificPanther';
import Nowhere from './Nowhere';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={customHistory}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React - A demonstration of react-router</h2>
        </div>
        <p>
          This is a demo of react-router (v4).
        </p>
        <h5>Menu:</h5>
        <ul>
          <li><a href='/direct-render'>Direct render</a></li>
          <li><a href='/panther'>Index of Panthers</a></li>
          <li><a href="/wizard">Go To Wizard</a></li>
        </ul>
        <Switch>
          <Route path="/direct-render" 
            render={(props) => (
            <div className='block'>
              This is a direct call to <code>render()</code>
            </div>)
          } />
          <Route path="/panther/:pantherId" component={SpecificPanther} />
          <Route isExact={true} path="/panther" component={PantherIndex} />
          <Route path="/wizard/:pageNumber" component={WizardPage} />
          <Route isExact={true} path="/wizard" component={WizardPage}></Route>
          <Route path="*" component={Nowhere} />
        </Switch>
      </div>
        </Router>
    );
  }
}

export default App;
