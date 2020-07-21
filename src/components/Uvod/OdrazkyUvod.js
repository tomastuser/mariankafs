import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBug,
  faMapSigns,
  faCloudSun,
  faMapMarkedAlt,
  faComments,
  faCampground,
  faTree,
  faHome,
  faSeedling,
  faFrog,
} from '@fortawesome/free-solid-svg-icons';

function OdrazkyUvod() {
  return (
    <div className='odrazkyUvodContainer'>
      <h1>Lesní školka Mariánka</h1>
      <ul className='odrazkySloupecA'>
        <li>
          {'  '}dětství v přírodě{' '}
          <FontAwesomeIcon icon={faBug} size='1x' fixedWidth />
        </li>
        <li>
          {'  '} učení prožitkem{' '}
          <FontAwesomeIcon icon={faSeedling} size='1x' fixedWidth />
        </li>
        <li>
          {'  '} bez zdí a plotů{' '}
          <FontAwesomeIcon icon={faFrog} size='1x' fixedWidth />
        </li>
        <li>
          {'  '} kapacita 15 dětí{' '}
          <FontAwesomeIcon icon={faCampground} size='1x' fixedWidth />
        </li>
        <li>
          {'  '} otevřeno 7:30 až 16:00{' '}
          <FontAwesomeIcon icon={faCloudSun} size='1x' fixedWidth />
        </li>
      </ul>
      <div className='cara'></div>
      <ul className='odrazkySloupecB'>
        <li>
          <FontAwesomeIcon icon={faTree} size='1x' fixedWidth />
          {'  '} dlouholetá tradice
        </li>
        <li>
          <FontAwesomeIcon icon={faComments} size='1x' fixedWidth />
          {'  '} kvalifikovaní pedagogové
        </li>
        <li>
          <FontAwesomeIcon icon={faHome} size='1x' fixedWidth />
          {'  '} plnohodnotné vzdělávání, včetně předškoláků
        </li>
        <li>
          <FontAwesomeIcon icon={faMapMarkedAlt} size='1x' fixedWidth />
          {'  '} zápis v rejstříku MŠMT
        </li>
        <li>
          <FontAwesomeIcon icon={faMapSigns} size='1x' fixedWidth />
          {'  '} člen Asociace lesních mateřských škol
        </li>
      </ul>
    </div>
  );
}

export default OdrazkyUvod;
