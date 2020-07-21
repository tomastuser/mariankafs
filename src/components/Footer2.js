import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer2 = () => {
  return (
    <div className='Footer2'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h3 className='up' onClick={() => window.scrollTo(0, 0)}>
          <FontAwesomeIcon icon={faArrowUp} size='1x' fixedWidth />
        </h3>
      </div>
    </div>
  );
};

export default Footer2;
