import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFrog,
  faKiwiBird,
  faCat,
  faFish,
  faCrow,
} from '@fortawesome/free-solid-svg-icons';

const PageNotFound = () => {
  const [randomAnimal, setRandomAnimal] = useState(0);

  useEffect(() => {
    setRandomAnimal(Math.floor(Math.random() * 5 + 1));
  }, []);

  const Zvire = () => {
    switch (randomAnimal) {
      case 1:
        return <FontAwesomeIcon icon={faFrog} size='3x' fixedWidth />;
      case 2:
        return <FontAwesomeIcon icon={faCat} size='3x' fixedWidth />;
      case 3:
        return <FontAwesomeIcon icon={faFish} size='3x' fixedWidth />;
      case 4:
        return <FontAwesomeIcon icon={faKiwiBird} size='3x' fixedWidth />;
      case 5:
        return <FontAwesomeIcon icon={faCrow} size='3x' fixedWidth />;
      default:
        return null;
    }
  };

  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <h1>404 - STRÁNKA NENALEZENA</h1>
        <h1>
          <Zvire />
        </h1>
      </div>
    </div>
  );
};

export default PageNotFound;
