import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cenik = () => {
  const [text, setText] = useState();
  const [nazev, setNazev] = useState();

  useEffect(() => {
    axios
      .get('https://mariankafs.herokuapp.com/api/stranky/')
      .then((res) => {
        res.data.map((stranka) => {
          stranka.name === 'Ceník'
            ? setText(stranka.text) & setNazev(stranka.name)
            : '';
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <h1>{nazev}</h1>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Cenik;
