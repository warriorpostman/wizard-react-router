import React from 'react';

const Nowhere = ({match}) => {
  console.log(match);
  return (
    <div className='block'>
      <div>Hmm, it looks like <em>{match.url}</em> doesn't exist</div>
      <div>This route leads to...<marquee>nowhere</marquee></div>
    </div>
  );
}

export default Nowhere;
