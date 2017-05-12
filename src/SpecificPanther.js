import React from 'react';
import { Link } from 'react-router-dom';

const SpecificPanther = (props) => {
  console.log(props);
  return (
    <div className='block'>
      <h5>Panther Detail</h5>
      <p>
        Panthers are great, but let me tell you about the specific panther: <em>{props.match.params.pantherId}</em>
      </p>
      <p> 
        ...Or you can go back to the <Link to='/panther'>Index</Link>
      </p>
    </div>
  );
}

export default SpecificPanther;
