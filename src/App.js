import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();
import { 
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import logo from './logo.svg';
import WizardPage from './WizardPage';
import PantherIndex from './PantherIndex';
import SpecificPanther from './SpecificPanther';
import Nowhere from './Nowhere';
import SubApplication from './SubApplication';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("main props: ", props);
  }

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
        <ul className='main-menu'>
          <li>
            <NavLink activeClassName='active-link' to='/direct-render'>
              Direct render
            </NavLink> - Route that directly renders a component</li>
            <li>
              <NavLink activeClassName='active-link' to='/panther'>Index of Panthers</NavLink>
              - Parameterized routes
            </li>
          <li><NavLink to="/wizard">Go To Wizard</NavLink> - Progress based routes (similar to Parameterized)</li>
          <li><NavLink to="/sub-app">Go To Sub-Application</NavLink> - "Nested" routes</li>
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
          <Route path="/sub-app/" component={SubApplication}/>
          <Route path="*" component={Nowhere} />
        </Switch>
      </div>
        </Router>
    );
  }
}

export default App;
