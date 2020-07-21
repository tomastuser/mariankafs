import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBusAlt } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='FooterD'>
        <div>
          <a href='https://www.lesnims.cz/lesni-ms/standardy-kvality.html'>
            <img
              src='https://res.cloudinary.com/tomastuser/image/upload/v1585867492/qdc5glp7boyre6m2sd6p.png'
              alt=''
            ></img>
          </a>
        </div>
        <div>
          <a href='http://www.lesnims.cz/'>
            <img
              src='http://www.lesnimarianka.cz/Data/Sites/1/media/alms_logo_transparentni.gif'
              alt=''
            ></img>
          </a>
        </div>
        <div>
          <a href='https://www.facebook.com/D%C4%9Btsk%C3%BD-lesn%C3%AD-klub-Mari%C3%A1nka-443991749006997/'>
            <img
              className='fb'
              style={{ width: '90px' }}
              alt=''
              src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
            ></img>
          </a>
          <ul>
            <li>
              <FontAwesomeIcon icon={faPaperPlane} size='1x' fixedWidth />
              {'  '}
              info@lesnimarianka.cz
            </li>
            <li>
              <FontAwesomeIcon icon={faHome} size='1x' fixedWidth /> Brno-Líšeň,
              ulice Samoty
            </li>
            <li>
              <FontAwesomeIcon icon={faBusAlt} size='1x' fixedWidth /> Bus č.
              58, zastávka Kubelíkova
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} size='1x' fixedWidth /> 777 145
              343
            </li>
            <li>
              <FontAwesomeIcon icon={faCopyright} size='1x' fixedWidth /> LMŠ
              Mariánka 2020
            </li>
          </ul>
        </div>
        <div>
          <a href='https://www.darujme.cz/projekt/1200844'>
            <img
              src='http://www.lesnimarianka.cz/Data/Sites/1/media/darujme_logo.png'
              alt=''
            ></img>
          </a>
        </div>
        <div>
          <a href='http://bit.ly/Podporuji-Kavyl'>
            <img
              src='http://lesnikvitek.cz/Data/Sites/1/media/uvodni/2017/givt_box_211_211.jpg'
              alt=''
            ></img>
          </a>
        </div>
      </div>
      <div className='FooterM'>
        <div>
          <a href='https://www.facebook.com/D%C4%9Btsk%C3%BD-lesn%C3%AD-klub-Mari%C3%A1nka-443991749006997/'>
            <img
              className='fb'
              style={{ width: '90px' }}
              alt=''
              src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
            ></img>
          </a>
          <ul>
            <li>
              <FontAwesomeIcon icon={faPaperPlane} size='1x' fixedWidth />
              {'  '}
              info@lesnimarianka.cz
            </li>
            <li>
              <FontAwesomeIcon icon={faHome} size='1x' fixedWidth /> Brno-Líšeň,
              ulice Samoty
            </li>
            <li>
              <FontAwesomeIcon icon={faBusAlt} size='1x' fixedWidth /> Bus č.
              58, zastávka Kubelíkova
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} size='1x' fixedWidth /> 777 145
              343
            </li>
          </ul>
        </div>
        <div>
          <a href='https://www.lesnims.cz/lesni-ms/standardy-kvality.html'>
            <img
              src='https://res.cloudinary.com/tomastuser/image/upload/v1585867492/qdc5glp7boyre6m2sd6p.png'
              alt=''
            ></img>
          </a>
        </div>
        <div>
          <a href='http://www.lesnims.cz/'>
            <img
              src='http://www.lesnimarianka.cz/Data/Sites/1/media/alms_logo_transparentni.gif'
              alt=''
            ></img>
          </a>
        </div>
        <div>
          <a href='https://www.darujme.cz/projekt/1200844'>
            <img
              src='http://www.lesnimarianka.cz/Data/Sites/1/media/darujme_logo.png'
              alt=''
            ></img>
          </a>
        </div>
        <div>
          <a href='http://bit.ly/Podporuji-Kavyl'>
            <img
              src='http://lesnikvitek.cz/Data/Sites/1/media/uvodni/2017/givt_box_211_211.jpg'
              alt=''
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
