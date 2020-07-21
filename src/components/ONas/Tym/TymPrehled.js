import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClenTymu from './ClenTymu';

const Tym = () => {
  const [clenove, setClenove] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get('https://marianka.herokuapp.com/people')
      .then((res) => {
        setClenove(res.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const serazeniOdNejvyssiho = () => {
    return [].slice.call(clenove).sort(function (a, b) {
      return b.id - a.id;
    });
  };

  if (isLoaded) {
    return (
      <div className='tymContainer'>
        <div className='tym'>
          {serazeniOdNejvyssiho()
            .reverse()
            .map((clen) => (
              <ClenTymu key={clen.id} clen={clen} />
            ))}
        </div>
      </div>
    );
  }
  return (
    <div className='loading'>
      <h3>NAHRÁVÁM...</h3>
    </div>
  );
};

export default Tym;
