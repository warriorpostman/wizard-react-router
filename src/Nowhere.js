import React from 'react';

const Nowhere = ({location}) => {
  return (
    <div className='block'>
      <div>Hmm, it looks like <em>{location.pathname}</em> doesn't exist</div>
      <div>This route leads to...<marquee>nowhere</marquee></div>
    </div>
  );
}

export default Nowhere;
