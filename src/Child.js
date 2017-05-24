import React from 'react';
import { Link } from 'react-router-dom';
const Child = ({match}) => {
  console.log('Match', match);
  return (
    <div className='block'>
      <h5>Child Detail</h5>
      <p>
        Which child is this? <em> { match.url } </em>
      </p>
      <p> 
        ...Or you can go back to the <Link to='/sub-app'>Index</Link>
      </p>
      <span>Default Buttons</span>
      <button className='pure-button pure-button-primary'>Press ME!</button>
      <button className='pure-button' disabled>Disabled Button!</button>

      <span>Custom Buttons</span>
      <button className='pure-button button-secondary'>Press ME!</button>
      <button className='pure-button button-secondary' disabled>Disabled Button!</button>
    </div>
  );
}

export default Child;
