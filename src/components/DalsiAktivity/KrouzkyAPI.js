import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Krouzky = () => {
  const [pages, setPages] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:1337/pages')
      .then((res) => {
        setPages(res.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(pages);

  if (isLoaded) {
    return (
      <div className='mainTextCont'>
        <div className='mainText'>
          <h1>Kroužky</h1>
          {pages.map((page) =>
            page.Nazev === 'Kroužky' ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: page.Text,
                }}
              ></div>
            ) : null
          )}
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

export default Krouzky;
