import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Foto = (props) => {
  const [aktualita, setAktualita] = useState({});
  const [img, setImg] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`https://marianka.herokuapp.com/articles/${props.match.params.id}`)
      .then((res) => {
        setAktualita(res.data);
        setImg(res.data.Image);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.id]);

  if (isLoaded) {
    return (
      <div className='fotoContainer'>
        <div className='foto'>
          <img
            src={img.url}
            alt={aktualita.Nadpis}
            onClick={props.history.goBack}
          />
          <div className='button' onClick={props.history.goBack}>
            Zpět
          </div>
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

export default Foto;
