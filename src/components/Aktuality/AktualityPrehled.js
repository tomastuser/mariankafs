import React, { useState, useEffect } from 'react';
import AktualitaZastupce from './AktualitaZastupce';
import axios from 'axios';

const Aktuality = () => {
  const [aktuality, setAktuality] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get('https://marianka.herokuapp.com/articles')
      .then((res) => {
        setAktuality(res.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const serazeniOdNejvyssiho = () => {
    return [].slice.call(aktuality).sort(function (a, b) {
      return a - b;
    });
  };
  if (isLoaded) {
    return (
      <div className='aktuality'>
        {serazeniOdNejvyssiho()
          .slice(0, 3)
          .map((aktualita) => (
            <AktualitaZastupce key={aktualita.id} aktualita={aktualita} />
          ))}
      </div>
    );
  }
  return (
    <div className='loading'>
      <h3>NAHRÁVÁM...</h3>
    </div>
  );
};

export default Aktuality;
