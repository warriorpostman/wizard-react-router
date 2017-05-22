import React from 'react';
import Child from './Child';
import { 
  Route,
  Link,
} from 'react-router-dom';

const SubApplication = ({match}) => {
  console.log('render sub-app', {match});
  return (
    <div>
      <div className='block'>
        <p>
          A Sub Application with it's own route declarations. 
        </p>
        <p>
          You have not specified a child component, but you could...if you like.
          HEY
        </p>
        <ul>
          <li>
            <Link to={`${match.url}/child`}>Child</Link>
          </li>
          <li>
            <Link to={`${match.url}/jung`}>Jung</Link>
          </li>
          <li>
            <Link to={`${match.url}/babu`}>Babu</Link>
          </li>
        </ul>
      </div>
      <Route path={`${match.url}/child`} component={Child} />
      <Route path={`${match.url}/jung`} component={Child} />
      <Route path={`${match.url}/babu`} component={Child} />
    </div>
  );
}

export default SubApplication;
