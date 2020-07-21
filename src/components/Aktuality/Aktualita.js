import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Aktualita = (props) => {
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
      <div className='mainOstatni'>
        <div className='aktualityContainer'>
          <div className='aktualita'>
            <h2 className='aktualitaNadpis'>{aktualita.Nadpis}</h2>
            <div className='aktualitaTelo'>
              {aktualita.Image === null ? null : (
                <Link className='aktualitaImg' to={`/images/${aktualita.id}`}>
                  <img src={img.url} alt={aktualita.Nadpis} />
                </Link>
              )}
              <div
                dangerouslySetInnerHTML={{ __html: aktualita.Text }}
                className='aktualitaText'
              ></div>
            </div>
            <div
              className='aktualitaButton button'
              onClick={props.history.goBack}
            >
              Zpět
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='mainOstatni'>
      <div className='loading'>
        <h3>NAHRÁVÁM...</h3>
      </div>
    </div>
  );
};

export default Aktualita;
