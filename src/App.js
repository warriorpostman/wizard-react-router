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
import 'purecss/build/pure-min.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("main props: ", props);
  }

  render() {
    return (
      <Router history={customHistory}>
      <div className="App">
        <div className='pure-menu main-menu'>
          <span className='pure-menu-heading'>
            <h5>React Router(v4) demo </h5>
          </span>
        </div>
        <div className='pure-menu pure-menu-horizontal main-menu'>
          <ul className='pure-menu-list pure-u-1-2'>
            <li className='pure-menu-item'>
              <NavLink 
                activeClassName='active-link' 
                title="Render component directly in route"
                className='pure-menu-link' to='/direct-render'>
                Direct render
              </NavLink> {
            }</li>
            <li className='pure-menu-item'>
              <NavLink 
                activeClassName='active-link' 
                title="Parameterized routes" 
                className='pure-menu-link' 
                to='/panther'>
                Index of Panthers
              </NavLink>
            </li>
            <li className='pure-menu-item'>
              <NavLink 
                activeClassName='active-link' 
                className='pure-menu-link' 
                title='Progress based routes (similar to Parameterized)' 
                to="/wizard">
                Wizard
              </NavLink>
            </li>
            <li className='pure-menu-item'>
              <NavLink 
                activeClassName='active-link' 
                className='pure-menu-link'
                to="/sub-app" 
                title='"Nested" routes'>
                Sub-Application
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <div className='pure-u-1-2'>
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
        </Switch>
      </div>
        </Router>
    );
  }
}

export default App;
