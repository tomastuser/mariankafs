import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import AktualitaZastupce from './AktualitaZastupce';

const Aktuality = () => {
  const [aktuality, setAktuality] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

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
      return b.id - a.id;
    });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const aktualityZde = serazeniOdNejvyssiho().slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoaded) {
    return (
      <div className='mainOstatni'>
        <div className='aktualityContainer'>
          <h1>Aktuality</h1>
          <br />
          <div className='aktuality'>
            {aktualityZde.map((aktualita) => (
              <AktualitaZastupce key={aktualita.id} aktualita={aktualita} />
            ))}
          </div>
          <br />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={aktuality.length}
            paginate={paginate}
            currentPage={currentPage}
          />
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

export default Aktuality;
