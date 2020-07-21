import React from 'react';
import { Link } from 'react-router-dom';
import AktualityPrehled from './Aktuality/AktualityPrehled';
import OdrazkyUvod from './Uvod/OdrazkyUvod';
import UvodSlider from './Uvod/UvodSlider';
import Andel from './Uvod/Andel';

function Uvod() {
  return (
    <div className='Uvod'>
      <div className='pozadiFixed'>
        <img
          src='https://res.cloudinary.com/tomastuser/image/upload/v1587637533/aezswjs5y9sb8bds5hyhHD_do5byd.jpg'
          alt=''
        ></img>
      </div>
      <div className='uvodAktuality'>
        <UvodSlider />
        <Andel />

        <h1>Nejnovější aktuality</h1>
        <AktualityPrehled />
        <Link className='button' to='/aktuality'>
          Všechny příspěvky
        </Link>
      </div>
      <div className='pozadiPrazdneContainer'>
        <div className='pozadiPrazdne'>
          <OdrazkyUvod />
        </div>
      </div>
    </div>
  );
}

export default Uvod;
