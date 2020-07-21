import React from 'react';

const Sponzori = () => {
  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <h1>Podporují nás</h1>
        <div className='sponzoriCont'>
          <div>
            <a href='http://www.brno-lisen.cz/'>
              <img
                style={{ height: '5vw' }}
                alt=''
                src='https://res.cloudinary.com/tomastuser/image/upload/v1587221222/Brno-L%C3%AD%C5%A1e%C5%88_znak.svg_bdbwus.png'
              ></img>
              <h3>Brno-Líšeň</h3>
            </a>
          </div>
          <div>
            <a href='https://www.brno.cz/'>
              <img
                style={{ height: '5vw', padding: '2vh' }}
                alt=''
                src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Logo_Brno.svg'
              ></img>
            </a>
          </div>
          <div>
            <a href='http://www.msmt.cz/'>
              <img
                style={{ height: '5vw' }}
                alt=''
                src='http://www.lesnimarianka.cz/Data/Sites/1/media/logo_msmt.jpg'
              ></img>
            </a>
          </div>
          <div>
            <a href='https://foundation.avast.com/'>
              <img
                style={{ height: '5vw' }}
                alt=''
                src='http://www.lesnimarianka.cz/Data/Sites/1/media/avastlogo.png'
              ></img>
            </a>
          </div>
          <div>
            <a href='http://www.livebox.cz/'>
              <img
                style={{ height: '5vw', padding: '2vh' }}
                alt=''
                src='http://www.lesnimarianka.cz/Data/Sites/1/media/logo---livebox.gif'
              ></img>
            </a>
          </div>
          <div>
            <a href='http://www.buranteatr.cz/'>
              <img
                style={{ height: '5vw' }}
                alt=''
                src='http://www.lesnimarianka.cz/Data/Sites/1/media/logo.png'
              ></img>
            </a>
          </div>
          <div>
            <a href='http://www.toactivity.cz/'>
              <img
                style={{ height: '5vw', padding: '1vh' }}
                alt=''
                src='http://www.lesnimarianka.cz/Data/Sites/1/media/to-activity.png'
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponzori;
