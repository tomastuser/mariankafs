import React from 'react';

const ClenTymu = ({ clen }) => {
  return (
    <div className='clenTymu'>
      <img src={clen.Image.url} alt={clen.Jmeno} />
      <h1>{clen.Jmeno}</h1>
      <h2>{clen.Pozice}</h2>
      <div className='clenTymuText'>
        <div
          dangerouslySetInnerHTML={{
            __html: clen.Popis,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ClenTymu;
