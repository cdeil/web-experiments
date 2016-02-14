import React from 'react';

const style = {
  position: 'fixed',
  bottom: '10px',
  // left: '45vw',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
};

export default () => {
  return (
    <div style={style}><a href="https://github.com/gammapy/web-experiments">This is a demo application</a></div>
  );
};
