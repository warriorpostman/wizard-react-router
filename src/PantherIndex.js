import React from 'react';
import { Link } from 'react-router-dom';

const PantherIndex = () => {
  return (
      <div className='block'>
        <div>This is the Index of all Panthers. </div>
        <div>
          You have not specified a panther, but you could, if you like.
          <ul>
            <li>
              <Link to="panther/cougar">Cougar</Link>
            </li>
            <li>
              <Link to="panther/leopard">Leopard</Link>
            </li>
            <li>
              <Link to="panther/jaguar">Jaguar</Link>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default PantherIndex;
